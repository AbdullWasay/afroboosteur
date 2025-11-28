'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiX,
  FiPercent,
  FiUser,
  FiCalendar,
  FiFileText,
  FiHash,
  FiLoader,
  FiCheckCircle,
  FiBook,
  FiSearch
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode';
import { courseService, directMessageService } from '@/lib/database';
import { Course, User } from '@/types';

interface CreateDiscountCardModalProps {
  onClose: () => void;
  onSubmit: (cardData: {
    memberEmail?: string;
    courseId?: string;
    discountPercentage: number;
    expirationDate: string;
    description: string;
    maxUsage: number;
    cardType: 'student' | 'course';
  }) => void;
  coachId: string;
}

export default function CreateDiscountCardModal({
  onClose,
  onSubmit,
  coachId
}: CreateDiscountCardModalProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'student' | 'course'>('student');
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState({
    memberEmail: '',
    courseId: '',
    discountPercentage: 10.0,
    expirationDate: '',
    description: '',
    maxUsage: 1,
    unlimitedUsage: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [previewQR, setPreviewQR] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Load coach's courses
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const allCourses = await courseService.getAll();
        const coachCourses = allCourses.filter(c => c.coachId === coachId);
        setCourses(coachCourses);
      } catch (error) {
        console.error('Error loading courses:', error);
      }
    };
    loadCourses();
  }, [coachId]);

  // Set default expiration date to 6 months from now
  useEffect(() => {
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    setFormData(prev => ({
      ...prev,
      expirationDate: sixMonthsFromNow.toISOString().split('T')[0]
    }));
  }, []);

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Search users by name
  const searchUsers = async (term: string) => {
    if (!term || term.length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    try {
      setIsSearching(true);
      // Use directMessageService.searchUsers which searches by firstName and lastName
      // We'll pass coachId as currentUserId to exclude the coach from results (optional)
      const results = await directMessageService.searchUsers(term, coachId, 10);
      setSearchResults(results);
      setShowSearchResults(true);
    } catch (error) {
      console.error('Error searching users:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.length >= 2) {
      searchUsers(value);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  // Handle user selection
  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setFormData(prev => ({ ...prev, memberEmail: user.email }));
    setSearchTerm(`${user.firstName} ${user.lastName}`);
    setShowSearchResults(false);
    setSearchResults([]);
    
    // Clear error for memberEmail
    if (errors.memberEmail) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.memberEmail;
        return newErrors;
      });
    }
    
    // Generate preview QR
    generatePreviewQR();
  };

  // Clear selected user
  const handleClearUser = () => {
    setSelectedUser(null);
    setFormData(prev => ({ ...prev, memberEmail: '' }));
    setSearchTerm('');
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Validate based on active tab
    if (activeTab === 'student') {
      if (!selectedUser || !formData.memberEmail) {
        newErrors.memberEmail = t('Please select a student');
      }
    } else {
      if (!formData.courseId) {
        newErrors.courseId = t('Please select a course');
      }
    }

    if (formData.discountPercentage < 1 || formData.discountPercentage > 100) {
      newErrors.discountPercentage = t('Discount percentage must be between 1 and 100');
    }

    if (!formData.expirationDate) {
      newErrors.expirationDate = t('Expiration date is required');
    } else if (new Date(formData.expirationDate) <= new Date()) {
      newErrors.expirationDate = t('Expiration date must be in the future');
    }

    if (!formData.unlimitedUsage && formData.maxUsage < 1) {
      newErrors.maxUsage = t('Maximum usage must be at least 1');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generatePreviewQR = async () => {
    try {
      // Generate a preview QR code with sample data
      const sampleCardCode = `DISC_${coachId}_${Date.now()}`;
      const qrDataUrl = await QRCode.toDataURL(sampleCardCode, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setPreviewQR(qrDataUrl);
    } catch (error) {
      console.error('Error generating preview QR:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit({
        ...(activeTab === 'student' ? { memberEmail: formData.memberEmail } : { courseId: formData.courseId }),
        discountPercentage: formData.discountPercentage,
        expirationDate: formData.expirationDate,
        description: formData.description,
        maxUsage: formData.unlimitedUsage ? -1 : formData.maxUsage,
        cardType: activeTab
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }

    // Generate preview QR when key data changes
    if (['memberEmail', 'discountPercentage'].includes(field)) {
      generatePreviewQR();
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
        className="bg-gray-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <FiPercent className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{t('Create Discount Card')}</h2>
              <p className="text-gray-400 text-sm">
                {t('Create a personalized discount card')}
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

        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          <button
            type="button"
            onClick={() => setActiveTab('student')}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'student'
                ? 'text-purple-400 border-b-2 border-purple-400 bg-purple-500/10'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <FiUser className="inline mr-2" size={16} />
            {t('For Student')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('course')}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'course'
                ? 'text-purple-400 border-b-2 border-purple-400 bg-purple-500/10'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <FiBook className="inline mr-2" size={16} />
            {t('For Course')}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Form */}
            <div className="space-y-4">
              {/* Student Search (only for student tab) */}
              {activeTab === 'student' && (
                <div ref={searchRef} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FiUser className="inline mr-2" size={16} />
                    {t('Select Student')} *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="text-gray-400" size={16} />
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      placeholder={t('Search by student name...')}
                      className={`w-full pl-10 pr-10 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 ${
                        errors.memberEmail ? 'border-red-500' : 'border-gray-600'
                      }`}
                      disabled={!!selectedUser}
                    />
                    {selectedUser && (
                      <button
                        type="button"
                        onClick={handleClearUser}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        <FiX className="text-gray-400 hover:text-white" size={16} />
                      </button>
                    )}
                  </div>
                  
                  {/* Search Results Dropdown */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {isSearching && (
                        <div className="p-3 text-center text-gray-400">
                          <FiLoader className="animate-spin inline mr-2" size={16} />
                          {t('Searching...')}
                        </div>
                      )}
                      {!isSearching && searchResults.map((user) => (
                        <button
                          key={user.id}
                          type="button"
                          onClick={() => handleUserSelect(user)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-medium">
                                {user.firstName} {user.lastName}
                              </p>
                              <p className="text-gray-400 text-sm">{user.email}</p>
                            </div>
                            {user.role && (
                              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                                {user.role}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Selected User Display */}
                  {selectedUser && (
                    <div className="mt-2 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">
                            {selectedUser.firstName} {selectedUser.lastName}
                          </p>
                          <p className="text-gray-400 text-sm">{selectedUser.email}</p>
                        </div>
                        <FiCheckCircle className="text-purple-400" size={20} />
                      </div>
                    </div>
                  )}
                  
                  {errors.memberEmail && (
                    <p className="text-red-400 text-sm mt-1">{errors.memberEmail}</p>
                  )}
                  
                  {searchTerm.length > 0 && searchTerm.length < 2 && (
                    <p className="text-gray-400 text-xs mt-1">
                      {t('Type at least 2 characters to search')}
                    </p>
                  )}
                  
                  {showSearchResults && !isSearching && searchResults.length === 0 && searchTerm.length >= 2 && (
                    <p className="text-gray-400 text-xs mt-1">
                      {t('No users found')}
                    </p>
                  )}
                </div>
              )}

              {/* Course Selection (only for course tab) */}
              {activeTab === 'course' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FiBook className="inline mr-2" size={16} />
                    {t('Select Course')} *
                  </label>
                  <select
                    value={formData.courseId}
                    onChange={(e) => handleInputChange('courseId', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:border-purple-500 ${
                      errors.courseId ? 'border-red-500' : 'border-gray-600'
                    }`}
                  >
                    <option value="">{t('Choose a course')}</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                  {errors.courseId && (
                    <p className="text-red-400 text-sm mt-1">{errors.courseId}</p>
                  )}
                </div>
              )}

              {/* Discount Percentage */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FiPercent className="inline mr-2" size={16} />
                  {t('Discount Percentage')} *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0.01"
                    max="100"
                    step="0.01"
                    value={formData.discountPercentage}
                    onChange={(e) => handleInputChange('discountPercentage', parseFloat(e.target.value) || 0)}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:border-purple-500 ${
                      errors.discountPercentage ? 'border-red-500' : 'border-gray-600'
                    }`}
                  />
                  <span className="absolute right-3 top-3 text-gray-400">%</span>
                </div>
                {errors.discountPercentage && (
                  <p className="text-red-400 text-sm mt-1">{errors.discountPercentage}</p>
                )}
              </div>

              {/* Expiration Date */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FiCalendar className="inline mr-2" size={16} />
                  {t('Expiration Date')} *
                </label>
                <input
                  type="date"
                  value={formData.expirationDate}
                  onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:border-purple-500 ${
                    errors.expirationDate ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.expirationDate && (
                  <p className="text-red-400 text-sm mt-1">{errors.expirationDate}</p>
                )}
              </div>

              {/* Max Usage */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FiHash className="inline mr-2" size={16} />
                  {t('Usage Limit')}
                </label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="unlimitedUsage"
                      checked={formData.unlimitedUsage}
                      onChange={(e) => handleInputChange('unlimitedUsage', e.target.checked)}
                      className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="unlimitedUsage" className="text-gray-300">
                      {t('Unlimited usage')}
                    </label>
                  </div>
                  
                  {!formData.unlimitedUsage && (
                    <input
                      type="number"
                      min="1"
                      value={formData.maxUsage}
                      onChange={(e) => handleInputChange('maxUsage', parseInt(e.target.value) || 1)}
                      placeholder={t('Maximum number of uses')}
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 ${
                        errors.maxUsage ? 'border-red-500' : 'border-gray-600'
                      }`}
                    />
                  )}
                </div>
                {errors.maxUsage && (
                  <p className="text-red-400 text-sm mt-1">{errors.maxUsage}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FiFileText className="inline mr-2" size={16} />
                  {t('Description')} ({t('Optional')})
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder={t('Add a custom description for this discount card')}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">{t('Card Preview')}</h3>
                
                {/* QR Code Preview */}
                <div className="text-center mb-4">
                  {previewQR ? (
                    <img
                      src={previewQR}
                      alt="QR Code Preview"
                      className="mx-auto bg-white p-4 rounded-lg"
                      width={150}
                      height={150}
                    />
                  ) : (
                    <div className="mx-auto bg-gray-700 rounded-lg flex items-center justify-center" style={{width: 150, height: 150}}>
                      <FiPercent className="text-gray-500" size={40} />
                    </div>
                  )}
                  <p className="text-gray-400 text-sm mt-2">{t('QR Code Preview')}</p>
                </div>

                {/* Card Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('Discount')}:</span>
                    <span className="text-white font-semibold">{formData.discountPercentage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('For')}:</span>
                    <span className="text-white">
                      {activeTab === 'student'
                        ? (selectedUser 
                            ? `${selectedUser.firstName} ${selectedUser.lastName}` 
                            : (formData.memberEmail || t('Not specified')))
                        : (courses.find(c => c.id === formData.courseId)?.title || t('Not specified'))
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('Expires')}:</span>
                    <span className="text-white">
                      {formData.expirationDate
                        ? new Date(formData.expirationDate).toLocaleDateString()
                        : t('Not specified')
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('Usage')}:</span>
                    <span className="text-white">
                      {formData.unlimitedUsage ? t('Unlimited') : `${formData.maxUsage} ${t('times')}`}
                    </span>
                  </div>
                </div>

                {formData.description && (
                  <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                    <p className="text-gray-400 text-xs mb-1">{t('Description')}:</p>
                    <p className="text-white text-sm">{formData.description}</p>
                  </div>
                )}
              </div>

              {/* Info Box */}
              <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <FiCheckCircle className="text-blue-400 mt-0.5" size={16} />
                  <div>
                    <p className="text-blue-300 text-sm font-medium mb-1">{t('How it works')}</p>
                    <ul className="text-blue-200 text-xs space-y-1">
                      {activeTab === 'student' ? (
                        <>
                          <li>• {t('Student receives card via email')}</li>
                          <li>• {t('QR code can be scanned at checkout')}</li>
                          <li>• {t('Discount applies automatically')}</li>
                          <li>• {t('Usage is tracked and limited')}</li>
                        </>
                      ) : (
                        <>
                          <li>• {t('Card is linked to specific course')}</li>
                          <li>• {t('Any student can use during checkout')}</li>
                          <li>• {t('Discount applies to course price')}</li>
                          <li>• {t('Usage is tracked and limited')}</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              {t('Cancel')}
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isLoading ? (
                <>
                  <FiLoader className="animate-spin" size={16} />
                  <span>{t('Creating...')}</span>
                </>
              ) : (
                <>
                  <FiCheckCircle size={16} />
                  <span>{t('Create Discount Card')}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}