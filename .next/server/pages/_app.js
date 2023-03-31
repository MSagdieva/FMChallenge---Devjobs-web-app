/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./public/assets/styles/globals.scss":
/*!*******************************************!*\
  !*** ./public/assets/styles/globals.scss ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorModeContext\": () => (/* binding */ ColorModeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _public_assets_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/styles/globals.scss */ \"./public/assets/styles/globals.scss\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n\n\n\n\n\nconst ColorModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    toggleColorMode: ()=>{}\n});\nconst getDesignTokens = (mode)=>({\n        typography: {\n            fontFamily: `\"KumbhSans-Regular\", Arial`\n        },\n        components: {\n            MuiContainer: {\n                styleOverrides: {\n                    root: {\n                        padding: 0,\n                        margin: 0,\n                        backgroundColor: mode === \"light\" ? \"#FFF\" : \"#000\"\n                    }\n                }\n            },\n            MuiTypography: {\n                styleOverrides: {\n                    root: {\n                        padding: 0\n                    }\n                }\n            },\n            MuiButton: {\n                styleOverrides: {\n                    root: {\n                        backgroundColor: \"#5964E0\",\n                        color: \"#FFF\"\n                    }\n                }\n            },\n            MuiAvatar: {\n                styleOverrides: {\n                    root: {\n                        position: \"relative\",\n                        top: -40,\n                        zIndex: 2,\n                        borderRadius: 20\n                    },\n                    img: {\n                        objectFit: \"contain\",\n                        height: \"initial\"\n                    }\n                }\n            }\n        },\n        palette: {\n            mode,\n            ...mode === \"light\" ? {\n                primary: {\n                    main: \"#5964E0\"\n                },\n                divider: \"#5964E0\",\n                background: {\n                    default: \"#FFF\",\n                    paper: \"#FFF\"\n                },\n                text: {\n                    primary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900],\n                    secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[800]\n                }\n            } : {\n                primary: {\n                    main: \"#5964E0\"\n                },\n                divider: \"5964E0\",\n                background: {\n                    default: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900],\n                    paper: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900]\n                },\n                text: {\n                    primary: \"#fff\",\n                    secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[500]\n                }\n            }\n        }\n    });\nconst MyApp = ({ Component , pageProps  })=>{\n    const { 0: mode , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            // The dark mode switch would invoke this method\n            toggleColorMode: ()=>{\n                setMode((prevMode)=>prevMode === \"light\" ? \"dark\" : \"light\");\n            }\n        }), []);\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)(getDesignTokens(mode)), [\n        mode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeContext.Provider, {\n        value: colorMode,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\_app.js\",\n                lineNumber: 96,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\_app.js\",\n            lineNumber: 95,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\_app.js\",\n        lineNumber: 94,\n        columnNumber: 13\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJO0tBQUMsQ0FBQztJQUVyRSxxQkFBUSw4REFBQ0gsZ0JBQWdCLENBQUN3QyxRQUFRO1FBQUNDLEtBQUssRUFBRUosU0FBUztrQkFDL0MsNEVBQUN4QywrREFBYTtZQUFDMEMsS0FBSyxFQUFFQSxLQUFLO3NCQUMvQiw0RUFBQ0wsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ1o7Ozs7O2lCQUNZLENBQUM7QUFDL0IsQ0FBQztBQUNELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2am9icy13ZWItYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VNZW1vLCBjcmVhdGVDb250ZXh0fSAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvZ2xvYmFscy5zY3NzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCB7IGdyZXkgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sb3JNb2RlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyB0b2dnbGVDb2xvck1vZGU6ICgpID0+IHt9IH0pO1xyXG5cclxuICBjb25zdCBnZXREZXNpZ25Ub2tlbnMgPSAobW9kZSkgPT4gKHtcclxuICAgIHR5cG9ncmFwaHk6IHtcclxuICAgICAgZm9udEZhbWlseTogYFwiS3VtYmhTYW5zLVJlZ3VsYXJcIiwgQXJpYWxgXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBNdWlDb250YWluZXI6IHtcclxuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZSA9PT0gXCJsaWdodFwiPyBcIiNGRkZcIjogXCIjMDAwXCIsfX1cclxuICAgICAgfSxcclxuICAgICAgTXVpVHlwb2dyYXBoeToge1xyXG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwfX1cclxuICAgICAgfSxcclxuICAgICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiM1OTY0RTBcIixcclxuICAgICAgICAgIGNvbG9yOiBcIiNGRkZcIn1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBNdWlBdmF0YXI6IHtcclxuICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xyXG4gICAgICAgICAgcm9vdDp7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIHRvcDogLTQwLFxyXG4gICAgICAgICAgICB6SW5kZXg6MixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMH0sXHJcbiAgICAgICAgICBpbWc6IHtcclxuICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcImluaXRpYWxcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBtb2RlLFxyXG4gICAgICAuLi4obW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBwcmltYXJ5OlxyXG4gICAgICAgICAgICB7bWFpbjpcIiM1OTY0RTBcIn0sXHJcbiAgICAgICAgICAgIGRpdmlkZXI6IFwiIzU5NjRFMFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogXCIjRkZGXCIsXHJcbiAgICAgICAgICAgICAgcGFwZXI6ICBcIiNGRkZcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICAgIHByaW1hcnk6IGdyZXlbOTAwXSxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnk6IGdyZXlbODAwXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHtcclxuICAgICAgICAgICAgcHJpbWFyeTogXHJcbiAgICAgICAgICAgIHttYWluOiBcIiM1OTY0RTBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpdmlkZXI6IFwiNTk2NEUwXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgICBkZWZhdWx0OiBncmV5WzkwMF0sXHJcbiAgICAgICAgICAgICAgcGFwZXI6IGdyZXlbOTAwXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICAgIHByaW1hcnk6ICcjZmZmJyxcclxuICAgICAgICAgICAgICBzZWNvbmRhcnk6IGdyZXlbNTAwXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBcclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbmNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xyXG5jb25zdCBjb2xvck1vZGUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gVGhlIGRhcmsgbW9kZSBzd2l0Y2ggd291bGQgaW52b2tlIHRoaXMgbWV0aG9kXHJcbiAgICAgIHRvZ2dsZUNvbG9yTW9kZTogKCkgPT4ge1xyXG4gICAgICAgIHNldE1vZGUoKHByZXZNb2RlKSA9PlxyXG4gICAgICAgICAgcHJldk1vZGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgW10sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VNZW1vKCgpID0+IGNyZWF0ZVRoZW1lKGdldERlc2lnblRva2Vucyhtb2RlKSksIFttb2RlXSk7XHJcblxyXG4gICAgcmV0dXJuICg8Q29sb3JNb2RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29sb3JNb2RlfT5cclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9Db2xvck1vZGVDb250ZXh0LlByb3ZpZGVyPilcclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJjcmVhdGVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwiZ3JleSIsIkNvbG9yTW9kZUNvbnRleHQiLCJ0b2dnbGVDb2xvck1vZGUiLCJnZXREZXNpZ25Ub2tlbnMiLCJtb2RlIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJjb21wb25lbnRzIiwiTXVpQ29udGFpbmVyIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwicGFkZGluZyIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsIk11aVR5cG9ncmFwaHkiLCJNdWlCdXR0b24iLCJjb2xvciIsIk11aUF2YXRhciIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4IiwiYm9yZGVyUmFkaXVzIiwiaW1nIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZGl2aWRlciIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXRNb2RlIiwiY29sb3JNb2RlIiwicHJldk1vZGUiLCJ0aGVtZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();