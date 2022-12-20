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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nbody {\n  background: rgb(50, 50, 50);\n}\n\nlabel {\n  color: whitesmoke;\n  font-size: 20px;\n  margin-top: 0.3rem;\n}\n\nform div {\n  /* border: 2px solid salmon; */\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n}\n\nbutton {\n  width: 5rem;\n  font-size: 20px;\n  margin-top: 0.3rem;\n}\n\ninput {\n  height: 1.5rem;\n}\n\ninput:invalid {\n  border-color: #900;\n  background-color: #fdd;\n}\n\ninput:invalid.initial {\n  border: none;\n  background-color: white;\n}\n\n\ninput:focus:invalid {\n  outline: none;\n}\n\n.error {\n  width: 100%;\n  padding: 0;\n\n  font-size: 100%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\n.highfive {\n  color: whitesmoke;\n  font-size: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;;AAGA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,UAAU;;EAEV,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nbody {\n  background: rgb(50, 50, 50);\n}\n\nlabel {\n  color: whitesmoke;\n  font-size: 20px;\n  margin-top: 0.3rem;\n}\n\nform div {\n  /* border: 2px solid salmon; */\n  display: flex;\n  flex-direction: column;\n  width: 15rem;\n}\n\nbutton {\n  width: 5rem;\n  font-size: 20px;\n  margin-top: 0.3rem;\n}\n\ninput {\n  height: 1.5rem;\n}\n\ninput:invalid {\n  border-color: #900;\n  background-color: #fdd;\n}\n\ninput:invalid.initial {\n  border: none;\n  background-color: white;\n}\n\n\ninput:focus:invalid {\n  outline: none;\n}\n\n.error {\n  width: 100%;\n  padding: 0;\n\n  font-size: 100%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\n.highfive {\n  color: whitesmoke;\n  font-size: 20px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./src/confirmField.js":
/*!*****************************!*\
  !*** ./src/confirmField.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkConfirmValid": () => (/* binding */ checkConfirmValid),
/* harmony export */   "showConfirmError": () => (/* binding */ showConfirmError)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");


function checkConfirmValid() {
  const { confirm } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.confirmElement)();
  const { confirmError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.confirmElement)();

  confirm.addEventListener('focus', () => {
    const pwValue = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.passwordElement)().password.value;
    confirm.classList.remove('initial');
    confirm.setAttribute('pattern', pwValue);
    confirmError.textContent = '';
    confirmError.className = 'error';
  });

  confirm.addEventListener('blur', () => {
    if (confirm.validity.valid) {
      confirmError.textContent = '';
      confirmError.className = 'error';
    } else {
      showConfirmError();
      confirmError.className = 'error active';
    }
  });
}

function showConfirmError() {
  const { confirm } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.confirmElement)();
  const { confirmError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.confirmElement)();

  if (confirm.validity.valueMissing) {
    confirmError.textContent = 'You need to enter the same password again.';
  } else if (confirm.validity.patternMismatch) {
    confirmError.textContent = 'The passwords you entered does not match.';
  }
}




/***/ }),

/***/ "./src/countryField.js":
/*!*****************************!*\
  !*** ./src/countryField.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCountryValid": () => (/* binding */ checkCountryValid),
/* harmony export */   "showCountryError": () => (/* binding */ showCountryError)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");


function checkCountryValid() {
  const { country } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.countryElement)();
  const { countryError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.countryElement)();

  country.addEventListener('focus', () => {
    country.classList.remove('initial');
    countryError.textContent = '';
    countryError.className = 'error';
  });

  country.addEventListener('blur', () => {
    if (country.validity.valid) {
      countryError.textContent = '';
      countryError.className = 'error';
    } else {
      showCountryError();
      countryError.className = 'error active';
    }
  });
}

function showCountryError() {
  const { country } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.countryElement)();
  const { countryError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.countryElement)();

  if (country.validity.valueMissing) {
    countryError.textContent = 'You need to enter a country name.';
  }
}



/***/ }),

/***/ "./src/emailField.js":
/*!***************************!*\
  !*** ./src/emailField.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkEmailValid": () => (/* binding */ checkEmailValid),
/* harmony export */   "showEmailError": () => (/* binding */ showEmailError)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");


