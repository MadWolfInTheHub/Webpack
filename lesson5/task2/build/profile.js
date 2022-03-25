/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUser\": () => (/* binding */ fetchUser)\n/* harmony export */ });\n// file path: src/profile/gateway.js\n\nasync function fetchUser(userId) {\n    try {\n      const response = await fetch(`https://api.github.com/users/${userId}`);\n      return await response.json();\n    } catch (error) {\n      throw new Error('Failed to get user data');\n    }\n  }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFTztBQUNQO0FBQ0EsbUVBQW1FLE9BQU87QUFDMUU7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMS8uL3NyYy9wcm9maWxlL2dhdGV3YXkuanM/YzIzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIHBhdGg6IHNyYy9wcm9maWxlL2dhdGV3YXkuanNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcih1c2VySWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJJZH1gKTtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB1c2VyIGRhdGEnKTtcbiAgICB9XG4gIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway */ \"./src/profile/gateway.js\");\n/* harmony import */ var _printProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printProfile */ \"./src/profile/printProfile.js\");\n// file path: src/profile/index.js\n\n\n\n\n(0,_gateway__WEBPACK_IMPORTED_MODULE_0__.fetchUser)('github').then(({ name, location }) =>\n  (0,_printProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    name,\n    location,\n  }),\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFc0M7QUFDSTs7QUFFMUMsbURBQVMsbUJBQW1CLGdCQUFnQjtBQUM1QyxFQUFFLHlEQUFZO0FBQ2Q7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2sxLy4vc3JjL3Byb2ZpbGUvaW5kZXguanM/YTY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIHBhdGg6IHNyYy9wcm9maWxlL2luZGV4LmpzXG5cbmltcG9ydCB7IGZldGNoVXNlciB9IGZyb20gJy4vZ2F0ZXdheSc7XG5pbXBvcnQgcHJpbnRQcm9maWxlIGZyb20gJy4vcHJpbnRQcm9maWxlJztcblxuZmV0Y2hVc2VyKCdnaXRodWInKS50aGVuKCh7IG5hbWUsIGxvY2F0aW9uIH0pID0+XG4gIHByaW50UHJvZmlsZSh7XG4gICAgbmFtZSxcbiAgICBsb2NhdGlvbixcbiAgfSksXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile/index.js\n");

/***/ }),

/***/ "./src/profile/printProfile.js":
/*!*************************************!*\
  !*** ./src/profile/printProfile.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// file path: src/profile/printProfile.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileData => {\n    const { name, company } = profileData;\n    console.log(`${name} from ${company}`);\n  });\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLGlFQUFlO0FBQ2YsWUFBWSxnQkFBZ0I7QUFDNUIsbUJBQW1CLE1BQU0sT0FBTyxRQUFRO0FBQ3hDLEdBQUcsRUFBQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzazEvLi9zcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanM/YjIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIHBhdGg6IHNyYy9wcm9maWxlL3ByaW50UHJvZmlsZS5qc1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlRGF0YSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCBjb21wYW55IH0gPSBwcm9maWxlRGF0YTtcbiAgICBjb25zb2xlLmxvZyhgJHtuYW1lfSBmcm9tICR7Y29tcGFueX1gKTtcbiAgfTtcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile/printProfile.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/profile/index.js");
/******/ 	
/******/ })()
;