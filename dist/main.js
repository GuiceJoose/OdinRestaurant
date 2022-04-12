/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/larrymain.png */ "./src/images/larrymain.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    font-family: 'Rubik', sans-serif;\n}\n\n\nhtml {\n    background-color: #be9b6e;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 100vh;\n}\n\nh1 {\n    background-color: #392714;\n    color: #d4d5d1;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding: 2vh 6vw;\n    font-size: 5vh;\n    border-bottom: .25rem solid #d4d5d1;\n    box-sizing: border-box;\n    box-shadow: 0rem 0rem 2rem #392714;\n}\n\nh1 .navBar {\n    display: flex;\n    gap: 3vw;\n}\n\n\n.navBar button {\n    font-family: 'Rubik', sans-serif;\n    background-color: #392714;\n    color: #d4d5d1;\n    border: none;\n    font-size: 3vh;\n}\n\n\n.navBar button.clicked {\n    border-bottom: 3px solid #be9b6e;\n    color: #be9b6e;\n}\n \n.navBar button:hover {\n    border-bottom: 3px solid rgb(190, 155, 110, .3);\n    color: rgb(190, 155, 110, .6);\n}\n\nfooter {\n    background-color: #392714;\n    color: #d4d5d1;\n    width: 100%;\n    box-sizing: border-box;\n    border-top: .25rem solid #d4d5d1;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 4vh;\n    height: 10vh;\n    margin-top: auto;\n}\n\n.homeTab {\n    color: #d4d5d1;\n    position: relative;\n    gap: 3rem;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: #be9b6e;\n    height: 80vh;\n}\n\n.homeTab h2 {\n    padding-bottom: 1.5rem;\n    text-decoration: underline;\n}\n\n.homeTab .description {\n    position: absolute;\n    top: 0;\n    left: 0;\n    font-size: 2.5vh;\n    padding: 6vw;\n    background-color: rgb(57, 39, 20, .5);\n    border: .25rem solid #d4d5d1;\n    border-left: none;\n    border-right: none;\n    height: 25%;\n    margin-top: 4rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.menuTab {\n    color: #d4d5d1;\n    margin: 5rem 15rem;\n    padding: 2rem 5rem;\n    background-color: #392714;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n    border: .25rem solid #d4d5d1;\n    box-shadow: 0rem 0rem 2rem #392714;\n    border-radius: 15px;\n}\n\n.menuTab>div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    flex: 40%;\n    gap: 1rem;\n    border: .25rem solid #d4d5d1;\n    border-radius: 15px;\n}\n\n.menuTab h2 {\n    display: flex;\n    justify-content: center;\n    font-size: 2rem;\n    flex: 90%;\n    text-decoration: underline;\n}\n\n.menuTab h3 {\n    text-decoration: underline;\n}\n\n.menuTab img {\n    width: 15vw;\n    grid-column: 1;\n    grid-row: 1/3;\n    border-radius: 10px;\n}\n\n.contactTab {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    margin: 5vh 25vw;\n    border: .25rem solid #d4d5d1;\n    border-radius: 15px;\n    color: #d4d5d1;\n    background-color: #392714;\n}\n\n.contactTab h2 {\n    display: flex;\n    justify-content: center;\n    padding-top: 3vh;\n    width: 80%;\n    text-decoration: underline;\n}\n\n.contactTab .contactInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 3vh;\n}\n\n.contactInfo>div {\n    display: flex;\n    align-items: center;\n    gap: 1vw;\n}\n\n.contactTab form {\n    display: flex;\n    flex-direction: column;\n    gap: 3vh;\n    padding: 5vh;\n    width: 20vw;\n}\n\n.textinput {\n    border-bottom: .125rem solid #d4d5d1;\n}\n\n.textinput::placeholder {\n    color: #d4d5d1;\n}\n\n\n.contactTab textarea {\n    height: 15vh;\n}\n\n.message {\n    padding: .25rem;\n    border: .125rem solid #d4d5d1;\n}\n\n.message::placeholder {\n    color: #d4d5d1;\n}\n\n\n/** CSS normalize:\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\n button,\n input,\n optgroup,\n select,\n textarea {\n   font-family: inherit; /* 1 */\n   font-size: 100%; /* 1 */\n   line-height: 1.15; /* 1 */\n   margin: 0; /* 2 */\n }\n \n /**\n  * Show the overflow in IE.\n  * 1. Show the overflow in Edge.\n  */\n \n button,\n input { /* 1 */\n   overflow: visible;\n }\n \n /**\n  * Remove the inheritance of text transform in Edge, Firefox, and IE.\n  * 1. Remove the inheritance of text transform in Firefox.\n  */\n \n button,\n select { /* 1 */\n   text-transform: none;\n }\n \n /**\n  * Correct the inability to style clickable types in iOS and Safari.\n  */\n \n button,\n [type=\"button\"],\n [type=\"reset\"],\n [type=\"submit\"] {\n   -webkit-appearance: button;\n }\n\ninput,\ntextarea {\n    all:unset;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    font-family: 'Rubik', sans-serif;\n}\n\n\nhtml {\n    background-color: #be9b6e;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 100vh;\n}\n\nh1 {\n    background-color: #392714;\n    color: #d4d5d1;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding: 2vh 6vw;\n    font-size: 5vh;\n    border-bottom: .25rem solid #d4d5d1;\n    box-sizing: border-box;\n    box-shadow: 0rem 0rem 2rem #392714;\n}\n\nh1 .navBar {\n    display: flex;\n    gap: 3vw;\n}\n\n\n.navBar button {\n    font-family: 'Rubik', sans-serif;\n    background-color: #392714;\n    color: #d4d5d1;\n    border: none;\n    font-size: 3vh;\n}\n\n\n.navBar button.clicked {\n    border-bottom: 3px solid #be9b6e;\n    color: #be9b6e;\n}\n \n.navBar button:hover {\n    border-bottom: 3px solid rgb(190, 155, 110, .3);\n    color: rgb(190, 155, 110, .6);\n}\n\nfooter {\n    background-color: #392714;\n    color: #d4d5d1;\n    width: 100%;\n    box-sizing: border-box;\n    border-top: .25rem solid #d4d5d1;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 4vh;\n    height: 10vh;\n    margin-top: auto;\n}\n\n.homeTab {\n    color: #d4d5d1;\n    position: relative;\n    gap: 3rem;\n    background-image: url(./images/larrymain.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: #be9b6e;\n    height: 80vh;\n}\n\n.homeTab h2 {\n    padding-bottom: 1.5rem;\n    text-decoration: underline;\n}\n\n.homeTab .description {\n    position: absolute;\n    top: 0;\n    left: 0;\n    font-size: 2.5vh;\n    padding: 6vw;\n    background-color: rgb(57, 39, 20, .5);\n    border: .25rem solid #d4d5d1;\n    border-left: none;\n    border-right: none;\n    height: 25%;\n    margin-top: 4rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.menuTab {\n    color: #d4d5d1;\n    margin: 5rem 15rem;\n    padding: 2rem 5rem;\n    background-color: #392714;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n    border: .25rem solid #d4d5d1;\n    box-shadow: 0rem 0rem 2rem #392714;\n    border-radius: 15px;\n}\n\n.menuTab>div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    flex: 40%;\n    gap: 1rem;\n    border: .25rem solid #d4d5d1;\n    border-radius: 15px;\n}\n\n.menuTab h2 {\n    display: flex;\n    justify-content: center;\n    font-size: 2rem;\n    flex: 90%;\n    text-decoration: underline;\n}\n\n.menuTab h3 {\n    text-decoration: underline;\n}\n\n.menuTab img {\n    width: 15vw;\n    grid-column: 1;\n    grid-row: 1/3;\n    border-radius: 10px;\n}\n\n.contactTab {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    margin: 5vh 25vw;\n    border: .25rem solid #d4d5d1;\n    border-radius: 15px;\n    color: #d4d5d1;\n    background-color: #392714;\n}\n\n.contactTab h2 {\n    display: flex;\n    justify-content: center;\n    padding-top: 3vh;\n    width: 80%;\n    text-decoration: underline;\n}\n\n.contactTab .contactInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 3vh;\n}\n\n.contactInfo>div {\n    display: flex;\n    align-items: center;\n    gap: 1vw;\n}\n\n.contactTab form {\n    display: flex;\n    flex-direction: column;\n    gap: 3vh;\n    padding: 5vh;\n    width: 20vw;\n}\n\n.textinput {\n    border-bottom: .125rem solid #d4d5d1;\n}\n\n.textinput::placeholder {\n    color: #d4d5d1;\n}\n\n\n.contactTab textarea {\n    height: 15vh;\n}\n\n.message {\n    padding: .25rem;\n    border: .125rem solid #d4d5d1;\n}\n\n.message::placeholder {\n    color: #d4d5d1;\n}\n\n\n/** CSS normalize:\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\n button,\n input,\n optgroup,\n select,\n textarea {\n   font-family: inherit; /* 1 */\n   font-size: 100%; /* 1 */\n   line-height: 1.15; /* 1 */\n   margin: 0; /* 2 */\n }\n \n /**\n  * Show the overflow in IE.\n  * 1. Show the overflow in Edge.\n  */\n \n button,\n input { /* 1 */\n   overflow: visible;\n }\n \n /**\n  * Remove the inheritance of text transform in Edge, Firefox, and IE.\n  * 1. Remove the inheritance of text transform in Firefox.\n  */\n \n button,\n select { /* 1 */\n   text-transform: none;\n }\n \n /**\n  * Correct the inability to style clickable types in iOS and Safari.\n  */\n \n button,\n [type=\"button\"],\n [type=\"reset\"],\n [type=\"submit\"] {\n   -webkit-appearance: button;\n }\n\ninput,\ntextarea {\n    all:unset;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/phone.svg */ "./src/images/phone.svg");
/* harmony import */ var _images_address_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/address.svg */ "./src/images/address.svg");
/* harmony import */ var _images_hours_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hours.svg */ "./src/images/hours.svg");




