module.exports = {

"[project]/.next-internal/server/app/api/cloudinary/upload/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/cloudinary/upload/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST),
    "config": (()=>config)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        // Validate Cloudinary configuration
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
        const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY;
        const apiSecret = process.env.NEXT_CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET;
        const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || process.env.CLOUDINARY_UPLOAD_PRESET;
        if (!cloudName) {
            console.error('Cloudinary configuration missing: cloud_name');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Cloudinary configuration missing. Please set CLOUDINARY_CLOUD_NAME environment variable.'
            }, {
                status: 500
            });
        }
        const formData = await request.formData();
        const file = formData.get('file');
        if (!file) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file provided'
            }, {
                status: 400
            });
        }
        // Convert file to buffer and then to base64
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64 = buffer.toString('base64');
        const dataURI = `data:${file.type};base64,${base64}`;
        // Use direct Cloudinary REST API to avoid signature issues
        // This approach works with both upload presets and API credentials
        // Create form data for upload
        const uploadFormData = new URLSearchParams();
        uploadFormData.append('file', dataURI);
        uploadFormData.append('folder', 'afroboosteur');
        uploadFormData.append('resource_type', 'auto');
        // If upload preset is available, use unsigned upload (recommended)
        if (uploadPreset) {
            console.log('Using unsigned upload with upload preset:', uploadPreset);
            uploadFormData.append('upload_preset', uploadPreset);
            // Upload directly to Cloudinary REST API
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: uploadFormData.toString()
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({
                        error: 'Upload failed'
                    }));
                throw new Error(errorData.error?.message || errorData.error || 'Failed to upload to Cloudinary');
            }
            const result = await response.json();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
        }
        // Fallback: Use signed upload with API credentials via direct API
        if (!apiKey || !apiSecret) {
            console.error('Cloudinary configuration missing:', {
                cloudName: !!cloudName,
                apiKey: !!apiKey,
                apiSecret: !!apiSecret,
                uploadPreset: !!uploadPreset
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Cloudinary configuration missing. Please set either CLOUDINARY_UPLOAD_PRESET (recommended) or CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET environment variables.'
            }, {
                status: 500
            });
        }
        console.log('Using signed upload with API key via direct API');
        // For signed uploads, we need to generate a signature
        const crypto = await __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs, async loader)")(__turbopack_context__.i);
        const timestamp = Math.round(new Date().getTime() / 1000);
        const params = {
            timestamp: timestamp.toString(),
            folder: 'afroboosteur'
        };
        // Create signature string
        const signatureString = Object.keys(params).sort().map((key)=>`${key}=${params[key]}`).join('&');
        // Generate signature
        const signature = crypto.createHash('sha1').update(signatureString + apiSecret).digest('hex');
        // Add signature and API key to form data
        uploadFormData.append('timestamp', timestamp.toString());
        uploadFormData.append('signature', signature);
        uploadFormData.append('api_key', apiKey);
        // Upload directly to Cloudinary REST API
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: uploadFormData.toString()
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    error: 'Upload failed'
                }));
            const errorMessage = errorData.error?.message || errorData.error || 'Failed to upload to Cloudinary';
            if (errorMessage.includes('Invalid Signature')) {
                throw new Error('Invalid Cloudinary API credentials. Please verify your CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET match your Cloudinary account. Alternatively, use an unsigned upload preset by setting CLOUDINARY_UPLOAD_PRESET.');
            }
            throw new Error(errorMessage);
        }
        const result = await response.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Error uploading image'
        }, {
            status: 500
        });
    }
}
const config = {
    api: {
        bodyParser: {
            sizeLimit: '150mb'
        }
    }
};
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__09b3e0f6._.js.map