"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; },\n/* harmony export */   \"getInfo\": function() { return /* binding */ getInfo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _elements_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/Card */ \"./elements/Card.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Main() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"I AM MAin PAGE!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\main.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Blog, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\main.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\main.js\",\n        lineNumber: 6,\n        columnNumber: 12\n    }, this);\n}\n_c = Main;\nfunction setData(data) {\n    var _this = this;\n    var list = [];\n    data.map(function(post) {\n        console.log(post);\n        list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                info: post\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\main.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\main.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this));\n    });\n    return list;\n}\nfunction Blog() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), posts = ref[0], setPosts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), searchData = ref1[0], setSearchData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getInfo().then(function(result) {\n            setPosts(result);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSearchData(setData(posts));\n    }, [\n        posts\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: searchData\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Вадим\\\\Documents\\\\My Web Sites\\\\FMChallenge---Devjobs-web-app\\\\pages\\\\main.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(Blog, \"XxbwCM5De3nP3Z59jIBYci5a4jM=\");\n_c1 = Blog;\nfunction getInfo() {\n    return _getInfo.apply(this, arguments);\n}\nfunction _getInfo() {\n    _getInfo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var res, posts;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"/data.json\")\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    posts = _state.sent();\n                    return [\n                        2,\n                        posts\n                    ];\n            }\n        });\n    });\n    return _getInfo.apply(this, arguments);\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFpRDtBQUNaO0FBR3RCLFNBQVNJLElBQUksR0FBRztJQUMzQixxQkFBTyw4REFBQ0MsS0FBRzs7MEJBQ1AsOERBQUNDLEdBQUM7MEJBQUMsaUJBQWU7Ozs7O29CQUFJOzBCQUN0Qiw4REFBQ0MsSUFBSTs7OztvQkFBRzs7Ozs7O1lBQ047QUFDUixDQUFDO0FBTHFCSCxLQUFBQSxJQUFJO0FBTzFCLFNBQVNJLE9BQU8sQ0FBQ0MsSUFBSSxFQUFDOztJQUN0QixJQUFNQyxJQUFJLEdBQUcsRUFBRTtJQUNkRCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUc7UUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7UUFDYkYsSUFBSSxDQUFDSyxJQUFJLGVBQ1QsOERBQUNDLElBQUU7c0JBQ0MsNEVBQUNiLHNEQUFLO2dCQUFDYyxJQUFJLEVBQUVMLElBQUk7Ozs7O3FCQUFHOzs7OztpQkFDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0lBQ04sT0FBT0YsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVNILElBQUksR0FBRzs7SUFDZCxJQUEwQk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQmlCLEtBQUssR0FBY2pCLEdBQVksR0FBMUIsRUFBRWtCLFFBQVEsR0FBSWxCLEdBQVksR0FBaEI7SUFDdEIsSUFBb0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBM0NtQixVQUFVLEdBQW1CbkIsSUFBYyxHQUFqQyxFQUFFb0IsYUFBYSxHQUFJcEIsSUFBYyxHQUFsQjtJQUNoQ0MsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZvQixPQUFPLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDLE1BQU0sRUFBRztZQUN6QkwsUUFBUSxDQUFDSyxNQUFNLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUM7SUFBQSxDQUFDLEVBQUMsRUFBRSxDQUFDO0lBQ1h0QixnREFBUyxDQUFDLFdBQUk7UUFDVm1CLGFBQWEsQ0FBQ2IsT0FBTyxDQUFDVSxLQUFLLENBQUMsQ0FDM0IsQ0FBQztJQUNFLENBQUMsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQztJQUduQixxQkFDSSw4REFBQ08sSUFBRTtrQkFDQUwsVUFBVTs7Ozs7WUFDUixDQUNOO0FBQ0wsQ0FBQztHQWxCUWIsSUFBSTtBQUFKQSxNQUFBQSxJQUFJO0FBb0JOLFNBQWVlLE9BQU87V0FBUEEsUUFBTztDQUs1QjtTQUxxQkEsUUFBTztJQUFQQSxRQUFPLEdBQXRCLCtGQUF5QjtZQUN4QkksR0FBRyxFQUNIUixLQUFLOzs7O29CQURDOzt3QkFBTVMsS0FBSyxDQUFDLFlBQVksQ0FBQztzQkFBQTs7b0JBQS9CRCxHQUFHLEdBQUcsYUFBeUI7b0JBQ3ZCOzt3QkFBTUEsR0FBRyxDQUFDRSxJQUFJLEVBQUU7c0JBQUE7O29CQUF4QlYsS0FBSyxHQUFHLGFBQWdCO29CQUU5Qjs7d0JBQU9BLEtBQUs7c0JBQUM7OztJQUNmLENBQUM7V0FMcUJJLFFBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcz9hYTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FyZDEgZnJvbSBcIi4uL2VsZW1lbnRzL0NhcmRcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPHA+SSBBTSBNQWluIFBBR0UhPC9wPlxyXG4gICAgICAgIDxCbG9nIC8+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERhdGEoZGF0YSl7XHJcbiAgY29uc3QgbGlzdCA9IFtdO1xyXG4gICBkYXRhLm1hcCgocG9zdCk9PntcclxuICAgIGNvbnNvbGUubG9nKHBvc3QpXHJcbiAgICAgICAgbGlzdC5wdXNoKFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPENhcmQxIGluZm89e3Bvc3R9Lz4gXHJcbiAgICAgICAgPC9saT4pO1xyXG4gICAgICAgIH0pXHJcbiAgICByZXR1cm4gbGlzdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEJsb2coKSB7XHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWFyY2hEYXRhLCBzZXRTZWFyY2hEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0SW5mbygpLnRoZW4oKHJlc3VsdCk9PntcclxuICAgICAgICBzZXRQb3N0cyhyZXN1bHQpO1xyXG4gICAgICAgIH0pfSxbXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFNlYXJjaERhdGEoc2V0RGF0YShwb3N0cylcclxuICAgICAgICApO1xyXG4gICAgICAgICAgICB9LCBbcG9zdHNdKVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7c2VhcmNoRGF0YX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbmZvKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9kYXRhLmpzb24nKVxyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbiAgICByZXR1cm4gcG9zdHM7XHJcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FyZDEiLCJNYWluIiwiZGl2IiwicCIsIkJsb2ciLCJzZXREYXRhIiwiZGF0YSIsImxpc3QiLCJtYXAiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJsaSIsImluZm8iLCJwb3N0cyIsInNldFBvc3RzIiwic2VhcmNoRGF0YSIsInNldFNlYXJjaERhdGEiLCJnZXRJbmZvIiwidGhlbiIsInJlc3VsdCIsInVsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/main.js\n"));

/***/ })

});