module.exports = {

"[project]/src/lib/emailNotificationService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "emailNotificationService": (()=>emailNotificationService)
});
const emailNotificationService = {
    /**
   * Send email notification to user if they have email notifications enabled
   * @param notification - The notification data
   * @param userId - The user ID (optional, can be extracted from notification)
   */ async sendEmailNotification (notification, userId) {
        try {
            const targetUserId = userId || notification.userId;
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
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
}}),

};

//# sourceMappingURL=src_lib_emailNotificationService_ts_8918560f._.js.map