function contactPage() {
    const contactTab = document.createElement('div');
    contactTab.classList.add('contactTab');

    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us';

    const contactForm = document.createElement('form');
    const name = document.createElement('input')
    name.classList.add('textinput');
    name.type = 'text';
    name.placeholder = 'Name';
    name.id = 'nameinput';
    const email = document.createElement('input')
    email.classList.add('textinput');
    email.type = 'email';
    email.placeholder = 'Email';
    email.id = 'emailinput';
    const message = document.createElement('textarea');
    message.classList.add('message');
    message.placeholder = 'Write us a message!';

    const hoursIcon = document.createElement('img');
    hoursIcon.src = _images_hours_svg__WEBPACK_IMPORTED_MODULE_2__;
    hoursIcon.width = 20;

    const locationIcon = document.createElement('img');
    locationIcon.src = _images_address_svg__WEBPACK_IMPORTED_MODULE_1__;
    locationIcon.width = 20;

    const phoneIcon = document.createElement('img');
    phoneIcon.src = _images_phone_svg__WEBPACK_IMPORTED_MODULE_0__;
    phoneIcon.width = 20;

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');

    const contactHours = document.createElement('div');
    contactHours.appendChild(hoursIcon);
    const contactHoursText = document.createElement('p');
    contactHoursText.innerHTML = 'Monday-Friday: 11am-2pm <br>Saturday-Sunday: Closed';
    contactHours.appendChild(contactHoursText);

    const contactAddress = document.createElement('div');
    contactAddress.appendChild(locationIcon);
    const contactAddressText = document.createElement('p');
    contactAddressText.textContent = 'In the woods behind the dump';
    contactAddress.appendChild(contactAddressText);

    const contactNumber = document.createElement('div');
    contactNumber.appendChild(phoneIcon);
    const contactNumberText = document.createElement('p');
    contactNumberText.textContent = '(555)-DOG-FOOD';
    contactNumber.appendChild(contactNumberText);


    

    contactInfo.append(contactHours, contactAddress, contactNumber);
    contactForm.append(name, email, message);
    contactTab.append(contactHeader, contactInfo, contactForm);
    content.appendChild(contactTab);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });


function homePage() {
    const homeTab = document.createElement('div');
    homeTab.classList.add('homeTab');

    const description = document.createElement('div');
    description.classList.add('description');
    const descriptionHeader = document.createElement('h2');
    descriptionHeader.textContent = 'Welcome!';
    const descriptionText = document.createElement('div')
    descriptionText.textContent = 'Come down to Legendary Larry\'s Lunchroom and try some of our lovely lunch options. Founded in 2022, Legendary Larry\'s Lunchroom is proud to serve all-natural, locally-sourced, seasonal lunch options. Our stinky atmosphere and secluded location will make you feel at home and keep your lunchtime activities secret from your pesky humans\. Whether you\'re a wolfhound, lab, or chi-wow-wow, we\'re sure to have something for you!';
    description.append(descriptionHeader, descriptionText);
    

    homeTab.appendChild(description);

    content.appendChild(homeTab);

}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _images_larrysnow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/larrysnow.png */ "./src/images/larrysnow.png");
/* harmony import */ var _images_larryfirewood_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/larryfirewood.png */ "./src/images/larryfirewood.png");
/* harmony import */ var _images_larrybullystick_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/larrybullystick.png */ "./src/images/larrybullystick.png");
/* harmony import */ var _images_larrytreebranch_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/larrytreebranch.png */ "./src/images/larrytreebranch.png");





function menuPage() {
    const menuTab = document.createElement('div');
    menuTab.classList.add('menuTab');

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Current Menu';

    const item1 = document.createElement('div');
    const item1header = document.createElement('h3');
    item1header.textContent = 'Snow'
    const item1image = document.createElement('img');
    item1image.src = _images_larrysnow_png__WEBPACK_IMPORTED_MODULE_0__;
    const item1text = document.createElement('div');
    item1text.classList.add('item1');
    item1text.textContent = 'Fresh, fluffy snow served directly on the ground. Get it while it\'s cold!';

    item1.append(item1header, item1image, item1text);
    
    const item2 = document.createElement('div');
    const item2header = document.createElement('h3');
    item2header.textContent = 'Firewood'
    const item2image = document.createElement('img');
    item2image.src = _images_larryfirewood_png__WEBPACK_IMPORTED_MODULE_1__;
    const item2text = document.createElement('div');
    item2text.classList.add('item2');
    item2text.textContent = 'Your choice of dry-aged maple, birch, or oak firewood.';

    item2.append(item2header, item2image, item2text);

    const item3 = document.createElement('div');
    const item3header = document.createElement('h3');
    item3header.textContent = 'Bully Stick'
    const item3image = document.createElement('img');
    item3image.src = _images_larrybullystick_png__WEBPACK_IMPORTED_MODULE_2__;
    const item3text = document.createElement('div');
    item3text.classList.add('item3');
    item3text.textContent = 'Everyone\'s favorite to-go item, the portable, stinky, and chewy bully stick';

    item3.append(item3header, item3image, item3text);

    const item4 = document.createElement('div');
    const item4header = document.createElement('h3');
    item4header.textContent = 'Tree Branch Salad'
    const item4image = document.createElement('img');
    item4image.src = _images_larrytreebranch_png__WEBPACK_IMPORTED_MODULE_3__;
    const item4text = document.createElement('div');
    item4text.classList.add('item4');
    item4text.textContent = 'On a diet? Try our low-calorie tree branch salad. Currently available in most coniferous varieties.';

    item4.append(item4header, item4image, item4text);

    menuTab.append(menuHeader, item1, item2, item3, item4);

    
    content.appendChild(menuTab);
}



