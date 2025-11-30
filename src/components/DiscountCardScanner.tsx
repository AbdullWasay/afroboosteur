'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  FiUpload,
  FiX,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiCamera,
  FiStopCircle,
  FiPercent
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import jsQR from 'jsqr';

interface DiscountCardScannerProps {
  onValidation: (result: {
    valid: boolean;
    discountPercentage: number;
    cardCode: string;
    memberName: string;
    coachId: string;
    expirationDate: string;
    description: string;
    discountAmount?: number;
    finalAmount?: number;
    error?: string
  }) => void;
  onClose: () => void;
  customerId: string;
  customerName: string;
  coachId?: string; // If scanning for a specific coach's discount card
  orderAmount: number;
}

export default function DiscountCardScanner({
  onValidation,
  onClose,
  customerId,
  customerName,
  coachId,
  orderAmount
}: DiscountCardScannerProps) {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isValidating, setIsValidating] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const [useManualEntry, setUseManualEntry] = useState(false);
  const [useCameraScanner, setUseCameraScanner] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string>('');
  const [detectedCode, setDetectedCode] = useState<string>('');
  const [availableCards, setAvailableCards] = useState<any[]>([]);
  const [isLoadingCards, setIsLoadingCards] = useState(true);

  // Refs for camera functionality
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number>(0);

  // Load available discount cards for the user
  useEffect(() => {
    const loadAvailableCards = async () => {
      if (!customerId || !coachId) {
        setIsLoadingCards(false);
        return;
      }

      try {
        const response = await fetch(`/api/discount-cards/user-cards?userId=${customerId}&coachId=${coachId}`);
        if (response.ok) {
          const data = await response.json();
          // Filter cards that are active and not expired
          const validCards = (data.discountCards || []).filter((card: any) => {
            const isExpired = new Date(card.expiryDate) < new Date();
            const hasReachedLimit = card.usageLimit && card.usageCount >= card.usageLimit;
            return card.isActive && !isExpired && !hasReachedLimit;
          });
          setAvailableCards(validCards);
        }
      } catch (error) {
        console.error('Error loading available discount cards:', error);
      } finally {
        setIsLoadingCards(false);
      }
    };

    loadAvailableCards();
  }, [customerId, coachId]);

  // Auto-start camera when switching to camera scanning mode
  useEffect(() => {
    console.log('🎯 Discount Card - Auto-start effect triggered:', { useCameraScanner });
    if (useCameraScanner && !isCameraActive) {
      console.log('🎯 Discount Card - Auto-starting camera in effect...');
      const timer = setTimeout(() => {
        startCamera();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [useCameraScanner, isCameraActive]);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = useCallback(async () => {
    console.log('📹 Discount Card - Starting camera...');
    setCameraError('');

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera not supported in this browser');
      }

      // Stop any existing stream first
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }

      const constraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      console.log('📹 Discount Card - Requesting camera access...');
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.playsInline = true;
        videoRef.current.muted = true;
        videoRef.current.autoplay = true;

        videoRef.current.onloadedmetadata = () => {
          console.log('📹 Discount Card - Video metadata loaded');
          if (videoRef.current) {
            videoRef.current.play()
              .then(() => {
                console.log('📹 Discount Card - Video playing successfully');
                setIsCameraActive(true);
                startQRScanning();
              })
              .catch(err => {
                console.error('📹 Discount Card - Error playing video:', err);
                setCameraError('Failed to start video playback');
              });
          }
        };

        videoRef.current.onplaying = () => {
          console.log('📹 Discount Card - Video started playing');
          setIsCameraActive(true);
        };

        videoRef.current.onerror = (err) => {
          console.error('📹 Discount Card - Video element error:', err);
          setCameraError('Video playback error');
        };
      }
    } catch (error) {
      console.error('📹 Discount Card - Camera error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown camera error';
      setCameraError(errorMessage);
      setIsCameraActive(false);
    }
  }, []);

  const stopCamera = useCallback(() => {
    console.log('📹 Discount Card - Stopping camera...');

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
        console.log('📹 Discount Card - Stopped track:', track.kind);
      });
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsCameraActive(false);
    setCameraError('');
    setDetectedCode('');
  }, []);

  const startQRScanning = useCallback(() => {
    console.log('📹 Discount Card - Starting QR scanning...');

    if (!videoRef.current || !canvasRef.current) {
      console.log('📹 Discount Card - Missing refs:', {
        hasVideo: !!videoRef.current,
        hasCanvas: !!canvasRef.current
      });
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const scanFrame = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

        if (qrCode && qrCode.data) {
          let extractedCode = qrCode.data.trim();
          
          // If QR code contains a URL, try to extract the code from it
          if (extractedCode.startsWith('http://') || extractedCode.startsWith('https://')) {
            console.log('📹 QR code contains URL, extracting code...');
            const urlParts = extractedCode.split('/');
            extractedCode = urlParts[urlParts.length - 1] || extractedCode;
          }
          
          extractedCode = extractedCode.toUpperCase();
          console.log('📹 Discount Card - QR Code detected:', extractedCode);
          console.log('📹 Original QR data:', qrCode.data);
          setDetectedCode(extractedCode);
          handleValidateDiscountCard(extractedCode);
          return;
        }
      }

      animationFrameRef.current = requestAnimationFrame(scanFrame);
    };

    scanFrame();
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleValidateFromImage = async () => {
    if (!selectedFile) return;

    setIsValidating(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new window.Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

        const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        if (imageData) {
          const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
          if (qrCode && qrCode.data) {
            let extractedCode = qrCode.data.trim();
            
            // If QR code contains a URL, try to extract the code from it
            if (extractedCode.startsWith('http://') || extractedCode.startsWith('https://')) {
              console.log('📷 QR code contains URL, extracting code...');
              const urlParts = extractedCode.split('/');
              extractedCode = urlParts[urlParts.length - 1] || extractedCode;
            }
            
            extractedCode = extractedCode.toUpperCase();
            console.log('📷 Discount Card - QR Code extracted from image:', extractedCode);
            console.log('📷 Original QR data:', qrCode.data);
            handleValidateDiscountCard(extractedCode);
          } else {
            onValidation({
              valid: false,
              discountPercentage: 0,
              cardCode: '',
              memberName: '',
              coachId: '',
              expirationDate: '',
              description: '',
              error: t('No QR code found in the image')
            });
          }
        }
        setIsValidating(false);
      };

      img.src = URL.createObjectURL(selectedFile);
    } catch (error) {
      console.error('Error processing image:', error);
      setIsValidating(false);
      onValidation({
        valid: false,
        discountPercentage: 0,
        cardCode: '',
        memberName: '',
        coachId: '',
        expirationDate: '',
        description: '',
        error: t('Error processing image')
      });
    }
  };

  const handleValidateDiscountCard = async (code: string) => {
    // Validate required fields before making request
    if (!code || !code.trim()) {
      onValidation({
        valid: false,
        discountPercentage: 0,
        cardCode: '',
        memberName: '',
        coachId: '',
        expirationDate: '',
        description: '',
        error: t('Please enter or scan a discount code')
      });
      return;
    }

    if (!customerId) {
      onValidation({
        valid: false,
        discountPercentage: 0,
        cardCode: code,
        memberName: '',
        coachId: '',
        expirationDate: '',
        description: '',
        error: t('Customer ID is required')
      });
      return;
    }

    setIsValidating(true);

    try {
      const normalizedCode = code.trim().toUpperCase();
      console.log('🔍 Validating discount card with code:', normalizedCode);
      console.log('Request data:', {
        cardCode: normalizedCode,
        customerId,
        customerName: customerName || 'N/A',
        coachId: coachId || 'N/A',
        orderAmount: orderAmount || 0
      });

      // Ensure we're sending valid data
      const requestBody = {
        cardCode: normalizedCode,
        customerId: customerId,
        ...(customerName && { customerName }),
        ...(coachId && { coachId }),
        ...(orderAmount !== undefined && orderAmount !== null && { orderAmount: Number(orderAmount) || 0 })
      };

      console.log('Sending request to /api/discount-cards/validate');
      console.log('Request body:', requestBody);

      // Make sure we're using the correct API endpoint
      const apiUrl = '/api/discount-cards/validate';
      console.log('API URL:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response URL:', response.url);
      console.log('Response status:', response.status);

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      let result;

      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
        console.log('🎁 Discount Card validation result:', result);
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Invalid response from server');
      }

      if (response.ok && result.valid) {
        console.log('✅ Discount card is valid');
        onValidation({
          valid: true,
          discountPercentage: result.discountPercentage,
          cardCode: code,
          memberName: result.memberName || '',
          coachId: result.coachId,
          expirationDate: result.expirationDate,
          description: result.description,
          discountAmount: result.discountAmount,
          finalAmount: result.finalAmount
        });
      } else {
        console.log('❌ Discount card validation failed:', result.error);
        onValidation({
          valid: false,
          discountPercentage: 0,
          cardCode: code,
          memberName: '',
          coachId: '',
          expirationDate: '',
          description: '',
          error: result.error || t('Invalid discount card')
        });
      }
    } catch (error: any) {
      console.error('❌ Error validating discount card:', error);
      console.error('Error details:', {
        message: error?.message,
        stack: error?.stack
      });
      
      let errorMessage = t('Error validating discount card');
      
      if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      onValidation({
        valid: false,
        discountPercentage: 0,
        cardCode: code,
        memberName: '',
        coachId: '',
        expirationDate: '',
        description: '',
        error: errorMessage
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleManualValidation = () => {
    if (manualCode.trim()) {
      const normalizedCode = manualCode.trim().toUpperCase();
      console.log('✍️ Manual code entry:', normalizedCode);
      handleValidateDiscountCard(normalizedCode);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-700"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <FiPercent className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{t('Scan Discount Card')}</h2>
              <p className="text-gray-400 text-sm">
                {t('Scan coach discount card for automatic discount')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <FiX className="text-gray-400" size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Order Info */}
          <div className="mb-6 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">{t('Order Amount')}:</span>
              <span className="text-white font-medium">{orderAmount} CHF</span>
            </div>
            <div className="flex items-start justify-between text-xs sm:text-sm mt-2">
              <span className="text-gray-400">{t('Customer')}:</span>
              <span className="text-white">{customerName}</span>
            </div>
            {coachId && (
              <div className="flex items-start space-x-2 text-xs sm:text-sm mt-2">
                <FiAlertCircle className="text-yellow-400" size={16} />
                <span className="text-yellow-300 break-words leading-snug pr-1">
                  {t('Only discount cards from this coach will be accepted')}
                </span>
              </div>
            )}
          </div>

          {/* Available Discount Cards */}
          {!isLoadingCards && availableCards.length > 0 && (
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <FiCheckCircle className="text-green-400 mr-2" size={18} />
                {t('Your Available Discount Cards')}
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableCards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 flex items-center justify-between hover:border-purple-500 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-white font-medium">{card.discountPercentage}% {t('Discount')}</span>
                        <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                          {t('Active')}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {card.title || card.description}
                      </div>
                      <div className="text-xs text-gray-500">
                        {t('Expires')}: {new Date(card.expiryDate).toLocaleDateString()}
                        {card.usageLimit && ` • ${t('Used')}: ${card.usageCount || 0}/${card.usageLimit}`}
                      </div>
                    </div>
                    <button
                      onClick={() => handleValidateDiscountCard(card.code)}
                      disabled={isValidating}
                      className="ml-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t('Apply')}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  {t('Or scan/enter a different discount card below')}
                </p>
              </div>
            </div>
          )}

          {/* Method Selection */}
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 mb-6">
            <button
              onClick={() => {
                stopCamera();
                setUseManualEntry(false);
                setUseCameraScanner(false);
              }}
              className={`py-3 px-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${!useManualEntry && !useCameraScanner
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
            >
              {t('Upload Image')}
            </button>
            <button
              onClick={async () => {
                console.log('Discount Card - Scan QR button clicked');
                stopCamera();
                setUseManualEntry(false);
                setUseCameraScanner(true);
                await startCamera();
              }}
              className={`py-3 px-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${useCameraScanner
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
            >
              <FiCamera className="inline mr-1" size={14} />
              {t('Scan QR')}
            </button>
            <button
              onClick={() => {
                stopCamera();
                setUseManualEntry(true);
                setUseCameraScanner(false);
              }}
              className={`py-3 px-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${useManualEntry
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
            >
              {t('Manual Entry')}
            </button>
          </div>

          {/* Content based on selected method */}
          {useCameraScanner ? (
            /* Camera Scanner */
            <div className="space-y-4">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  autoPlay
                />
                <canvas ref={canvasRef} className="hidden" />

                {/* Camera overlay */}
                <div className="absolute inset-0 border-2 border-purple-500/30 rounded-lg">
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-black/70 rounded-lg p-3 text-center">
                      <p className="text-white text-sm">
                        {isCameraActive
                          ? t('Point camera at discount card QR code')
                          : t('Starting camera...')
                        }
                      </p>
                      {detectedCode && (
                        <p className="text-green-400 text-xs mt-1">
                          {t('QR Code detected!')}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* QR code target */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-purple-400 rounded-lg">
                      <div className="w-6 h-6 border-t-2 border-l-2 border-purple-400 absolute top-2 left-2"></div>
                      <div className="w-6 h-6 border-t-2 border-r-2 border-purple-400 absolute top-2 right-2"></div>
                      <div className="w-6 h-6 border-b-2 border-l-2 border-purple-400 absolute bottom-2 left-2"></div>
                      <div className="w-6 h-6 border-b-2 border-r-2 border-purple-400 absolute bottom-2 right-2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {cameraError && (
                <div className="bg-red-900/50 border border-red-700 rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-red-400">
                    <FiAlertCircle size={16} />
                    <span className="text-sm">{cameraError}</span>
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  onClick={stopCamera}
                  className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <FiStopCircle size={18} />
                  <span>{t('Stop Camera')}</span>
                </button>
                {!cameraError && (
                  <button
                    onClick={startCamera}
                    disabled={isCameraActive && !cameraError}
                    className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <FiCamera size={18} />
                    <span>{isCameraActive && !cameraError ? t('Camera Active') : t('Start Camera')}</span>
                  </button>
                )}
              </div>
            </div>
          ) : !useManualEntry ? (
            /* QR Code Upload */
            <div className="space-y-4">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-400 transition-colors"
              >
                {previewUrl ? (
                  <div className="space-y-4">
                    <div className="w-32 h-32 mx-auto bg-white rounded-lg p-2">
                      <Image
                        src={previewUrl}
                        alt="Discount Card QR Code Preview"
                        width={120}
                        height={120}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-gray-400 text-sm">
                      {t('QR code image selected. Click validate to continue.')}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <FiUpload className="text-4xl text-gray-400 mx-auto" />
                    <div>
                      <p className="text-white font-medium">{t('Upload Discount Card QR Code')}</p>
                      <p className="text-gray-400 text-sm mt-1">
                        {t('Click to select a PNG/JPG image containing the discount card QR code')}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/*"
                onChange={handleFileSelect}
                className="hidden"
              />

              <button
                onClick={handleValidateFromImage}
                disabled={!selectedFile || isValidating}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isValidating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{t('Validating...')}</span>
                  </>
                ) : (
                  <>
                    <FiCheckCircle size={18} />
                    <span>{t('Validate Discount Card')}</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            /* Manual Code Entry */
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('Discount Card Code')}
                </label>
                <input
                  type="text"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  placeholder={t('Enter discount card code')}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                onClick={handleManualValidation}
                disabled={!manualCode.trim() || isValidating}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isValidating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{t('Validating...')}</span>
                  </>
                ) : (
                  <>
                    <FiCheckCircle size={18} />
                    <span>{t('Validate Discount Card')}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Loading state overlay */}
          {isValidating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl"
            >
              <div className="bg-gray-900 rounded-lg p-6 flex items-center space-x-3">
                <FiLoader className="text-purple-400 animate-spin" size={24} />
                <span className="text-white font-medium">{t('Validating discount card...')}</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}