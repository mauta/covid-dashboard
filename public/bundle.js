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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block/btn_fullscreen.js":
/*!*************************************!*\
  !*** ./src/block/btn_fullscreen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BtnFullScreen; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class BtnFullScreen extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parent, onClick) {
    const inner = '<span class="visually-hidden">Open on full screen</span>';
    super(parent, 'button', 'btn btn--full-screen', inner);
    this.node.setAttribute('type', 'button');

    this.node.onclick = onClick;
  }
}


/***/ }),

/***/ "./src/block/btn_search.js":
/*!*********************************!*\
  !*** ./src/block/btn_search.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BtnSearch; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class BtnSearch extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parent) {
    const inner = '<span class="visually-hidden">Search</span>';
    super(parent, 'button', 'btn btn--search', inner);
    this.node.setAttribute('type', 'button');
  }
}


// и вот тут надо писать много и красовой логики по поиску


/***/ }),

/***/ "./src/block/cases.js":
/*!****************************!*\
  !*** ./src/block/cases.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cases; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _btn_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn_search */ "./src/block/btn_search.js");



class Cases extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parent, data) {
    const inner = '<h2 class = "cases__title"> All cases</h2>';
    super(parent.node, 'section', 'cases', inner);
    this.allCases = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'cases__all', data);
    this.btnSearch = new _btn_search__WEBPACK_IMPORTED_MODULE_1__["default"](this.node);
  }
}


/***/ }),

/***/ "./src/block/footer.js":
/*!*****************************!*\
  !*** ./src/block/footer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class Footer extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const inner = `Developed by <a class="footer__link footer__link--gh" href="https://github.com/mauta">Mauta</a> and
    <a class="footer__link footer__link--gh" href="https://github.com/viklysx"> Victorya</a>
    <span> in </span>
    <a class="footer__link footer__link--rs" href="https://rs.school/js/"></a>`;
    super(document.body, 'footer', 'footer', inner);
  }
}


/***/ }),

/***/ "./src/block/header.js":
/*!*****************************!*\
  !*** ./src/block/header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class Header extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    const inner = '<h1 class = "header__title"> Covid Dashboard</h1>';
    super(document.body, 'header', 'header', inner);
  }
}


/***/ }),

/***/ "./src/block/page_box.js":
/*!*******************************!*\
  !*** ./src/block/page_box.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageBox; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _utils_item_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/item_group */ "./src/utils/item_group.js");
/* harmony import */ var _btn_fullscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn_fullscreen */ "./src/block/btn_fullscreen.js");




class PageBox extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, modifier) {
    super(parentNode, 'section', `pagebox__wrapper pagebox__wrapper--${modifier}`);
    this.itemWrapper = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'pagebox__main');

    this.btnFullScreen = new _btn_fullscreen__WEBPACK_IMPORTED_MODULE_2__["default"](this.node, () => {
      this.node.classList.toggle('pagebox__wrapper--full-screen');
    });


    this.items = [];
    this.pagination = new _utils_item_group__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, 'pagebox__marks', 'pagebox__mark pagebox__mark--active', 'pagebox__mark');
    this.pagination.onSelect = (index) => {
      this.items.forEach((it, i) => it.node.style.display = (i != index) ? 'none' : ''); // может цсс-класс-модификатор
    };
  }

  addItem(caption, content) {
    // здесь можно подумать о том что в айтемы пишем и как
    // может передаем класс, может снаружи заполняем..
    this.items.push(new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.itemWrapper.node, 'div', 'pagebox__page', content));
    this.pagination.addItem(caption);
  }
  // можно селект прокинуть повыше и эвенты
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/control */ "./src/utils/control.js");
/* harmony import */ var _block_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/footer */ "./src/block/footer.js");
/* harmony import */ var _block_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/header */ "./src/block/header.js");
/* harmony import */ var _block_cases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/cases */ "./src/block/cases.js");
/* harmony import */ var _block_page_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/page_box */ "./src/block/page_box.js");






