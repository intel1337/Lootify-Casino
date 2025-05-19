(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/roulette/roulette.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "button": "roulette-module__JA9vHG__button",
  "container": "roulette-module__JA9vHG__container",
  "errorMessage": "roulette-module__JA9vHG__errorMessage",
  "fadeIn": "roulette-module__JA9vHG__fadeIn",
  "form": "roulette-module__JA9vHG__form",
  "gameContainer": "roulette-module__JA9vHG__gameContainer",
  "input": "roulette-module__JA9vHG__input",
  "inputGroup": "roulette-module__JA9vHG__inputGroup",
  "resultat": "roulette-module__JA9vHG__resultat",
  "title": "roulette-module__JA9vHG__title",
});
}}),
"[project]/src/app/roulette/roulette.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Roulette)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/roulette/roulette.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Roulette() {
    _s();
    const user = {
        id: 1
    };
    const [mise, setMise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [resultat, setResultat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        try {
            const response = await fetch('/api/roulette', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user.id,
                    argent: parseInt(mise)
                })
            });
            const data = await response.json();
            if (response.ok) {
                setResultat({
                    nouveauScore: data.nouveauScore,
                    message: data.message,
                    randomNumber: data.randomNumber
                });
            } else {
                setMessage(data.error || 'Une erreur est survenue');
            }
        } catch (error) {
            setMessage('Erreur de connexion au serveur');
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Roulette"
            }, void 0, false, {
                fileName: "[project]/src/app/roulette/roulette.js",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gameContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "mise",
                                        children: "Votre mise :"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/roulette/roulette.js",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        id: "mise",
                                        value: mise,
                                        onChange: (e)=>setMise(e.target.value),
                                        min: "1",
                                        required: true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        placeholder: "Entrez votre mise"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/roulette/roulette.js",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/roulette/roulette.js",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isLoading || !mise,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                children: isLoading ? 'En cours...' : 'Jouer'
                            }, void 0, false, {
                                fileName: "[project]/src/app/roulette/roulette.js",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/roulette/roulette.js",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/app/roulette/roulette.js",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this),
                    resultat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$roulette$2f$roulette$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultat,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: resultat.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/roulette/roulette.js",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Nombre tiré : ",
                                    resultat.randomNumber
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/roulette/roulette.js",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Nouveau solde : ",
                                    resultat.nouveauScore
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/roulette/roulette.js",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/roulette/roulette.js",
                        lineNumber: 88,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/roulette/roulette.js",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/roulette/roulette.js",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_s(Roulette, "5G9BYxBtKugH1BbGEE1Xb8p2qHA=");
_c = Roulette;
var _c;
__turbopack_context__.k.register(_c, "Roulette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_roulette_68ef53a3._.js.map