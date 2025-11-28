module.exports = {

"[project]/src/lib/dateUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDate": (()=>formatDate),
    "formatDateTime": (()=>formatDateTime),
    "formatFullDate": (()=>formatFullDate),
    "isFutureDate": (()=>isFutureDate),
    "isPastDate": (()=>isPastDate),
    "toDate": (()=>toDate)
});
function toDate(dateOrTimestamp) {
    if (dateOrTimestamp instanceof Date) {
        return dateOrTimestamp;
    }
    // Check if it's a Firestore Timestamp
    if (typeof dateOrTimestamp === 'object' && dateOrTimestamp !== null && 'toDate' in dateOrTimestamp && typeof dateOrTimestamp.toDate === 'function') {
        return dateOrTimestamp.toDate();
    }
    // Fallback to creating a new Date
    return new Date(dateOrTimestamp);
}
function formatDate(dateOrTimestamp, locale = 'en-US') {
    const date = toDate(dateOrTimestamp);
    return date.toLocaleDateString(locale);
}
function formatDateTime(dateOrTimestamp, locale = 'en-US') {
    const date = toDate(dateOrTimestamp);
    return date.toLocaleString(locale);
}
function formatFullDate(dateOrTimestamp) {
    const date = toDate(dateOrTimestamp);
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}
function isFutureDate(dateOrTimestamp) {
    const date = toDate(dateOrTimestamp);
    return date > new Date();
}
function isPastDate(dateOrTimestamp) {
    const date = toDate(dateOrTimestamp);
    return date < new Date();
}
}}),

};

//# sourceMappingURL=src_lib_dateUtils_ts_70d5358f._.js.map