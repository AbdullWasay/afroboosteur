'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import MyReservations from '@/components/MyReservations';

export default function MyReservationsPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D91CD2]"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <FiArrowLeft size={20} />
            <span>{t('Back')}</span>
          </button>

          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
            {t('My Reservations')}
          </h1>
          <p className="text-gray-400">
            {t('View your helmet reservations and QR code')}
          </p>
        </motion.div>

        {/* Reservations Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <MyReservations userId={user.id} />
        </motion.div>
      </div>
    </div>
  );
}

