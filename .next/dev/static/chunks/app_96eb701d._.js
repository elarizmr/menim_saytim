(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/home/HomeBanners.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const HeroSection = ()=>{
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        days: 68,
        hours: 4,
        minutes: 45,
        seconds: 21
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const timer = setInterval({
                "HeroSection.useEffect.timer": ()=>{
                    setTimeLeft({
                        "HeroSection.useEffect.timer": (prev)=>{
                            let { days, hours, minutes, seconds } = prev;
                            if (seconds > 0) {
                                seconds--;
                            } else {
                                seconds = 59;
                                if (minutes > 0) {
                                    minutes--;
                                } else {
                                    minutes = 59;
                                    if (hours > 0) {
                                        hours--;
                                    } else {
                                        hours = 23;
                                        if (days > 0) {
                                            days--;
                                        }
                                    }
                                }
                            }
                            return {
                                days,
                                hours,
                                minutes,
                                seconds
                            };
                        }
                    }["HeroSection.useEffect.timer"]);
                }
            }["HeroSection.useEffect.timer"], 1000);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(timer)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " py-15 px-4 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-390 mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-[450px_1fr_450px] gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden rounded-3xl group h-[700px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://ew.com/thmb/4lmLC5Ark8X7GwPpaATjk738Xao=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/god-of-war-2018-2000-408387a68b78478aaa52d04b8a99c0a0.jpg",
                                        alt: "God of War Review (2018)",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 61,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/HomeBanners.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-6 right-6 flex flex-col gap-3 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-12 h-12 bg-white rounded-xl text-black flex items-center justify-center hover:bg-[#E60023] hover:text-white transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHeart"], {
                                            className: "text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/HomeBanners.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-12 h-12 bg-white rounded-xl text-black flex items-center justify-center hover:bg-[#E60023] hover:text-white transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZap"], {
                                            className: "text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/HomeBanners.tsx",
                                            lineNumber: 70,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 69,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-12 h-12 bg-white rounded-xl text-black flex items-center justify-center hover:bg-[#E60023] hover:text-white transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {
                                            className: "text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/HomeBanners.tsx",
                                            lineNumber: 73,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/HomeBanners.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 p-8 flex flex-col justify-end h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 bg-[#E60023] rounded-2xl p-4 flex items-center justify-center gap-2 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiZap"], {
                                                className: "text-white text-xl"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 81,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-white font-bold text-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: String(timeLeft.days).padStart(2, '0')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: ":"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: String(timeLeft.hours).padStart(2, '0')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: ":"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: String(timeLeft.minutes).padStart(2, '0')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: ":"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: String(timeLeft.seconds).padStart(2, '0')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 82,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-sm font-medium mb-2",
                                        children: "God of War Deluxe"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 94,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white text-3xl font-bold mb-3",
                                        children: "Pre-Order"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 mb-4",
                                        children: [
                                            [
                                                1,
                                                2,
                                                3
                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 fill-[#E60023]",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, star, false, {
                                                    fileName: "[project]/app/home/HomeBanners.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            [
                                                4,
                                                5
                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 fill-gray-600",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, star, false, {
                                                    fileName: "[project]/app/home/HomeBanners.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-3xl font-bold",
                                                children: "$70.00"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 text-xl line-through ml-2",
                                                children: "$76.00"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-white text-sm font-medium mb-2 block",
                                                children: "Size:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 123,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full bg-black/60 border border-gray-700 text-white rounded-xl px-4 py-3.5 outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "0.2 MB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "0.5 MB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "1.0 MB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "2.0 MB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 124,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full bg-[#E60023] cursor-wait text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#c50020] transition-all duration-300",
                                        children: [
                                            "Preorder Now",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiShoppingCart"], {
                                                className: "text-xl"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 135,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 133,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/HomeBanners.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/HomeBanners.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden rounded-3xl group ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/02a13a101175739.5f18bc1264a3b.png",
                                        alt: "Best Offer",
                                        className: " object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 143,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 148,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/HomeBanners.tsx",
                                lineNumber: 142,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 p-8 flex flex-col justify-end h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white text-5xl font-bold mb-6",
                                        children: "Best Offer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/shop",
                                        className: "bg-[#E60023] text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#c50020] transition-all duration-300 w-fit",
                                        children: [
                                            "Show more",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                className: "text-xl"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 157,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 155,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/HomeBanners.tsx",
                                lineNumber: 151,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/HomeBanners.tsx",
                        lineNumber: 141,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-3xl group h-[337.5px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
                                                alt: "Get all snacks in your Pocket",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 168,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 173,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 p-6 flex flex-col justify-end h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[#E60023] text-white text-sm font-bold py-2 px-4 rounded-lg w-fit mb-4",
                                                children: "20% off"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 177,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white text-2xl font-bold mb-4 leading-tight",
                                                children: "Get all snacks in your Pocket"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 180,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                className: "bg-[#E60023] text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#c50020] transition-all duration-300 w-fit",
                                                children: [
                                                    "Show more",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                        className: "text-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 183,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 176,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/HomeBanners.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-3xl group h-[337.5px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
                                                alt: "Get your earning back shop your needed",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 193,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 198,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 p-6 flex flex-col justify-end h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[#E60023] text-white text-sm font-bold py-2 px-4 rounded-lg w-fit mb-4",
                                                children: "Get Cash back 5%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 202,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white text-2xl font-bold mb-4 leading-tight",
                                                children: "Get your earning back shop your needed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 205,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                className: "bg-[#E60023] text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#c50020] transition-all duration-300 w-fit",
                                                children: [
                                                    "Show more",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                        className: "text-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/home/HomeBanners.tsx",
                                                lineNumber: 208,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/HomeBanners.tsx",
                                        lineNumber: 201,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/HomeBanners.tsx",
                                lineNumber: 191,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/HomeBanners.tsx",
                        lineNumber: 163,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/HomeBanners.tsx",
                lineNumber: 50,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/home/HomeBanners.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/home/HomeBanners.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroSection, "fKNDSjdMwfZd8keR0Q154Mrsqa4=");
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/utils/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiCall",
    ()=>apiCall,
    "fetchWithAuth",
    ()=>fetchWithAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function fetchWithAuth(url, options = {}) {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(url, {
        ...options,
        headers: {
            ...headers,
            ...typeof options.headers === 'object' && options.headers !== null ? options.headers : {}
        }
    });
    return response;
}
async function apiCall(endpoint, options = {}) {
    const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
    const url = `${API_URL}${endpoint}`;
    return fetchWithAuth(url, options);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useAuth() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            const storedToken = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');
            if (storedToken) {
                setToken(storedToken);
            }
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    console.error('Failed to parse user from localStorage:', error);
                }
            }
            setLoading(false);
        }
    }["useAuth.useEffect"], []);
    const logout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    };
    const isAuthenticated = !!token && !!user;
    return {
        user,
        token,
        loading,
        logout,
        isAuthenticated
    };
}
_s(useAuth, "uAkFQMmIUxfxJcQTEb8tCM/KFt4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/ShopPart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContsxt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/CartContsxt.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const LatestArrivals = ()=>{
    _s();
    const [games, setGames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allGames, setAllGames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [addingId, setAddingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { token: hookToken, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { updateCartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContsxt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [localToken, setLocalToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LatestArrivals.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userInfo = localStorage.getItem('userInfo');
                if (userInfo) {
                    try {
                        const parsedUser = JSON.parse(userInfo);
                        if (parsedUser.token) setLocalToken(parsedUser.token);
                    } catch (err) {
                        console.error("UserInfo parse error", err);
                    }
                }
            }
        }
    }["LatestArrivals.useEffect"], []);
    const activeToken = hookToken || localToken;
    const userIsAuthenticated = !!activeToken || isAuthenticated;
    const addToCartHandler = async (game)=>{
        if (!userIsAuthenticated) {
            alert("Səbətə məhsul atmaq üçün zəhmət olmasa giriş edin!");
            return;
        }
        try {
            setAddingId(game._id);
            const res = await fetch('http://localhost:5001/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${activeToken}`
                },
                body: JSON.stringify({
                    productId: game._id,
                    quantity: 1
                })
            });
            if (res.ok) {
                alert(`✅ "${game.name}" səbətə əlavə olundu!`);
                updateCartCount();
                window.location.reload();
            } else {
                const data = await res.json();
                alert(data.message || "Xəta baş verdi");
            }
        } catch (error) {
            console.error("Cart Error:", error);
            alert("Serverlə əlaqə kəsildi");
        } finally{
            setAddingId(null);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LatestArrivals.useEffect": ()=>{
            const fetchGames = {
                "LatestArrivals.useEffect.fetchGames": async ()=>{
                    try {
                        setLoading(true);
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCall"])('/products');
                        if (!response.ok) {
                            throw new Error('Failed to fetch games');
                        }
                        const data = await response.json();
                        if (Array.isArray(data)) {
                            setAllGames(data);
                            setGames(data);
                            const uniqueCategories = [
                                ...new Set(data.map({
                                    "LatestArrivals.useEffect.fetchGames": (game)=>game.category
                                }["LatestArrivals.useEffect.fetchGames"]))
                            ];
                            setCategories(uniqueCategories);
                        }
                        setError('');
                    } catch (err) {
                        setError(err instanceof Error ? err.message : 'Error fetching games');
                    } finally{
                        setLoading(false);
                    }
                }
            }["LatestArrivals.useEffect.fetchGames"];
            fetchGames();
        }
    }["LatestArrivals.useEffect"], []);
    const handleCategoryFilter = (category)=>{
        setSelectedCategory(category);
        if (category === '') {
            setGames(allGames);
        } else {
            setGames(allGames.filter((game)=>game.category === category));
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-black py-20 min-h-[400px] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-neutral-500 animate-pulse",
                children: "Loading experience..."
            }, void 0, false, {
                fileName: "[project]/app/home/ShopPart.tsx",
                lineNumber: 131,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/home/ShopPart.tsx",
            lineNumber: 130,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-black py-20 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: [
                    "System Error: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/ShopPart.tsx",
                lineNumber: 139,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/home/ShopPart.tsx",
            lineNumber: 138,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black py-16 md:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-390 mx-auto px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-purple-500 font-mono text-sm font-bold tracking-widest uppercase mb-2 block",
                                    children: "Discover"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/ShopPart.tsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold text-white tracking-tighter",
                                    children: "Latest Arrivals"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/ShopPart.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/ShopPart.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleCategoryFilter(''),
                                    className: `px-5 py-2 rounded text-sm font-bold transition-all border ${selectedCategory === '' ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'}`,
                                    children: "ALL"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/ShopPart.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCategoryFilter(category),
                                        className: `px-5 py-2 rounded text-sm font-bold transition-all border ${selectedCategory === category ? 'bg-red-600 text-white border-red-600 shadow-[0_0_15px_rgba(147,51,234,0.5)]' : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'}`,
                                        children: category.toUpperCase()
                                    }, category, false, {
                                        fileName: "[project]/app/home/ShopPart.tsx",
                                        lineNumber: 170,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/ShopPart.tsx",
                            lineNumber: 159,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/home/ShopPart.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: games.length > 0 ? games.slice(0, 4).map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/product/${game._id}`,
                                    className: "block relative h-95 overflow-hidden bg-neutral-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: game.image.startsWith('http') ? game.image : `http://localhost:5001${game.image}`,
                                            alt: game.name,
                                            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                            onError: (e)=>{
                                                e.currentTarget.src = 'https://via.placeholder.com/300x400?text=No+Image';
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/ShopPart.tsx",
                                            lineNumber: 191,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        game.countInStock === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/60 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "border-2 border-red-600 px-4 py-1 text-red-600 font-black rotate-12 uppercase",
                                                children: "Sold Out"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/ShopPart.tsx",
                                                lineNumber: 199,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/ShopPart.tsx",
                                            lineNumber: 198,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/ShopPart.tsx",
                                    lineNumber: 190,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white font-black text-lg uppercase truncate",
                                                    children: game.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/home/ShopPart.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 bg-neutral-900 border border-neutral-700 rounded text-[10px] font-black text-neutral-400 uppercase",
                                                    children: typeof game.brand === 'object' ? game.brand.name : game.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/app/home/ShopPart.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/ShopPart.tsx",
                                            lineNumber: 205,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-black text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600 text-sm align-top mr-0.5",
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/home/ShopPart.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    game.price.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/home/ShopPart.tsx",
                                                lineNumber: 213,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/ShopPart.tsx",
                                            lineNumber: 212,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                addToCartHandler(game);
                                            },
                                            disabled: addingId === game._id || game.countInStock === 0,
                                            className: `w-full relative overflow-hidden group/btn bg-red-600 hover:bg-red-700 text-white font-black text-xs cursor-pointer py-4 px-4 rounded-lg transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] ${addingId === game._id || game.countInStock === 0 ? 'opacity-70 cursor-not-allowed' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10 flex items-center justify-center gap-2 tracking-widest",
                                                    children: addingId === game._id ? 'ADDING...' : 'ADD TO CART'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/home/ShopPart.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:left-full transition-all duration-700 skew-x-12 ease-in-out"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/home/ShopPart.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/ShopPart.tsx",
                                            lineNumber: 219,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/ShopPart.tsx",
                                    lineNumber: 204,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, game._id, true, {
                            fileName: "[project]/app/home/ShopPart.tsx",
                            lineNumber: 188,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-full py-20 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-600 font-mono",
                            children: [
                                "NO DATA_FOUND IN SECTOR ",
                                selectedCategory.toUpperCase()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/ShopPart.tsx",
                            lineNumber: 238,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/ShopPart.tsx",
                        lineNumber: 237,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/home/ShopPart.tsx",
                    lineNumber: 185,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/ShopPart.tsx",
            lineNumber: 146,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/home/ShopPart.tsx",
        lineNumber: 145,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LatestArrivals, "iQRYkqZnlW5fxHWeG0nJCjDtFKo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContsxt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = LatestArrivals;
const __TURBOPACK__default__export__ = LatestArrivals;
var _c;
__turbopack_context__.k.register(_c, "LatestArrivals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/GameCategories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
const BestsellersCategories = ()=>{
    const categories = [
        {
            title: "Racing",
            image: "https://images.hdqwalls.com/wallpapers/bthumb/ferrari-599-forza-horizon-4-4k-cw.jpg"
        },
        {
            title: "Stealth",
            image: "https://images.hdqwalls.com/wallpapers/bthumb/metal-gear-solid-3-4k-ad.jpg"
        },
        {
            title: "Action",
            image: "https://images.hdqwalls.com/wallpapers/bthumb/viper-ning-in-naraka-bladepoint-4y.jpg"
        },
        {
            title: "Adventure",
            image: "https://images.hdqwalls.com/wallpapers/bthumb/horizon-zero-dawn-ps5-4k-bd.jpg"
        },
        {
            title: "Football",
            image: "https://images.hdqwalls.com/wallpapers/bthumb/efootball-2024-1t.jpg"
        },
        {
            title: "Fighting",
            image: "https://images.hdqwalls.com/wallpapers/bthumb/scorpion-mk1-e1.jpg"
        },
        {
            title: "Shooters (FPS/TPS)",
            image: "https://images.hdqwalls.com/wallpapers/bthumb/call-of-duty-modern-warfare-3-game-1w.jpg"
        },
        {
            title: "Horror",
            image: "https://images.hdqwalls.com/wallpapers/bthumb/resident-evil-4-10k-he.jpg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " py-12 px-4 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-390 mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold",
                            children: "Bestsellers Categories"
                        }, void 0, false, {
                            fileName: "[project]/app/home/GameCategories.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "bg-[#E60023] text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 hover:bg-[#c50020] transition-all duration-300 hover:scale-105 shadow-lg",
                            children: [
                                "Show more products",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                    className: "text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/GameCategories.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/GameCategories.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/home/GameCategories.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-3xl group h-[300px] ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: category.image,
                                            alt: category.title,
                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/GameCategories.tsx",
                                            lineNumber: 66,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/GameCategories.tsx",
                                            lineNumber: 71,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/GameCategories.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 p-6 flex flex-col justify-end h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white text-2xl font-bold mb-4",
                                            children: category.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/GameCategories.tsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/shop",
                                            className: "bg-[#E60023] text-white cursor-pointer font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#660011] transition-all duration-300 w-fit group-hover:scale-105",
                                            children: [
                                                "Show more",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                    className: "text-lg group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/home/GameCategories.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/GameCategories.tsx",
                                            lineNumber: 79,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/GameCategories.tsx",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/app/home/GameCategories.tsx",
                            lineNumber: 60,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/home/GameCategories.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/GameCategories.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/home/GameCategories.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BestsellersCategories;
const __TURBOPACK__default__export__ = BestsellersCategories;
var _c;
__turbopack_context__.k.register(_c, "BestsellersCategories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/Partners.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const PartnersSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " py-16 px-4 lg:px-8 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-80 h-50 bg-[#E60023] rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/home/Partners.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-96 h-50 bg-blue-600 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/home/Partners.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/Partners.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-390 mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white text-4xl lg:text-4xl font-bold",
                                children: "We are big family of partners"
                            }, void 0, false, {
                                fileName: "[project]/app/home/Partners.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-3 text-lg",
                                children: "Collaborating with the biggest names in gaming"
                            }, void 0, false, {
                                fileName: "[project]/app/home/Partners.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/Partners.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-[#E60023] transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#E60023] text-4xl font-bold mb-2",
                                        children: "50+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/Partners.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-sm",
                                        children: "Gaming Partners"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/Partners.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/Partners.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-[#E60023] transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#E60023] text-4xl font-bold mb-2",
                                        children: "1M+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/Partners.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-sm",
                                        children: "Happy Gamers"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/Partners.tsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/Partners.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-[#E60023] transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#E60023] text-4xl font-bold mb-2",
                                        children: "500+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/Partners.tsx",
                                        lineNumber: 41,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-sm",
                                        children: "Games Available"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/Partners.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/Partners.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center hover:border-[#E60023] transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[#E60023] text-4xl font-bold mb-2",
                                        children: "24/7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/Partners.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-sm",
                                        children: "Support Available"
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/Partners.tsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/Partners.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/Partners.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/Partners.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/Partners.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PartnersSection;
const __TURBOPACK__default__export__ = PartnersSection;
var _c;
__turbopack_context__.k.register(_c, "PartnersSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/ShopPartBottom.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContsxt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/CartContsxt.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const FeaturedGames = ()=>{
    _s();
    const [games, setGames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [addingId, setAddingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { token: hookToken, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { updateCartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContsxt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [localToken, setLocalToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedGames.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userInfo = localStorage.getItem('userInfo');
                if (userInfo) {
                    try {
                        const parsedUser = JSON.parse(userInfo);
                        if (parsedUser.token) setLocalToken(parsedUser.token);
                    } catch (err) {
                        console.error("UserInfo parse error", err);
                    }
                }
            }
        }
    }["FeaturedGames.useEffect"], []);
    const activeToken = hookToken || localToken;
    const userIsAuthenticated = !!activeToken || isAuthenticated;
    const getImageUrl = (url)=>{
        if (!url) return '';
        if (typeof url === 'object') return '';
        if (url.startsWith('http')) return url;
        return `http://localhost:5001${url}`;
    };
    const addToCartHandler = async (game)=>{
        if (!userIsAuthenticated) {
            alert("Səbətə məhsul atmaq üçün zəhmət olmasa giriş edin!");
            return;
        }
        try {
            setAddingId(game._id);
            const apiUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
            const res = await fetch(`${apiUrl}/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${activeToken}`
                },
                body: JSON.stringify({
                    productId: game._id,
                    quantity: 1
                })
            });
            if (res.ok) {
                alert(`✅ "${game.name}" səbətə əlavə olundu!`);
                updateCartCount();
                window.location.reload();
            } else {
                const data = await res.json();
                alert(data.message || "Xəta baş verdi");
            }
        } catch (error) {
            console.error("Cart Error:", error);
            alert("Serverlə əlaqə kəsildi");
        } finally{
            setAddingId(null);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedGames.useEffect": ()=>{
            const fetchGames = {
                "FeaturedGames.useEffect.fetchGames": async ()=>{
                    try {
                        setLoading(true);
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCall"])('/products');
                        if (!response.ok) throw new Error('Failed to fetch games');
                        const data = await response.json();
                        setGames(data.slice(-10).reverse().slice(0, 4));
                    } catch (err) {
                        setError(err instanceof Error ? err.message : 'Error fetching games');
                    } finally{
                        setLoading(false);
                    }
                }
            }["FeaturedGames.useEffect.fetchGames"];
            fetchGames();
        }
    }["FeaturedGames.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black py-20 text-center text-red-600 font-bold animate-pulse",
        children: "LOADING..."
    }, void 0, false, {
        fileName: "[project]/app/home/ShopPartBottom.tsx",
        lineNumber: 112,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                children: games.map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group relative bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/product/${game._id}`,
                                className: "block relative h-95 overflow-hidden bg-neutral-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: getImageUrl(game.image),
                                        alt: game.name,
                                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                        onError: (e)=>{
                                            e.currentTarget.src = 'https://via.placeholder.com/300x400?text=No+Image';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/ShopPartBottom.tsx",
                                        lineNumber: 123,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    game.countInStock === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/60 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "border-2 border-red-600 px-4 py-1 text-red-600 font-black rotate-12 uppercase",
                                            children: "Sold Out"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/ShopPartBottom.tsx",
                                            lineNumber: 131,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/ShopPartBottom.tsx",
                                        lineNumber: 130,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/ShopPartBottom.tsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white font-black text-lg uppercase truncate",
                                                children: game.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/ShopPartBottom.tsx",
                                                lineNumber: 138,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-0.5 bg-neutral-900 border border-neutral-700 rounded text-[10px] font-black text-neutral-400 uppercase",
                                                children: game.brand
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/ShopPartBottom.tsx",
                                                lineNumber: 139,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/ShopPartBottom.tsx",
                                        lineNumber: 137,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-black text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-600 text-sm align-top mr-0.5",
                                                    children: "$"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/home/ShopPartBottom.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                game.price.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/ShopPartBottom.tsx",
                                            lineNumber: 145,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/home/ShopPartBottom.tsx",
                                        lineNumber: 144,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>addToCartHandler(game),
                                        disabled: addingId === game._id || game.countInStock === 0,
                                        className: `w-full relative overflow-hidden cursor-pointer group/btn bg-red-600 hover:bg-red-700 text-white font-black text-xs py-4 px-4 rounded-lg transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] ${addingId === game._id || game.countInStock === 0 ? 'opacity-70 cursor-not-allowed' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 flex items-center justify-center gap-2 tracking-widest",
                                                children: addingId === game._id ? 'ADDING...' : 'ADD TO CART'
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/ShopPartBottom.tsx",
                                                lineNumber: 157,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:left-full transition-all duration-700 skew-x-12 ease-in-out"
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/ShopPartBottom.tsx",
                                                lineNumber: 160,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/home/ShopPartBottom.tsx",
                                        lineNumber: 151,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/home/ShopPartBottom.tsx",
                                lineNumber: 136,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, game._id, true, {
                        fileName: "[project]/app/home/ShopPartBottom.tsx",
                        lineNumber: 119,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/home/ShopPartBottom.tsx",
                lineNumber: 117,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/home/ShopPartBottom.tsx",
            lineNumber: 116,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/home/ShopPartBottom.tsx",
        lineNumber: 115,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeaturedGames, "baNr9WIk6vvpKgb2AUF4ashSJmY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContsxt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = FeaturedGames;
const __TURBOPACK__default__export__ = FeaturedGames;
var _c;
__turbopack_context__.k.register(_c, "FeaturedGames");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/Reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const TestimonialsSection = ()=>{
    const testimonials = [
        {
            rating: 4.5,
            title: "A Gamer's service!",
            content: "A game testimonial is a statement of praise or recommendation for a game, typically written by a gamer who has...",
            author: "GAME SCORE",
            role: "Client",
            game: "Basil Leaves",
            avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA7VBMVEXiHSYAAAD+3mX/yAHVHCUAAwX/0APsICb/5WkfBgn+32jnHyeAEhZAOCGCdDknHgzjxlz90DAJBAgAAAr/ywDuvQpmUA/NogoVEw7+zSQVEgXoy17ptwZ1XAqDaAn+0zpOSCbcrQhUQQ22kA+2oE11ZzNlWC+Rcg//1zHUHiXKHSWfGSBoEBU6DhBiExbBHCRYDxQtCwxNEBN9FRqwHihBDBCyGyAYBAcwDgorJRj/62+OFhzy02JTSi//72g9NSKPfUYjHReij0nUu1rnwTjbtjXtwydmUA26kg9MOg2qhhI7Mgs2KA//1wNKDxYzUmEuAAADsUlEQVR4nO3da1sSQRiA4YUWBUelEJPUzLITIKAiZK2VZefT//85gcqCIMvM7Lsxbs/9qQ/se81z7cYC0eB5AAAAAAAAAAAAAAAAAAAAAAAAMKeU58u4mCU4z/er/sXIWHlerb7fKOVENJr1mue3goOCzLyew6P2cbzA2kFGVudQeGAm06jbBy52S+LrScK+9Rns5ua9dk1Ny8Cq/BWVlLrd883yvNet78S3OodH8163ga7NSay+mveyDbSNC5VS3Xmv2sSyYWHvRh/sn4SHP1sV8Xowb0VmXs+KZaGqNkfvE5tbeRFvBwNX38gMzL9ZtStUx4VrV0BlKythaTcszIsMzGbzdoWqNXajT12h18iku1DVx5+n0lboTdzo01ZYnXi5nbLC4Y0+LM2lrDAYHFQKb/SnIstxpjB8R1E5HdxYZZbjYKHMxRmi0AKFFFJoiEILFFJIoSEKLSRbGOeztshCg4nvzhIsvPt+xVRFqzB/ZjD5Q5KFGXvRhc9sRlJIIYUUUkghha4Uhh+iyxWGIxMuzJV0DP89ZFah1rjrMxMu/Lh1V8O53jnMnuoMu7S1+48Kn+q8G8qfahYayD93qTBLoQUKKaSQwjEUWnCtMONe4VKE89HCqAeGRs+h1gGzxS389CjC5+Hr+szeAx1f1gaP33l5T8bL+7EKN7fvTFd+PPLVqb1yxCND68PCBZ3Ha1j4GrMwYuGOFMY9hxRSSCGFFFIoV/htoXzN7MKyPicKd77tjXp883FhYe7rhoF1FwrH7MwqXDP4v6lrGxGrmFfhi5v/mg2vUhMUzqdwxlVKIYUUUkihRuF/f7fImWy3Mb/C7SfTfP8xq/DnQwNTXuUmXninvDDV7PcWv6cfrDst+UJzt+z9oQUKLVBIIYWGKLRAIYUUGnKwcH3w4ldmOc4UhhvwrBWv/JI5ma4Ueq3MuEq6CpU/sR9k5NdO9LlS6Klm6gsndsJKW6HnddJeqGqFlBf2Eju3pdDme20XiV4wukXy8NYfi+VnbVF+2xb2ty/tBuFG16WijPCD4IrQwGKxYl3Yb6wNz6LMntC5G/4kNdKi0PP8QtRsxwRWm0FL78eepJZN4OSt310dm8DeZXp7tru22uy6Z/zW7yyr55k+Vbsd+84Hln39RK8t++MBpeYf0Xl9R61YP+KhvFbQbBQkHB4ELV8p/7jdEZnXH3nUPq7G/ZWSXuSiUosC1NVSetNE5l2OjJ0nKIm1uNQHAAAAAAAAAAAAAAAAAAAAAJjpLzvUV9ri44uPAAAAAElFTkSuQmCC"
        },
        {
            rating: 4.5,
            title: "A Journey through Gaming",
            content: "When writing a game testimonial, it is important to be honest and to focus on the things that you enjoyed about the...",
            author: "IMDB",
            role: "Client",
            game: "Basil Leaves",
            avatar: "data:image/png;base64,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"
        },
        {
            rating: 4.5,
            title: "My Gaming Triumph",
            content: "It is also important to be respectful when writing a game testimonial. Even if you did not enjoy the game, there is...",
            author: "METACRITIC",
            role: "Client",
            game: "Basil Leaves",
            avatar: "data:image/jpeg;base64,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"
        },
        {
            rating: 4.5,
            title: "Games Changed My Life",
            content: "I was a little hesitant to try this game at first, but I'm so glad I did! It's a lot of fun and the puzzles are really...",
            author: "PC GAMER",
            role: "Client",
            game: "Basil Leaves",
            avatar: "data:image/png;base64,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"
        }
    ];
    const renderStars = (rating)=>{
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        for(let i = 0; i < fullStars; i++){
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-[#E60023]",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                }, void 0, false, {
                    fileName: "[project]/app/home/Reviews.tsx",
                    lineNumber: 53,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, `full-${i}`, false, {
                fileName: "[project]/app/home/Reviews.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)));
        }
        if (hasHalfStar) {
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-[#E60023]",
                viewBox: "0 0 20 20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "half-fill",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#E60023"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/Reviews.tsx",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#d1d5db"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/Reviews.tsx",
                                    lineNumber: 64,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/home/Reviews.tsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/home/Reviews.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "url(#half-fill)",
                        d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    }, void 0, false, {
                        fileName: "[project]/app/home/Reviews.tsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, "half", true, {
                fileName: "[project]/app/home/Reviews.tsx",
                lineNumber: 60,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)));
        }
        const emptyStars = 5 - Math.ceil(rating);
        for(let i = 0; i < emptyStars; i++){
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 fill-gray-300",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                }, void 0, false, {
                    fileName: "[project]/app/home/Reviews.tsx",
                    lineNumber: 76,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, `empty-${i}`, false, {
                fileName: "[project]/app/home/Reviews.tsx",
                lineNumber: 75,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)));
        }
        return stars;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black py-16 px-4 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-390 mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white text-4xl lg:text-4xl font-bold",
                        children: "Official Reviews"
                    }, void 0, false, {
                        fileName: "[project]/app/home/Reviews.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/home/Reviews.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-3xl p-6 hover:shadow-2xl hover:shadow-[#E60023]/20 hover:scale-105 transition-all duration-300 cursor-pointer group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: renderStars(testimonial.rating)
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/Reviews.tsx",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-900 font-bold text-sm ml-2",
                                            children: [
                                                testimonial.rating,
                                                "/5.0"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/Reviews.tsx",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/Reviews.tsx",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-gray-900 text-xl font-bold mb-3 leading-tight",
                                    children: testimonial.title
                                }, void 0, false, {
                                    fileName: "[project]/app/home/Reviews.tsx",
                                    lineNumber: 114,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm leading-relaxed mb-6",
                                    children: testimonial.content
                                }, void 0, false, {
                                    fileName: "[project]/app/home/Reviews.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 pt-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: testimonial.avatar,
                                            alt: testimonial.author,
                                            className: "w-12 h-12 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-[#E60023] transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/Reviews.tsx",
                                            lineNumber: 125,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-900 font-bold text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#E60023]",
                                                            children: testimonial.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/home/Reviews.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        ", ",
                                                        testimonial.role
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/home/Reviews.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs",
                                                    children: [
                                                        "about ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "underline",
                                                            children: testimonial.game
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/home/Reviews.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 47
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/home/Reviews.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/Reviews.tsx",
                                            lineNumber: 130,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/Reviews.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/app/home/Reviews.tsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/home/Reviews.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/Reviews.tsx",
            lineNumber: 86,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/home/Reviews.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TestimonialsSection;
const __TURBOPACK__default__export__ = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home/BlogPart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
const BlogArticlesSection = ()=>{
    const articles = [
        {
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
            category: "Arcade",
            title: "Exposition Arcade Game...",
            excerpt: "Many arcade games have short levels, simple and intuitive control schemes, and rapidly increasing difficulty. The...",
            author: "WorkDo",
            date: "January 30, 2023"
        },
        {
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
            category: "Game",
            title: "Playing Through the Game",
            excerpt: "Arising alongside video game development in the 1980s, the term gameplay was used solely within the...",
            author: "WorkDo",
            date: "January 30, 2023"
        },
        {
            image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80",
            category: "Retro",
            title: "The Game Boy Zone",
            excerpt: "The Game Boy was designed by Nintendo's chief engineer Gunpei Yokoi and its Nintendo R&D1 team....",
            author: "WorkDo",
            date: "January 30, 2023"
        },
        {
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
            category: "Collection",
            title: "Gumballs and Games Ret...",
            excerpt: "The right side of the device offers a port that allows a user to connect to another Game Boy system via a link....",
            author: "WorkDo",
            date: "January 30, 2023"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black py-16 px-4 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-390 mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-white text-4xl lg:text-5xl font-bold mb-6",
                            children: "Blog & Articles"
                        }, void 0, false, {
                            fileName: "[project]/app/home/BlogPart.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-base lg:text-lg max-w-4xl mx-auto leading-relaxed",
                            children: "There is a quality market for groceries. These are folks looking for more than just junk food. They don't shop in the middle of the grocery store. They focus on fresh products on the outside of the store like the meat and produce areas. These folks are interesting in coming to the store 2 or even 3 times each week to get their food."
                        }, void 0, false, {
                            fileName: "[project]/app/home/BlogPart.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/home/BlogPart.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: articles.map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden hover:border-[#E60023] hover:shadow-2xl hover:shadow-[#E60023]/20 transition-all duration-500 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden h-64",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: article.image,
                                            alt: article.title,
                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/BlogPart.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/BlogPart.tsx",
                                            lineNumber: 73,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 left-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[#E60023] text-white text-sm font-bold px-4 py-2 rounded-full",
                                                children: article.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/home/BlogPart.tsx",
                                                lineNumber: 77,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/BlogPart.tsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/BlogPart.tsx",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white text-xl font-bold mb-3 group-hover:text-[#E60023] transition-colors duration-300",
                                            children: article.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/BlogPart.tsx",
                                            lineNumber: 86,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm leading-relaxed mb-6",
                                            children: article.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/app/home/BlogPart.tsx",
                                            lineNumber: 91,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-4 border-t border-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "blog",
                                                    className: "bg-[#E60023] text-white font-bold py-2.5 px-5 rounded-full flex items-center gap-2 hover:bg-[#c50020] transition-all duration-300 group-hover:scale-105",
                                                    children: [
                                                        "Read more",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowRight"], {
                                                            className: "text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/home/BlogPart.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/home/BlogPart.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-bold text-sm",
                                                            children: article.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/home/BlogPart.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-500 text-xs",
                                                            children: article.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/home/BlogPart.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/home/BlogPart.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/home/BlogPart.tsx",
                                            lineNumber: 96,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/home/BlogPart.tsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/app/home/BlogPart.tsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/home/BlogPart.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/home/BlogPart.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/home/BlogPart.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlogArticlesSection;
const __TURBOPACK__default__export__ = BlogArticlesSection;
var _c;
__turbopack_context__.k.register(_c, "BlogArticlesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_96eb701d._.js.map