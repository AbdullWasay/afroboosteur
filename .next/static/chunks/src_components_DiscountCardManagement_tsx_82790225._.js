(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/DiscountCardManagement.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DiscountCardManagement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SimplifiedDiscountCardModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SimplifiedDiscountCardModal.tsx [app-client] (ecmascript)");
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
function DiscountCardManagement({ coachId }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [discountCards, setDiscountCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingCard, setEditingCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCard, setSelectedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchCourse, setSearchCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchExpiration, setSearchExpiration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DiscountCardManagement.useEffect": ()=>{
            loadDiscountCards();
        }
    }["DiscountCardManagement.useEffect"], [
        coachId
    ]);
    const loadDiscountCards = async ()=>{
        try {
            setIsLoading(true);
            const response = await fetch(`/api/discount-cards/${coachId}`);
            if (response.ok) {
                const data = await response.json();
                // Handle the API response structure { success: true, discountCards: [...] }
                const cards = data.discountCards || data || [];
                // Map backend properties to frontend interface
                const mappedCards = Array.isArray(cards) ? await Promise.all(cards.map(async (card)=>{
                    let courseName = undefined;
                    // Fetch course name if courseId exists
                    if (card.courseId) {
                        try {
                            const courseResponse = await fetch(`/api/courses/${card.courseId}`);
                            if (courseResponse.ok) {
                                const courseData = await courseResponse.json();
                                courseName = courseData.course?.title || courseData.title;
                            }
                        } catch (error) {
                            console.error('Error fetching course name:', error);
                        }
                    }
                    return {
                        ...card,
                        expiryDate: card.expirationDate || card.expiryDate || new Date().toISOString(),
                        memberEmail: card.userEmail || card.memberEmail,
                        memberName: card.userName || card.memberName,
                        usageCount: typeof card.usageCount === 'number' ? card.usageCount : 0,
                        usageLimit: typeof card.usageLimit === 'number' ? card.usageLimit : typeof card.maxUsage === 'number' ? card.maxUsage : null,
                        discountPercentage: typeof card.discountPercentage === 'number' ? card.discountPercentage : 0,
                        courseName
                    };
                })) : [];
                setDiscountCards(mappedCards);
            } else {
                console.error('Failed to load discount cards:', response.statusText);
                setDiscountCards([]);
            }
        } catch (error) {
            console.error('Error loading discount cards:', error);
            setDiscountCards([]);
        } finally{
            setIsLoading(false);
        }
    };
    const generateQRCode = async (cardCode)=>{
        try {
            const qrCodeDataURL = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toDataURL(cardCode, {
                width: 300,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            });
            return qrCodeDataURL;
        } catch (error) {
            console.error('Error generating QR code:', error);
            throw error;
        }
    };
    const handleCreateCard = async (cardData)=>{
        try {
            const response = await fetch('/api/discount-cards/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    coachId,
                    title: `${cardData.discountPercentage}% Discount Card`,
                    description: cardData.description,
                    discountPercentage: cardData.discountPercentage,
                    userEmail: cardData.memberEmail,
                    courseId: cardData.courseId,
                    cardType: cardData.cardType,
                    expirationDate: cardData.expirationDate,
                    maxUsage: cardData.maxUsage
                })
            });
            if (response.ok) {
                const data = await response.json();
                // Handle the API response structure { success: true, discountCard: {...} }
                const newCard = data.discountCard || data;
                // Map backend properties to frontend interface
                const mappedCard = {
                    ...newCard,
                    expiryDate: newCard.expirationDate || newCard.expiryDate || new Date().toISOString(),
                    memberEmail: newCard.userEmail || newCard.memberEmail,
                    memberName: newCard.userName || newCard.memberName,
                    usageCount: typeof newCard.usageCount === 'number' ? newCard.usageCount : 0,
                    usageLimit: typeof newCard.usageLimit === 'number' ? newCard.usageLimit : typeof newCard.maxUsage === 'number' ? newCard.maxUsage : null,
                    discountPercentage: typeof newCard.discountPercentage === 'number' ? newCard.discountPercentage : 0
                };
                setDiscountCards((prev)=>[
                        mappedCard,
                        ...prev
                    ]);
                setShowCreateModal(false);
            } else {
                const error = await response.json();
                alert(error.message || t('Error creating discount card'));
            }
        } catch (error) {
            console.error('Error creating discount card:', error);
            alert(t('Error creating discount card'));
        }
    };
    const handleDeactivateCard = async (cardId)=>{
        if (!confirm(t('Are you sure you want to deactivate this discount card?'))) {
            return;
        }
        try {
            const response = await fetch(`/api/discount-cards/${coachId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cardId,
                    isActive: false
                })
            });
            if (response.ok) {
                setDiscountCards((prev)=>prev.map((card)=>card.id === cardId ? {
                            ...card,
                            isActive: false
                        } : card));
            } else {
                alert(t('Error deactivating discount card'));
            }
        } catch (error) {
            console.error('Error deactivating discount card:', error);
            alert(t('Error deactivating discount card'));
        }
    };
    const handleEditCard = (card)=>{
        // Only allow editing if card is not used
        const usageCount = typeof card.usageCount === 'number' ? card.usageCount : 0;
        if (usageCount > 0) {
            alert(t('Cannot edit a discount card that has been used'));
            return;
        }
        setEditingCard(card);
        setShowCreateModal(true);
    };
    const handleDuplicateCard = async (card)=>{
        if (!confirm(t('Are you sure you want to duplicate this discount card?'))) {
            return;
        }
        setDuplicatingCardId(card.id);
        try {
            // Generate new unique code following the same format as the API
            // Format: {COACHNAME}{percentage}{timestamp}
            const coachName = card.coachName || 'COACH';
            const cleanName = coachName.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 4);
            const timestamp = Date.now().toString().slice(-6);
            const randomSuffix = Math.random().toString(36).substring(2, 5).toUpperCase();
            const newCode = `${cleanName}${card.discountPercentage || 10}${timestamp}${randomSuffix}`;
            // Generate new QR code with the new unique code (this ensures QR is different)
            const qrCodeImage = await generateQRCode(newCode);
            // Prepare duplicate card data - API will create with new code, but we'll send our generated one
            const duplicateData = {
                coachId: card.coachId,
                title: card.title,
                description: card.description || '',
                discountPercentage: card.discountPercentage,
                userEmail: card.memberEmail || card.userEmail,
                courseId: card.courseId,
                cardType: card.cardType || 'student',
                expirationDate: card.expiryDate || card.expirationDate || new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                maxUsage: card.usageLimit || card.maxUsage || 1,
                code: newCode,
                qrCodeImage: qrCodeImage // Send the new QR code
            };
            // Create the duplicate via API
            const response = await fetch('/api/discount-cards/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(duplicateData)
            });
            if (response.ok) {
                const data = await response.json();
                const newCard = data.discountCard || data;
                // Map backend properties to frontend interface
                const mappedCard = {
                    ...newCard,
                    expiryDate: newCard.expirationDate || newCard.expiryDate || new Date().toISOString(),
                    memberEmail: newCard.userEmail || newCard.memberEmail,
                    memberName: newCard.userName || newCard.memberName,
                    usageCount: typeof newCard.usageCount === 'number' ? newCard.usageCount : 0,
                    usageLimit: typeof newCard.usageLimit === 'number' ? newCard.usageLimit : typeof newCard.maxUsage === 'number' ? newCard.maxUsage : null,
                    discountPercentage: typeof newCard.discountPercentage === 'number' ? newCard.discountPercentage : 0
                };
                setDiscountCards((prev)=>[
                        mappedCard,
                        ...prev
                    ]);
                alert(t('Discount card duplicated successfully!'));
            } else {
                const error = await response.json();
                alert(t('Error duplicating discount card: {{message}}', {
                    message: error.message || error.error || 'Unknown error'
                }));
            }
        } catch (error) {
            console.error('Error duplicating discount card:', error);
            alert(t('Error duplicating discount card. Please try again.'));
        } finally{
            setDuplicatingCardId(null);
        }
    };
    const handleUpdateCard = async (cardData)=>{
        if (!editingCard) return;
        try {
            // Map the new format to the old format for API compatibility
            const discountPercentage = cardData.advantageType === 'percentage_discount' ? cardData.value || 0 : editingCard.discountPercentage || 0;
            const response = await fetch(`/api/discount-cards/${coachId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cardId: editingCard.id,
                    title: editingCard.title,
                    description: cardData.description || '',
                    expirationDate: cardData.expirationDate,
                    userEmail: cardData.userEmail,
                    courseId: cardData.courseId,
                    discountPercentage: discountPercentage,
                    recurringSchedule: cardData.recurringSchedule
                })
            });
            if (response.ok) {
                await loadDiscountCards(); // Reload to get updated data
                setShowCreateModal(false);
                setEditingCard(null);
                alert(t('Discount card updated successfully!'));
            } else {
                const error = await response.json();
                alert(t('Error updating discount card: {{message}}', {
                    message: error.message || error.error || 'Unknown error'
                }));
            }
        } catch (error) {
            console.error('Error updating discount card:', error);
            alert(t('Error updating discount card. Please try again.'));
        }
    };
    const handleDeleteCard = async (cardId)=>{
        if (!confirm(t('Do you really want to permanently delete this card?'))) {
            return;
        }
        try {
            const response = await fetch(`/api/discount-cards/${coachId}?cardId=${cardId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setDiscountCards((prev)=>prev.filter((card)=>card.id !== cardId));
            } else {
                const error = await response.json();
                alert(t('Error deleting discount card: {{message}}', {
                    message: error.message || 'Unknown error'
                }));
            }
        } catch (error) {
            console.error('Error deleting discount card:', error);
            alert(t('Error deleting discount card. Please try again.'));
        }
    };
    const copyCardCode = (code)=>{
        navigator.clipboard.writeText(code);
        alert(t('Discount card code copied to clipboard'));
    };
    const downloadQRCode = (card)=>{
        if (!card.qrCodeImage) {
            alert(t('QR Code not available'));
            return;
        }
        const link = document.createElement('a');
        link.href = card.qrCodeImage;
        link.download = `discount-card-qr-${card.memberName || 'user'}-${card.discountPercentage}%.png`;
        link.click();
    };
    const downloadCompleteCard = (card)=>{
        if (!card.qrCodeImage) {
            alert(t('QR Code not available'));
            return;
        }
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // Set canvas size for card (standard credit card ratio 3.375:2.125)
        canvas.width = 540;
        canvas.height = 340;
        // Create gradient background using site colors
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#D91CD2'); // Primary site color
        gradient.addColorStop(0.5, '#E91E63'); // Pink variant
        gradient.addColorStop(1, '#1f2937'); // Dark gray
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Add elegant border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);
        // Inner border for premium look
        ctx.strokeStyle = '#D91CD2';
        ctx.lineWidth = 1;
        ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);
        // Title with localized text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 26px Arial, sans-serif';
        ctx.textAlign = 'center';
        const discountCardTitle = t('💳 AFROBOOST DISCOUNT CARD');
        ctx.fillText(discountCardTitle, canvas.width / 2, 45);
        // Discount percentage with enhanced styling and localized text
        ctx.font = 'bold 44px Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#D91CD2';
        ctx.lineWidth = 2;
        const discountText = `${card.discountPercentage}% ${t('OFF')}`;
        ctx.strokeText(discountText, canvas.width / 2, 95);
        ctx.fillText(discountText, canvas.width / 2, 95);
        // Add QR code with proper positioning
        const qrImg = document.createElement('img');
        qrImg.onload = ()=>{
            // QR code positioned in bottom left
            ctx.drawImage(qrImg, 25, 200, 100, 100);
            // Card details on the right side with better layout
            ctx.fillStyle = '#ffffff';
            ctx.font = '16px Arial, sans-serif';
            ctx.textAlign = 'left';
            let yPos = 135;
            const leftMargin = 50;
            const rightMargin = 140;
            const maxWidth = canvas.width - rightMargin - leftMargin;
            // Card code with localized label
            ctx.font = 'bold 18px Arial, sans-serif';
            ctx.fillText(`${t('Code')}: ${card.code}`, leftMargin, yPos);
            yPos += 25;
            // Member name with localized label
            if (card.memberName && card.memberName.trim()) {
                ctx.font = '16px Arial, sans-serif';
                ctx.fillText(`${t('For')}: ${card.memberName}`, leftMargin, yPos);
                yPos += 25;
            }
            // Description with proper text wrapping
            if (card.description && card.description.trim()) {
                ctx.font = '14px Arial, sans-serif';
                const words = card.description.split(' ');
                let line = '';
                let lineHeight = 18;
                for (let word of words){
                    const testLine = line + word + ' ';
                    const metrics = ctx.measureText(testLine);
                    if (metrics.width > maxWidth && line !== '') {
                        ctx.fillText(line.trim(), leftMargin, yPos);
                        line = word + ' ';
                        yPos += lineHeight;
                        // Prevent text overflow
                        if (yPos > 185) break;
                    } else {
                        line = testLine;
                    }
                }
                if (line.trim() && yPos <= 185) {
                    ctx.fillText(line.trim(), leftMargin, yPos);
                    yPos += 20;
                }
            }
            // Expiration date with localized label
            ctx.font = '14px Arial, sans-serif';
            if (yPos <= 185) {
                ctx.fillText(`${t('Expires')}: ${new Date(card.expiryDate).toLocaleDateString()}`, leftMargin, yPos);
                yPos += 18;
            }
            // Usage count with localized label
            if (yPos <= 185) {
                const usageCount = typeof card.usageCount === 'number' ? card.usageCount : 0;
                const usageLimit = card.usageLimit === undefined || card.usageLimit === null || card.usageLimit === -1 ? '∞' : typeof card.usageLimit === 'number' ? card.usageLimit : '∞';
                ctx.fillText(`${t('Usage')}: ${usageCount}/${usageLimit}`, leftMargin, yPos);
                yPos += 18;
            }
            // Status with localized text
            if (yPos <= 185) {
                if (card.isActive) {
                    ctx.fillStyle = '#90EE90'; // Light green for active cards
                    ctx.fillText(`${t('Status')}: ${t('Active & Ready to Use')}`, leftMargin, yPos);
                } else {
                    ctx.fillStyle = '#ffcccb'; // Light red for inactive cards
                    ctx.fillText(`${t('Status')}: ${t('Inactive')}`, leftMargin, yPos);
                }
            }
            // QR Code label with localized text
            ctx.fillStyle = '#ffffff';
            ctx.font = '12px Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(t('Scan QR Code'), 75, 315);
            // Footer with site branding
            ctx.fillStyle = '#ffffff';
            ctx.font = '12px Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('AfroBoost - Dance Your Way to Success', canvas.width / 2, canvas.height - 15);
            // Download the complete card
            canvas.toBlob((blob)=>{
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `afroboost-discount-card-${card.memberName || 'user'}-${card.discountPercentage}%.png`;
                    link.click();
                    URL.revokeObjectURL(url);
                }
            });
        };
        qrImg.src = card.qrCodeImage;
    };
    const shareQRCode = async (card)=>{
        if (!card.qrCodeImage) {
            alert(t('QR Code not available'));
            return;
        }
        if (navigator.share) {
            try {
                // Convert base64 to blob for sharing
                const response = await fetch(card.qrCodeImage);
                const blob = await response.blob();
                const file = new File([
                    blob
                ], `discount-card-${card.code}.png`, {
                    type: 'image/png'
                });
                await navigator.share({
                    title: t('Discount Card'),
                    text: t('Here is your {{percentage}}% discount card!', {
                        percentage: card.discountPercentage
                    }),
                    files: [
                        file
                    ]
                });
            } catch (error) {
                console.error('Error sharing:', error);
                // Fallback to copying code
                copyCardCode(card.code);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            copyCardCode(card.code);
        }
    };
    const shareFullCard = async (card)=>{
        const cardDetails = `🎫 DISCOUNT CARD 🎫
💰 ${card.discountPercentage}% OFF
📧 For: ${card.memberName || card.memberEmail || 'Guest'}
📅 Expires: ${new Date(card.expiryDate).toLocaleDateString()}
🎟️ Code: ${card.code}
📖 ${card.description || 'Special discount card'}
🔢 Usage: ${typeof card.usageCount === 'number' ? card.usageCount : 0}/${card.usageLimit === undefined || card.usageLimit === null || card.usageLimit === -1 ? '∞' : typeof card.usageLimit === 'number' ? card.usageLimit : '∞'}`;
        if (navigator.share) {
            try {
                // Try to share with QR code if available
                if (card.qrCodeImage) {
                    const response = await fetch(card.qrCodeImage);
                    const blob = await response.blob();
                    const file = new File([
                        blob
                    ], `discount-card-${card.code}.png`, {
                        type: 'image/png'
                    });
                    await navigator.share({
                        title: t('{{percentage}}% Discount Card', {
                            percentage: card.discountPercentage
                        }),
                        text: cardDetails,
                        files: [
                            file
                        ]
                    });
                } else {
                    await navigator.share({
                        title: t('{{percentage}}% Discount Card', {
                            percentage: card.discountPercentage
                        }),
                        text: cardDetails
                    });
                }
            } catch (error) {
                console.error('Error sharing full card:', error);
                // Fallback to copying details
                navigator.clipboard.writeText(cardDetails);
                alert(t('Card details copied to clipboard'));
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(cardDetails);
            alert(t('Card details copied to clipboard'));
        }
    };
    const getFilteredCards = ()=>{
        const now = new Date();
        // Ensure discountCards is an array before filtering
        const cardsArray = Array.isArray(discountCards) ? discountCards : [];
        return cardsArray.filter((card)=>{
            try {
                const isExpired = card.expiryDate ? new Date(card.expiryDate) < now : false;
                const usageCount = typeof card.usageCount === 'number' ? card.usageCount : 0;
                const usageLimit = typeof card.usageLimit === 'number' ? card.usageLimit : null;
                const isUsedUp = usageLimit ? usageCount >= usageLimit : false;
                const lowerSearch = searchTerm.trim().toLowerCase();
                if (lowerSearch) {
                    const name = (card.memberName || '').toLowerCase();
                    const email = (card.memberEmail || '').toLowerCase();
                    const code = (card.code || '').toLowerCase();
                    const courseName = (card.courseName || '').toLowerCase();
                    const matchesSearch = name.includes(lowerSearch) || email.includes(lowerSearch) || code.includes(lowerSearch) || courseName.includes(lowerSearch);
                    if (!matchesSearch) return false;
                }
                switch(filter){
                    case 'active':
                        return card.isActive && !isExpired && !isUsedUp;
                    case 'expired':
                        return isExpired;
                    case 'used':
                        return isUsedUp;
                    default:
                        return true;
                }
            } catch (error) {
                console.warn('Error filtering card:', card, error);
                return true; // Include card by default if there's an error
            }
        });
    };
    const getCardStatus = (card)=>{
        try {
            const now = new Date();
            const isExpired = card.expiryDate ? new Date(card.expiryDate) < now : false;
            const usageCount = typeof card.usageCount === 'number' ? card.usageCount : 0;
            const usageLimit = typeof card.usageLimit === 'number' ? card.usageLimit : null;
            const isUsedUp = usageLimit ? usageCount >= usageLimit : false;
            if (!card.isActive) return {
                status: 'deactivated',
                color: 'text-gray-400',
                bg: 'bg-gray-800'
            };
            if (isExpired) return {
                status: 'expired',
                color: 'text-red-400',
                bg: 'bg-red-900/20'
            };
            if (isUsedUp) return {
                status: 'used up',
                color: 'text-orange-400',
                bg: 'bg-orange-900/20'
            };
            return {
                status: 'active',
                color: 'text-green-400',
                bg: 'bg-green-900/20'
            };
        } catch (error) {
            console.warn('Error getting card status:', card, error);
            return {
                status: 'unknown',
                color: 'text-gray-400',
                bg: 'bg-gray-800'
            };
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                lineNumber: 709,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/DiscountCardManagement.tsx",
            lineNumber: 708,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-white",
                                children: t('Discount Cards Management')
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                lineNumber: 719,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-2",
                                children: t('Create and manage discount cards for your students')
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowCreateModal(true),
                        className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                lineNumber: 728,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('Create Discount Card')
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                lineNumber: 729,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 724,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                lineNumber: 717,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.02
                        },
                        className: "bg-gray-800 rounded-xl p-6 border border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: t('Total Cards')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 741,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-white",
                                            children: Array.isArray(discountCards) ? discountCards.length : 0
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 742,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 740,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPercent"], {
                                    className: "text-purple-400",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 744,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                            lineNumber: 739,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.02
                        },
                        className: "bg-gray-800 rounded-xl p-6 border border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: t('Active Cards')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 754,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-green-400",
                                            children: getFilteredCards().filter((card)=>{
                                                try {
                                                    return getCardStatus(card).status === 'active';
                                                } catch  {
                                                    return false;
                                                }
                                            }).length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 755,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 753,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                                    className: "text-green-400",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 765,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                            lineNumber: 752,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 748,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.02
                        },
                        className: "bg-gray-800 rounded-xl p-6 border border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: t('Total Uses')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 775,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-blue-400",
                                            children: Array.isArray(discountCards) ? discountCards.reduce((sum, card)=>{
                                                const usageCount = typeof card.usageCount === 'number' ? card.usageCount : 0;
                                                return sum + usageCount;
                                            }, 0) : 0
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 776,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 774,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                    className: "text-blue-400",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 783,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                            lineNumber: 773,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 769,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.02
                        },
                        className: "bg-gray-800 rounded-xl p-6 border border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: t('Expired Cards')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 793,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-red-400",
                                            children: getFilteredCards().filter((card)=>{
                                                try {
                                                    return getCardStatus(card).status === 'expired';
                                                } catch  {
                                                    return false;
                                                }
                                            }).length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 794,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 792,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
                                    className: "text-red-400",
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 804,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                            lineNumber: 791,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 787,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                lineNumber: 734,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center md:justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 814,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    placeholder: t('Search by name, email or code') || 'Search by name, email or code',
                                    className: "w-full pl-9 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 815,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                            lineNumber: 813,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 812,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-1 bg-gray-800 rounded-lg p-1",
                        children: [
                            {
                                key: 'all',
                                label: t('All Cards')
                            },
                            {
                                key: 'active',
                                label: t('Active')
                            },
                            {
                                key: 'expired',
                                label: t('Expired')
                            },
                            {
                                key: 'used',
                                label: t('Used Up')
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter(tab.key),
                                className: `flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${filter === tab.key ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`,
                                children: tab.label
                            }, tab.key, false, {
                                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                lineNumber: 833,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 826,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                lineNumber: 810,
                columnNumber: 7
            }, this),
            getFilteredCards().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPercent"], {
                        className: "text-gray-600 text-6xl mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 851,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-400 mb-2",
                        children: t('No discount cards found')
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 852,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mb-6",
                        children: filter === 'all' ? t('Create your first discount card to get started') : t('No cards match the current filter')
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 855,
                        columnNumber: 11
                    }, this),
                    filter === 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowCreateModal(true),
                        className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200",
                        children: t('Create First Discount Card')
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 862,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                lineNumber: 850,
                columnNumber: 9
            }, this) : /* Unified Grid Layout for All Screen Sizes */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-1",
                children: getFilteredCards().map((card)=>{
                    const status = getCardStatus(card);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.01
                        },
                        className: "bg-gray-800 rounded-xl border border-gray-700 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPercent"], {
                                                className: "text-white",
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                lineNumber: 885,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 884,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white break-words",
                                                    children: [
                                                        card.discountPercentage,
                                                        "% ",
                                                        t('Discount Card')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 888,
                                                    columnNumber: 23
                                                }, this),
                                                card.courseName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-purple-400 mt-1",
                                                    children: card.courseName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-1 rounded-full text-xs font-medium ${status.color} ${status.bg}`,
                                                            children: t(status.status)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 897,
                                                            columnNumber: 25
                                                        }, this),
                                                        card.memberName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-sm break-words",
                                                            children: [
                                                                t('for'),
                                                                " ",
                                                                card.memberName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 901,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 887,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 883,
                                    columnNumber: 19
                                }, this),
                                card.qrCodeImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 mx-auto mb-2 bg-white rounded-lg p-2 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: card.qrCodeImage,
                                                alt: `QR Code for discount card ${card.code}`,
                                                width: 80,
                                                height: 80,
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                lineNumber: 913,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 912,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-xs font-mono break-all",
                                            children: card.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 921,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 911,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 mb-4",
                                    children: [
                                        card.courseId && card.courseName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm",
                                                    children: t('Course')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 929,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-sm break-words",
                                                    children: card.courseName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 930,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 928,
                                            columnNumber: 23
                                        }, this),
                                        card.memberEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm",
                                                    children: t('Member Email')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 935,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-sm break-words",
                                                    children: card.memberEmail
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 936,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 934,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm",
                                                            children: t('Expiration Date')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 941,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white text-sm",
                                                            children: new Date(card.expiryDate).toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm",
                                                            children: t('Usage')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 947,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white text-sm",
                                                            children: [
                                                                typeof card.usageCount === 'number' ? card.usageCount : 0,
                                                                " / ",
                                                                card.usageLimit === undefined || card.usageLimit === null || card.usageLimit === -1 ? '∞' : typeof card.usageLimit === 'number' ? card.usageLimit : '∞'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 948,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 939,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm",
                                                    children: t('Created')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-sm",
                                                    children: new Date(card.createdAt).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 959,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 926,
                                    columnNumber: 19
                                }, this),
                                card.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: t('Description')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 969,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white text-sm break-words",
                                            children: card.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 970,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 968,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mb-2",
                                            children: t('Card Code')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 975,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-gray-900 px-3 py-2 rounded text-white font-mono text-sm break-all flex-1",
                                                    children: card.code
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 977,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>copyCardCode(card.code),
                                                    className: "p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0",
                                                    title: t('Copy code'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                        lineNumber: 985,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 980,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 976,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 974,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>downloadQRCode(card),
                                                    className: "flex items-center justify-center space-x-1.5 px-2 sm:px-3 py-2.5 text-blue-400 hover:text-blue-300 transition-colors bg-gray-700 hover:bg-blue-500/10 rounded-lg text-xs sm:text-sm min-h-[40px]",
                                                    title: t('Download QR Code Only'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiDownload"], {
                                                            size: 18,
                                                            className: "flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 999,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('QR')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1000,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 994,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>shareQRCode(card),
                                                    className: "flex items-center justify-center space-x-1.5 px-2 sm:px-3 py-2.5 text-green-400 hover:text-green-300 transition-colors bg-gray-700 hover:bg-green-500/10 rounded-lg text-xs sm:text-sm min-h-[40px]",
                                                    title: t('Share QR Code'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShare2"], {
                                                            size: 18,
                                                            className: "flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('Share')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 1003,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>downloadCompleteCard(card),
                                                    className: "flex items-center justify-center space-x-1.5 px-2 sm:px-3 py-2.5 text-purple-400 hover:text-purple-300 transition-colors bg-gray-700 hover:bg-purple-500/10 rounded-lg text-xs sm:text-sm min-h-[40px]",
                                                    title: t('Download Complete Card'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCreditCard"], {
                                                            size: 18,
                                                            className: "flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1017,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('Card')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 1012,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>copyCardCode(card.code),
                                                    className: "flex items-center justify-center space-x-1.5 px-2 sm:px-3 py-2.5 text-yellow-400 hover:text-yellow-300 transition-colors bg-gray-700 hover:bg-yellow-500/10 rounded-lg text-xs sm:text-sm min-h-[40px]",
                                                    title: t('Copy Code'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                            size: 18,
                                                            className: "flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1026,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('Copy')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1027,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 993,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                            children: [
                                                (()=>{
                                                    const usageCount = typeof card.usageCount === 'number' ? card.usageCount : 0;
                                                    if (usageCount === 0) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleEditCard(card),
                                                            className: "flex items-center justify-center space-x-1.5 px-2 sm:px-3 py-2.5 text-blue-400 hover:text-blue-300 transition-colors bg-gray-700 hover:bg-blue-500/10 rounded-lg text-xs sm:text-sm min-h-[40px]",
                                                            title: t('Edit Card'),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                                    lineNumber: 1043,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hidden sm:inline",
                                                                    children: t('Edit')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                                    lineNumber: 1044,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1038,
                                                            columnNumber: 29
                                                        }, this);
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-h-[40px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 32
                                                    }, this); // Empty div to maintain grid layout
                                                })(),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDuplicateCard(card),
                                                    disabled: duplicatingCardId === card.id,
                                                    className: "flex items-center justify-center space-x-1.5 px-2 sm:px-3 py-2.5 text-indigo-400 hover:text-indigo-300 transition-colors bg-gray-700 hover:bg-indigo-500/10 rounded-lg text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed min-h-[40px]",
                                                    title: t('Duplicate Card'),
                                                    children: [
                                                        duplicatingCardId === card.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1059,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                            size: 18,
                                                            className: "flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1061,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('Duplicate')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1063,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 1052,
                                                    columnNumber: 23
                                                }, this),
                                                card.isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeactivateCard(card.id),
                                                    className: "flex items-center justify-center space-x-1.5 px-2 sm:px-3 py-2.5 text-orange-400 hover:text-orange-300 transition-colors bg-gray-700 hover:bg-orange-500/10 rounded-lg text-xs sm:text-sm min-h-[40px]",
                                                    title: t('Deactivate card'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {
                                                            size: 18,
                                                            className: "flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1072,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('Deactivate')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1073,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 1067,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-h-[40px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 25
                                                }, this) // Empty div to maintain grid layout
                                                ,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteCard(card.id),
                                                    className: "flex items-center justify-center space-x-1.5 px-2 sm:px-3 py-2.5 text-red-400 hover:text-red-300 transition-colors bg-gray-700 hover:bg-red-500/10 rounded-lg text-xs sm:text-sm min-h-[40px]",
                                                    title: t('Delete Permanently'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                            size: 18,
                                                            className: "flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1084,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: t('Delete')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                            lineNumber: 1085,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                            lineNumber: 1032,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscountCardManagement.tsx",
                                    lineNumber: 991,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiscountCardManagement.tsx",
                            lineNumber: 881,
                            columnNumber: 17
                        }, this)
                    }, card.id, false, {
                        fileName: "[project]/src/components/DiscountCardManagement.tsx",
                        lineNumber: 876,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                lineNumber: 872,
                columnNumber: 9
            }, this),
            (showCreateModal || editingCard) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SimplifiedDiscountCardModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>{
                    setShowCreateModal(false);
                    setEditingCard(null);
                },
                onSubmit: editingCard ? handleUpdateCard : handleCreateCard,
                coachId: coachId,
                editingCard: editingCard || undefined
            }, void 0, false, {
                fileName: "[project]/src/components/DiscountCardManagement.tsx",
                lineNumber: 1098,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DiscountCardManagement.tsx",
        lineNumber: 715,
        columnNumber: 5
    }, this);
}
_s(DiscountCardManagement, "ZIdp8sMb6e9qef2nJAWtVaoGJJE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = DiscountCardManagement;
var _c;
__turbopack_context__.k.register(_c, "DiscountCardManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_DiscountCardManagement_tsx_82790225._.js.map