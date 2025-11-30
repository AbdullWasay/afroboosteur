module.exports = {

"[project]/src/components/GiftCardManagement.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GiftCardManagement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode/lib/index.js [app-ssr] (ecmascript)");
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
function GiftCardManagement({ className = '', userType }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [giftCards, setGiftCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCard, setSelectedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    // Form state
    const [cardForm, setCardForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        amount: '',
        description: '',
        expirationDays: '365',
        expirationMethod: 'preset',
        customExpirationDate: '',
        customTimeUnit: 'days',
        customTimeValue: '1',
        sendViaEmail: false,
        recipientEmail: ''
    });
    const [generatingQR, setGeneratingQR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [duplicatingCardId, setDuplicatingCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const statusFilters = [
        {
            value: 'all',
            label: t('All Cards')
        },
        {
            value: 'active',
            label: t('Active')
        },
        {
            value: 'used',
            label: t('Used')
        },
        {
            value: 'expired',
            label: t('Expired')
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user) {
            loadGiftCards();
            loadTransactions();
        }
    }, [
        user
    ]);
    const loadGiftCards = async ()=>{
        if (!user) return;
        setIsLoading(true);
        try {
            const response = await fetch(`/api/gift-cards?issuerId=${user.id}&issuerType=${userType}`);
            if (response.ok) {
                const data = await response.json();
                setGiftCards(data.giftCards || []);
            }
        } catch (error) {
            console.error('Error loading gift cards:', error);
        } finally{
            setIsLoading(false);
        }
    };
    const loadTransactions = async ()=>{
        if (!user) return;
        try {
            const response = await fetch(`/api/gift-cards/transactions?issuerId=${user.id}`);
            if (response.ok) {
                const data = await response.json();
                setTransactions(data.transactions || []);
            }
        } catch (error) {
            console.error('Error loading gift card transactions:', error);
        }
    };
    const generateQRCode = async (cardCode)=>{
        try {
            const qrCodeDataURL = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toDataURL(cardCode, {
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
    const generateCardCode = ()=>{
        const timestamp = Date.now().toString();
        const randomPart = Math.random().toString(36).substring(2, 15);
        const userPart = user?.id.substring(0, 8) || 'unknown';
        return `${userType.toUpperCase()}-${userPart}-${timestamp}-${randomPart}`.toUpperCase();
    };
    const handleCreateCard = async ()=>{
        if (!user || !cardForm.amount) return;
        setGeneratingQR(true);
        try {
            const cardCode = generateCardCode();
            const qrCodeImage = await generateQRCode(cardCode);
            // Calculate expiration date based on method
            let expirationDate = new Date();
            if (cardForm.expirationMethod === 'custom') {
                if (cardForm.customExpirationDate) {
                    // Use exact date
                    expirationDate = new Date(cardForm.customExpirationDate);
                } else {
                    // Use custom time unit and value
                    const timeValue = parseInt(cardForm.customTimeValue);
                    switch(cardForm.customTimeUnit){
                        case 'hours':
                            expirationDate.setHours(expirationDate.getHours() + timeValue);
                            break;
                        case 'days':
                            expirationDate.setDate(expirationDate.getDate() + timeValue);
                            break;
                        case 'weeks':
                            expirationDate.setDate(expirationDate.getDate() + timeValue * 7);
                            break;
                        case 'months':
                            expirationDate.setMonth(expirationDate.getMonth() + timeValue);
                            break;
                    }
                }
            } else {
                // Use preset days
                expirationDate.setDate(expirationDate.getDate() + parseInt(cardForm.expirationDays));
            }
            const cardData = {
                issuerId: user.id,
                issuerType: userType,
                issuerName: `${user.firstName} ${user.lastName}`,
                businessName: userType === 'seller' ? user.businessName || `${user.firstName} ${user.lastName}` : undefined,
                cardCode,
                qrCodeImage,
                amount: parseFloat(cardForm.amount),
                currency: 'CHF',
                description: cardForm.description,
                expirationDate: expirationDate.toISOString(),
                remainingAmount: parseFloat(cardForm.amount)
            };
            const response = await fetch('/api/gift-cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardData)
            });
            if (response.ok) {
                await loadGiftCards();
                setShowCreateModal(false);
                setCardForm({
                    amount: '',
                    description: '',
                    expirationDays: '365',
                    expirationMethod: 'preset',
                    customExpirationDate: '',
                    customTimeUnit: 'days',
                    customTimeValue: '1',
                    sendViaEmail: false,
                    recipientEmail: ''
                });
            }
        } catch (error) {
            console.error('Error creating gift card:', error);
        } finally{
            setGeneratingQR(false);
        }
    };
    const handleDeactivateCard = async (cardId)=>{
        if (!confirm(t('Are you sure you want to deactivate this gift card?'))) return;
        try {
            const response = await fetch(`/api/gift-cards/${cardId}/deactivate`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    issuerId: user?.id
                })
            });
            if (response.ok) {
                await loadGiftCards();
            }
        } catch (error) {
            console.error('Error deactivating gift card:', error);
        }
    };
    const handleDeleteCard = async (cardId)=>{
        if (!confirm(t('Do you really want to permanently delete this card?'))) return;
        try {
            const response = await fetch(`/api/gift-cards/${cardId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    issuerId: user?.id
                })
            });
            if (response.ok) {
                await loadGiftCards();
            } else {
                const errorData = await response.json();
                alert(t('Error deleting gift card: {{message}}', {
                    message: errorData.message || 'Unknown error'
                }));
            }
        } catch (error) {
            console.error('Error deleting gift card:', error);
            alert(t('Error deleting gift card. Please try again.'));
        }
    };
    const handleEditCard = (card)=>{
        // Only allow editing if card is not used
        if (card.isUsed) {
            alert(t('Cannot edit a gift card that has been used'));
            return;
        }
        setSelectedCard(card);
        // Populate form with card data
        const expirationDate = getDateValue(card.expirationDate);
        const now = new Date();
        const diffTime = expirationDate.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setCardForm({
            amount: card.amount.toString(),
            description: card.description || '',
            expirationDays: diffDays > 0 ? diffDays.toString() : '365',
            expirationMethod: 'preset',
            customExpirationDate: expirationDate.toISOString().slice(0, 16),
            customTimeUnit: 'days',
            customTimeValue: '1',
            sendViaEmail: false,
            recipientEmail: ''
        });
        setShowCreateModal(true);
    };
    const handleDuplicateCard = async (card)=>{
        if (!user) return;
        setDuplicatingCardId(card.id);
        setGeneratingQR(true);
        try {
            // Generate new card code
            const cardCode = generateCardCode();
            const qrCodeImage = await generateQRCode(cardCode);
            // Use same expiration logic as original
            const expirationDate = getDateValue(card.expirationDate);
            const now = new Date();
            const diffTime = expirationDate.getTime() - now.getTime();
            const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
            // Calculate new expiration date
            const newExpirationDate = new Date();
            newExpirationDate.setDate(newExpirationDate.getDate() + diffDays);
            const cardData = {
                issuerId: user.id,
                issuerType: userType,
                issuerName: `${user.firstName} ${user.lastName}`,
                businessName: userType === 'seller' ? user.businessName || `${user.firstName} ${user.lastName}` : undefined,
                cardCode,
                qrCodeImage,
                amount: card.amount,
                currency: card.currency || 'CHF',
                description: card.description,
                expirationDate: newExpirationDate.toISOString(),
                remainingAmount: card.amount
            };
            const response = await fetch('/api/gift-cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardData)
            });
            if (response.ok) {
                await loadGiftCards();
                alert(t('Gift card duplicated successfully!'));
            } else {
                const errorData = await response.json();
                alert(t('Error duplicating gift card: {{message}}', {
                    message: errorData.error || 'Unknown error'
                }));
            }
        } catch (error) {
            console.error('Error duplicating gift card:', error);
            alert(t('Error duplicating gift card. Please try again.'));
        } finally{
            setGeneratingQR(false);
            setDuplicatingCardId(null);
        }
    };
    const handleUpdateCard = async ()=>{
        if (!user || !selectedCard || !cardForm.amount) return;
        // Only allow updating if card is not used
        if (selectedCard.isUsed) {
            alert(t('Cannot update a gift card that has been used'));
            return;
        }
        setGeneratingQR(true);
        try {
            // Calculate expiration date
            let expirationDate = new Date();
            if (cardForm.expirationMethod === 'custom') {
                if (cardForm.customExpirationDate) {
                    expirationDate = new Date(cardForm.customExpirationDate);
                } else {
                    const timeValue = parseInt(cardForm.customTimeValue);
                    switch(cardForm.customTimeUnit){
                        case 'hours':
                            expirationDate.setHours(expirationDate.getHours() + timeValue);
                            break;
                        case 'days':
                            expirationDate.setDate(expirationDate.getDate() + timeValue);
                            break;
                        case 'weeks':
                            expirationDate.setDate(expirationDate.getDate() + timeValue * 7);
                            break;
                        case 'months':
                            expirationDate.setMonth(expirationDate.getMonth() + timeValue);
                            break;
                    }
                }
            } else {
                expirationDate.setDate(expirationDate.getDate() + parseInt(cardForm.expirationDays));
            }
            const response = await fetch(`/api/gift-cards/${selectedCard.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    issuerId: user.id,
                    amount: parseFloat(cardForm.amount),
                    description: cardForm.description,
                    expirationDate: expirationDate.toISOString()
                })
            });
            if (response.ok) {
                await loadGiftCards();
                setShowCreateModal(false);
                setSelectedCard(null);
                setCardForm({
                    amount: '',
                    description: '',
                    expirationDays: '365',
                    expirationMethod: 'preset',
                    customExpirationDate: '',
                    customTimeUnit: 'days',
                    customTimeValue: '1',
                    sendViaEmail: false,
                    recipientEmail: ''
                });
                alert(t('Gift card updated successfully!'));
            } else {
                const errorData = await response.json();
                alert(t('Error updating gift card: {{message}}', {
                    message: errorData.error || 'Unknown error'
                }));
            }
        } catch (error) {
            console.error('Error updating gift card:', error);
            alert(t('Error updating gift card. Please try again.'));
        } finally{
            setGeneratingQR(false);
        }
    };
    const downloadQRCode = (card)=>{
        const link = document.createElement('a');
        link.href = card.qrCodeImage;
        link.download = `gift-card-qr-${card.cardCode}.png`;
        link.click();
    };
    const downloadCompleteCard = (card)=>{
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // Set canvas size for card (standard credit card ratio 3.375:2.125)
        canvas.width = 540;
        canvas.height = 340;
        // Create gradient background using site colors
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#D91CD2'); // Primary site color
        gradient.addColorStop(0.5, '#7B1FA2'); // Purple variant
        gradient.addColorStop(1, '#1f2937'); // Dark gray
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Add elegant border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);
        // Inner border for premium look
        ctx.strokeStyle = '#E91E63';
        ctx.lineWidth = 1;
        ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);
        // Title with localized text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px Arial, sans-serif';
        ctx.textAlign = 'center';
        const giftCardTitle = t('🎁 AFROBOOST GIFT CARD');
        ctx.fillText(giftCardTitle, canvas.width / 2, 45);
        // Amount with enhanced styling
        ctx.font = 'bold 40px Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#D91CD2';
        ctx.lineWidth = 2;
        ctx.strokeText(`${card.amount} ${card.currency}`, canvas.width / 2, 90);
        ctx.fillText(`${card.amount} ${card.currency}`, canvas.width / 2, 90);
        // Add QR code with proper positioning
        const qrImg = document.createElement('img');
        qrImg.onload = ()=>{
            // QR code positioned in bottom left
            ctx.drawImage(qrImg, 25, 200, 100, 100);
            // Card details on the right side with better layout
            ctx.fillStyle = '#ffffff';
            ctx.font = '16px Arial, sans-serif';
            ctx.textAlign = 'left';
            let yPos = 130;
            const leftMargin = 25; // Moved further left to give more space
            const rightMargin = 40; // Reduced right margin
            const maxWidth = canvas.width - rightMargin - leftMargin;
            // Card code with localized label and text wrapping
            ctx.font = 'bold 16px Arial, sans-serif'; // Slightly smaller font
            const codeText = `${t('Code')}: ${card.cardCode}`;
            const codeMetrics = ctx.measureText(codeText);
            // If code text is too long, wrap it to multiple lines
            if (codeMetrics.width > maxWidth) {
                const codeLabel = `${t('Code')}:`;
                ctx.fillText(codeLabel, leftMargin, yPos);
                yPos += 20;
                // Split the card code if it's still too long
                const code = card.cardCode;
                const codeFont = '14px Arial, sans-serif';
                ctx.font = codeFont;
                let codeLine = '';
                let codeChars = code.split('');
                for(let i = 0; i < codeChars.length; i++){
                    const testLine = codeLine + codeChars[i];
                    const testMetrics = ctx.measureText(testLine);
                    if (testMetrics.width > maxWidth && codeLine !== '') {
                        ctx.fillText(codeLine, leftMargin, yPos);
                        codeLine = codeChars[i];
                        yPos += 18;
                    } else {
                        codeLine = testLine;
                    }
                }
                if (codeLine) {
                    ctx.fillText(codeLine, leftMargin, yPos);
                    yPos += 25;
                }
            } else {
                ctx.fillText(codeText, leftMargin, yPos);
                yPos += 30;
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
                        if (yPos > 190) break;
                    } else {
                        line = testLine;
                    }
                }
                if (line.trim() && yPos <= 190) {
                    ctx.fillText(line.trim(), leftMargin, yPos);
                    yPos += 25;
                }
            }
            // Expiration date with localized label
            ctx.font = '14px Arial, sans-serif';
            if (yPos <= 190) {
                ctx.fillText(`${t('Expires')}: ${formatDate(card.expirationDate)}`, leftMargin, yPos);
                yPos += 20;
            }
            // Status with localized text
            if (yPos <= 190) {
                if (card.isUsed) {
                    ctx.fillStyle = '#ffcccb'; // Light red for used cards
                    ctx.fillText(`${t('Used by')}: ${card.usedByName || 'Unknown'}`, leftMargin, yPos);
                    if (card.remainingAmount && yPos + 20 <= 190) {
                        yPos += 20;
                        ctx.fillText(`${t('Remaining')}: ${card.remainingAmount} ${card.currency}`, leftMargin, yPos);
                    }
                } else {
                    ctx.fillStyle = '#90EE90'; // Light green for active cards
                    ctx.fillText(`${t('Status')}: ${t('Active & Ready to Use')}`, leftMargin, yPos);
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
                    link.download = `afroboost-gift-card-${card.cardCode}.png`;
                    link.click();
                    URL.revokeObjectURL(url);
                }
            });
        };
        qrImg.src = card.qrCodeImage;
    };
    const shareQRCode = async (card)=>{
        if (navigator.share) {
            try {
                // Convert base64 to blob for sharing
                const response = await fetch(card.qrCodeImage);
                const blob = await response.blob();
                const file = new File([
                    blob
                ], `gift-card-${card.cardCode}.png`, {
                    type: 'image/png'
                });
                await navigator.share({
                    title: t('Gift Card'),
                    text: t('Here is your gift card worth {{amount}} {{currency}}', {
                        amount: card.amount,
                        currency: card.currency
                    }),
                    files: [
                        file
                    ]
                });
            } catch (error) {
                console.error('Error sharing:', error);
                // Fallback to copying code
                copyCardCode(card.cardCode);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            copyCardCode(card.cardCode);
        }
    };
    const shareFullCard = async (card)=>{
        const cardDetails = `🎁 GIFT CARD 🎁
💰 Value: ${card.amount} ${card.currency}
📅 Expires: ${formatDate(card.expirationDate)}
🎟️ Code: ${card.cardCode}
📖 ${card.description || 'Gift card for AfroBoost services'}
${card.isUsed ? `✅ Used by: ${card.usedByName || 'Unknown'}` : '🟢 Status: Active'}
${card.isUsed ? `📅 Used on: ${formatDate(card.usedAt)}` : ''}
${card.isUsed && card.remainingAmount ? `💳 Remaining: ${card.remainingAmount} ${card.currency}` : ''}`;
        if (navigator.share) {
            try {
                // Try to share with QR code if available
                if (card.qrCodeImage) {
                    const response = await fetch(card.qrCodeImage);
                    const blob = await response.blob();
                    const file = new File([
                        blob
                    ], `gift-card-${card.cardCode}.png`, {
                        type: 'image/png'
                    });
                    await navigator.share({
                        title: t('Gift Card - {{amount}} {{currency}}', {
                            amount: card.amount,
                            currency: card.currency
                        }),
                        text: cardDetails,
                        files: [
                            file
                        ]
                    });
                } else {
                    await navigator.share({
                        title: t('Gift Card - {{amount}} {{currency}}', {
                            amount: card.amount,
                            currency: card.currency
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
    const copyCardCode = (cardCode)=>{
        navigator.clipboard.writeText(cardCode);
        alert(t('Gift card code copied to clipboard'));
    };
    const formatDate = (date)=>{
        try {
            if (!date) return 'N/A';
            if (date && typeof date === 'object' && date.seconds) {
                return new Date(date.seconds * 1000).toLocaleDateString();
            }
            return new Date(date).toLocaleDateString();
        } catch (error) {
            return 'N/A';
        }
    };
    const getDateValue = (date)=>{
        try {
            if (!date) return new Date();
            if (date && typeof date === 'object' && date.seconds) {
                return new Date(date.seconds * 1000);
            }
            return new Date(date);
        } catch (error) {
            return new Date();
        }
    };
    const getStatusColor = (card)=>{
        if (card.isUsed) return 'text-green-400 bg-green-500/20';
        if (!card.isActive) return 'text-red-400 bg-red-500/20';
        if (getDateValue(card.expirationDate) < new Date()) return 'text-orange-400 bg-orange-500/20';
        return 'text-blue-400 bg-blue-500/20';
    };
    const getStatusText = (card)=>{
        if (card.isUsed) return t('Used');
        if (!card.isActive) return t('Deactivated');
        if (getDateValue(card.expirationDate) < new Date()) return t('Expired');
        return t('Active');
    };
    const filteredCards = giftCards.filter((card)=>{
        switch(statusFilter){
            case 'active':
                return card.isActive && !card.isUsed && getDateValue(card.expirationDate) > new Date();
            case 'used':
                return card.isUsed;
            case 'expired':
                return getDateValue(card.expirationDate) < new Date();
            default:
                return true;
        }
    });
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-6 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white",
                                children: t('Gift Cards Management')
                            }, void 0, false, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-1",
                                children: t('Create and manage gift cards for your {{type}}', {
                                    type: userType === 'seller' ? t('products') : t('courses')
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 725,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowCreateModal(true),
                        className: "px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 733,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('Create Gift Card')
                            }, void 0, false, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 734,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 729,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GiftCardManagement.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: statusFilters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStatusFilter(filter.value),
                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${statusFilter === filter.value ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'}`,
                        children: filter.label
                    }, filter.value, false, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 741,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/GiftCardManagement.tsx",
                lineNumber: 739,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 757,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: t('Loading gift cards...')
                    }, void 0, false, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 758,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GiftCardManagement.tsx",
                lineNumber: 756,
                columnNumber: 9
            }, this) : filteredCards.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: filteredCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "p-6 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(card)}`,
                                                children: getStatusText(card)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 773,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                            lineNumber: 772,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-32 h-32 mx-auto mb-3 bg-white rounded-lg p-2 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: card.qrCodeImage,
                                                        alt: `QR Code for ${card.cardCode}`,
                                                        width: 120,
                                                        height: 120,
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm font-mono",
                                                    children: card.cardCode
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                            lineNumber: 779,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-sm",
                                                            children: [
                                                                t('Amount'),
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 795,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl font-bold text-purple-400",
                                                            children: [
                                                                card.amount,
                                                                " ",
                                                                card.currency
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 796,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 794,
                                                    columnNumber: 21
                                                }, this),
                                                card.isUsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-sm",
                                                            children: [
                                                                t('Remaining'),
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 803,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-semibold text-green-400",
                                                            children: [
                                                                card.remainingAmount,
                                                                " ",
                                                                card.currency
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-sm",
                                                            children: [
                                                                t('Expires'),
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 811,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-sm",
                                                            children: formatDate(card.expirationDate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 812,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 21
                                                }, this),
                                                card.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 text-sm",
                                                            children: [
                                                                t('Description'),
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 817,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white text-sm mt-1 break-words overflow-hidden leading-relaxed",
                                                            children: card.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 23
                                                }, this),
                                                card.isUsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-3 border-t border-gray-700 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-400 text-sm flex-shrink-0",
                                                                    children: [
                                                                        t('Used by'),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 827,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-sm text-right break-words ml-2 min-w-0",
                                                                    children: card.usedByName || 'Unknown'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 828,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 826,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: [
                                                                        t('Used on'),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 831,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-sm",
                                                                    children: formatDate(card.usedAt)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 832,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 830,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                            lineNumber: 793,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 pt-4 border-t border-gray-700 space-y-3 sm:space-y-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>downloadQRCode(card),
                                                                className: "flex items-center justify-center px-2 py-2.5 text-blue-400 hover:text-blue-300 transition-colors bg-gray-700 hover:bg-blue-500/10 rounded-lg min-h-[40px]",
                                                                title: t('Download QR Code Only'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiDownload"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 849,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>shareQRCode(card),
                                                                className: "flex items-center justify-center px-2 py-2.5 text-green-400 hover:text-green-300 transition-colors bg-gray-700 hover:bg-green-500/10 rounded-lg min-h-[40px]",
                                                                title: t('Share QR Code'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShare2"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 857,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 852,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>downloadCompleteCard(card),
                                                                className: "flex items-center justify-center px-2 py-2.5 text-purple-400 hover:text-purple-300 transition-colors bg-gray-700 hover:bg-purple-500/10 rounded-lg min-h-[40px]",
                                                                title: t('Download Complete Card'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCreditCard"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>copyCardCode(card.cardCode),
                                                                className: "flex items-center justify-center px-2 py-2.5 text-yellow-400 hover:text-yellow-300 transition-colors bg-gray-700 hover:bg-yellow-500/10 rounded-lg min-h-[40px]",
                                                                title: t('Copy Code'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 873,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 868,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 gap-2",
                                                        children: [
                                                            !card.isUsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEditCard(card),
                                                                className: "flex items-center justify-center px-2 py-2.5 text-blue-400 hover:text-blue-300 transition-colors bg-gray-700 hover:bg-blue-500/10 rounded-lg min-h-[40px]",
                                                                title: t('Edit Card'),
                                                                "aria-label": t('Edit'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEdit3"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 887,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 881,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-h-[40px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 27
                                                            }, this) // Empty div to maintain grid layout
                                                            ,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDuplicateCard(card),
                                                                disabled: generatingQR && duplicatingCardId === card.id,
                                                                className: "flex items-center justify-center px-2 py-2.5 text-indigo-400 hover:text-indigo-300 transition-colors bg-gray-700 hover:bg-indigo-500/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[40px]",
                                                                title: t('Duplicate Card'),
                                                                "aria-label": t('Duplicate'),
                                                                children: generatingQR && duplicatingCardId === card.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 902,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 904,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 894,
                                                                columnNumber: 25
                                                            }, this),
                                                            card.isActive && !card.isUsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeactivateCard(card.id),
                                                                className: "flex items-center justify-center px-2 py-2.5 text-orange-400 hover:text-orange-300 transition-colors bg-gray-700 hover:bg-orange-500/10 rounded-lg min-h-[40px]",
                                                                title: t('Deactivate'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 914,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 909,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-h-[40px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 917,
                                                                columnNumber: 27
                                                            }, this) // Empty div to maintain grid layout
                                                            ,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteCard(card.id),
                                                                className: "flex items-center justify-center px-2 py-2.5 text-red-400 hover:text-red-300 transition-colors bg-gray-700 hover:bg-red-500/10 rounded-lg min-h-[40px]",
                                                                title: t('Delete Permanently'),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                    size: 18,
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 925,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 920,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 878,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 841,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                            lineNumber: 839,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                    lineNumber: 770,
                                    columnNumber: 17
                                }, this)
                            }, card.id, false, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 765,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 763,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-4 overflow-x-auto pb-4 scrollbar-hide",
                                children: filteredCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        className: "flex-shrink-0 w-80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-6 relative h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 right-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(card)}`,
                                                        children: getStatusText(card)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 948,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 947,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-32 h-32 bg-white rounded-lg mx-auto mb-3 p-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: card.qrCodeImage,
                                                                alt: `QR Code for ${card.cardCode}`,
                                                                width: 120,
                                                                height: 120,
                                                                className: "w-full h-full object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 956,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 955,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm font-mono",
                                                            children: card.cardCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 964,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 954,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: [
                                                                        t('Amount'),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 970,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-bold text-purple-400",
                                                                    children: [
                                                                        card.amount,
                                                                        " ",
                                                                        card.currency
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 971,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 23
                                                        }, this),
                                                        card.isUsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: [
                                                                        t('Remaining'),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 978,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-semibold text-green-400",
                                                                    children: [
                                                                        card.remainingAmount,
                                                                        " ",
                                                                        card.currency
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 979,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 977,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: [
                                                                        t('Expires'),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 986,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-sm",
                                                                    children: formatDate(card.expirationDate)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 987,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 23
                                                        }, this),
                                                        card.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: [
                                                                        t('Description'),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 992,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white text-sm mt-1",
                                                                    children: card.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 993,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 991,
                                                            columnNumber: 25
                                                        }, this),
                                                        card.isUsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-3 border-t border-gray-700 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-400 text-sm",
                                                                            children: [
                                                                                t('Used by'),
                                                                                ":"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                            lineNumber: 1000,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white text-sm",
                                                                            children: card.usedByName || 'Unknown'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                            lineNumber: 1001,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 999,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-400 text-sm",
                                                                            children: [
                                                                                t('Used on'),
                                                                                ":"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                            lineNumber: 1004,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white text-sm",
                                                                            children: formatDate(card.usedAt)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                            lineNumber: 1005,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1003,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 998,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 968,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 mt-6 pt-4 border-t border-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>downloadQRCode(card),
                                                                    className: "flex items-center justify-center px-2 py-2.5 text-blue-400 hover:text-blue-300 transition-colors bg-gray-700 hover:bg-blue-500/10 rounded-lg min-h-[40px]",
                                                                    title: t('Download QR Code Only'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiDownload"], {
                                                                        size: 18,
                                                                        className: "flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1020,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1015,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>shareQRCode(card),
                                                                    className: "flex items-center justify-center px-2 py-2.5 text-green-400 hover:text-green-300 transition-colors bg-gray-700 hover:bg-green-500/10 rounded-lg min-h-[40px]",
                                                                    title: t('Share QR Code'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShare2"], {
                                                                        size: 18,
                                                                        className: "flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1028,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1023,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>downloadCompleteCard(card),
                                                                    className: "flex items-center justify-center px-2 py-2.5 text-purple-400 hover:text-purple-300 transition-colors bg-gray-700 hover:bg-purple-500/10 rounded-lg min-h-[40px]",
                                                                    title: t('Download Complete Card'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCreditCard"], {
                                                                        size: 18,
                                                                        className: "flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1036,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1031,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>copyCardCode(card.cardCode),
                                                                    className: "flex items-center justify-center px-2 py-2.5 text-yellow-400 hover:text-yellow-300 transition-colors bg-gray-700 hover:bg-yellow-500/10 rounded-lg min-h-[40px]",
                                                                    title: t('Copy Code'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                                        size: 18,
                                                                        className: "flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1044,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1039,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 1014,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-2",
                                                            children: [
                                                                !card.isUsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleEditCard(card),
                                                                    className: "flex items-center justify-center px-2 py-2.5 text-blue-400 hover:text-blue-300 transition-colors bg-gray-700 hover:bg-blue-500/10 rounded-lg min-h-[40px]",
                                                                    title: t('Edit Card'),
                                                                    "aria-label": t('Edit'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEdit3"], {
                                                                        size: 18,
                                                                        className: "flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1058,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1052,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-h-[40px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1061,
                                                                    columnNumber: 27
                                                                }, this) // Empty div to maintain grid layout
                                                                ,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDuplicateCard(card),
                                                                    disabled: generatingQR && duplicatingCardId === card.id,
                                                                    className: "flex items-center justify-center px-2 py-2.5 text-indigo-400 hover:text-indigo-300 transition-colors bg-gray-700 hover:bg-indigo-500/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[40px]",
                                                                    title: t('Duplicate Card'),
                                                                    "aria-label": t('Duplicate'),
                                                                    children: generatingQR && duplicatingCardId === card.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1073,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCopy"], {
                                                                        size: 18,
                                                                        className: "flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1075,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1065,
                                                                    columnNumber: 25
                                                                }, this),
                                                                card.isActive && !card.isUsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeactivateCard(card.id),
                                                                    className: "flex items-center justify-center px-2 py-2.5 text-orange-400 hover:text-orange-300 transition-colors bg-gray-700 hover:bg-orange-500/10 rounded-lg min-h-[40px]",
                                                                    title: t('Deactivate'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                                                                        size: 18,
                                                                        className: "flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1085,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1080,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-h-[40px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1088,
                                                                    columnNumber: 27
                                                                }, this) // Empty div to maintain grid layout
                                                                ,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteCard(card.id),
                                                                    className: "flex items-center justify-center px-2 py-2.5 text-red-400 hover:text-red-300 transition-colors bg-gray-700 hover:bg-red-500/10 rounded-lg min-h-[40px]",
                                                                    title: t('Delete Permanently'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                        size: 18,
                                                                        className: "flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1096,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                    lineNumber: 1091,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                            lineNumber: 1049,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 1012,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                            lineNumber: 945,
                                            columnNumber: 19
                                        }, this)
                                    }, `mobile-${card.id}`, false, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 939,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 937,
                                columnNumber: 13
                            }, this),
                            filteredCards.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: t('Swipe left to see more cards')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                    lineNumber: 1108,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 1107,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 936,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GiftCardManagement.tsx",
                lineNumber: 761,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCode"], {
                        className: "text-6xl text-gray-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 1115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: statusFilter === 'all' ? t('No gift cards yet') : t('No gift cards with this status')
                    }, void 0, false, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 1116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mb-6",
                        children: statusFilter === 'all' ? t('Create your first gift card to start selling gift cards to your customers.') : t('Try selecting a different status filter.')
                    }, void 0, false, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 1119,
                        columnNumber: 11
                    }, this),
                    statusFilter === 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowCreateModal(true),
                        className: "px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200",
                        children: t('Create Gift Card')
                    }, void 0, false, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 1126,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GiftCardManagement.tsx",
                lineNumber: 1114,
                columnNumber: 9
            }, this),
            showCreateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "bg-gray-900 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-white",
                                        children: selectedCard ? t('Edit Gift Card') : t('Create Gift Card')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowCreateModal(false);
                                            setSelectedCard(null);
                                            setCardForm({
                                                amount: '',
                                                description: '',
                                                expirationDays: '365',
                                                expirationMethod: 'preset',
                                                customExpirationDate: '',
                                                customTimeUnit: 'days',
                                                customTimeValue: '1',
                                                sendViaEmail: false,
                                                recipientEmail: ''
                                            });
                                        },
                                        className: "text-gray-400 hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GiftCardManagement.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1149,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 1145,
                                columnNumber: 15
                            }, this),
                            !selectedCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-2 mb-6 border-b border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCardForm((prev)=>({
                                                    ...prev,
                                                    sendViaEmail: false,
                                                    recipientEmail: ''
                                                })),
                                        className: `px-4 py-2 text-sm font-medium transition-colors border-b-2 ${!cardForm.sendViaEmail ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-400 hover:text-white'}`,
                                        children: t('Create Card')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1174,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCardForm((prev)=>({
                                                    ...prev,
                                                    sendViaEmail: true
                                                })),
                                        className: `px-4 py-2 text-sm font-medium transition-colors border-b-2 ${cardForm.sendViaEmail ? 'border-purple-500 text-purple-400' : 'border-transparent text-gray-400 hover:text-white'}`,
                                        children: t('Create & Send via Email')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1183,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 1173,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    cardForm.sendViaEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: [
                                                    t('Recipient Email'),
                                                    " *"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1199,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: cardForm.recipientEmail || '',
                                                onChange: (e)=>setCardForm((prev)=>({
                                                            ...prev,
                                                            recipientEmail: e.target.value
                                                        })),
                                                className: "w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                placeholder: "recipient@example.com",
                                                required: cardForm.sendViaEmail
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1202,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-1",
                                                children: t('The gift card will be sent to this email address')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1210,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1198,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: [
                                                    t('Amount'),
                                                    " (CHF) *"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1217,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                step: "0.01",
                                                value: cardForm.amount,
                                                onChange: (e)=>setCardForm((prev)=>({
                                                            ...prev,
                                                            amount: e.target.value
                                                        })),
                                                className: "w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                placeholder: "50.00"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1216,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: [
                                                    t('Description'),
                                                    " (",
                                                    t('optional'),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1232,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: cardForm.description,
                                                onChange: (e)=>setCardForm((prev)=>({
                                                            ...prev,
                                                            description: e.target.value
                                                        })),
                                                className: "w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                rows: 3,
                                                placeholder: t('Gift card description...')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1235,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1231,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-300 mb-2",
                                                children: [
                                                    t('Expiration Settings'),
                                                    " *"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                value: "preset",
                                                                checked: cardForm.expirationMethod === 'preset',
                                                                onChange: (e)=>setCardForm((prev)=>({
                                                                            ...prev,
                                                                            expirationMethod: e.target.value
                                                                        })),
                                                                className: "mr-2 text-purple-500 focus:ring-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1252,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white",
                                                                children: t('Preset Options')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1259,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1251,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                value: "custom",
                                                                checked: cardForm.expirationMethod === 'custom',
                                                                onChange: (e)=>setCardForm((prev)=>({
                                                                            ...prev,
                                                                            expirationMethod: e.target.value
                                                                        })),
                                                                className: "mr-2 text-purple-500 focus:ring-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1262,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white",
                                                                children: t('Custom Period')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1269,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1261,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1250,
                                                columnNumber: 19
                                            }, this),
                                            cardForm.expirationMethod === 'preset' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: cardForm.expirationDays,
                                                onChange: (e)=>setCardForm((prev)=>({
                                                            ...prev,
                                                            expirationDays: e.target.value
                                                        })),
                                                className: "w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1",
                                                        children: [
                                                            "1 ",
                                                            t('day')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1280,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "3",
                                                        children: [
                                                            "3 ",
                                                            t('days')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1281,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "7",
                                                        children: [
                                                            "1 ",
                                                            t('week')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1282,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "14",
                                                        children: [
                                                            "2 ",
                                                            t('weeks')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1283,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "30",
                                                        children: [
                                                            "30 ",
                                                            t('days')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1284,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "60",
                                                        children: [
                                                            "60 ",
                                                            t('days')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1285,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "90",
                                                        children: [
                                                            "90 ",
                                                            t('days')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "180",
                                                        children: [
                                                            "180 ",
                                                            t('days')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1287,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "365",
                                                        children: [
                                                            "1 ",
                                                            t('year')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1288,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "730",
                                                        children: [
                                                            "2 ",
                                                            t('years')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1275,
                                                columnNumber: 21
                                            }, this),
                                            cardForm.expirationMethod === 'custom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm text-gray-400 mb-2",
                                                                children: t('Custom Time Period')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1298,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "1",
                                                                        value: cardForm.customTimeValue,
                                                                        onChange: (e)=>setCardForm((prev)=>({
                                                                                    ...prev,
                                                                                    customTimeValue: e.target.value
                                                                                })),
                                                                        className: "flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                                        placeholder: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1302,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: cardForm.customTimeUnit,
                                                                        onChange: (e)=>setCardForm((prev)=>({
                                                                                    ...prev,
                                                                                    customTimeUnit: e.target.value
                                                                                })),
                                                                        className: "px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "hours",
                                                                                children: t('Hours')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                                lineNumber: 1315,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "days",
                                                                                children: t('Days')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                                lineNumber: 1316,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "weeks",
                                                                                children: t('Weeks')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                                lineNumber: 1317,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "months",
                                                                                children: t('Months')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                                lineNumber: 1318,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                        lineNumber: 1310,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1301,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm text-gray-400 mb-2",
                                                                children: t('Or Set Exact Expiration Date')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1325,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "datetime-local",
                                                                value: cardForm.customExpirationDate,
                                                                onChange: (e)=>setCardForm((prev)=>({
                                                                            ...prev,
                                                                            customExpirationDate: e.target.value
                                                                        })),
                                                                className: "w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                                                min: new Date().toISOString().slice(0, 16)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1328,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: t('Leave empty to use the time period above')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                                lineNumber: 1335,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                        lineNumber: 1324,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                lineNumber: 1295,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 1195,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-4 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setShowCreateModal(false);
                                            setSelectedCard(null);
                                            setCardForm({
                                                amount: '',
                                                description: '',
                                                expirationDays: '365',
                                                expirationMethod: 'preset',
                                                customExpirationDate: '',
                                                customTimeUnit: 'days',
                                                customTimeValue: '1',
                                                sendViaEmail: false,
                                                recipientEmail: ''
                                            });
                                        },
                                        className: "px-4 py-2 text-gray-400 hover:text-white transition-colors",
                                        children: t('Cancel')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1345,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: selectedCard ? handleUpdateCard : handleCreateCard,
                                        disabled: !cardForm.amount || generatingQR || cardForm.sendViaEmail && !cardForm.recipientEmail,
                                        className: "px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2",
                                        children: generatingQR ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 1374,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: selectedCard ? t('Updating...') : t('Creating...')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 1375,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCode"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 1379,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: selectedCard ? t('Update') : cardForm.sendViaEmail ? t('Create & Send') : t('Create')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                                                    lineNumber: 1380,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                                        lineNumber: 1366,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GiftCardManagement.tsx",
                                lineNumber: 1344,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GiftCardManagement.tsx",
                        lineNumber: 1144,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/GiftCardManagement.tsx",
                    lineNumber: 1139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GiftCardManagement.tsx",
                lineNumber: 1138,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GiftCardManagement.tsx",
        lineNumber: 720,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_components_GiftCardManagement_tsx_a2729095._.js.map