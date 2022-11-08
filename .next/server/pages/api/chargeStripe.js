module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/chargeStripe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/chargeStripe.js":
/*!***********************************!*\
  !*** ./pages/api/chargeStripe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(\"sk_test_51LoFubCzea9b9xKEEL2qITPTbS4IB29Buf1T7S5FUZneml6dxVuSOda3cI1nmceDqEo8LLHTlfT7fR5D7IVP8QwI008VCfaAPn\");\n\nasync function handler(req, res) {\n  console.log(req.body);\n\n  if (req.method === \"POST\") {\n    try {\n      // Create Checkout Sessions from body params.\n      const charge = await stripe.charges.create({\n        amount: Math.floor(req.body.data.amount * 100),\n        currency: \"usd\",\n        source: \"tok_amex\",\n        description: `Order ${new Date()} by ${req.body.data.user}`\n      });\n      return res.status(200).json({\n        message: \"Success\",\n        charge\n      });\n    } catch (err) {\n      return res.status(err.statusCode || 500).json(err.message);\n    }\n  } else {\n    res.setHeader(\"Allow\", \"POST\");\n    res.status(405).end(\"Method Not Allowed\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hhcmdlU3RyaXBlLmpzPzVmN2UiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm1ldGhvZCIsImNoYXJnZSIsImNoYXJnZXMiLCJjcmVhdGUiLCJhbW91bnQiLCJNYXRoIiwiZmxvb3IiLCJkYXRhIiwiY3VycmVuY3kiLCJzb3VyY2UiLCJkZXNjcmlwdGlvbiIsIkRhdGUiLCJ1c2VyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnIiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQVAsQ0FBa0IsNkdBQWxCLENBQWY7O0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxJQUFoQjs7QUFDQSxNQUFJSixHQUFHLENBQUNLLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixRQUFJO0FBQ0Y7QUFDQSxZQUFNQyxNQUFNLEdBQUcsTUFBTVQsTUFBTSxDQUFDVSxPQUFQLENBQWVDLE1BQWYsQ0FBc0I7QUFDekNDLGNBQU0sRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdYLEdBQUcsQ0FBQ0ksSUFBSixDQUFTUSxJQUFULENBQWNILE1BQWQsR0FBdUIsR0FBbEMsQ0FEaUM7QUFFekNJLGdCQUFRLEVBQUUsS0FGK0I7QUFHekNDLGNBQU0sRUFBRSxVQUhpQztBQUl6Q0MsbUJBQVcsRUFBRyxTQUFRLElBQUlDLElBQUosRUFBVyxPQUFNaEIsR0FBRyxDQUFDSSxJQUFKLENBQVNRLElBQVQsQ0FBY0ssSUFBSztBQUpqQixPQUF0QixDQUFyQjtBQU9BLGFBQU9oQixHQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLGVBQU8sRUFBRSxTQURpQjtBQUUxQmQ7QUFGMEIsT0FBckIsQ0FBUDtBQUlELEtBYkQsQ0FhRSxPQUFPZSxHQUFQLEVBQVk7QUFDWixhQUFPcEIsR0FBRyxDQUFDaUIsTUFBSixDQUFXRyxHQUFHLENBQUNDLFVBQUosSUFBa0IsR0FBN0IsRUFBa0NILElBQWxDLENBQXVDRSxHQUFHLENBQUNELE9BQTNDLENBQVA7QUFDRDtBQUNGLEdBakJELE1BaUJPO0FBQ0xuQixPQUFHLENBQUNzQixTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBdEIsT0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JNLEdBQWhCLENBQW9CLG9CQUFwQjtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hhcmdlU3RyaXBlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShcInNrX3Rlc3RfNTFMb0Z1YkN6ZWE5Yjl4S0VFTDJxSVRQVGJTNElCMjlCdWYxVDdTNUZVWm5lbWw2ZHhWdVNPZGEzY0kxbm1jZURxRW84TExIVGxmVDdmUjVEN0lWUDhRd0kwMDhWQ2ZhQVBuXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIENyZWF0ZSBDaGVja291dCBTZXNzaW9ucyBmcm9tIGJvZHkgcGFyYW1zLlxuICAgICAgY29uc3QgY2hhcmdlID0gYXdhaXQgc3RyaXBlLmNoYXJnZXMuY3JlYXRlKHtcbiAgICAgICAgYW1vdW50OiBNYXRoLmZsb29yKHJlcS5ib2R5LmRhdGEuYW1vdW50ICogMTAwKSxcbiAgICAgICAgY3VycmVuY3k6IFwidXNkXCIsXG4gICAgICAgIHNvdXJjZTogXCJ0b2tfYW1leFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogYE9yZGVyICR7bmV3IERhdGUoKX0gYnkgJHtyZXEuYm9keS5kYXRhLnVzZXJ9YCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBcIlN1Y2Nlc3NcIixcbiAgICAgICAgY2hhcmdlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgXCJQT1NUXCIpO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoXCJNZXRob2QgTm90IEFsbG93ZWRcIik7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/chargeStripe.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });