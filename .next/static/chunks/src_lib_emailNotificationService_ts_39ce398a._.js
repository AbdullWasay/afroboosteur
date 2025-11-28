(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/emailNotificationService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "emailNotificationService": (()=>emailNotificationService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const emailNotificationService = {
    /**
   * Send email notification to user if they have email notifications enabled
   * @param notification - The notification data
   * @param userId - The user ID (optional, can be extracted from notification)
   */ async sendEmailNotification (notification, userId) {
        try {
            const targetUserId = userId || notification.userId;
            const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
            const response = await fetch(`${baseUrl}/api/notifications/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: targetUserId,
                    title: notification.title,
                    message: notification.message,
                    type: notification.type
                })
            });
            if (!response.ok) {
                const error = await response.json();
                console.error('Email notification failed:', error);
                return false;
            }
            const result = await response.json();
            console.log('Email notification sent:', result);
            return true;
        } catch (error) {
            console.error('Error sending email notification:', error);
            return false;
        }
    },
    /**
   * Check if email notifications are configured
   */ async checkEmailConfiguration () {
        try {
            const response = await fetch('/api/notifications/email', {
                method: 'GET'
            });
            if (!response.ok) {
                return false;
            }
            const result = await response.json();
            return result.configured;
        } catch (error) {
            console.error('Error checking email configuration:', error);
            return false;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_lib_emailNotificationService_ts_39ce398a._.js.map