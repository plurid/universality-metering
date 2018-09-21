/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_ts_app_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ts/app.ts */ \"./src/ts/app.ts\");\n/* harmony import */ var _src_ts_app_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_ts_app_ts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_sass_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/sass/app.scss */ \"./src/sass/app.scss\");\n/* harmony import */ var _src_sass_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_sass_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/app.scss?");

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./source/dev.ts */ \"./src/ts/source/dev.ts\");\n\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/source/dev.ts":
/*!******************************!*\
  !*** ./src/ts/source/dev.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// // function init() {\n// //     setParagraphs();\n// //     setHover();\n// // }\n// // init();\n// // function setParagraphs() {\n// //     let p = document.getElementsByTagName('p');\n// //     for (let paragraph of p) {\n// //         let words = paragraph.innerText.split(' ');\n// //         // console.log(words);\n// //         let newParagraph = '';\n// //         for (let word of words) {\n// //             word = '<um-word>' + word + '</um-word>';\n// //             newParagraph = newParagraph + word + ' ';\n// //         }\n// //         // console.log(newParagraph);\n// //         paragraph.innerHTML = newParagraph;\n// //     }\n// // }\n// // class UmWord extends HTMLElement {\n// //     constructor() {\n// //         super();\n// //     }\n// // }\n// // window.customElements.define('um-word', UmWord);\n// // class UmSentence extends HTMLElement {\n// //     constructor() {\n// //         super();\n// //     }\n// // }\n// // customElements.define('um-sentence', UmSentence);\n// // function setHover() {\n// //     let umWords = document.getElementsByTagName('um-word');\n// //     // let umSentences = document.getElementsByTagName('um-sentence');\n// //     for (let umWord of umWords) {\n// //         umWord.addEventListener('mouseenter', event => {\n// //             setTimeout(() => {\n// //                 umWord.style.color = \"red\";\n// //             }, 400);\n// //         });\n// //         umWord.addEventListener('mouseleave', event => {\n// //             umWord.style.color = \"white\";\n// //         });\n// //     }\n// //     // for (let umSentence of umSentences) {\n// //     //     umSentence.addEventListener('mouseenter', event => {\n// //     //         // if (!event.shiftKey) {\n// //     //             umSentence.style.color = \"red\";\n// //     //         // }\n// //     //     });\n// //     //     umSentence.addEventListener('mouseleave', event => {\n// //     //         umSentence.style.color = \"white\";\n// //     //     });\n// //     // }\n// // }\n// // ---------------------\n// function init() {\n//     setParagraphs();\n//     // setHover();\n// }\n// init();\n// function setParagraphs() {\n//     let p = document.getElementsByTagName('p');\n//     for (let paragraph of p) {\n//         let words = paragraph.innerText.split(' ');\n//         // console.log(words);\n//         let newParagraph = '';\n//         for (let word of words) {\n//             let spannedWord = '<span class=\"um-word\">' + word + '</span>';\n//             newParagraph = newParagraph + spannedWord + ' ';\n//         }\n//         // console.log(newParagraph);\n//         paragraph.innerHTML = newParagraph;\n//     }\n// }\n// // class UmWord extends HTMLElement {\n// //     constructor() {\n// //         super();\n// //     }\n// // }\n// // window.customElements.define('um-word', UmWord);\n// // class UmSentence extends HTMLElement {\n// //     constructor() {\n// //         super();\n// //     }\n// // }\n// // customElements.define('um-sentence', UmSentence);\n// // function setHover() {\n// //     let umWords = document.getElementsByTagName('um-word');\n// //     // let umSentences = document.getElementsByTagName('um-sentence');\n// //     for (let umWord of umWords) {\n// //         umWord.addEventListener('mouseenter', event => {\n// //             setTimeout(() => {\n// //                 umWord.style.color = \"red\";\n// //             }, 400);\n// //         });\n// //         umWord.addEventListener('mouseleave', event => {\n// //             umWord.style.color = \"white\";\n// //         });\n// //     }\n// //     // for (let umSentence of umSentences) {\n// //     //     umSentence.addEventListener('mouseenter', event => {\n// //     //         // if (!event.shiftKey) {\n// //     //             umSentence.style.color = \"red\";\n// //     //         // }\n// //     //     });\n// //     //     umSentence.addEventListener('mouseleave', event => {\n// //     //         umSentence.style.color = \"white\";\n// //     //     });\n// //     // }\n// // }\nvar umParagraphs = document.getElementsByClassName('um-paragraph');\nvar originalContent = [];\nvar paragraphsContent = [];\nvar paragraphBs = 'This might be bullshit.';\nvar paragraphTr = '(T)read carefully.';\nfor (var _i = 0, umParagraphs_1 = umParagraphs; _i < umParagraphs_1.length; _i++) {\n    var umParagraph = umParagraphs_1[_i];\n    var content = umParagraph.innerHTML;\n    var contentArray = [];\n    originalContent.push(content);\n    var regex = />(.*?)</g;\n    var found = void 0;\n    while ((found = regex.exec(content)) !== null) {\n        if (/\\S/.test(found[1])) {\n            contentArray.push(found[1]);\n        }\n    }\n    paragraphsContent.push(contentArray);\n}\nvar strReplace = originalContent[0];\nstrReplace = strReplace.replace(paragraphsContent[0][0], paragraphBs);\nstrReplace = strReplace.replace(paragraphsContent[0][1], paragraphTr);\nstrReplace = strReplace.replace(paragraphsContent[0][2], paragraphBs);\nconsole.log(paragraphsContent[0][0]);\nvar _loop_1 = function (umParagraph) {\n    var _loop_2 = function (i) {\n        if (i % 2 != 0) {\n            setTimeout(function () {\n                console.log(i);\n                console.log('bs');\n                umParagraph.innerHTML = strReplace;\n            }, 3000 * i);\n        }\n        if (i % 2 == 0) {\n            setTimeout(function () {\n                console.log(i);\n                console.log('orig');\n                umParagraph.innerHTML = originalContent[0];\n            }, 3000 * i);\n        }\n    };\n    for (var i = 1; i < 30; i++) {\n        _loop_2(i);\n    }\n};\nfor (var _a = 0, _b = umParagraphs; _a < _b.length; _a++) {\n    var umParagraph = _b[_a];\n    _loop_1(umParagraph);\n}\nconsole.log(originalContent);\nconsole.log(paragraphsContent);\n\n\n//# sourceURL=webpack:///./src/ts/source/dev.ts?");

/***/ })

/******/ });