(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/CourseCalendar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CourseCalendar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>"); // Import useTranslation
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/database.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelmetReservationScanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HelmetReservationScanner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function CourseCalendar({ onBookCourse, showManagement = false }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(); // Initialize useTranslation
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [schedules, setSchedules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('month');
    const [calendarView, setCalendarView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('calendar');
    const [filterLevel, setFilterLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [filterCategory, setFilterCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSchedule, setSelectedSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingSchedule, setEditingSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showScanner, setShowScanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scannerSchedule, setScannerSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Enhanced state for drag-and-drop and bulk operations
    const [draggedSchedule, setDraggedSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropTargetDate, setDropTargetDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedScheduleIds, setSelectedScheduleIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [bulkMode, setBulkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBulkModal, setShowBulkModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmationModal, setConfirmationModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        type: 'delete',
        message: '',
        onConfirm: {
            "CourseCalendar.useState": ()=>{}
        }["CourseCalendar.useState"]
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        courseId: '',
        startTime: new Date(),
        endTime: new Date(),
        level: 'all',
        location: '',
        description: '',
        maxParticipants: 15,
        price: 0,
        repeatDays: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourseCalendar.useEffect": ()=>{
            loadData();
        }
    }["CourseCalendar.useEffect"], [
        user
    ]);
    const loadData = async ()=>{
        setIsLoading(true);
        try {
            const [schedulesData, coursesData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].getAll(),
                showManagement && user?.role === 'coach' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["courseService"].getByCoach(user.id) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["courseService"].getAll()
            ]);
            setSchedules(schedulesData);
            setCourses(coursesData);
        } catch (error) {
            console.error('Error loading calendar data:', error);
        } finally{
            setIsLoading(false);
        }
    };
    const getCourseById = (courseId)=>{
        return courses.find((course)=>course.id === courseId);
    };
    const getFilteredSchedules = ()=>{
        return schedules.filter((schedule)=>{
            const course = getCourseById(schedule.courseId);
            if (!course) return false;
            // Search filter
            if (searchTerm) {
                const searchLower = searchTerm.toLowerCase();
                const matchesSearch = course.title.toLowerCase().includes(searchLower) || course.description.toLowerCase().includes(searchLower) || course.coachName.toLowerCase().includes(searchLower) || schedule.location && schedule.location.toLowerCase().includes(searchLower) || schedule.description && schedule.description.toLowerCase().includes(searchLower);
                if (!matchesSearch) return false;
            }
            // Filter by level
            if (filterLevel !== 'all' && schedule.level !== filterLevel) return false;
            // Filter by category
            if (filterCategory !== 'all' && course.category !== filterCategory) return false;
            // Filter by date range based on view mode
            const scheduleDate = schedule.startTime instanceof Date ? schedule.startTime : schedule.startTime.toDate();
            if (viewMode === 'day') {
                return isSameDay(scheduleDate, currentDate);
            } else if (viewMode === 'week') {
                return isInSameWeek(scheduleDate, currentDate);
            } else if (viewMode === 'list') {
                // For list view, show future schedules
                return scheduleDate >= new Date();
            } else {
                return isInSameMonth(scheduleDate, currentDate);
            }
        });
    };
    const isSameDay = (date1, date2)=>{
        return date1.toDateString() === date2.toDateString();
    };
    const isInSameWeek = (date1, date2)=>{
        const startOfWeek = new Date(date2);
        startOfWeek.setDate(date2.getDate() - date2.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return date1 >= startOfWeek && date1 <= endOfWeek;
    };
    const isInSameMonth = (date1, date2)=>{
        return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    };
    const formatTime = (date)=>{
        const actualDate = date instanceof Date ? date : date.toDate();
        return actualDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };
    const formatDate = (date)=>{
        const actualDate = date instanceof Date ? date : date.toDate();
        return actualDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };
    const formatDateDetailed = (date)=>{
        const actualDate = date instanceof Date ? date : date.toDate();
        return actualDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const getDayOfWeek = (date)=>{
        const actualDate = date instanceof Date ? date : date.toDate();
        return actualDate.toLocaleDateString('en-US', {
            weekday: 'short'
        });
    };
    const getDayOfMonth = (date)=>{
        const actualDate = date instanceof Date ? date : date.toDate();
        return actualDate.getDate();
    };
    const getCalendarDays = ()=>{
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(firstDay.getDate() - firstDay.getDay());
        const days = [];
        const currentCalendarDate = new Date(startDate);
        for(let i = 0; i < 42; i++){
            days.push(new Date(currentCalendarDate));
            currentCalendarDate.setDate(currentCalendarDate.getDate() + 1);
        }
        return days;
    };
    const getSchedulesForDay = (date)=>{
        return filteredSchedules.filter((schedule)=>{
            const scheduleDate = schedule.startTime instanceof Date ? schedule.startTime : schedule.startTime.toDate();
            return isSameDay(scheduleDate, date);
        });
    };
    const navigateDate = (direction)=>{
        const newDate = new Date(currentDate);
        if (viewMode === 'day') {
            newDate.setDate(currentDate.getDate() + (direction === 'next' ? 1 : -1));
        } else if (viewMode === 'week') {
            newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
        } else {
            newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
        }
        setCurrentDate(newDate);
    };
    const getCalendarTitle = ()=>{
        if (viewMode === 'day') {
            return currentDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } else if (viewMode === 'week') {
            const startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            return `${startOfWeek.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            })} - ${endOfWeek.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })}`;
        } else {
            return currentDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long'
            });
        }
    };
    const handleScheduleSubmit = async (e)=>{
        e.preventDefault();
        if (!user) return;
        setIsLoading(true);
        try {
            const course = getCourseById(formData.courseId);
            if (!course) throw new Error('Course not found');
            if (editingSchedule) {
                // When editing, just update the single schedule
                const scheduleData = {
                    courseId: formData.courseId,
                    title: course.title,
                    startTime: formData.startTime,
                    endTime: formData.endTime,
                    level: formData.level,
                    location: formData.location,
                    description: formData.description,
                    createdBy: user.id
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].update(editingSchedule.id, scheduleData);
            } else {
                // When creating new schedule
                if (formData.repeatDays && formData.repeatDays.length > 0) {
                    // Create recurring schedules
                    const schedulesToCreate = [];
                    const startDate = new Date(formData.startTime);
                    const endDate = new Date(formData.endTime);
                    // Calculate the time difference to maintain duration
                    const duration = endDate.getTime() - startDate.getTime();
                    // Get the time components from the original dates
                    const startHours = startDate.getHours();
                    const startMinutes = startDate.getMinutes();
                    const endHours = endDate.getHours();
                    const endMinutes = endDate.getMinutes();
                    // Find all dates within a reasonable range (e.g., next 12 weeks)
                    const weeksToSchedule = 12;
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    for(let week = 0; week < weeksToSchedule; week++){
                        for (const dayOfWeek of formData.repeatDays){
                            const scheduleDate = new Date(today);
                            scheduleDate.setDate(today.getDate() + week * 7 + (dayOfWeek - today.getDay() + 7) % 7);
                            // Skip if the date is in the past
                            if (scheduleDate < today) continue;
                            // Create start and end times for this occurrence
                            const occurrenceStart = new Date(scheduleDate);
                            occurrenceStart.setHours(startHours, startMinutes, 0, 0);
                            const occurrenceEnd = new Date(scheduleDate);
                            occurrenceEnd.setHours(endHours, endMinutes, 0, 0);
                            schedulesToCreate.push({
                                courseId: formData.courseId,
                                title: course.title,
                                startTime: occurrenceStart,
                                endTime: occurrenceEnd,
                                level: formData.level,
                                location: formData.location,
                                description: formData.description,
                                createdBy: user.id
                            });
                        }
                    }
                    // Create all schedules
                    for (const scheduleData of schedulesToCreate){
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].create(scheduleData);
                    }
                } else {
                    // Create single schedule
                    const scheduleData = {
                        courseId: formData.courseId,
                        title: course.title,
                        startTime: formData.startTime,
                        endTime: formData.endTime,
                        level: formData.level,
                        location: formData.location,
                        description: formData.description,
                        createdBy: user.id
                    };
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].create(scheduleData);
                }
            }
            await loadData();
            setIsModalOpen(false);
            setEditingSchedule(null);
            resetForm();
        } catch (error) {
            console.error('Error saving schedule:', error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleEditSchedule = (schedule)=>{
        setEditingSchedule(schedule);
        setFormData({
            courseId: schedule.courseId,
            startTime: schedule.startTime instanceof Date ? schedule.startTime : schedule.startTime.toDate(),
            endTime: schedule.endTime instanceof Date ? schedule.endTime : schedule.endTime.toDate(),
            level: schedule.level,
            location: schedule.location || '',
            description: schedule.description || '',
            maxParticipants: schedule.maxParticipants || 15,
            price: schedule.price || 0
        });
        setIsModalOpen(true);
    };
    const handleDeleteSchedule = async (scheduleId)=>{
        if (window.confirm('Are you sure you want to delete this schedule?')) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].delete(scheduleId);
                await loadData();
            } catch (error) {
                console.error('Error deleting schedule:', error);
            }
        }
    };
    // Enhanced drag-and-drop functionality
    const handleDragStart = (schedule)=>{
        setDraggedSchedule(schedule);
    };
    const handleDragEnd = ()=>{
        setDraggedSchedule(null);
        setDropTargetDate(null);
    };
    const handleDragOver = (e, date)=>{
        e.preventDefault();
        setDropTargetDate(date);
    };
    const handleDrop = async (e, targetDate)=>{
        e.preventDefault();
        if (!draggedSchedule) return;
        const startTimeDate = draggedSchedule.startTime instanceof Date ? draggedSchedule.startTime : draggedSchedule.startTime.toDate();
        const endTimeDate = draggedSchedule.endTime instanceof Date ? draggedSchedule.endTime : draggedSchedule.endTime.toDate();
        const timeDiff = endTimeDate.getTime() - startTimeDate.getTime();
        const newStartTime = new Date(targetDate);
        newStartTime.setHours(draggedSchedule.startTime instanceof Date ? draggedSchedule.startTime.getHours() : draggedSchedule.startTime.toDate().getHours());
        newStartTime.setMinutes(draggedSchedule.startTime instanceof Date ? draggedSchedule.startTime.getMinutes() : draggedSchedule.startTime.toDate().getMinutes());
        const newEndTime = new Date(newStartTime.getTime() + timeDiff);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].update(draggedSchedule.id, {
                ...draggedSchedule,
                startTime: newStartTime,
                endTime: newEndTime
            });
            await loadData();
            setConfirmationModal({
                show: true,
                type: 'move',
                message: `Course successfully moved to ${targetDate.toLocaleDateString()}`,
                onConfirm: ()=>setConfirmationModal({
                        ...confirmationModal,
                        show: false
                    })
            });
        } catch (error) {
            console.error('Error moving schedule:', error);
        }
        setDraggedSchedule(null);
        setDropTargetDate(null);
    };
    // Bulk operations
    const toggleScheduleSelection = (scheduleId)=>{
        const newSelection = new Set(selectedScheduleIds);
        if (newSelection.has(scheduleId)) {
            newSelection.delete(scheduleId);
        } else {
            newSelection.add(scheduleId);
        }
        setSelectedScheduleIds(newSelection);
    };
    const handleBulkDelete = ()=>{
        setConfirmationModal({
            show: true,
            type: 'delete',
            message: `Are you sure you want to delete ${selectedScheduleIds.size} selected schedule(s)?`,
            onConfirm: async ()=>{
                try {
                    await Promise.all(Array.from(selectedScheduleIds).map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].delete(id)));
                    await loadData();
                    setSelectedScheduleIds(new Set());
                    setBulkMode(false);
                } catch (error) {
                    console.error('Error deleting schedules:', error);
                }
                setConfirmationModal({
                    ...confirmationModal,
                    show: false
                });
            }
        });
    };
    const handleBulkMove = (targetDate)=>{
        setConfirmationModal({
            show: true,
            type: 'move',
            message: `Move ${selectedScheduleIds.size} selected schedule(s) to ${targetDate.toLocaleDateString()}?`,
            onConfirm: async ()=>{
                try {
                    const selectedSchedules = schedules.filter((s)=>selectedScheduleIds.has(s.id));
                    await Promise.all(selectedSchedules.map((schedule)=>{
                        const originalStart = schedule.startTime instanceof Date ? schedule.startTime : schedule.startTime.toDate();
                        const originalEnd = schedule.endTime instanceof Date ? schedule.endTime : schedule.endTime.toDate();
                        const newStartTime = new Date(targetDate);
                        newStartTime.setHours(originalStart.getHours());
                        newStartTime.setMinutes(originalStart.getMinutes());
                        const timeDiff = originalEnd.getTime() - originalStart.getTime();
                        const newEndTime = new Date(newStartTime.getTime() + timeDiff);
                        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].update(schedule.id, {
                            ...schedule,
                            startTime: newStartTime,
                            endTime: newEndTime
                        });
                    }));
                    await loadData();
                    setSelectedScheduleIds(new Set());
                    setBulkMode(false);
                } catch (error) {
                    console.error('Error moving schedules:', error);
                }
                setConfirmationModal({
                    ...confirmationModal,
                    show: false
                });
            }
        });
    };
    const handleBulkDuplicate = (targetDate)=>{
        setConfirmationModal({
            show: true,
            type: 'duplicate',
            message: `Duplicate ${selectedScheduleIds.size} selected schedule(s) to ${targetDate.toLocaleDateString()}?`,
            onConfirm: async ()=>{
                try {
                    const selectedSchedules = schedules.filter((s)=>selectedScheduleIds.has(s.id));
                    await Promise.all(selectedSchedules.map((schedule)=>{
                        const originalStart = schedule.startTime instanceof Date ? schedule.startTime : schedule.startTime.toDate();
                        const originalEnd = schedule.endTime instanceof Date ? schedule.endTime : schedule.endTime.toDate();
                        const newStartTime = new Date(targetDate);
                        newStartTime.setHours(originalStart.getHours());
                        newStartTime.setMinutes(originalStart.getMinutes());
                        const timeDiff = originalEnd.getTime() - originalStart.getTime();
                        const newEndTime = new Date(newStartTime.getTime() + timeDiff);
                        // Create new schedule without ID (will be auto-generated)
                        const { id, ...scheduleData } = schedule;
                        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$database$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleService"].create({
                            ...scheduleData,
                            startTime: newStartTime,
                            endTime: newEndTime
                        });
                    }));
                    await loadData();
                    setSelectedScheduleIds(new Set());
                    setBulkMode(false);
                } catch (error) {
                    console.error('Error duplicating schedules:', error);
                }
                setConfirmationModal({
                    ...confirmationModal,
                    show: false
                });
            }
        });
    };
    const resetForm = ()=>{
        setFormData({
            courseId: '',
            startTime: new Date(),
            endTime: new Date(),
            level: 'all',
            location: '',
            description: '',
            maxParticipants: 15,
            price: 0,
            repeatDays: []
        });
    };
    const categories = [
        'Afrobeat',
        'Hip-Hop',
        'Contemporary',
        'Salsa',
        'Bachata',
        'Kizomba',
        'Jazz',
        'Ballet',
        'Breakdance',
        'Latin'
    ];
    const filteredSchedules = getFilteredSchedules();
    const getLevelColor = (level)=>{
        switch(level){
            case 'beginner':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'intermediate':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'advanced':
                return 'bg-red-500/20 text-red-400 border-red-500/30';
            default:
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        }
    };
    const getCalendarStats = ()=>{
        const totalSchedules = filteredSchedules.length;
        const upcomingSchedules = filteredSchedules.filter((s)=>{
            const scheduleDate = s.startTime instanceof Date ? s.startTime : s.startTime.toDate();
            return scheduleDate > new Date();
        }).length;
        const levelCounts = filteredSchedules.reduce((acc, schedule)=>{
            acc[schedule.level] = (acc[schedule.level] || 0) + 1;
            return acc;
        }, {});
        const categoryCount = new Set(filteredSchedules.map((s)=>getCourseById(s.courseId)?.category).filter(Boolean)).size;
        return {
            total: totalSchedules,
            upcoming: upcomingSchedules,
            levelCounts,
            categories: categoryCount
        };
    };
    const CalendarStats = ()=>{
        const stats = getCalendarStats();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-[#D91CD2]/20 to-[#7000FF]/20 p-4 rounded-lg border border-[#D91CD2]/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold text-[#D91CD2]",
                            children: stats.total
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 670,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-400",
                            children: t('totalSessions')
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 671,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 669,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold text-green-400",
                            children: stats.upcoming
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 674,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-400",
                            children: t('upcoming')
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 675,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 673,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold text-blue-400",
                            children: stats.categories
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 678,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-400",
                            children: t('categories')
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 677,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold text-yellow-400",
                            children: Object.keys(stats.levelCounts).length
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 682,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-400",
                            children: t('skillLevels')
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 685,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 681,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CourseCalendar.tsx",
            lineNumber: 668,
            columnNumber: 7
        }, this);
    };
    if (isLoading && schedules.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 border-2 border-[#D91CD2] border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCalendar.tsx",
                lineNumber: 694,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CourseCalendar.tsx",
            lineNumber: 693,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col space-y-4 sm:space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl font-bold gradient-text",
                                    children: t('courseCalendar')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 706,
                                    columnNumber: 11
                                }, this),
                                showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        resetForm();
                                        setIsModalOpen(true);
                                    },
                                    className: "btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 716,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t('scheduleCourse')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 717,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 709,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 705,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFilter"], {
                                                    className: "text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 727,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: t('searchCoursesCoachesLocations'),
                                                className: "input-primary w-full pl-10 text-sm sm:text-base",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 730,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 726,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 725,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 bg-black/40 rounded-lg p-1 min-w-0",
                                            children: [
                                                'day',
                                                'week',
                                                'month'
                                            ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setViewMode(mode),
                                                    className: `flex-1 min-w-[120px] px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2 ${viewMode === mode ? 'bg-[#D91CD2] text-white' : 'text-gray-400 hover:text-white'}`,
                                                    children: [
                                                        mode === 'list' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiList"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 754,
                                                            columnNumber: 38
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 754,
                                                            columnNumber: 61
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: t(mode)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 755,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, mode, true, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 743,
                                            columnNumber: 13
                                        }, this),
                                        (viewMode === 'month' || viewMode === 'week') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex bg-black/40 rounded-lg p-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCalendarView('calendar'),
                                                    className: `flex-1 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2 ${calendarView === 'calendar' ? 'bg-[#D91CD2] text-white' : 'text-gray-400 hover:text-white'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGrid"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('grid')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCalendarView('timeline'),
                                                    className: `flex-1 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2 ${calendarView === 'timeline' ? 'bg-[#D91CD2] text-white' : 'text-gray-400 hover:text-white'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiList"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 782,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('timeline')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 783,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 762,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 741,
                                    columnNumber: 11
                                }, this),
                                showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 sm:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setBulkMode(!bulkMode),
                                            className: `flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${bulkMode ? 'bg-[#D91CD2] text-white' : 'bg-black/40 text-gray-400 hover:text-white border border-gray-600'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 800,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('bulkSelect')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "(",
                                                        selectedScheduleIds.size,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 792,
                                            columnNumber: 15
                                        }, this),
                                        bulkMode && selectedScheduleIds.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleBulkDelete,
                                            className: "flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium bg-red-500/20 text-red-400 border border-red-400/30 hover:bg-red-500/30 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t('delete')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "(",
                                                        selectedScheduleIds.size,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 806,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 791,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filterLevel,
                                            onChange: (e)=>setFilterLevel(e.target.value),
                                            className: "input-primary text-sm w-full sm:w-auto sm:min-w-[120px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: t('allLevels')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "beginner",
                                                    children: t('beginner')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 826,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "intermediate",
                                                    children: t('intermediate')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "advanced",
                                                    children: t('advanced')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 820,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filterCategory,
                                            onChange: (e)=>setFilterCategory(e.target.value),
                                            className: "input-primary text-sm w-full sm:w-auto sm:min-w-[120px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: t('allCategories')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 15
                                                }, this),
                                                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: category,
                                                        children: category
                                                    }, category, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 17
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 831,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 819,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 723,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarStats, {}, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 845,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>navigateDate('prev'),
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronLeft"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 853,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 849,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base sm:text-lg font-semibold text-center px-4",
                                    children: getCalendarTitle()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 856,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>navigateDate('next'),
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 862,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 858,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 848,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: viewMode === 'list' ? /* List View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: filteredSchedules.length > 0 ? filteredSchedules.sort((a, b)=>{
                                    const dateA = a.startTime instanceof Date ? a.startTime : a.startTime.toDate();
                                    const dateB = b.startTime instanceof Date ? b.startTime : b.startTime.toDate();
                                    return dateA.getTime() - dateB.getTime();
                                }).map((schedule)=>{
                                    const course = getCourseById(schedule.courseId);
                                    if (!course) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        draggable: showManagement && user?.role === 'coach',
                                        onDragStart: ()=>handleDragStart(schedule),
                                        onDragEnd: handleDragEnd,
                                        className: `bg-black/40 rounded-lg p-4 sm:p-6 border border-gray-700/30 hover:border-[#D91CD2]/30 transition-colors relative ${draggedSchedule?.id === schedule.id ? 'opacity-50' : ''} ${selectedScheduleIds.has(schedule.id) ? 'ring-2 ring-[#D91CD2]' : ''} ${showManagement && user?.role === 'coach' ? 'cursor-move' : ''}`,
                                        children: [
                                            bulkMode && showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4 z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: selectedScheduleIds.has(schedule.id),
                                                    onChange: ()=>toggleScheduleSelection(schedule.id),
                                                    className: "w-4 h-4 sm:w-5 sm:h-5 text-[#D91CD2] bg-black/60 border-gray-600 rounded focus:ring-[#D91CD2] focus:ring-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 901,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 900,
                                                columnNumber: 27
                                            }, this),
                                            showManagement && user?.role === 'coach' && !bulkMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 text-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMove"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 913,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 912,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "lg:col-span-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: course.imageUrl,
                                                                alt: course.title,
                                                                className: "w-full h-32 object-cover rounded-lg mb-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 920,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `px-2 py-1 rounded-full text-xs border ${getLevelColor(schedule.level)}`,
                                                                        children: schedule.level
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 926,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: course.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 929,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 925,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 919,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "lg:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-lg sm:text-xl mb-2 text-white pr-8 lg:pr-0",
                                                                children: course.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 935,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-300 mb-4 text-sm sm:text-base line-clamp-2",
                                                                children: course.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center text-gray-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                                className: "mr-2 text-[#D91CD2] flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 940,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: formatDate(schedule.startTime)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 941,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 939,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center text-gray-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                                                                className: "mr-2 text-[#D91CD2] flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 944,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: [
                                                                                    formatTime(schedule.startTime),
                                                                                    " - ",
                                                                                    formatTime(schedule.endTime)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 945,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 943,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center text-gray-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                                                                                className: "mr-2 text-[#D91CD2] flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 948,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: [
                                                                                    t('coach'),
                                                                                    ": ",
                                                                                    course.coachName
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 949,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 947,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    schedule.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center text-gray-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                                                                className: "mr-2 text-[#D91CD2] flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 953,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: schedule.location
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 954,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 952,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center text-gray-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiStar"], {
                                                                                className: "mr-2 text-[#D91CD2] flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 958,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: [
                                                                                    course.averageRating.toFixed(1),
                                                                                    " (",
                                                                                    course.totalReviews,
                                                                                    " ",
                                                                                    t('reviews'),
                                                                                    ")"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 959,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 957,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center text-gray-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                                                                                className: "mr-2 text-[#D91CD2] flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 962,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: [
                                                                                    course.currentStudents,
                                                                                    "/",
                                                                                    course.maxStudents,
                                                                                    " ",
                                                                                    t('enrolled')
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 963,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 961,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 938,
                                                                columnNumber: 29
                                                            }, this),
                                                            schedule.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: schedule.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 969,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 968,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "lg:col-span-1 flex flex-col justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center lg:text-right mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xl sm:text-2xl font-bold text-[#D91CD2] mb-2",
                                                                        children: [
                                                                            "$",
                                                                            course.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 977,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: t('perSession')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 980,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 976,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/courses/${course.id}`,
                                                                        className: "btn-secondary w-full text-center text-sm flex items-center justify-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 988,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            t('viewDetails')
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 984,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    onBookCourse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>onBookCourse(course.id),
                                                                        className: "btn-primary w-full text-sm",
                                                                        children: t('bookNow')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 993,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleEditSchedule(schedule),
                                                                                className: "flex-1 p-2 hover:bg-white/10 rounded-lg transition-colors border border-gray-600 flex items-center justify-center gap-1",
                                                                                title: t('editSchedule'),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit3"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                        lineNumber: 1008,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs hidden sm:inline",
                                                                                        children: t('edit')
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                        lineNumber: 1009,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 1003,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeleteSchedule(schedule.id),
                                                                                className: "flex-1 p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400 border border-red-400/30 flex items-center justify-center gap-1",
                                                                                title: t('deleteSchedule'),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                        lineNumber: 1016,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs hidden sm:inline",
                                                                                        children: t('delete')
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                        lineNumber: 1017,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 1011,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    const targetDate = new Date();
                                                                                    targetDate.setDate(targetDate.getDate() + 7);
                                                                                    handleBulkDuplicate(targetDate);
                                                                                },
                                                                                className: "flex-1 p-2 hover:bg-blue-500/20 rounded-lg transition-colors text-blue-400 border border-blue-400/30 flex items-center justify-center gap-1",
                                                                                title: t('duplicateSchedule'),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                        lineNumber: 1028,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs hidden sm:inline",
                                                                                        children: t('copy')
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                        lineNumber: 1029,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                                lineNumber: 1019,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 1002,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 983,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 975,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 917,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, schedule.id, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 883,
                                        columnNumber: 23
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black/40 p-6 sm:p-8 rounded-lg text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                            size: 48,
                                            className: "mx-auto text-gray-400 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 mb-4",
                                            children: t('noCoursesFound')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 1042,
                                            columnNumber: 19
                                        }, this),
                                        showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                resetForm();
                                                setIsModalOpen(true);
                                            },
                                            className: "btn-primary w-full sm:w-auto",
                                            children: t('scheduleYourFirstCourse')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 1040,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 870,
                                columnNumber: 13
                            }, this) : viewMode === 'month' && calendarView === 'calendar' ? /* Month Calendar Grid View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/20 rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 gap-0 bg-gray-800/50",
                                        children: [
                                            t('Sun'),
                                            t('Mon'),
                                            t('Tue'),
                                            t('Wed'),
                                            t('Thu'),
                                            t('Fri'),
                                            t('Sat')
                                        ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 sm:p-3 text-center font-medium text-gray-300 border-r border-gray-700 last:border-r-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden sm:inline",
                                                        children: day
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1064,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sm:hidden text-xs",
                                                        children: day.slice(0, 1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, day, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1063,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1061,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-7 gap-0",
                                        children: getCalendarDays().map((day, index)=>{
                                            const daySchedules = getSchedulesForDay(day);
                                            const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                                            const isToday = isSameDay(day, new Date());
                                            const isDropTarget = dropTargetDate && isSameDay(dropTargetDate, day);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onDragOver: (e)=>handleDragOver(e, day),
                                                onDrop: (e)=>handleDrop(e, day),
                                                className: `min-h-16 sm:min-h-24 p-1 sm:p-2 border-r border-b border-gray-700 last:border-r-0 transition-colors ${isCurrentMonth ? 'bg-black/40' : 'bg-gray-900/20'} ${isToday ? 'bg-[#D91CD2]/10 border-[#D91CD2]/30' : ''} ${isDropTarget ? 'bg-green-500/20 border-green-400' : ''} ${showManagement && user?.role === 'coach' && draggedSchedule ? 'hover:bg-blue-500/10' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-xs sm:text-sm font-medium mb-1 flex items-center justify-between ${isCurrentMonth ? 'text-white' : 'text-gray-500'} ${isToday ? 'text-[#D91CD2]' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: getDayOfMonth(day)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1094,
                                                                columnNumber: 25
                                                            }, this),
                                                            isDropTarget && draggedSchedule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-green-400 text-xs hidden sm:inline",
                                                                children: t('dropHere')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1096,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1091,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1",
                                                        children: [
                                                            daySchedules.slice(0, window.innerWidth < 640 ? 1 : 2).map((schedule, idx)=>{
                                                                const course = getCourseById(schedule.courseId);
                                                                if (!course) return null;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>setSelectedSchedule(schedule),
                                                                    draggable: showManagement && user?.role === 'coach',
                                                                    onDragStart: ()=>handleDragStart(schedule),
                                                                    onDragEnd: handleDragEnd,
                                                                    className: `text-xs p-1 rounded cursor-pointer truncate border ${getLevelColor(schedule.level)} hover:opacity-80 transition-opacity ${draggedSchedule?.id === schedule.id ? 'opacity-50' : ''} ${selectedScheduleIds.has(schedule.id) ? 'ring-1 ring-[#D91CD2]' : ''} ${showManagement && user?.role === 'coach' ? 'cursor-move' : ''}`,
                                                                    children: [
                                                                        bulkMode && showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selectedScheduleIds.has(schedule.id),
                                                                            onChange: (e)=>{
                                                                                e.stopPropagation();
                                                                                toggleScheduleSelection(schedule.id);
                                                                            },
                                                                            className: "w-2 h-2 sm:w-3 sm:h-3 mr-1 text-[#D91CD2] bg-black/60 border-gray-600 rounded"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1121,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "hidden sm:inline",
                                                                            children: [
                                                                                formatTime(schedule.startTime),
                                                                                " "
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1131,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate",
                                                                            children: course.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1132,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1106,
                                                                    columnNumber: 29
                                                                }, this);
                                                            }),
                                                            daySchedules.length > (window.innerWidth < 640 ? 1 : 2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-400 font-medium",
                                                                children: [
                                                                    "+",
                                                                    daySchedules.length - (window.innerWidth < 640 ? 1 : 2),
                                                                    " ",
                                                                    t('more')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1137,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1071,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1059,
                                columnNumber: 13
                            }, this) : /* Timeline View for Week/Month and Week/Day views */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: filteredSchedules.length > 0 ? filteredSchedules.sort((a, b)=>{
                                    const dateA = a.startTime instanceof Date ? a.startTime : a.startTime.toDate();
                                    const dateB = b.startTime instanceof Date ? b.startTime : b.startTime.toDate();
                                    return dateA.getTime() - dateB.getTime();
                                }).map((schedule)=>{
                                    const course = getCourseById(schedule.courseId);
                                    if (!course) return null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "bg-black/40 rounded-lg p-4 border border-gray-700/30 hover:border-[#D91CD2]/30 transition-colors cursor-pointer",
                                        onClick: ()=>setSelectedSchedule(schedule),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-base sm:text-lg truncate",
                                                                    children: course.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1172,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-1 rounded-full text-xs border ${getLevelColor(schedule.level)} self-start`,
                                                                    children: schedule.level
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1173,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 1171,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                            className: "mr-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1180,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate",
                                                                            children: formatDate(schedule.startTime)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1181,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1179,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                                                            className: "mr-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1184,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate",
                                                                            children: [
                                                                                formatTime(schedule.startTime),
                                                                                " - ",
                                                                                formatTime(schedule.endTime)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1185,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1183,
                                                                    columnNumber: 31
                                                                }, this),
                                                                schedule.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                                                            className: "mr-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1189,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate",
                                                                            children: schedule.location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1190,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1188,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUsers"], {
                                                                            className: "mr-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1194,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate",
                                                                            children: [
                                                                                course.currentStudents,
                                                                                "/",
                                                                                course.maxStudents
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1195,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1193,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center text-gray-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDollarSign"], {
                                                                            className: "mr-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1198,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate",
                                                                            children: [
                                                                                "$",
                                                                                course.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                            lineNumber: 1199,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1197,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 1178,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 1170,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3",
                                                    children: [
                                                        onBookCourse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                onBookCourse(course.id);
                                                            },
                                                            className: "btn-primary text-sm px-4 py-2",
                                                            children: t('bookNow')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 1206,
                                                            columnNumber: 31
                                                        }, this),
                                                        showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        handleEditSchedule(schedule);
                                                                    },
                                                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                                                    title: t('editSchedule'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit3"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 1227,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1219,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        handleDeleteSchedule(schedule.id);
                                                                    },
                                                                    className: "p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400",
                                                                    title: t('deleteSchedule'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 1237,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                    lineNumber: 1229,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 1218,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 1204,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 1169,
                                            columnNumber: 25
                                        }, this)
                                    }, schedule.id, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1162,
                                        columnNumber: 23
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black/40 p-6 sm:p-8 rounded-lg text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                            size: 48,
                                            className: "mx-auto text-gray-400 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 1248,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 mb-4",
                                            children: t('noCoursesScheduled')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 19
                                        }, this),
                                        showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                resetForm();
                                                setIsModalOpen(true);
                                            },
                                            className: "btn-primary w-full sm:w-auto",
                                            children: t('scheduleYourFirstCourse')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 1251,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                    lineNumber: 1247,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CourseCalendar.tsx",
                            lineNumber: 867,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 703,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCalendar.tsx",
                lineNumber: 702,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedSchedule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9
                        },
                        className: "bg-black border border-[#D91CD2]/20 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto",
                        children: (()=>{
                            const course = getCourseById(selectedSchedule.courseId);
                            if (!course) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold gradient-text",
                                                children: course.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1285,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedSchedule(null),
                                                className: "p-1 hover:bg-white/10 rounded",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CourseCalendar.tsx",
                                                    lineNumber: 1290,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1286,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1284,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: course.imageUrl,
                                                alt: course.title,
                                                className: "w-full h-40 object-cover rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1295,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300",
                                                children: course.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1301,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                className: "mr-2 text-[#D91CD2]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1305,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: formatDate(selectedSchedule.startTime)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1306,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1304,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                                                className: "mr-2 text-[#D91CD2]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1309,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    formatTime(selectedSchedule.startTime),
                                                                    " - ",
                                                                    formatTime(selectedSchedule.endTime)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1310,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1308,
                                                        columnNumber: 25
                                                    }, this),
                                                    selectedSchedule.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                                                                className: "mr-2 text-[#D91CD2]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1314,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: selectedSchedule.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1315,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1313,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-40 overflow-y-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1319,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    course.currentStudents,
                                                                    "/",
                                                                    course.maxStudents,
                                                                    " ",
                                                                    t('students')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1320,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1318,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1303,
                                                columnNumber: 23
                                            }, this),
                                            selectedSchedule.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold mb-2",
                                                        children: t('additionalInformation')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1326,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 text-sm",
                                                        children: selectedSchedule.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1327,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1325,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-3 py-1 rounded-full text-sm border ${getLevelColor(selectedSchedule.level)}`,
                                                        children: [
                                                            selectedSchedule.level,
                                                            " ",
                                                            t('level')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1332,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl font-bold text-[#D91CD2]",
                                                        children: [
                                                            course.price,
                                                            " CHF"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1335,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1331,
                                                columnNumber: 23
                                            }, this),
                                            onBookCourse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    onBookCourse(course.id);
                                                    setSelectedSchedule(null);
                                                },
                                                className: "btn-primary w-full",
                                                children: t('bookThisCourse')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1339,
                                                columnNumber: 25
                                            }, this),
                                            showManagement && user?.role === 'coach' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setScannerSchedule(selectedSchedule);
                                                    setShowScanner(true);
                                                    setSelectedSchedule(null);
                                                },
                                                className: "btn-secondary w-full mt-3 flex items-center justify-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1360,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t('Scan Reservations')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1361,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1352,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1294,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true);
                        })()
                    }, void 0, false, {
                        fileName: "[project]/src/components/CourseCalendar.tsx",
                        lineNumber: 1272,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 1271,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCalendar.tsx",
                lineNumber: 1269,
                columnNumber: 7
            }, this),
            scannerSchedule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelmetReservationScanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showScanner,
                onClose: ()=>{
                    setShowScanner(false);
                    setScannerSchedule(null);
                },
                schedule: scannerSchedule
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCalendar.tsx",
                lineNumber: 1375,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isModalOpen && showManagement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9
                        },
                        className: "bg-black border border-[#D91CD2]/20 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold gradient-text mb-6",
                                children: editingSchedule ? t('editSchedule') : t('scheduleCourse')
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1395,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleScheduleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white mb-2",
                                                children: t('course')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1401,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.courseId,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            courseId: e.target.value
                                                        })),
                                                required: true,
                                                className: "input-primary w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: t('selectACourse')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1408,
                                                        columnNumber: 21
                                                    }, this),
                                                    courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: course.id,
                                                            children: course.title
                                                        }, course.id, false, {
                                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                                            lineNumber: 1410,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1402,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1400,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-white mb-2",
                                                        children: t('startTime')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1417,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "datetime-local",
                                                        value: formData.startTime.toISOString().slice(0, 16),
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    startTime: new Date(e.target.value)
                                                                })),
                                                        required: true,
                                                        className: "input-primary w-full text-white",
                                                        style: {
                                                            colorScheme: "dark"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1418,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1416,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-white mb-2",
                                                        children: t('endTime')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1428,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "datetime-local",
                                                        value: formData.endTime.toISOString().slice(0, 16),
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    endTime: new Date(e.target.value)
                                                                })),
                                                        required: true,
                                                        className: "input-primary w-full text-white",
                                                        style: {
                                                            colorScheme: "dark"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1429,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1427,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1415,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white mb-2",
                                                children: t('level')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1441,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.level,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            level: e.target.value
                                                        })),
                                                required: true,
                                                className: "input-primary w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: t('allLevels')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1448,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "beginner",
                                                        children: t('beginner')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1449,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "intermediate",
                                                        children: t('intermediate')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1450,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "advanced",
                                                        children: t('advanced')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1442,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1440,
                                        columnNumber: 17
                                    }, this),
                                    !editingSchedule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white mb-2",
                                                children: [
                                                    t('repeat'),
                                                    " (",
                                                    t('optional'),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1458,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            {
                                                                value: 0,
                                                                label: t('everySunday') || 'Every Sunday'
                                                            },
                                                            {
                                                                value: 1,
                                                                label: t('everyMonday') || 'Every Monday'
                                                            },
                                                            {
                                                                value: 2,
                                                                label: t('everyTuesday') || 'Every Tuesday'
                                                            },
                                                            {
                                                                value: 3,
                                                                label: t('everyWednesday') || 'Every Wednesday'
                                                            },
                                                            {
                                                                value: 4,
                                                                label: t('everyThursday') || 'Every Thursday'
                                                            },
                                                            {
                                                                value: 5,
                                                                label: t('everyFriday') || 'Every Friday'
                                                            },
                                                            {
                                                                value: 6,
                                                                label: t('everySaturday') || 'Every Saturday'
                                                            }
                                                        ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center space-x-2 p-2 rounded-lg bg-black/40 border border-gray-700 hover:border-[#D91CD2]/50 cursor-pointer transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: formData.repeatDays?.includes(day.value) || false,
                                                                        onChange: (e)=>{
                                                                            const currentDays = formData.repeatDays || [];
                                                                            if (e.target.checked) {
                                                                                setFormData((prev)=>({
                                                                                        ...prev,
                                                                                        repeatDays: [
                                                                                            ...currentDays,
                                                                                            day.value
                                                                                        ].sort()
                                                                                    }));
                                                                            } else {
                                                                                setFormData((prev)=>({
                                                                                        ...prev,
                                                                                        repeatDays: currentDays.filter((d)=>d !== day.value)
                                                                                    }));
                                                                            }
                                                                        },
                                                                        className: "w-4 h-4 text-[#D91CD2] bg-gray-700 border-gray-600 rounded focus:ring-[#D91CD2] focus:ring-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 1476,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-white",
                                                                        children: day.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                        lineNumber: 1495,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, day.value, true, {
                                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                                lineNumber: 1472,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1462,
                                                        columnNumber: 23
                                                    }, this),
                                                    formData.repeatDays && formData.repeatDays.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 mt-2",
                                                        children: t('schedulesWillBeCreatedForNext12Weeks') || 'Schedules will be created for the next 12 weeks on selected days'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1500,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1461,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1457,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white mb-2",
                                                children: [
                                                    t('location'),
                                                    " (",
                                                    t('optional'),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1509,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.location,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            location: e.target.value
                                                        })),
                                                className: "input-primary w-full",
                                                placeholder: t('e.g.StudioA,Online')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1510,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1508,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white mb-2",
                                                children: [
                                                    t('additionalNotes'),
                                                    " (",
                                                    t('optional'),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1520,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: formData.description,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            description: e.target.value
                                                        })),
                                                className: "input-primary w-full h-20",
                                                placeholder: t('anyAdditionalInformationForStudents')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1521,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1519,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-white mb-2",
                                                        children: [
                                                            t('maxParticipants'),
                                                            " (",
                                                            t('optional'),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1531,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: formData.maxParticipants,
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    maxParticipants: parseInt(e.target.value) || 0
                                                                })),
                                                        className: "input-primary w-full",
                                                        placeholder: t('leaveEmptyToUseCourseDefault'),
                                                        min: "1",
                                                        max: "50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1532,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1530,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-white mb-2",
                                                        children: [
                                                            t('sessionPrice'),
                                                            " (",
                                                            t('optional'),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1543,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: formData.price,
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    price: parseFloat(e.target.value) || 0
                                                                })),
                                                        className: "input-primary w-full",
                                                        placeholder: t('leaveEmptyToUseCourseDefault'),
                                                        min: "0",
                                                        step: "0.01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1544,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1542,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1529,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end space-x-4 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setIsModalOpen(false);
                                                    setEditingSchedule(null);
                                                    resetForm();
                                                },
                                                className: "btn-secondary",
                                                children: t('cancel')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1557,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isLoading,
                                                className: "btn-primary",
                                                children: isLoading ? t('saving') : editingSchedule ? t('updateSchedule') : t('createSchedule')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1568,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1556,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1399,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourseCalendar.tsx",
                        lineNumber: 1389,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 1388,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCalendar.tsx",
                lineNumber: 1386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: confirmationModal.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9
                        },
                        className: "bg-gray-900 rounded-lg p-6 w-full max-w-md border border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiAlertTriangle"], {
                                        className: "text-yellow-400",
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1593,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white",
                                        children: t('confirmAction')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1594,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1592,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 mb-6",
                                children: confirmationModal.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1597,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setConfirmationModal({
                                                ...confirmationModal,
                                                show: false
                                            }),
                                        className: "btn-secondary flex-1",
                                        children: t('cancel')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1600,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: confirmationModal.onConfirm,
                                        className: `flex-1 px-4 py-2 rounded-lg font-medium ${confirmationModal.type === 'delete' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-[#D91CD2] hover:bg-[#B91CA8] text-white'}`,
                                        children: confirmationModal.type === 'delete' ? t('delete') : confirmationModal.type === 'move' ? t('move') : t('duplicate')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1606,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1599,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourseCalendar.tsx",
                        lineNumber: 1586,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 1585,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCalendar.tsx",
                lineNumber: 1583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showBulkModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9
                        },
                        className: "bg-gray-900 rounded-lg p-6 w-full max-w-md border border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white",
                                        children: t('bulkOperations')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1634,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowBulkModal(false),
                                        className: "text-gray-400 hover:text-white transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CourseCalendar.tsx",
                                            lineNumber: 1639,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1635,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1633,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 mb-6",
                                children: t('selectActionFor', {
                                    count: selectedScheduleIds.size
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1643,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-white mb-2",
                                                children: t('targetDate')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1649,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                className: "input-primary w-full",
                                                onChange: (e)=>{
                                                    const targetDate = new Date(e.target.value);
                                                    if (targetDate > new Date()) {
                                                        // Store the selected date for operations
                                                        window.bulkTargetDate = targetDate;
                                                    }
                                                },
                                                min: new Date().toISOString().split('T')[0]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1650,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1648,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const targetDate = window.bulkTargetDate || new Date();
                                                    targetDate.setDate(targetDate.getDate() + 7);
                                                    handleBulkMove(targetDate);
                                                    setShowBulkModal(false);
                                                },
                                                className: "flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMove"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1674,
                                                        columnNumber: 21
                                                    }, this),
                                                    t('move')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1665,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    const targetDate = window.bulkTargetDate || new Date();
                                                    targetDate.setDate(targetDate.getDate() + 7);
                                                    handleBulkDuplicate(targetDate);
                                                    setShowBulkModal(false);
                                                },
                                                className: "flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                                        lineNumber: 1686,
                                                        columnNumber: 21
                                                    }, this),
                                                    t('duplicate')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                                lineNumber: 1677,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CourseCalendar.tsx",
                                        lineNumber: 1664,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CourseCalendar.tsx",
                                lineNumber: 1647,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CourseCalendar.tsx",
                        lineNumber: 1627,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CourseCalendar.tsx",
                    lineNumber: 1626,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CourseCalendar.tsx",
                lineNumber: 1624,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CourseCalendar.tsx",
        lineNumber: 700,
        columnNumber: 5
    }, this);
}
_s(CourseCalendar, "1U+wIhCw1N6BrEX+rzIGMhzrvbU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CourseCalendar;
var _c;
__turbopack_context__.k.register(_c, "CourseCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_CourseCalendar_tsx_a9cd922e._.js.map