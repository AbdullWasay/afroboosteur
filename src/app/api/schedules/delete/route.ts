import { NextRequest, NextResponse } from 'next/server';
import { query, where, getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { helmetReservationService, courseService } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { courseId, startDate, endDate, coachId } = body;

    console.log('Delete request received:', { courseId, startDate, endDate, coachId });

    if (!coachId) {
      return NextResponse.json(
        { error: 'Coach ID is required' },
        { status: 400 }
      );
    }

    // Validate that at least one filter is provided
    if (!courseId && !startDate && !endDate) {
      return NextResponse.json(
        { error: 'At least one filter (course or date range) must be provided' },
        { status: 400 }
      );
    }

    // Step 1: Get all schedules (we'll filter in memory)
    const allSchedulesSnapshot = await getDocs(collection(db, 'courseSchedules'));
    let schedules = allSchedulesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log(`Total schedules in database: ${schedules.length}`);

    // Step 2: Filter by course if provided
    if (courseId) {
      // Verify the course belongs to this coach
      const course = await courseService.getById(courseId);
      if (!course) {
        return NextResponse.json(
          { error: 'Course not found' },
          { status: 404 }
        );
      }

      const courseCoachId = String(course.coachId || '');
      const requestCoachId = String(coachId);
      
      if (courseCoachId !== requestCoachId) {
        return NextResponse.json(
          { error: 'You do not have permission to delete schedules for this course' },
          { status: 403 }
        );
      }

      // Filter schedules by courseId
      const beforeCourseFilter = schedules.length;
      schedules = schedules.filter((schedule: any) => String(schedule.courseId) === String(courseId));
      console.log(`After course filter (${courseId}): ${beforeCourseFilter} -> ${schedules.length} schedules`);
    } else {
      // If no course selected, filter by coach ownership
      const allCourses = await courseService.getAll();
      const coachIdStr = String(coachId);
      
      const beforeCoachFilter = schedules.length;
      schedules = schedules.filter((schedule: any) => {
        // Check if schedule was created by this coach
        const scheduleCreatedBy = schedule.createdBy ? String(schedule.createdBy) : '';
        if (scheduleCreatedBy === coachIdStr) {
          return true;
        }
        
        // Check if the course belongs to this coach
        const course = allCourses.find(c => String(c.id) === String(schedule.courseId));
        if (course && String(course.coachId || '') === coachIdStr) {
          return true;
        }
        
        return false;
      });
      console.log(`After coach filter: ${beforeCoachFilter} -> ${schedules.length} schedules`);
    }

    // Step 3: Filter by date range if provided
    if (startDate || endDate) {
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      
      if (start) {
        start.setHours(0, 0, 0, 0);
      }
      if (end) {
        end.setHours(23, 59, 59, 999);
      }
      
      const beforeDateFilter = schedules.length;
      schedules = schedules.filter((schedule: any) => {
        try {
          let scheduleStartTime: Date;
          
          // Handle different date formats
          if (schedule.startTime?.toDate && typeof schedule.startTime.toDate === 'function') {
            scheduleStartTime = schedule.startTime.toDate();
          } else if (schedule.startTime instanceof Date) {
            scheduleStartTime = schedule.startTime;
          } else if (schedule.startTime && typeof schedule.startTime === 'object' && 'seconds' in schedule.startTime) {
            scheduleStartTime = new Date(schedule.startTime.seconds * 1000);
          } else if (schedule.startTime) {
            scheduleStartTime = new Date(schedule.startTime);
          } else {
            return false;
          }
          
          // Filter by start date
          if (start && scheduleStartTime < start) {
            return false;
          }
          
          // Filter by end date
          if (end && scheduleStartTime > end) {
            return false;
          }
          
          return true;
        } catch (error) {
          console.error(`Error parsing schedule ${schedule.id} startTime:`, error);
          return false;
        }
      });
      console.log(`After date filter: ${beforeDateFilter} -> ${schedules.length} schedules`);
    }

    console.log(`Final schedules to delete: ${schedules.length}`);

    if (schedules.length === 0) {
      return NextResponse.json({
        success: false,
        deletedCount: 0,
        message: 'Aucune session trouvée correspondant aux critères sélectionnés'
      });
    }

    // Step 4: Delete schedules and cancel reservations
    let deletedCount = 0;
    let cancelledReservationsCount = 0;
    const errors: string[] = [];
    
    for (const schedule of schedules) {
      try {
        // Cancel all helmet reservations for this schedule
        try {
          const reservations = await helmetReservationService.getByScheduleId(schedule.id);
          for (const reservation of reservations) {
            if (reservation.status !== 'checked_in' && reservation.status !== 'cancelled') {
              await helmetReservationService.cancel(reservation.id);
              cancelledReservationsCount++;
            }
          }
        } catch (resError) {
          console.error(`Error cancelling reservations for schedule ${schedule.id}:`, resError);
        }
        
        // Delete the schedule
        await deleteDoc(doc(db, 'courseSchedules', schedule.id));
        deletedCount++;
        console.log(`Deleted schedule ${schedule.id}`);
      } catch (error) {
        const errorMsg = `Error deleting schedule ${schedule.id}: ${error instanceof Error ? error.message : 'Unknown error'}`;
        console.error(errorMsg);
        errors.push(errorMsg);
      }
    }

    return NextResponse.json({
      success: true,
      deletedCount,
      cancelledReservationsCount,
      errors: errors.length > 0 ? errors : undefined,
      message: `${deletedCount} session(s) supprimée(s) avec succès${cancelledReservationsCount > 0 ? ` et ${cancelledReservationsCount} réservation(s) annulée(s)` : ''}`
    });

  } catch (error) {
    console.error('Error in delete schedules endpoint:', error);
    return NextResponse.json(
      { 
        error: 'Failed to delete schedules', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
