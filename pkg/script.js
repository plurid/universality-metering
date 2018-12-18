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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./src/ts/app.ts */ \"./src/ts/app.ts\");\n__webpack_require__(/*! ./src/sass/app.scss */ \"./src/sass/app.scss\");\n\n\n//# sourceURL=webpack:///./app.ts?");

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
eval("\n// // function init() {\n// //     setParagraphs();\n// //     setHover();\n// // }\n// // init();\n// // function setParagraphs() {\n// //     let p = document.getElementsByTagName('p');\n// //     for (let paragraph of p) {\n// //         let words = paragraph.innerText.split(' ');\n// //         // console.log(words);\n// //         let newParagraph = '';\n// //         for (let word of words) {\n// //             word = '<um-word>' + word + '</um-word>';\n// //             newParagraph = newParagraph + word + ' ';\n// //         }\n// //         // console.log(newParagraph);\n// //         paragraph.innerHTML = newParagraph;\n// //     }\n// // }\n// // class UmWord extends HTMLElement {\n// //     constructor() {\n// //         super();\n// //     }\n// // }\n// // window.customElements.define('um-word', UmWord);\n// // class UmSentence extends HTMLElement {\n// //     constructor() {\n// //         super();\n// //     }\n// // }\n// // customElements.define('um-sentence', UmSentence);\n// // function setHover() {\n// //     let umWords = document.getElementsByTagName('um-word');\n// //     // let umSentences = document.getElementsByTagName('um-sentence');\n// //     for (let umWord of umWords) {\n// //         umWord.addEventListener('mouseenter', event => {\n// //             setTimeout(() => {\n// //                 umWord.style.color = \"red\";\n// //             }, 400);\n// //         });\n// //         umWord.addEventListener('mouseleave', event => {\n// //             umWord.style.color = \"white\";\n// //         });\n// //     }\n// //     // for (let umSentence of umSentences) {\n// //     //     umSentence.addEventListener('mouseenter', event => {\n// //     //         // if (!event.shiftKey) {\n// //     //             umSentence.style.color = \"red\";\n// //     //         // }\n// //     //     });\n// //     //     umSentence.addEventListener('mouseleave', event => {\n// //     //         umSentence.style.color = \"white\";\n// //     //     });\n// //     // }\n// // }\n// // ---------------------\n// function init() {\n//     setParagraphs();\n//     // setHover();\n// }\n// init();\n// function setParagraphs() {\n//     let p = document.getElementsByTagName('p');\n//     for (let paragraph of p) {\n//         let words = paragraph.innerText.split(' ');\n//         // console.log(words);\n//         let newParagraph = '';\n//         for (let word of words) {\n//             let spannedWord = '<span class=\"um-word\">' + word + '</span>';\n//             newParagraph = newParagraph + spannedWord + ' ';\n//         }\n//         // console.log(newParagraph);\n//         paragraph.innerHTML = newParagraph;\n//     }\n// }\n// // class UmWord extends HTMLElement {\n// //     constructor() {\n// //         super();\n// //     }\n// // }\n// // window.customElements.define('um-word', UmWord);\n// // class UmSentence extends HTMLElement {\n// //     constructor() {\n// //         super();\n// //     }\n// // }\n// // customElements.define('um-sentence', UmSentence);\n// // function setHover() {\n// //     let umWords = document.getElementsByTagName('um-word');\n// //     // let umSentences = document.getElementsByTagName('um-sentence');\n// //     for (let umWord of umWords) {\n// //         umWord.addEventListener('mouseenter', event => {\n// //             setTimeout(() => {\n// //                 umWord.style.color = \"red\";\n// //             }, 400);\n// //         });\n// //         umWord.addEventListener('mouseleave', event => {\n// //             umWord.style.color = \"white\";\n// //         });\n// //     }\n// //     // for (let umSentence of umSentences) {\n// //     //     umSentence.addEventListener('mouseenter', event => {\n// //     //         // if (!event.shiftKey) {\n// //     //             umSentence.style.color = \"red\";\n// //     //         // }\n// //     //     });\n// //     //     umSentence.addEventListener('mouseleave', event => {\n// //     //         umSentence.style.color = \"white\";\n// //     //     });\n// //     // }\n// // }\n// Text Switching\n// let umParagraphs = document.getElementsByClassName('um-paragraph');\n// let originalContent: string[] = [];\n// let paragraphsContent  = [];\n// const paragraphBs = 'This might be bullshit.'\n// const paragraphTr = '(T)read carefully.'\n// for (let umParagraph of umParagraphs) {\n//     let content = umParagraph.innerHTML;\n//     let contentArray = [];\n//     originalContent.push(content);\n//     const regex = />(.*?)</g;\n//     let found: RegExpExecArray | null;\n//     while ((found = regex.exec(content)) !== null) {\n//         if (/\\S/.test(found[1])) {\n//             contentArray.push(found[1]);\n//         }\n//     }\n//     paragraphsContent.push(contentArray);\n// }\n// let strReplace = originalContent[0];\n// strReplace = strReplace.replace(paragraphsContent[0][0], paragraphBs);\n// strReplace = strReplace.replace(paragraphsContent[0][1], paragraphTr);\n// strReplace = strReplace.replace(paragraphsContent[0][2], paragraphBs);\n// console.log(paragraphsContent[0][0]);\n// for (let umParagraph of <any>umParagraphs) {\n//     for (let i = 1; i < 30; i++) {\n//         if (i % 2 != 0) {\n//             setTimeout(() => {\n//                 console.log(i);\n//                 console.log('bs');\n//                 umParagraph.innerHTML = strReplace;\n//             }, 3000 * i);\n//         }\n//         if (i % 2 == 0) {\n//             setTimeout(() => {\n//                 console.log(i);\n//                 console.log('orig');\n//                 umParagraph.innerHTML = originalContent[0];\n//             }, 3000 * i);\n//         }\n//     }\n// }\n// console.log(originalContent);\n// console.log(paragraphsContent);\n// Char\nlet char = document.getElementById('char');\nlet charContent = char.innerHTML;\nconsole.log(charContent.charCodeAt(0));\n\n\n//# sourceURL=webpack:///./src/ts/source/dev.ts?");

/***/ })

/******/ });