/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });

function pageLoad () {
    const body = document.querySelector('body');
    const content = document.querySelector('#content');
    
    const header = document.createElement('h1');
    header.textContent = 'Legendary Larry\'s Lunchroom'
    body.insertBefore(header, content);

    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';

    navBar.append(homeButton, menuButton, contactButton);
    header.appendChild(navBar);
    
    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursHeader = document.createElement('h4');
    hoursHeader.textContent = 'Hours';
    hours.appendChild(hoursHeader);

    const hoursText = document.createElement('div');
    hoursText.innerHTML = 'Monday-Friday: 11am - 2pm <br>Saturday-Sunday: Closed';
    hours.appendChild(hoursText);

    const location = document.createElement('div');
    location.classList.add('location');

    const locationHeader = document.createElement('h4');
    locationHeader.textContent = 'Location';
    location.appendChild(locationHeader);

    const locationText = document.createElement('div');
    locationText.textContent = 'In the woods behind the dump'
    location.appendChild(locationText);

    const footer = document.createElement('footer');
    footer.append(hours, location);
    body.appendChild(footer);

}




/***/ }),

/***/ "./src/images/address.svg":
/*!********************************!*\
  !*** ./src/images/address.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a6b2dddbc5cdc4d0fec.svg";

/***/ }),

/***/ "./src/images/hours.svg":
/*!******************************!*\
  !*** ./src/images/hours.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a437317f4fdf29d9c54.svg";

/***/ }),

/***/ "./src/images/larrybullystick.png":
/*!****************************************!*\
  !*** ./src/images/larrybullystick.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60fc5153fdbdb20e964d.png";

/***/ }),

/***/ "./src/images/larryfirewood.png":
/*!**************************************!*\
  !*** ./src/images/larryfirewood.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "512a40bd8bce484856f5.png";

/***/ }),

/***/ "./src/images/larrymain.png":
/*!**********************************!*\
  !*** ./src/images/larrymain.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03ee1d1ab875c5db89a1.png";

/***/ }),

/***/ "./src/images/larrysnow.png":
/*!**********************************!*\
  !*** ./src/images/larrysnow.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78eccd44950e4f90e23a.png";

/***/ }),

