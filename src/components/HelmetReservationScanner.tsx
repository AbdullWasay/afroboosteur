'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiX, FiCheck, FiAlertCircle } from 'react-icons/fi';
import jsQR from 'jsqr';
import { CourseSchedule } from '@/types';

interface HelmetReservationScannerProps {
  isOpen: boolean;
  onClose: () => void;
  schedule: CourseSchedule;
}

interface ScanResult {
  valid: boolean;
  status: string;
  message: string;
  userName?: string;
  userEmail?: string;
  courseName?: string;
  location?: string;
  checkinTime?: any;
}

export default function HelmetReservationScanner({ 
  isOpen, 
  onClose, 
  schedule 
}: HelmetReservationScannerProps) {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState('');
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isOpen]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsScanning(true);
        scanQRCode();
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Failed to access camera. Please check permissions.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setIsScanning(false);
  };

  const scanQRCode = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scan = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code && code.data) {
          console.log('QR Code detected:', code.data);
          handleQRCodeDetected(code.data);
          return;
        }
      }

      animationFrameRef.current = requestAnimationFrame(scan);
    };

    scan();
  };

  const handleQRCodeDetected = async (qrCodeData: string) => {
    stopCamera();
    setIsScanning(false);

    try {
      const response = await fetch('/api/helmet-reservations/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          qrCodeData,
          scheduleId: schedule.id
        }),
      });

      const data = await response.json();
      setScanResult(data);

      // Auto-close after 5 seconds if successful
      if (data.valid) {
        setTimeout(() => {
          onClose();
        }, 5000);
      }

    } catch (err: any) {
      console.error('Scan error:', err);
      setError(err.message || 'Failed to validate QR code');
    }
  };

  const handleRescan = () => {
    setScanResult(null);
    setError('');
    startCamera();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 rounded-lg max-w-md w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <FiX size={24} />
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{t('Scan QR Code')}</h2>
            <p className="text-gray-400 text-sm">
              {schedule.title} - {new Date(schedule.startTime as any).toLocaleDateString()}
            </p>
          </div>

          {/* Scanner or Result */}
          {!scanResult && !error && (
            <div className="space-y-4">
              <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                />
                <canvas ref={canvasRef} className="hidden" />

                {isScanning && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-[#D91CD2] rounded-lg"></div>
                  </div>
                )}
              </div>

              <p className="text-center text-gray-400 text-sm">
                {t('Position the QR code within the frame')}
              </p>
            </div>
          )}

          {/* Scan Result */}
          {scanResult && (
            <div className="space-y-4">
              <div className={`p-6 rounded-lg border-2 ${
                scanResult.valid 
                  ? 'bg-green-500/20 border-green-500' 
                  : 'bg-red-500/20 border-red-500'
              }`}>
                <div className="flex items-center justify-center mb-4">
                  {scanResult.valid ? (
                    <FiCheck className="text-green-500" size={48} />
                  ) : (
                    <FiAlertCircle className="text-red-500" size={48} />
                  )}
                </div>

                <h3 className={`text-xl font-bold text-center mb-2 ${
                  scanResult.valid ? 'text-green-500' : 'text-red-500'
                }`}>
                  {scanResult.message}
                </h3>

                {scanResult.userName && (
                  <div className="text-center space-y-1">
                    <p className="text-white font-medium">{scanResult.userName}</p>
                    {scanResult.userEmail && (
                      <p className="text-gray-400 text-sm">{scanResult.userEmail}</p>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={handleRescan}
                className="w-full btn-secondary py-3"
              >
                {t('Scan Another')}
              </button>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="space-y-4">
              <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <FiAlertCircle className="text-red-500" size={48} />
                </div>
                <p className="text-red-500 text-center">{error}</p>
              </div>

              <button
                onClick={handleRescan}
                className="w-full btn-secondary py-3"
              >
                {t('Try Again')}
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