function checkEmailValid() {
  const { email } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.emailElement)();
  const { emailError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.emailElement)();

  email.addEventListener('focus', () => {
    email.classList.remove('initial');
    emailError.textContent = '';
    emailError.className = 'error';
  });

  email.addEventListener('blur', () => {
    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
    } else {
      showEmailError();
      emailError.className = 'error active';
    }
  });
}

function showEmailError() {
  const { email } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.emailElement)();
  const { emailError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.emailElement)();

  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}




/***/ }),

/***/ "./src/findElement.js":
/*!****************************!*\
  !*** ./src/findElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "confirmElement": () => (/* binding */ confirmElement),
/* harmony export */   "countryElement": () => (/* binding */ countryElement),
/* harmony export */   "emailElement": () => (/* binding */ emailElement),
/* harmony export */   "passwordElement": () => (/* binding */ passwordElement),
/* harmony export */   "submitElement": () => (/* binding */ submitElement),
/* harmony export */   "zipElement": () => (/* binding */ zipElement)
/* harmony export */ });
function emailElement() {
  const email = document.querySelector('#email');
  const emailError = document.querySelector('#email + span.error');
  return { email, emailError };
}

function countryElement() {
  const country = document.querySelector('#country');
  const countryError = document.querySelector('#country + span.error');
  return { country, countryError };
}

function zipElement() {
  const zip = document.querySelector('#zip');
  const zipError = document.querySelector('#zip + span.error');
  return { zip, zipError };
}

function passwordElement() {
  const password = document.querySelector('#password');
  const passwordError = document.querySelector('#password + span.error');
  return { password, passwordError };
}

function confirmElement() {
  const confirm = document.querySelector('#confirm');
  const confirmError = document.querySelector('#confirm + span.error');
  return { confirm, confirmError };
}

function submitElement() {
  const form = document.querySelector('form');
  const highfive = document.querySelector('.highfive');
  return { form, highfive };
}




/***/ }),

/***/ "./src/passwordField.js":
/*!******************************!*\
  !*** ./src/passwordField.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkPasswordValid": () => (/* binding */ checkPasswordValid),
/* harmony export */   "showPasswordError": () => (/* binding */ showPasswordError)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");


function checkPasswordValid() {
  const { password } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.passwordElement)();
  const { passwordError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.passwordElement)();

  password.addEventListener('focus', () => {
    password.classList.remove('initial');
    passwordError.textContent = '';
    passwordError.className = 'error';
  });

  password.addEventListener('blur', () => {
    if (password.validity.valid) {
      passwordError.textContent = '';
      passwordError.className = 'error';
    } else {
      showPasswordError();
      passwordError.className = 'error active';
    }
  });
}

function showPasswordError() {
  const { password } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.passwordElement)();
  const { passwordError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.passwordElement)();

  if (password.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password.';
  } else if (password.validity.patternMismatch) {
    passwordError.textContent =
      'Password should contain at least one capital letter, one small letter and one special character.';
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
}



/***/ }),

/***/ "./src/submitControl.js":
/*!******************************!*\
  !*** ./src/submitControl.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkFromValid": () => (/* binding */ checkFromValid),
/* harmony export */   "initialFrom": () => (/* binding */ initialFrom)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");
/* harmony import */ var _emailField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailField */ "./src/emailField.js");
/* harmony import */ var _countryField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countryField */ "./src/countryField.js");
/* harmony import */ var _zipField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zipField */ "./src/zipField.js");
/* harmony import */ var _passwordField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passwordField */ "./src/passwordField.js");
/* harmony import */ var _confirmField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmField */ "./src/confirmField.js");







function initialFrom() {
  const input = document.querySelectorAll('input');
  input.forEach((element) => {
    element.classList.add('initial');
  });
}

function showAllErrors(form) {
  if (!form.checkValidity()) {
    (0,_emailField__WEBPACK_IMPORTED_MODULE_1__.showEmailError)();
    (0,_countryField__WEBPACK_IMPORTED_MODULE_2__.showCountryError)();
    (0,_zipField__WEBPACK_IMPORTED_MODULE_3__.showZipError)();
    (0,_passwordField__WEBPACK_IMPORTED_MODULE_4__.showPasswordError)();
    (0,_confirmField__WEBPACK_IMPORTED_MODULE_5__.showConfirmError)();
  }
}

function checkFromValid() {
  const { form } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.submitElement)();
  const { highfive } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.submitElement)();

  form.addEventListener('submit', (event) => {
    if (form.checkValidity()) {
      event.preventDefault();
      highfive.textContent = 'Form Submitted!';
      form.reset();
      initialFrom();
    } else {
      event.preventDefault();
      showAllErrors(form);
      highfive.textContent = 'Please complete the form.';
    }
  });
}




