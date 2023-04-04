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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorModeContext\": () => (/* binding */ ColorModeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _public_assets_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/styles/globals.scss */ \"./public/assets/styles/globals.scss\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n\n\n\n\n\nconst ColorModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    toggleColorMode: ()=>{}\n});\nconst getDesignTokens = (mode)=>({\n        typography: {\n            fontFamily: `\"KumbhSans-Regular\", Arial`\n        },\n        components: {\n            MuiContainer: {\n                styleOverrides: {\n                    root: {\n                        padding: 0,\n                        margin: 0,\n                        backgroundColor: mode === \"light\" ? \"#FFF\" : \"#000\"\n                    }\n                }\n            },\n            MuiTypography: {\n                styleOverrides: {\n                    root: {\n                        padding: 0\n                    }\n                }\n            },\n            MuiButton: {\n                styleOverrides: {\n                    root: {\n                        backgroundColor: \"#5964E0\",\n                        color: \"#FFF\"\n                    }\n                }\n            },\n            MuiAvatar: {\n                styleOverrides: {\n                    root: {\n                        position: \"relative\",\n                        top: -40,\n                        zIndex: 2,\n                        borderRadius: 20\n                    },\n                    img: {\n                        objectFit: \"contain\",\n                        height: \"initial\"\n                    }\n                }\n            }\n        },\n        palette: {\n            mode,\n            ...mode === \"light\" ? {\n                primary: {\n                    main: \"#5964E0\"\n                },\n                divider: \"#5964E0\",\n                background: {\n                    default: \"#FFF\",\n                    paper: \"#FFF\"\n                },\n                text: {\n                    primary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900],\n                    secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[800]\n                }\n            } : {\n                primary: {\n                    main: \"#5964E0\"\n                },\n                divider: \"5964E0\",\n                background: {\n                    default: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900],\n                    paper: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900]\n                },\n                text: {\n                    primary: \"#fff\",\n                    secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[500]\n                }\n            }\n        }\n    });\nconst MyApp = ({ Component , pageProps  })=>{\n    const { 0: mode , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            // The dark mode switch would invoke this method\n            toggleColorMode: ()=>{\n                setMode((prevMode)=>prevMode === \"light\" ? \"dark\" : \"light\");\n            }\n        }), []);\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)(getDesignTokens(mode)), [\n        mode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeContext.Provider, {\n        value: colorMode,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/sovena/Документы/sites/FMChallenge---Devjobs-web-app/pages/_app.js\",\n                lineNumber: 96,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/sovena/Документы/sites/FMChallenge---Devjobs-web-app/pages/_app.js\",\n            lineNumber: 95,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sovena/Документы/sites/FMChallenge---Devjobs-web-app/pages/_app.js\",\n        lineNumber: 94,\n        columnNumber: 13\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJO0tBQUMsQ0FBQztJQUVyRSxxQkFBUSw4REFBQ0gsZ0JBQWdCLENBQUN3QyxRQUFRO1FBQUNDLEtBQUssRUFBRUosU0FBUztrQkFDL0MsNEVBQUN4QywrREFBYTtZQUFDMEMsS0FBSyxFQUFFQSxLQUFLO3NCQUMvQiw0RUFBQ0wsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ1o7Ozs7O2lCQUNZLENBQUM7QUFDL0IsQ0FBQztBQUNELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2am9icy13ZWItYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VNZW1vLCBjcmVhdGVDb250ZXh0fSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCB7IGdyZXkgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBDb2xvck1vZGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IHRvZ2dsZUNvbG9yTW9kZTogKCkgPT4ge30gfSk7XG5cbiAgY29uc3QgZ2V0RGVzaWduVG9rZW5zID0gKG1vZGUpID0+ICh7XG4gICAgdHlwb2dyYXBoeToge1xuICAgICAgZm9udEZhbWlseTogYFwiS3VtYmhTYW5zLVJlZ3VsYXJcIiwgQXJpYWxgXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBNdWlDb250YWluZXI6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICByb290OiB7XG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlID09PSBcImxpZ2h0XCI/IFwiI0ZGRlwiOiBcIiMwMDBcIix9fVxuICAgICAgfSxcbiAgICAgIE11aVR5cG9ncmFwaHk6IHtcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICByb290OiB7XG4gICAgICAgICAgcGFkZGluZzogMH19XG4gICAgICB9LFxuICAgICAgTXVpQnV0dG9uOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiM1OTY0RTBcIixcbiAgICAgICAgICBjb2xvcjogXCIjRkZGXCJ9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgTXVpQXZhdGFyOiB7XG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgcm9vdDp7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgdG9wOiAtNDAsXG4gICAgICAgICAgICB6SW5kZXg6MixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjB9LFxuICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgIGhlaWdodDogXCJpbml0aWFsXCIsXG4gICAgICAgICAgfX1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYWxldHRlOiB7XG4gICAgICBtb2RlLFxuICAgICAgLi4uKG1vZGUgPT09ICdsaWdodCdcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBwcmltYXJ5OlxuICAgICAgICAgICAge21haW46XCIjNTk2NEUwXCJ9LFxuICAgICAgICAgICAgZGl2aWRlcjogXCIjNTk2NEUwXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwiI0ZGRlwiLFxuICAgICAgICAgICAgICBwYXBlcjogIFwiI0ZGRlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgcHJpbWFyeTogZ3JleVs5MDBdLFxuICAgICAgICAgICAgICBzZWNvbmRhcnk6IGdyZXlbODAwXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIHByaW1hcnk6IFxuICAgICAgICAgICAge21haW46IFwiIzU5NjRFMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXZpZGVyOiBcIjU5NjRFMFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBncmV5WzkwMF0sXG4gICAgICAgICAgICAgIHBhcGVyOiBncmV5WzkwMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBwcmltYXJ5OiAnI2ZmZicsXG4gICAgICAgICAgICAgIHNlY29uZGFyeTogZ3JleVs1MDBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICB9LFxuICB9KTtcbiAgXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbmNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuY29uc3QgY29sb3JNb2RlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgLy8gVGhlIGRhcmsgbW9kZSBzd2l0Y2ggd291bGQgaW52b2tlIHRoaXMgbWV0aG9kXG4gICAgICB0b2dnbGVDb2xvck1vZGU6ICgpID0+IHtcbiAgICAgICAgc2V0TW9kZSgocHJldk1vZGUpID0+XG4gICAgICAgICAgcHJldk1vZGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pLFxuICAgIFtdLFxuICApO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlTWVtbygoKSA9PiBjcmVhdGVUaGVtZShnZXREZXNpZ25Ub2tlbnMobW9kZSkpLCBbbW9kZV0pO1xuXG4gICAgcmV0dXJuICg8Q29sb3JNb2RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29sb3JNb2RlfT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ29sb3JNb2RlQ29udGV4dC5Qcm92aWRlcj4pXG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJjcmVhdGVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwiZ3JleSIsIkNvbG9yTW9kZUNvbnRleHQiLCJ0b2dnbGVDb2xvck1vZGUiLCJnZXREZXNpZ25Ub2tlbnMiLCJtb2RlIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJjb21wb25lbnRzIiwiTXVpQ29udGFpbmVyIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwicGFkZGluZyIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsIk11aVR5cG9ncmFwaHkiLCJNdWlCdXR0b24iLCJjb2xvciIsIk11aUF2YXRhciIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4IiwiYm9yZGVyUmFkaXVzIiwiaW1nIiwib2JqZWN0Rml0IiwiaGVpZ2h0IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZGl2aWRlciIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXRNb2RlIiwiY29sb3JNb2RlIiwicHJldk1vZGUiLCJ0aGVtZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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