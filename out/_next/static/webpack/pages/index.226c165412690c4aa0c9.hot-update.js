webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart */ \"./components/cart.js\");\n/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dishes */ \"./components/dishes.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/restaurantList */ \"./components/restaurantList.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\nvar _jsxFileName = \"/Users/chris/Bootcamp/Week28/restaurants-app/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\";\n  console.log(\"URL: \".concat(API_URL));\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"HttpLink\"]({\n    uri: \"\".concat(API_URL, \"/graphql\")\n  });\n  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"InMemoryCache\"]();\n  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloClient\"]({\n    link: link,\n    cache: cache\n  });\n  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n    client: client,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"search my-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"h6\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Search your desire restaurant...\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"InputGroup\"], {\n    className: \"mx-auto\",\n    style: {\n      maxWidth: \"600px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"InputGroupText\"], {\n    addontype: \"append\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \" Search \"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n    onChange: function onChange(e) {\n      return setQuery(e.target.value.toLocaleLowerCase());\n    },\n    value: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"my-5\",\n    style: {\n      textAlign: \"center\"\n    },\n    search: query,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Home, \"HYX2QbDDdTtlu7GfoQbAPZOIM6k=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsIm1heFdpZHRoIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBQW5EO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixnQkFBb0JMLE9BQXBCOztBQUZjLGtCQUdZTSxzREFBUSxDQUFDLEVBQUQsQ0FIcEI7QUFBQSxNQUdQQyxLQUhPO0FBQUEsTUFHQUMsUUFIQTs7QUFJZCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUFFQyxPQUFHLFlBQUtYLE9BQUw7QUFBTCxHQUFiLENBQWI7QUFDQSxNQUFNWSxLQUFLLEdBQUcsSUFBSUMsNERBQUosRUFBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUFFTixRQUFJLEVBQUpBLElBQUY7QUFBUUcsU0FBSyxFQUFMQTtBQUFSLEdBQWpCLENBQWY7QUFFQSxTQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQURGLEVBRUUsTUFBQyxxREFBRDtBQUFZLGFBQVMsRUFBQyxTQUF0QjtBQUFnQyxTQUFLLEVBQUU7QUFBRUUsY0FBUSxFQUFFO0FBQVosS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLGdEQUFEO0FBQ0UsWUFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsYUFBT1QsUUFBUSxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxpQkFBZixFQUFELENBQWY7QUFBQSxLQURaO0FBRUUsU0FBSyxFQUFFYixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZGLENBREYsRUFZRSxNQUFDLGtFQUFEO0FBQWdCLGFBQVMsRUFBQyxNQUExQjtBQUFpQyxTQUFLLEVBQUU7QUFBQ2MsZUFBUyxFQUFFO0FBQVosS0FBeEM7QUFBK0QsVUFBTSxFQUFFZCxLQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FERjtBQWlCRDs7R0F6QlFSLEk7O0tBQUFBLEk7QUEwQk1BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGlzaGVzXCI7XG5pbXBvcnQge1xuICBBcG9sbG9Qcm92aWRlcixcbiAgQXBvbGxvQ2xpZW50LFxuICBIdHRwTGluayxcbiAgSW5NZW1vcnlDYWNoZSxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgUmVzdGF1cmFudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3RcIjtcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBUZXh0LCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XG4gIGNvbnNvbGUubG9nKGBVUkw6ICR7QVBJX1VSTH1gKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGAgfSk7XG4gIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7IGxpbmssIGNhY2hlIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoIG15LTVcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U2VhcmNoIHlvdXIgZGVzaXJlIHJlc3RhdXJhbnQuLi48L2g2PlxuICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJteC1hdXRvXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNjAwcHhcIiB9fT5cbiAgICAgICAgICA8SW5wdXRHcm91cFRleHQgYWRkb250eXBlPVwiYXBwZW5kXCI+IFNlYXJjaCA8L0lucHV0R3JvdXBUZXh0PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKX1cbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgIHsvKiA8YnI+PC9icj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxSZXN0YXVyYW50TGlzdCBjbGFzc05hbWU9XCJteS01XCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fSBzZWFyY2g9e3F1ZXJ5fS8+XG4gICAgICBcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})