'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiX, FiAlertCircle, FiInfo } from 'react-icons/fi';
import { useEffect } from 'react';

export interface ToastProps {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
  duration?: number;
}

export default function Toast({ show, message, type, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <FiX className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <FiAlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'info':
        return <FiInfo className="w-5 h-5 text-blue-400" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-900/90 border-green-700 text-green-100';
      case 'error':
        return 'bg-red-900/90 border-red-700 text-red-100';
      case 'warning':
        return 'bg-yellow-900/90 border-yellow-700 text-yellow-100';
      case 'info':
        return 'bg-blue-900/90 border-blue-700 text-blue-100';
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed top-4 right-4 z-[9999] max-w-md">
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`p-4 rounded-xl shadow-lg border ${getStyles()} backdrop-blur-sm`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getIcon()}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{message}</p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 ml-2 hover:opacity-70 transition-opacity"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