/***/ "./src/images/larrytreebranch.png":
/*!****************************************!*\
  !*** ./src/images/larrytreebranch.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97b66f65e3a9a9b06083.png";

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbf5449d2e6df8de233c.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage)();
const homeButton = document.querySelector('button');
homeButton.classList.add('clicked');


const navButtons = document.querySelectorAll('button');
navButtons.forEach(button => button.addEventListener('click', navigateClick))

function navigateClick(e) {
    
    content.innerHTML = '';
    navButtons.forEach(button => button.classList.remove('clicked'));
    switch (e.target.textContent) {
        case 'Home':
            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage)();
            e.target.classList.add('clicked');
            break;
        case 'Menu':
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)();
            e.target.classList.add('clicked');
            break;
        case 'Contact':
            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactPage)();
            e.target.classList.add('clicked');
            break;
    }
    
    
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50Ly4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbGFycnltYWluLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlOWI2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5MjcxNDtcXG4gICAgY29sb3I6ICNkNGQ1ZDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJ2aCA2dnc7XFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcbiAgICBib3JkZXItYm90dG9tOiAuMjVyZW0gc29saWQgI2Q0ZDVkMTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDJyZW0gIzM5MjcxNDtcXG59XFxuXFxuaDEgLm5hdkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3Z3O1xcbn1cXG5cXG5cXG4ubmF2QmFyIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkyNzE0O1xcbiAgICBjb2xvcjogI2Q0ZDVkMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuXFxuLm5hdkJhciBidXR0b24uY2xpY2tlZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYmU5YjZlO1xcbiAgICBjb2xvcjogI2JlOWI2ZTtcXG59XFxuIFxcbi5uYXZCYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigxOTAsIDE1NSwgMTEwLCAuMyk7XFxuICAgIGNvbG9yOiByZ2IoMTkwLCAxNTUsIDExMCwgLjYpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkyNzE0O1xcbiAgICBjb2xvcjogI2Q0ZDVkMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci10b3A6IC4yNXJlbSBzb2xpZCAjZDRkNWQxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHZoO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5ob21lVGFiIHtcXG4gICAgY29sb3I6ICNkNGQ1ZDE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU5YjZlO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5ob21lVGFiIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5ob21lVGFiIC5kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDIuNXZoO1xcbiAgICBwYWRkaW5nOiA2dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgMzksIDIwLCAuNSk7XFxuICAgIGJvcmRlcjogLjI1cmVtIHNvbGlkICNkNGQ1ZDE7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLm1lbnVUYWIge1xcbiAgICBjb2xvcjogI2Q0ZDVkMTtcXG4gICAgbWFyZ2luOiA1cmVtIDE1cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTI3MTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgI2Q0ZDVkMTtcXG4gICAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDJyZW0gIzM5MjcxNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1lbnVUYWI+ZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBmbGV4OiA0MCU7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgI2Q0ZDVkMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1lbnVUYWIgaDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmbGV4OiA5MCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWVudVRhYiBoMyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWVudVRhYiBpbWcge1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jb250YWN0VGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1dmggMjV2dztcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgI2Q0ZDVkMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgY29sb3I6ICNkNGQ1ZDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTI3MTQ7XFxufVxcblxcbi5jb250YWN0VGFiIGgyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAzdmg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uY29udGFjdFRhYiAuY29udGFjdEluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogM3ZoO1xcbn1cXG5cXG4uY29udGFjdEluZm8+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxdnc7XFxufVxcblxcbi5jb250YWN0VGFiIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDN2aDtcXG4gICAgcGFkZGluZzogNXZoO1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuLnRleHRpbnB1dCB7XFxuICAgIGJvcmRlci1ib3R0b206IC4xMjVyZW0gc29saWQgI2Q0ZDVkMTtcXG59XFxuXFxuLnRleHRpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2Q0ZDVkMTtcXG59XFxuXFxuXFxuLmNvbnRhY3RUYWIgdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gICAgcGFkZGluZzogLjI1cmVtO1xcbiAgICBib3JkZXI6IC4xMjVyZW0gc29saWQgI2Q0ZDVkMTtcXG59XFxuXFxuLm1lc3NhZ2U6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNkNGQ1ZDE7XFxufVxcblxcblxcbi8qKiBDU1Mgbm9ybWFsaXplOlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG4gYnV0dG9uLFxcbiBpbnB1dCxcXG4gb3B0Z3JvdXAsXFxuIHNlbGVjdCxcXG4gdGV4dGFyZWEge1xcbiAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gfVxcbiBcXG4gLyoqXFxuICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgKi9cXG4gXFxuIGJ1dHRvbixcXG4gaW5wdXQgeyAvKiAxICovXFxuICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuIH1cXG4gXFxuIC8qKlxcbiAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgKi9cXG4gXFxuIGJ1dHRvbixcXG4gc2VsZWN0IHsgLyogMSAqL1xcbiAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiB9XFxuIFxcbiAvKipcXG4gICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICovXFxuIFxcbiBidXR0b24sXFxuIFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG4gW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuIH1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGFsbDp1bnNldDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7OztBQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7O0FBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QseURBQTZDO0lBQzdDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFNBQVM7SUFDVCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBR0E7OztFQUdFOztDQUVEOzs7OztHQUtFLG9CQUFvQixFQUFFLE1BQU07R0FDNUIsZUFBZSxFQUFFLE1BQU07R0FDdkIsaUJBQWlCLEVBQUUsTUFBTTtHQUN6QixTQUFTLEVBQUUsTUFBTTtDQUNuQjs7Q0FFQTs7O0dBR0U7O0NBRUY7U0FDUSxNQUFNO0dBQ1osaUJBQWlCO0NBQ25COztDQUVBOzs7R0FHRTs7Q0FFRjtVQUNTLE1BQU07R0FDYixvQkFBb0I7Q0FDdEI7O0NBRUE7O0dBRUU7O0NBRUY7Ozs7R0FJRSwwQkFBMEI7Q0FDNUI7O0FBRUQ7O0lBRUksU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlOWI2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5MjcxNDtcXG4gICAgY29sb3I6ICNkNGQ1ZDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJ2aCA2dnc7XFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcbiAgICBib3JkZXItYm90dG9tOiAuMjVyZW0gc29saWQgI2Q0ZDVkMTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDJyZW0gIzM5MjcxNDtcXG59XFxuXFxuaDEgLm5hdkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3Z3O1xcbn1cXG5cXG5cXG4ubmF2QmFyIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkyNzE0O1xcbiAgICBjb2xvcjogI2Q0ZDVkMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDN2aDtcXG59XFxuXFxuXFxuLm5hdkJhciBidXR0b24uY2xpY2tlZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYmU5YjZlO1xcbiAgICBjb2xvcjogI2JlOWI2ZTtcXG59XFxuIFxcbi5uYXZCYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYigxOTAsIDE1NSwgMTEwLCAuMyk7XFxuICAgIGNvbG9yOiByZ2IoMTkwLCAxNTUsIDExMCwgLjYpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkyNzE0O1xcbiAgICBjb2xvcjogI2Q0ZDVkMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci10b3A6IC4yNXJlbSBzb2xpZCAjZDRkNWQxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHZoO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5ob21lVGFiIHtcXG4gICAgY29sb3I6ICNkNGQ1ZDE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbGFycnltYWluLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZTliNmU7XFxuICAgIGhlaWdodDogODB2aDtcXG59XFxuXFxuLmhvbWVUYWIgaDIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmhvbWVUYWIgLmRlc2NyaXB0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMi41dmg7XFxuICAgIHBhZGRpbmc6IDZ2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAzOSwgMjAsIC41KTtcXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgI2Q0ZDVkMTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ubWVudVRhYiB7XFxuICAgIGNvbG9yOiAjZDRkNWQxO1xcbiAgICBtYXJnaW46IDVyZW0gMTVyZW07XFxuICAgIHBhZGRpbmc6IDJyZW0gNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5MjcxNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBib3JkZXI6IC4yNXJlbSBzb2xpZCAjZDRkNWQxO1xcbiAgICBib3gtc2hhZG93OiAwcmVtIDByZW0gMnJlbSAjMzkyNzE0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubWVudVRhYj5kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGZsZXg6IDQwJTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXI6IC4yNXJlbSBzb2xpZCAjZDRkNWQxO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubWVudVRhYiBoMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZsZXg6IDkwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tZW51VGFiIGgzIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tZW51VGFiIGltZyB7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRhY3RUYWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDV2aCAyNXZ3O1xcbiAgICBib3JkZXI6IC4yNXJlbSBzb2xpZCAjZDRkNWQxO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBjb2xvcjogI2Q0ZDVkMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5MjcxNDtcXG59XFxuXFxuLmNvbnRhY3RUYWIgaDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDN2aDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5jb250YWN0VGFiIC5jb250YWN0SW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAzdmg7XFxufVxcblxcbi5jb250YWN0SW5mbz5kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDF2dztcXG59XFxuXFxuLmNvbnRhY3RUYWIgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3ZoO1xcbiAgICBwYWRkaW5nOiA1dmg7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4udGV4dGlucHV0IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjEyNXJlbSBzb2xpZCAjZDRkNWQxO1xcbn1cXG5cXG4udGV4dGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjZDRkNWQxO1xcbn1cXG5cXG5cXG4uY29udGFjdFRhYiB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogMTV2aDtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICBwYWRkaW5nOiAuMjVyZW07XFxuICAgIGJvcmRlcjogLjEyNXJlbSBzb2xpZCAjZDRkNWQxO1xcbn1cXG5cXG4ubWVzc2FnZTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2Q0ZDVkMTtcXG59XFxuXFxuXFxuLyoqIENTUyBub3JtYWxpemU6XFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbiBidXR0b24sXFxuIGlucHV0LFxcbiBvcHRncm91cCxcXG4gc2VsZWN0LFxcbiB0ZXh0YXJlYSB7XFxuICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiB9XFxuIFxcbiAvKipcXG4gICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAqL1xcbiBcXG4gYnV0dG9uLFxcbiBpbnB1dCB7IC8qIDEgKi9cXG4gICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gfVxcbiBcXG4gLyoqXFxuICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAqL1xcbiBcXG4gYnV0dG9uLFxcbiBzZWxlY3QgeyAvKiAxICovXFxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuIH1cXG4gXFxuIC8qKlxcbiAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgKi9cXG4gXFxuIGJ1dHRvbixcXG4gW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gfVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYWxsOnVuc2V0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBob25lIGZyb20gJy4vaW1hZ2VzL3Bob25lLnN2Zyc7XG5pbXBvcnQgYWRkcmVzcyBmcm9tICcuL2ltYWdlcy9hZGRyZXNzLnN2Zyc7XG5pbXBvcnQgaG91cnMgZnJvbSAnLi9pbWFnZXMvaG91cnMuc3ZnJztcblxuZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgnY29udGFjdFRhYicpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCd0ZXh0aW5wdXQnKTtcbiAgICBuYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgbmFtZS5wbGFjZWhvbGRlciA9ICdOYW1lJztcbiAgICBuYW1lLmlkID0gJ25hbWVpbnB1dCc7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZCgndGV4dGlucHV0Jyk7XG4gICAgZW1haWwudHlwZSA9ICdlbWFpbCc7XG4gICAgZW1haWwucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xuICAgIGVtYWlsLmlkID0gJ2VtYWlsaW5wdXQnO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2UucGxhY2Vob2xkZXIgPSAnV3JpdGUgdXMgYSBtZXNzYWdlISc7XG5cbiAgICBjb25zdCBob3Vyc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob3Vyc0ljb24uc3JjID0gaG91cnM7XG4gICAgaG91cnNJY29uLndpZHRoID0gMjA7XG5cbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2NhdGlvbkljb24uc3JjID0gYWRkcmVzcztcbiAgICBsb2NhdGlvbkljb24ud2lkdGggPSAyMDtcblxuICAgIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBob25lSWNvbi5zcmMgPSBwaG9uZTtcbiAgICBwaG9uZUljb24ud2lkdGggPSAyMDtcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdEluZm8nKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RIb3Vycy5hcHBlbmRDaGlsZChob3Vyc0ljb24pO1xuICAgIGNvbnN0IGNvbnRhY3RIb3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEhvdXJzVGV4dC5pbm5lckhUTUwgPSAnTW9uZGF5LUZyaWRheTogMTFhbS0ycG0gPGJyPlNhdHVyZGF5LVN1bmRheTogQ2xvc2VkJztcbiAgICBjb250YWN0SG91cnMuYXBwZW5kQ2hpbGQoY29udGFjdEhvdXJzVGV4dCk7XG5cbiAgICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RBZGRyZXNzLmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7XG4gICAgY29uc3QgY29udGFjdEFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RBZGRyZXNzVGV4dC50ZXh0Q29udGVudCA9ICdJbiB0aGUgd29vZHMgYmVoaW5kIHRoZSBkdW1wJztcbiAgICBjb250YWN0QWRkcmVzcy5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzc1RleHQpO1xuXG4gICAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3ROdW1iZXIuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgICBjb25zdCBjb250YWN0TnVtYmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TnVtYmVyVGV4dC50ZXh0Q29udGVudCA9ICcoNTU1KS1ET0ctRk9PRCc7XG4gICAgY29udGFjdE51bWJlci5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyVGV4dCk7XG5cblxuICAgIFxuXG4gICAgY29udGFjdEluZm8uYXBwZW5kKGNvbnRhY3RIb3VycywgY29udGFjdEFkZHJlc3MsIGNvbnRhY3ROdW1iZXIpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZChuYW1lLCBlbWFpbCwgbWVzc2FnZSk7XG4gICAgY29udGFjdFRhYi5hcHBlbmQoY29udGFjdEhlYWRlciwgY29udGFjdEluZm8sIGNvbnRhY3RGb3JtKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xufVxuXG5leHBvcnQgeyBjb250YWN0UGFnZSB9OyIsIlxuXG5mdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdob21lVGFiJyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGRlc2NyaXB0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ1dlbGNvbWUhJztcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9ICdDb21lIGRvd24gdG8gTGVnZW5kYXJ5IExhcnJ5XFwncyBMdW5jaHJvb20gYW5kIHRyeSBzb21lIG9mIG91ciBsb3ZlbHkgbHVuY2ggb3B0aW9ucy4gRm91bmRlZCBpbiAyMDIyLCBMZWdlbmRhcnkgTGFycnlcXCdzIEx1bmNocm9vbSBpcyBwcm91ZCB0byBzZXJ2ZSBhbGwtbmF0dXJhbCwgbG9jYWxseS1zb3VyY2VkLCBzZWFzb25hbCBsdW5jaCBvcHRpb25zLiBPdXIgc3Rpbmt5IGF0bW9zcGhlcmUgYW5kIHNlY2x1ZGVkIGxvY2F0aW9uIHdpbGwgbWFrZSB5b3UgZmVlbCBhdCBob21lIGFuZCBrZWVwIHlvdXIgbHVuY2h0aW1lIGFjdGl2aXRpZXMgc2VjcmV0IGZyb20geW91ciBwZXNreSBodW1hbnNcXC4gV2hldGhlciB5b3VcXCdyZSBhIHdvbGZob3VuZCwgbGFiLCBvciBjaGktd293LXdvdywgd2VcXCdyZSBzdXJlIHRvIGhhdmUgc29tZXRoaW5nIGZvciB5b3UhJztcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoZGVzY3JpcHRpb25IZWFkZXIsIGRlc2NyaXB0aW9uVGV4dCk7XG4gICAgXG5cbiAgICBob21lVGFiLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbn1cblxuZXhwb3J0IHsgaG9tZVBhZ2UgfTsiLCJpbXBvcnQgbGFycnlzbm93IGZyb20gJy4vaW1hZ2VzL2xhcnJ5c25vdy5wbmcnXG5pbXBvcnQgbGFycnlmaXJld29vZCBmcm9tICcuL2ltYWdlcy9sYXJyeWZpcmV3b29kLnBuZydcbmltcG9ydCBsYXJyeWJ1bGx5c3RpY2sgZnJvbSAnLi9pbWFnZXMvbGFycnlidWxseXN0aWNrLnBuZydcbmltcG9ydCBsYXJyeXRyZWVicmFuY2ggZnJvbSAnLi9pbWFnZXMvbGFycnl0cmVlYnJhbmNoLnBuZydcblxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnbWVudVRhYicpO1xuXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9ICdDdXJyZW50IE1lbnUnO1xuXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtMWhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbTFoZWFkZXIudGV4dENvbnRlbnQgPSAnU25vdydcbiAgICBjb25zdCBpdGVtMWltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaXRlbTFpbWFnZS5zcmMgPSBsYXJyeXNub3c7XG4gICAgY29uc3QgaXRlbTF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTF0ZXh0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0xJyk7XG4gICAgaXRlbTF0ZXh0LnRleHRDb250ZW50ID0gJ0ZyZXNoLCBmbHVmZnkgc25vdyBzZXJ2ZWQgZGlyZWN0bHkgb24gdGhlIGdyb3VuZC4gR2V0IGl0IHdoaWxlIGl0XFwncyBjb2xkISc7XG5cbiAgICBpdGVtMS5hcHBlbmQoaXRlbTFoZWFkZXIsIGl0ZW0xaW1hZ2UsIGl0ZW0xdGV4dCk7XG4gICAgXG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtMmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbTJoZWFkZXIudGV4dENvbnRlbnQgPSAnRmlyZXdvb2QnXG4gICAgY29uc3QgaXRlbTJpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGl0ZW0yaW1hZ2Uuc3JjID0gbGFycnlmaXJld29vZDtcbiAgICBjb25zdCBpdGVtMnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMnRleHQuY2xhc3NMaXN0LmFkZCgnaXRlbTInKTtcbiAgICBpdGVtMnRleHQudGV4dENvbnRlbnQgPSAnWW91ciBjaG9pY2Ugb2YgZHJ5LWFnZWQgbWFwbGUsIGJpcmNoLCBvciBvYWsgZmlyZXdvb2QuJztcblxuICAgIGl0ZW0yLmFwcGVuZChpdGVtMmhlYWRlciwgaXRlbTJpbWFnZSwgaXRlbTJ0ZXh0KTtcblxuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTNoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW0zaGVhZGVyLnRleHRDb250ZW50ID0gJ0J1bGx5IFN0aWNrJ1xuICAgIGNvbnN0IGl0ZW0zaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGVtM2ltYWdlLnNyYyA9IGxhcnJ5YnVsbHlzdGljaztcbiAgICBjb25zdCBpdGVtM3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtM3RleHQuY2xhc3NMaXN0LmFkZCgnaXRlbTMnKTtcbiAgICBpdGVtM3RleHQudGV4dENvbnRlbnQgPSAnRXZlcnlvbmVcXCdzIGZhdm9yaXRlIHRvLWdvIGl0ZW0sIHRoZSBwb3J0YWJsZSwgc3Rpbmt5LCBhbmQgY2hld3kgYnVsbHkgc3RpY2snO1xuXG4gICAgaXRlbTMuYXBwZW5kKGl0ZW0zaGVhZGVyLCBpdGVtM2ltYWdlLCBpdGVtM3RleHQpO1xuXG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtNGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbTRoZWFkZXIudGV4dENvbnRlbnQgPSAnVHJlZSBCcmFuY2ggU2FsYWQnXG4gICAgY29uc3QgaXRlbTRpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGl0ZW00aW1hZ2Uuc3JjID0gbGFycnl0cmVlYnJhbmNoO1xuICAgIGNvbnN0IGl0ZW00dGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW00dGV4dC5jbGFzc0xpc3QuYWRkKCdpdGVtNCcpO1xuICAgIGl0ZW00dGV4dC50ZXh0Q29udGVudCA9ICdPbiBhIGRpZXQ/IFRyeSBvdXIgbG93LWNhbG9yaWUgdHJlZSBicmFuY2ggc2FsYWQuIEN1cnJlbnRseSBhdmFpbGFibGUgaW4gbW9zdCBjb25pZmVyb3VzIHZhcmlldGllcy4nO1xuXG4gICAgaXRlbTQuYXBwZW5kKGl0ZW00aGVhZGVyLCBpdGVtNGltYWdlLCBpdGVtNHRleHQpO1xuXG4gICAgbWVudVRhYi5hcHBlbmQobWVudUhlYWRlciwgaXRlbTEsIGl0ZW0yLCBpdGVtMywgaXRlbTQpO1xuXG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51VGFiKTtcbn1cblxuZXhwb3J0IHsgbWVudVBhZ2UgfTsiLCJcbmZ1bmN0aW9uIHBhZ2VMb2FkICgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0xlZ2VuZGFyeSBMYXJyeVxcJ3MgTHVuY2hyb29tJ1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudCk7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIG5hdkJhci5hcHBlbmQoaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgY29udGFjdEJ1dHRvbik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuXG4gICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0hvdXJzJztcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcik7XG5cbiAgICBjb25zdCBob3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc1RleHQuaW5uZXJIVE1MID0gJ01vbmRheS1GcmlkYXk6IDExYW0gLSAycG0gPGJyPlNhdHVyZGF5LVN1bmRheTogQ2xvc2VkJztcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RleHQpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuXG4gICAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XG5cbiAgICBjb25zdCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSAnSW4gdGhlIHdvb2RzIGJlaGluZCB0aGUgZHVtcCdcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmFwcGVuZChob3VycywgbG9jYXRpb24pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxufVxuXG5cbmV4cG9ydCB7IHBhZ2VMb2FkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vcGFnZUxvYWQuanMnO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgbWVudVBhZ2UgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbnBhZ2VMb2FkKCk7XG5ob21lUGFnZSgpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG5cblxuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xubmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZpZ2F0ZUNsaWNrKSlcblxuZnVuY3Rpb24gbmF2aWdhdGVDbGljayhlKSB7XG4gICAgXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBuYXZCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJykpO1xuICAgIHN3aXRjaCAoZS50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBob21lUGFnZSgpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgbWVudVBhZ2UoKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlKCk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9