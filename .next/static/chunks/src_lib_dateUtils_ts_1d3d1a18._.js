(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/dateUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_lib_dateUtils_ts_1d3d1a18._.js.map