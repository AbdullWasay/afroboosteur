'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';
import { CourseSchedule } from '@/types';

interface HelmetReservationButtonProps {
  userId: string;
  schedule: CourseSchedule;
  onSuccess?: () => void;
}

export default function HelmetReservationButton({ 
  userId, 
  schedule, 
  onSuccess 
}: HelmetReservationButtonProps) {
  const { t } = useTranslation();
  const [isReserving, setIsReserving] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState('');

  const handleReserve = async () => {
    setIsReserving(true);
    setError('');

    try {
      const response = await fetch('/api/helmet-reservations/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          scheduleId: schedule.id
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create reservation');
      }

      setShowConfirmation(true);
      if (onSuccess) {
        onSuccess();
      }

      // Auto-hide confirmation after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);

    } catch (err: any) {
      console.error('Reservation error:', err);
      setError(err.message || 'Failed to reserve helmet');
    } finally {
      setIsReserving(false);
    }
  };

  if (showConfirmation) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center justify-center space-x-2"
      >
        <FiCheck className="text-green-500" size={20} />
        <span className="text-green-500 font-medium">{t('Helmet Reserved!')}</span>
      </motion.div>
    );
  }

  return (
    <div className="space-y-2">
      <button
        onClick={handleReserve}
        disabled={isReserving}
        className="w-full btn-primary flex items-center justify-center space-x-2 py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isReserving ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>{t('Reserving...')}</span>
          </>
        ) : (
          <span>{t('Reserve Helmet')}</span>
        )}
      </button>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/20 border border-red-500 rounded-lg p-3 flex items-start space-x-2"
        >
          <FiX className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
          <span className="text-red-500 text-sm">{error}</span>
        </motion.div>
      )}
    </div>
  );
}

