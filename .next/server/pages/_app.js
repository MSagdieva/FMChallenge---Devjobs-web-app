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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorModeContext\": () => (/* binding */ ColorModeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _public_assets_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/styles/globals.scss */ \"./public/assets/styles/globals.scss\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n\n\n\n\n\nconst ColorModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    toggleColorMode: ()=>{}\n});\nconst getDesignTokens = (mode)=>({\n        typography: {\n            fontFamily: `\"KumbhSans-Regular\", Arial`\n        },\n        palette: {\n            mode,\n            ...mode === \"light\" ? {\n                primary: {\n                    main: \"#F2F2F2\"\n                },\n                divider: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.amber[200],\n                background: {\n                    default: \"#FFF\",\n                    paper: \"#FFF\"\n                },\n                text: {\n                    primary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900],\n                    secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[800]\n                }\n            } : {\n                primary: {\n                    main: \"#FFF000\"\n                },\n                divider: \"#FFF000\",\n                background: {\n                    default: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900],\n                    paper: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[900]\n                },\n                text: {\n                    primary: \"#fff\",\n                    secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__.grey[500]\n                }\n            }\n        }\n    });\nconst MyApp = ({ Component , pageProps  })=>{\n    const { 0: mode , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const colorMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            // The dark mode switch would invoke this method\n            toggleColorMode: ()=>{\n                setMode((prevMode)=>prevMode === \"light\" ? \"dark\" : \"light\");\n            }\n        }), []);\n    const theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)(getDesignTokens(mode)), [\n        mode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeContext.Provider, {\n        value: colorMode,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\_app.js\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\_app.js\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\_app.js\",\n        lineNumber: 61,\n        columnNumber: 13\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUErRDtBQUNqQjtBQUNvQjtBQUNmO0FBRTVDLE1BQU1RLGdCQUFnQixpQkFBR0wsb0RBQWEsQ0FBQztJQUFFTSxlQUFlLEVBQUUsSUFBTSxDQUFDLENBQUM7Q0FBRSxDQUFDLENBQUM7QUFFM0UsTUFBTUMsZUFBZSxHQUFHLENBQUNDLElBQUksR0FBTTtRQUNqQ0MsVUFBVSxFQUFFO1lBQ1ZDLFVBQVUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3pDO1FBQ0RDLE9BQU8sRUFBRTtZQUNQSCxJQUFJO1lBQ0osR0FBSUEsSUFBSSxLQUFLLE9BQU8sR0FDaEI7Z0JBQ0VJLE9BQU8sRUFDUDtvQkFBQ0MsSUFBSSxFQUFDLFNBQVM7aUJBQUM7Z0JBQ2hCQyxPQUFPLEVBQUVYLDREQUFVO2dCQUNuQlksVUFBVSxFQUFFO29CQUNWQyxPQUFPLEVBQUUsTUFBTTtvQkFDZkMsS0FBSyxFQUFHLE1BQU07aUJBQ2Y7Z0JBQ0RDLElBQUksRUFBRTtvQkFDSk4sT0FBTyxFQUFFUiwyREFBUztvQkFDbEJlLFNBQVMsRUFBRWYsMkRBQVM7aUJBQ3JCO2FBQ0YsR0FDRDtnQkFDRVEsT0FBTyxFQUNQO29CQUFDQyxJQUFJLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0NDLE9BQU8sRUFBRSxTQUFTO2dCQUNsQkMsVUFBVSxFQUFFO29CQUNWQyxPQUFPLEVBQUVaLDJEQUFTO29CQUNsQmEsS0FBSyxFQUFFYiwyREFBUztpQkFDakI7Z0JBQ0RjLElBQUksRUFBRTtvQkFDSk4sT0FBTyxFQUFFLE1BQU07b0JBQ2ZPLFNBQVMsRUFBRWYsMkRBQVM7aUJBQ3JCO2FBQ0Y7U0FDTjtLQUNGO0FBRUgsTUFBTWdCLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDNUMsTUFBTSxLQUFDZCxJQUFJLE1BQUVlLE9BQU8sTUFBSXpCLCtDQUFRLENBQUMsT0FBTyxDQUFDO0lBQ3pDLE1BQU0wQixTQUFTLEdBQUd6Qiw4Q0FBTyxDQUNyQixJQUFPO1lBQ0wsZ0RBQWdEO1lBQ2hETyxlQUFlLEVBQUUsSUFBTTtnQkFDckJpQixPQUFPLENBQUMsQ0FBQ0UsUUFBUSxHQUNmQSxRQUFRLEtBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQ3hDLENBQUM7WUFDSixDQUFDO1NBQ0YsR0FDRCxFQUFFLENBQ0g7SUFFRCxNQUFNQyxLQUFLLEdBQUczQiw4Q0FBTyxDQUFDLElBQU1HLGlFQUFXLENBQUNLLGVBQWUsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDQSxJQUFJO0tBQUMsQ0FBQztJQUVyRSxxQkFBUSw4REFBQ0gsZ0JBQWdCLENBQUNzQixRQUFRO1FBQUNDLEtBQUssRUFBRUosU0FBUztrQkFDL0MsNEVBQUN2QiwrREFBYTtZQUFDeUIsS0FBSyxFQUFFQSxLQUFLO3NCQUMvQiw0RUFBQ0wsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ1o7Ozs7O2lCQUNZLENBQUM7QUFDL0IsQ0FBQztBQUNELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2am9icy13ZWItYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VNZW1vLCBjcmVhdGVDb250ZXh0fSAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvZ2xvYmFscy5zY3NzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCB7IGFtYmVyLCBncmV5IH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbG9yTW9kZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgdG9nZ2xlQ29sb3JNb2RlOiAoKSA9PiB7fSB9KTtcclxuXHJcbiAgY29uc3QgZ2V0RGVzaWduVG9rZW5zID0gKG1vZGUpID0+ICh7XHJcbiAgICB0eXBvZ3JhcGh5OiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6IGBcIkt1bWJoU2Fucy1SZWd1bGFyXCIsIEFyaWFsYCxcclxuICAgIH0sXHJcbiAgICBwYWxldHRlOiB7XHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIC4uLihtb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIHByaW1hcnk6XHJcbiAgICAgICAgICAgIHttYWluOlwiI0YyRjJGMlwifSxcclxuICAgICAgICAgICAgZGl2aWRlcjogYW1iZXJbMjAwXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwiI0ZGRlwiLFxyXG4gICAgICAgICAgICAgIHBhcGVyOiAgXCIjRkZGXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICBwcmltYXJ5OiBncmV5WzkwMF0sXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBncmV5WzgwMF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIHByaW1hcnk6IFxyXG4gICAgICAgICAgICB7bWFpbjogXCIjRkZGMDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpdmlkZXI6IFwiI0ZGRjAwMFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICAgIHBhcGVyOiBncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICBwcmltYXJ5OiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBncmV5WzUwMF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG5jb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcclxuY29uc3QgY29sb3JNb2RlID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIFRoZSBkYXJrIG1vZGUgc3dpdGNoIHdvdWxkIGludm9rZSB0aGlzIG1ldGhvZFxyXG4gICAgICB0b2dnbGVDb2xvck1vZGU6ICgpID0+IHtcclxuICAgICAgICBzZXRNb2RlKChwcmV2TW9kZSkgPT5cclxuICAgICAgICAgIHByZXZNb2RlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JyxcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBbXSxcclxuICApO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZU1lbW8oKCkgPT4gY3JlYXRlVGhlbWUoZ2V0RGVzaWduVG9rZW5zKG1vZGUpKSwgW21vZGVdKTtcclxuXHJcbiAgICByZXR1cm4gKDxDb2xvck1vZGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb2xvck1vZGV9PlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L0NvbG9yTW9kZUNvbnRleHQuUHJvdmlkZXI+KVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsImNyZWF0ZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJhbWJlciIsImdyZXkiLCJDb2xvck1vZGVDb250ZXh0IiwidG9nZ2xlQ29sb3JNb2RlIiwiZ2V0RGVzaWduVG9rZW5zIiwibW9kZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZGl2aWRlciIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXRNb2RlIiwiY29sb3JNb2RlIiwicHJldk1vZGUiLCJ0aGVtZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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