/***/ }),

/***/ "./src/zipField.js":
/*!*************************!*\
  !*** ./src/zipField.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkZipValid": () => (/* binding */ checkZipValid),
/* harmony export */   "showZipError": () => (/* binding */ showZipError)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");


function checkZipValid() {
  const { zip } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.zipElement)();
  const { zipError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.zipElement)();

  zip.addEventListener('focus', () => {
    zip.classList.remove('initial');
    zipError.textContent = '';
    zipError.className = 'error';
  });

  zip.addEventListener('blur', () => {
    if (zip.validity.valid) {
      zipError.textContent = '';
      zipError.className = 'error';
    } else {
      showZipError();
      zipError.className = 'error active';
    }
  });
}

function showZipError() {
  const { zip } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.zipElement)();
  const { zipError } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__.zipElement)();

  if (zip.validity.valueMissing) {
    zipError.textContent = 'You need to enter a zip code.';
  } else if (zip.validity.patternMismatch) {
    zipError.textContent =
      'Zip code only accepts capital letters, numbers or "-".';
  } else if (zip.validity.tooShort) {
    zipError.textContent = `Zip code should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
  }
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _emailField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailField */ "./src/emailField.js");
/* harmony import */ var _countryField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countryField */ "./src/countryField.js");
/* harmony import */ var _zipField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zipField */ "./src/zipField.js");
/* harmony import */ var _passwordField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passwordField */ "./src/passwordField.js");
/* harmony import */ var _confirmField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmField */ "./src/confirmField.js");
/* harmony import */ var _submitControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submitControl */ "./src/submitControl.js");








(0,_emailField__WEBPACK_IMPORTED_MODULE_1__.checkEmailValid)();
(0,_countryField__WEBPACK_IMPORTED_MODULE_2__.checkCountryValid)();
(0,_zipField__WEBPACK_IMPORTED_MODULE_3__.checkZipValid)();
(0,_passwordField__WEBPACK_IMPORTED_MODULE_4__.checkPasswordValid)();
(0,_confirmField__WEBPACK_IMPORTED_MODULE_5__.checkConfirmValid)();
(0,_submitControl__WEBPACK_IMPORTED_MODULE_6__.checkFromValid)();
(0,_submitControl__WEBPACK_IMPORTED_MODULE_6__.initialFrom)();

// 1 Email
// 2 Country
// 3 Zip Codes
// 4 Password
// 5 Password Confirmation

// Red highlight
// Helpful error message

// Button give error message,
// if active errors, or unfilled required

// All validation in Javascript

// Give the user a high five, if successful

// Auto validate if user leaves a field

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMERBQTBELGVBQWUsWUFBWSxjQUFjLGlCQUFpQjtBQUNwSDtBQUNBOztBQUV1Qzs7Ozs7OztVQ3JDdkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNJO0FBQ1I7QUFDVTtBQUNGO0FBQ1c7O0FBRTlELDREQUFlO0FBQ2YsZ0VBQWlCO0FBQ2pCLHdEQUFhO0FBQ2Isa0VBQWtCO0FBQ2xCLGdFQUFpQjtBQUNqQiw4REFBYztBQUNkLDJEQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9jb25maXJtRmllbGQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2NvdW50cnlGaWVsZC5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvZW1haWxGaWVsZC5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvZmluZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL3Bhc3N3b3JkRmllbGQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL3N1Ym1pdENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL3ppcEZpZWxkLmpzIiwid2VicGFjazovL25wbS1zZXR1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTAsIDUwLCA1MCk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbn1cXG5cXG5mb3JtIGRpdiB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBzYWxtb247ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxNXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBib3JkZXItY29sb3I6ICM5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkO1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkLmluaXRpYWwge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcblxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG59XFxuXFxuLmVycm9yLmFjdGl2ZSB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuLmhpZ2hmaXZlIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTs7RUFFVixlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJnYig1MCwgNTAsIDUwKTtcXG59XFxuXFxubGFiZWwge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxufVxcblxcbmZvcm0gZGl2IHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHNhbG1vbjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDE1cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxufVxcblxcbmlucHV0IHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogIzkwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGQ7XFxufVxcblxcbmlucHV0OmludmFsaWQuaW5pdGlhbCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbn1cXG5cXG4uZXJyb3IuYWN0aXZlIHtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbn1cXG5cXG4uaGlnaGZpdmUge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbmZpcm1FbGVtZW50LCBwYXNzd29yZEVsZW1lbnQgfSBmcm9tICcuL2ZpbmRFbGVtZW50JztcblxuZnVuY3Rpb24gY2hlY2tDb25maXJtVmFsaWQoKSB7XG4gIGNvbnN0IHsgY29uZmlybSB9ID0gY29uZmlybUVsZW1lbnQoKTtcbiAgY29uc3QgeyBjb25maXJtRXJyb3IgfSA9IGNvbmZpcm1FbGVtZW50KCk7XG5cbiAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBjb25zdCBwd1ZhbHVlID0gcGFzc3dvcmRFbGVtZW50KCkucGFzc3dvcmQudmFsdWU7XG4gICAgY29uZmlybS5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsJyk7XG4gICAgY29uZmlybS5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCBwd1ZhbHVlKTtcbiAgICBjb25maXJtRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25maXJtRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgfSk7XG5cbiAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlmIChjb25maXJtLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBjb25maXJtRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGNvbmZpcm1FcnJvci5jbGFzc05hbWUgPSAnZXJyb3InO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93Q29uZmlybUVycm9yKCk7XG4gICAgICBjb25maXJtRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yIGFjdGl2ZSc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0NvbmZpcm1FcnJvcigpIHtcbiAgY29uc3QgeyBjb25maXJtIH0gPSBjb25maXJtRWxlbWVudCgpO1xuICBjb25zdCB7IGNvbmZpcm1FcnJvciB9ID0gY29uZmlybUVsZW1lbnQoKTtcblxuICBpZiAoY29uZmlybS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBjb25maXJtRXJyb3IudGV4dENvbnRlbnQgPSAnWW91IG5lZWQgdG8gZW50ZXIgdGhlIHNhbWUgcGFzc3dvcmQgYWdhaW4uJztcbiAgfSBlbHNlIGlmIChjb25maXJtLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xuICAgIGNvbmZpcm1FcnJvci50ZXh0Q29udGVudCA9ICdUaGUgcGFzc3dvcmRzIHlvdSBlbnRlcmVkIGRvZXMgbm90IG1hdGNoLic7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2hlY2tDb25maXJtVmFsaWQsIHNob3dDb25maXJtRXJyb3IgfTtcbiIsImltcG9ydCB7IGNvdW50cnlFbGVtZW50IH0gZnJvbSAnLi9maW5kRWxlbWVudCc7XG5cbmZ1bmN0aW9uIGNoZWNrQ291bnRyeVZhbGlkKCkge1xuICBjb25zdCB7IGNvdW50cnkgfSA9IGNvdW50cnlFbGVtZW50KCk7XG4gIGNvbnN0IHsgY291bnRyeUVycm9yIH0gPSBjb3VudHJ5RWxlbWVudCgpO1xuXG4gIGNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgY291bnRyeS5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsJyk7XG4gICAgY291bnRyeUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgY291bnRyeUVycm9yLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gIH0pO1xuXG4gIGNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoY291bnRyeS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgY291bnRyeUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBjb3VudHJ5RXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0NvdW50cnlFcnJvcigpO1xuICAgICAgY291bnRyeUVycm9yLmNsYXNzTmFtZSA9ICdlcnJvciBhY3RpdmUnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dDb3VudHJ5RXJyb3IoKSB7XG4gIGNvbnN0IHsgY291bnRyeSB9ID0gY291bnRyeUVsZW1lbnQoKTtcbiAgY29uc3QgeyBjb3VudHJ5RXJyb3IgfSA9IGNvdW50cnlFbGVtZW50KCk7XG5cbiAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgY291bnRyeUVycm9yLnRleHRDb250ZW50ID0gJ1lvdSBuZWVkIHRvIGVudGVyIGEgY291bnRyeSBuYW1lLic7XG4gIH1cbn1cbmV4cG9ydCB7IGNoZWNrQ291bnRyeVZhbGlkLCBzaG93Q291bnRyeUVycm9yIH07XG4iLCJpbXBvcnQgeyBlbWFpbEVsZW1lbnQgfSBmcm9tICcuL2ZpbmRFbGVtZW50JztcblxuZnVuY3Rpb24gY2hlY2tFbWFpbFZhbGlkKCkge1xuICBjb25zdCB7IGVtYWlsIH0gPSBlbWFpbEVsZW1lbnQoKTtcbiAgY29uc3QgeyBlbWFpbEVycm9yIH0gPSBlbWFpbEVsZW1lbnQoKTtcblxuICBlbWFpbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsJyk7XG4gICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGVtYWlsRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgfSk7XG5cbiAgZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoZW1haWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGVtYWlsRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0VtYWlsRXJyb3IoKTtcbiAgICAgIGVtYWlsRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yIGFjdGl2ZSc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0VtYWlsRXJyb3IoKSB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IGVtYWlsRWxlbWVudCgpO1xuICBjb25zdCB7IGVtYWlsRXJyb3IgfSA9IGVtYWlsRWxlbWVudCgpO1xuXG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ1lvdSBuZWVkIHRvIGVudGVyIGFuIGUtbWFpbCBhZGRyZXNzLic7XG4gIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdFbnRlcmVkIHZhbHVlIG5lZWRzIHRvIGJlIGFuIGUtbWFpbCBhZGRyZXNzLic7XG4gIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gYEUtbWFpbCBzaG91bGQgYmUgYXQgbGVhc3QgJHtlbWFpbC5taW5MZW5ndGh9IGNoYXJhY3RlcnM7IHlvdSBlbnRlcmVkICR7ZW1haWwudmFsdWUubGVuZ3RofS5gO1xuICB9XG59XG5cbmV4cG9ydCB7IGNoZWNrRW1haWxWYWxpZCwgc2hvd0VtYWlsRXJyb3IgfTtcbiIsImZ1bmN0aW9uIGVtYWlsRWxlbWVudCgpIHtcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcbiAgY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCArIHNwYW4uZXJyb3InKTtcbiAgcmV0dXJuIHsgZW1haWwsIGVtYWlsRXJyb3IgfTtcbn1cblxuZnVuY3Rpb24gY291bnRyeUVsZW1lbnQoKSB7XG4gIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeScpO1xuICBjb25zdCBjb3VudHJ5RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeSArIHNwYW4uZXJyb3InKTtcbiAgcmV0dXJuIHsgY291bnRyeSwgY291bnRyeUVycm9yIH07XG59XG5cbmZ1bmN0aW9uIHppcEVsZW1lbnQoKSB7XG4gIGNvbnN0IHppcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6aXAnKTtcbiAgY29uc3QgemlwRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjemlwICsgc3Bhbi5lcnJvcicpO1xuICByZXR1cm4geyB6aXAsIHppcEVycm9yIH07XG59XG5cbmZ1bmN0aW9uIHBhc3N3b3JkRWxlbWVudCgpIHtcbiAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcbiAgY29uc3QgcGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCArIHNwYW4uZXJyb3InKTtcbiAgcmV0dXJuIHsgcGFzc3dvcmQsIHBhc3N3b3JkRXJyb3IgfTtcbn1cblxuZnVuY3Rpb24gY29uZmlybUVsZW1lbnQoKSB7XG4gIGNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybScpO1xuICBjb25zdCBjb25maXJtRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybSArIHNwYW4uZXJyb3InKTtcbiAgcmV0dXJuIHsgY29uZmlybSwgY29uZmlybUVycm9yIH07XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVsZW1lbnQoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGNvbnN0IGhpZ2hmaXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hmaXZlJyk7XG4gIHJldHVybiB7IGZvcm0sIGhpZ2hmaXZlIH07XG59XG5cbmV4cG9ydCB7XG4gIGVtYWlsRWxlbWVudCxcbiAgY291bnRyeUVsZW1lbnQsXG4gIHppcEVsZW1lbnQsXG4gIHBhc3N3b3JkRWxlbWVudCxcbiAgY29uZmlybUVsZW1lbnQsXG4gIHN1Ym1pdEVsZW1lbnQsXG59O1xuIiwiaW1wb3J0IHsgcGFzc3dvcmRFbGVtZW50IH0gZnJvbSAnLi9maW5kRWxlbWVudCc7XG5cbmZ1bmN0aW9uIGNoZWNrUGFzc3dvcmRWYWxpZCgpIHtcbiAgY29uc3QgeyBwYXNzd29yZCB9ID0gcGFzc3dvcmRFbGVtZW50KCk7XG4gIGNvbnN0IHsgcGFzc3dvcmRFcnJvciB9ID0gcGFzc3dvcmRFbGVtZW50KCk7XG5cbiAgcGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgcGFzc3dvcmQuY2xhc3NMaXN0LnJlbW92ZSgnaW5pdGlhbCcpO1xuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYXNzd29yZEVycm9yLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gIH0pO1xuXG4gIHBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBwYXNzd29yZEVycm9yLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dQYXNzd29yZEVycm9yKCk7XG4gICAgICBwYXNzd29yZEVycm9yLmNsYXNzTmFtZSA9ICdlcnJvciBhY3RpdmUnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dQYXNzd29yZEVycm9yKCkge1xuICBjb25zdCB7IHBhc3N3b3JkIH0gPSBwYXNzd29yZEVsZW1lbnQoKTtcbiAgY29uc3QgeyBwYXNzd29yZEVycm9yIH0gPSBwYXNzd29yZEVsZW1lbnQoKTtcblxuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdZb3UgbmVlZCB0byBlbnRlciBhIHBhc3N3b3JkLic7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9XG4gICAgICAnUGFzc3dvcmQgc2hvdWxkIGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNhcGl0YWwgbGV0dGVyLCBvbmUgc21hbGwgbGV0dGVyIGFuZCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXIuJztcbiAgfSBlbHNlIGlmIChwYXNzd29yZC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSBgUGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0ICR7cGFzc3dvcmQubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke3Bhc3N3b3JkLnZhbHVlLmxlbmd0aH0uYDtcbiAgfVxufVxuZXhwb3J0IHsgY2hlY2tQYXNzd29yZFZhbGlkLCBzaG93UGFzc3dvcmRFcnJvciB9O1xuIiwiaW1wb3J0IHsgc3VibWl0RWxlbWVudCB9IGZyb20gJy4vZmluZEVsZW1lbnQnO1xuaW1wb3J0IHsgc2hvd0VtYWlsRXJyb3IgfSBmcm9tICcuL2VtYWlsRmllbGQnO1xuaW1wb3J0IHsgc2hvd0NvdW50cnlFcnJvciB9IGZyb20gJy4vY291bnRyeUZpZWxkJztcbmltcG9ydCB7IHNob3daaXBFcnJvciB9IGZyb20gJy4vemlwRmllbGQnO1xuaW1wb3J0IHsgc2hvd1Bhc3N3b3JkRXJyb3IgfSBmcm9tICcuL3Bhc3N3b3JkRmllbGQnO1xuaW1wb3J0IHsgc2hvd0NvbmZpcm1FcnJvciB9IGZyb20gJy4vY29uZmlybUZpZWxkJztcblxuZnVuY3Rpb24gaW5pdGlhbEZyb20oKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgaW5wdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbCcpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0FsbEVycm9ycyhmb3JtKSB7XG4gIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBzaG93RW1haWxFcnJvcigpO1xuICAgIHNob3dDb3VudHJ5RXJyb3IoKTtcbiAgICBzaG93WmlwRXJyb3IoKTtcbiAgICBzaG93UGFzc3dvcmRFcnJvcigpO1xuICAgIHNob3dDb25maXJtRXJyb3IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zyb21WYWxpZCgpIHtcbiAgY29uc3QgeyBmb3JtIH0gPSBzdWJtaXRFbGVtZW50KCk7XG4gIGNvbnN0IHsgaGlnaGZpdmUgfSA9IHN1Ym1pdEVsZW1lbnQoKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhpZ2hmaXZlLnRleHRDb250ZW50ID0gJ0Zvcm0gU3VibWl0dGVkISc7XG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBpbml0aWFsRnJvbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2hvd0FsbEVycm9ycyhmb3JtKTtcbiAgICAgIGhpZ2hmaXZlLnRleHRDb250ZW50ID0gJ1BsZWFzZSBjb21wbGV0ZSB0aGUgZm9ybS4nO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxGcm9tLCBjaGVja0Zyb21WYWxpZCB9O1xuIiwiaW1wb3J0IHsgemlwRWxlbWVudCB9IGZyb20gJy4vZmluZEVsZW1lbnQnO1xuXG5mdW5jdGlvbiBjaGVja1ppcFZhbGlkKCkge1xuICBjb25zdCB7IHppcCB9ID0gemlwRWxlbWVudCgpO1xuICBjb25zdCB7IHppcEVycm9yIH0gPSB6aXBFbGVtZW50KCk7XG5cbiAgemlwLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgIHppcC5jbGFzc0xpc3QucmVtb3ZlKCdpbml0aWFsJyk7XG4gICAgemlwRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICB6aXBFcnJvci5jbGFzc05hbWUgPSAnZXJyb3InO1xuICB9KTtcblxuICB6aXAuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoemlwLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB6aXBFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgemlwRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1ppcEVycm9yKCk7XG4gICAgICB6aXBFcnJvci5jbGFzc05hbWUgPSAnZXJyb3IgYWN0aXZlJztcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93WmlwRXJyb3IoKSB7XG4gIGNvbnN0IHsgemlwIH0gPSB6aXBFbGVtZW50KCk7XG4gIGNvbnN0IHsgemlwRXJyb3IgfSA9IHppcEVsZW1lbnQoKTtcblxuICBpZiAoemlwLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHppcEVycm9yLnRleHRDb250ZW50ID0gJ1lvdSBuZWVkIHRvIGVudGVyIGEgemlwIGNvZGUuJztcbiAgfSBlbHNlIGlmICh6aXAudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgemlwRXJyb3IudGV4dENvbnRlbnQgPVxuICAgICAgJ1ppcCBjb2RlIG9ubHkgYWNjZXB0cyBjYXBpdGFsIGxldHRlcnMsIG51bWJlcnMgb3IgXCItXCIuJztcbiAgfSBlbHNlIGlmICh6aXAudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICB6aXBFcnJvci50ZXh0Q29udGVudCA9IGBaaXAgY29kZSBzaG91bGQgYmUgYXQgbGVhc3QgJHt6aXAubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke3ppcC52YWx1ZS5sZW5ndGh9LmA7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2hlY2taaXBWYWxpZCwgc2hvd1ppcEVycm9yIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNoZWNrRW1haWxWYWxpZCB9IGZyb20gJy4vZW1haWxGaWVsZCc7XG5pbXBvcnQgeyBjaGVja0NvdW50cnlWYWxpZCB9IGZyb20gJy4vY291bnRyeUZpZWxkJztcbmltcG9ydCB7IGNoZWNrWmlwVmFsaWQgfSBmcm9tICcuL3ppcEZpZWxkJztcbmltcG9ydCB7IGNoZWNrUGFzc3dvcmRWYWxpZCB9IGZyb20gJy4vcGFzc3dvcmRGaWVsZCc7XG5pbXBvcnQgeyBjaGVja0NvbmZpcm1WYWxpZCB9IGZyb20gJy4vY29uZmlybUZpZWxkJztcbmltcG9ydCB7IGNoZWNrRnJvbVZhbGlkLCBpbml0aWFsRnJvbSB9IGZyb20gJy4vc3VibWl0Q29udHJvbCc7XG5cbmNoZWNrRW1haWxWYWxpZCgpO1xuY2hlY2tDb3VudHJ5VmFsaWQoKTtcbmNoZWNrWmlwVmFsaWQoKTtcbmNoZWNrUGFzc3dvcmRWYWxpZCgpO1xuY2hlY2tDb25maXJtVmFsaWQoKTtcbmNoZWNrRnJvbVZhbGlkKCk7XG5pbml0aWFsRnJvbSgpO1xuXG4vLyAxIEVtYWlsXG4vLyAyIENvdW50cnlcbi8vIDMgWmlwIENvZGVzXG4vLyA0IFBhc3N3b3JkXG4vLyA1IFBhc3N3b3JkIENvbmZpcm1hdGlvblxuXG4vLyBSZWQgaGlnaGxpZ2h0XG4vLyBIZWxwZnVsIGVycm9yIG1lc3NhZ2VcblxuLy8gQnV0dG9uIGdpdmUgZXJyb3IgbWVzc2FnZSxcbi8vIGlmIGFjdGl2ZSBlcnJvcnMsIG9yIHVuZmlsbGVkIHJlcXVpcmVkXG5cbi8vIEFsbCB2YWxpZGF0aW9uIGluIEphdmFzY3JpcHRcblxuLy8gR2l2ZSB0aGUgdXNlciBhIGhpZ2ggZml2ZSwgaWYgc3VjY2Vzc2Z1bFxuXG4vLyBBdXRvIHZhbGlkYXRlIGlmIHVzZXIgbGVhdmVzIGEgZmllbGRcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==