const urlAPI = 'https://corona.lmao.ninja/v2/countries';
fetch(urlAPI).then((res) => res.json()).then((json) => {
  // сделала хедер отдельным классом - вдруг что-то добавить захотим в него
  const header = new _block_header__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const main = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](document.body, 'main', 'main');

  const allCases = json.reduce((acc, el) => {
    acc += el.cases;
    return acc;
  }, 0);

  const cases = new _block_cases__WEBPACK_IMPORTED_MODULE_3__["default"](main, allCases.toLocaleString('ru-RU'));

  const mapBox = new _block_page_box__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'map');

  mapBox.addItem('1', 'first');
  mapBox.addItem('2', 'second');
  mapBox.addItem('3', 'third');

  const listBox = new _block_page_box__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'list');
  listBox.addItem('1', 'first');
  listBox.addItem('2', 'second');
  listBox.addItem('3', 'third');

  const tableBox = new _block_page_box__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'table');
  tableBox.addItem('1', 'first');
  tableBox.addItem('2', 'second');
  tableBox.addItem('3', 'third');

  const chartBox = new _block_page_box__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'chart');
  chartBox.addItem('1', 'first');
  chartBox.addItem('2', 'second');
  chartBox.addItem('3', 'third');

  // сделала футер отдельным классом - вдруг что-то добавить захотим в него
  const footer = new _block_footer__WEBPACK_IMPORTED_MODULE_1__["default"]();
});


/***/ }),

/***/ "./src/utils/control.js":
/*!******************************!*\
  !*** ./src/utils/control.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Control; });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ "./src/utils/observer.js");


class Control extends _observer__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(parentNode, tag = 'div', className = '', content = '') {
    super();
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    parentNode.appendChild(this.node);
  }

  clear() {
    while (this.node.firstChild) {
      this.node.lastChild.remove();
    }
  }
}


/***/ }),

/***/ "./src/utils/item_group.js":
/*!*********************************!*\
  !*** ./src/utils/item_group.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemGroup; });
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle */ "./src/utils/toggle.js");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control */ "./src/utils/control.js");



class ItemGroup extends _control__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(parentNode, wrapperClass, activeItemClass, inactiveItemClass) {
    super(parentNode, 'div', wrapperClass);
    this.activeItemClass = activeItemClass;
    this.inactiveItemClass = inactiveItemClass;
    this.items = [];
    this.onSelect;
  }

  addItem(caption) {
    const item = new _toggle__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, this.activeItemClass, this.inactiveItemClass, caption, () => {
      this.select(this.items.findIndex((it) => item === it));
    });
    this.items.push(item);
  }

  select(index) {
    this.items.forEach((it) => it.changeState(false));
    this.items[index].changeState(true);
    this.onSelect && this.onSelect(index);
  }
}


/***/ }),

/***/ "./src/utils/observer.js":
/*!*******************************!*\
  !*** ./src/utils/observer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observer; });
class Observer{
  constructor(){
    this.listeners = [];
  }
  addListener(name, callback){
    let id = {};
    this.listeners.push({id, name, callback});
    return id;
  }
  addOnceListener(name, callback){
    let id = {};
    this.listeners.push({id, name, callback:()=>{
      callback();
      this.removeListener(id);
    }});
    return id;
  }
  removeListener(id){ this.listeners = this.listeners.filter(it=>it.id!=id); }
  dispath(name){ this.listeners.filter(it=>it.name==name).forEach(it=>it.callback()); }
}

/***/ }),

/***/ "./src/utils/toggle.js":
/*!*****************************!*\
  !*** ./src/utils/toggle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toggle; });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./src/utils/control.js");


class Toggle extends _control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, activeClass, inactiveClass, caption, onClick) {
    super(parentNode, 'div', inactiveClass, caption);
    this.activeClass = activeClass;
    this.inactiveClass = inactiveClass;
    this.onClick = onClick;
    this.isToggled;
    this.changeState(false);

    this.node.onclick = () => {
      this.changeState();
      this.onClick && this.onClick(this.isToggled);
    };
  }

  changeState(state) {
    if (state === undefined) {
      this.isToggled = !this.isToggled;
    } else {
      this.isToggled = state;
    }
    this.node.className = this.isToggled ? this.activeClass : this.inactiveClass;
    this.onChange && this.onChange(this.isToggled);
    return this.isToggled;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map