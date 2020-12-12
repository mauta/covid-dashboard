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
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/block/search.js");



class Cases extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parent, data) {
    const inner = '<h2 class = "cases__title"> Global cases</h2>';
    super(parent.node, 'section', 'cases', inner);
    this.allCases = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'p', 'cases__all', data);
    this.search = new _search__WEBPACK_IMPORTED_MODULE_1__["default"](this.node);
  }
}


/***/ }),

/***/ "./src/block/chart.js":
/*!****************************!*\
  !*** ./src/block/chart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class Chart extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, dataForChart) {
    super(parentNode, 'canvas', 'canvas');
    this.parentNode = parentNode;
    this.data = dataForChart;
    this.render(this.data);

    this.addListener('onResize', () => {
      this.reRender();
    });
  }

  render(data) {
    const TOP_PDNG = 100;
    const SIZE_PDNG = 40;
    const AXE_PDNG = 20;
    this.dataArr = data.map((el) => el[0]);

    this.ctx = this.node.getContext('2d');

    const y = this.parentNode.offsetHeight - TOP_PDNG;
    const x = this.parentNode.offsetWidth - SIZE_PDNG;

    this.node.width = x;
    this.node.height = y;
    this.ctx.strokeStyle = '#008000';
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(AXE_PDNG, AXE_PDNG);
    this.ctx.lineTo(AXE_PDNG, y - AXE_PDNG);
    this.ctx.moveTo(AXE_PDNG, y - AXE_PDNG);
    this.ctx.lineTo(x - AXE_PDNG, y - AXE_PDNG);
    this.ctx.stroke();

    this.YLenght = y - 2 * AXE_PDNG;
    this.XLenght = x - 2 * AXE_PDNG;
    this.maxY = Math.max.apply(null, this.dataArr);
    this.XKoef = this.XLenght / this.dataArr.length;
    this.YKoef = this.YLenght / this.maxY;
    this.ctx.fillStyle = '#008000';
    this.ctx.fillText(`${this.maxY}`, 3, AXE_PDNG, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.25)}`, 3, AXE_PDNG + this.YLenght * 0.75, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.5)}`, 3, AXE_PDNG + this.YLenght * 0.5, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.75)}`, 3, AXE_PDNG + this.YLenght * 0.25, AXE_PDNG - 6);

    this.ctx.fillText(`${data[data.length - 1][1]}`, this.XLenght - 5, AXE_PDNG * 1.7 + this.YLenght);
    this.ctx.fillText(`${data[Math.round(data.length / 2)][1]}`, AXE_PDNG + this.XLenght * 0.5, AXE_PDNG * 1.7 + this.YLenght);

    this.ctx.fillText(`${data[0][1]}`, AXE_PDNG + this.XLenght * 0, AXE_PDNG * 1.7 + this.YLenght);
    this.ctx.fill();

    const draw = (param) => {
      for (let i = 0; i < param.length; i += 1) {
        const curentY = y - AXE_PDNG - param[i] * this.YKoef;
        this.ctx.fillStyle = '#008000';
        this.ctx.fillRect(i * this.XKoef + AXE_PDNG, curentY, this.XKoef, param[i] * this.YKoef);
      }
    };
    draw(this.dataArr);
  }

  reRender() {
    this.clear();
    this.render(this.data);
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

/***/ "./src/block/img.js":
/*!**************************!*\
  !*** ./src/block/img.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Img; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");


class Img extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, className, src, alt) {
    super(parentNode, 'img', className);
    this.node.src = src;
    this.node.alt = alt;
  }
}


/***/ }),

/***/ "./src/block/list.js":
/*!***************************!*\
  !*** ./src/block/list.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _list_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_line */ "./src/block/list_line.js");



class List extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, data) {
    super(parentNode, 'ul', 'list');
    data.forEach(element => {
      new _list_line__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, element);
    });
  }
}


/***/ }),

/***/ "./src/block/list_line.js":
/*!********************************!*\
  !*** ./src/block/list_line.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListLine; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _utils_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/toggle */ "./src/utils/toggle.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img */ "./src/block/img.js");




class ListLine extends _utils_toggle__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(parentNode, data) {
    super(parentNode, 'li', 'list__item--active', 'list__item');
    this.flag = new _img__WEBPACK_IMPORTED_MODULE_2__["default"](this.node, 'list__flag', data.src, data.country);
    this.country = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'list__country', data.country);
    this.count = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'list__count', data.count.toLocaleString('ru-RU'));
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
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart */ "./src/block/chart.js");
/* eslint-disable no-new */






class PageBox extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, modifier) {
    super(parentNode, 'section', `pagebox__wrapper pagebox__wrapper--${modifier}`);
    this.itemWrapper = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'pagebox__main');

    this.btnFullScreen = new _btn_fullscreen__WEBPACK_IMPORTED_MODULE_2__["default"](this.node, () => {
      this.node.classList.toggle('pagebox__wrapper--full-screen');
      if (modifier === 'chart') {
        this.item.dispath('onResize');
      }
    });

    this.items = [];
    this.pagination = new _utils_item_group__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, 'pagebox__marks', 'pagebox__mark pagebox__mark--active', 'pagebox__mark');
    this.pagination.onSelect = (index) => {
      this.items.forEach((it, i) => it.node.style.display = (i != index) ? 'none' : ''); // может цсс-класс-модификатор
    };
  }

  addItem(caption, title, className, content) {
    this.page = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.itemWrapper.node, 'div', 'pagebox__page');
    new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.page.node, 'h2', 'pagebox__title', `Global ${title}`);
    this.item = new className(this.page.node, content);
    this.items.push(this.page);
    this.pagination.addItem(caption);

    let resizeTimeout;

    const resizeThrottler = () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          this.item.reRender();
        }, 200);
      }
    };

    if (this.item instanceof _chart__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      window.addEventListener('resize', resizeThrottler, false);
    }
  }
}


/***/ }),

/***/ "./src/block/search.js":
/*!*****************************!*\
  !*** ./src/block/search.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");
/* harmony import */ var _btn_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn_search */ "./src/block/btn_search.js");



class Search extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parent) {
    super(parent, 'div', 'search-wrap');
    this.btnSearch = new _btn_search__WEBPACK_IMPORTED_MODULE_1__["default"](this.node);
    this.input = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'input', 'search__input');
    this.input.node.type = 'text';
    this.input.node.pattern = '^[a-zA-Z\s]+$';

    this.ul = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'ul', 'search__list search__list--hidden');
    // new Control(this.ul.node, 'li', 'search__item', 'первый');
    // new Control(this.ul.node, 'li', 'search__item', 'первый');
    // new Control(this.ul.node, 'li', 'search__item', 'первый');
    // new Control(this.ul.node, 'li', 'search__item', 'первый');
    // new Control(this.ul.node, 'li', 'search__item', 'первый');

    const countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'].map((item) => item.toLowerCase());
    this.word = '';
    this.input.node.addEventListener('keypress', (el) => {
      this.ul.node.classList.remove('search__list--hidden');
      this.ul.clear();
      this.word = this.input.node.value;
      this.arrCountry = countries.filter((item) => item.startsWith(this.word));
      this.arrCountry.forEach((item) => {
        new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.ul.node, 'li', 'search__item', `${item}`);
      });
      if (this.arrCountry.length === 0) {
        this.ul.node.classList.add('search__list--hidden');
      }
    });
  }
}


/***/ }),

/***/ "./src/block/table.js":
/*!****************************!*\
  !*** ./src/block/table.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _utils_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/control */ "./src/utils/control.js");



class Table extends _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(parentNode, data) {
    super(parentNode, 'table');
// тут тоже сама придумай какого типа и вида данные будут приходить и как их будешь вставлять
    this.title = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'tr', '', '<td></td><td>all</td><td>new</td>');
    this.cases = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'tr', '', `<td>cases</td><td>${data.allCases}</td><td>${data.newCases}</td>`);
    this.deaths = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'tr', '', `<td>deaths</td><td>${data.alldeaths}</td><td>${data.newdeaths}</td>`);
    this.recovered = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'tr', '', `<td>recovered</td><td>${data.allrecovered}</td><td>${data.newrecovered}</td>`);
  }
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
/* harmony import */ var _block_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block/list */ "./src/block/list.js");
/* harmony import */ var _block_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block/table */ "./src/block/table.js");
/* harmony import */ var _block_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block/chart */ "./src/block/chart.js");
/* harmony import */ var _utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/counting_cases */ "./src/utils/counting_cases.js");










const urlAPI = 'https://corona.lmao.ninja/v2/countries';
fetch(urlAPI).then((res) => res.json()).then((json) => {
  const header = new _block_header__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const main = new _utils_control__WEBPACK_IMPORTED_MODULE_0__["default"](document.body, 'main', 'main');

  let allCases = 0;
  let newCases = 0;
  let alldeaths = 0;
  let newdeaths = 0;
  let allrecovered = 0;
  let newrecovered = 0;
  let hundredAllCase = 0;
  let hundredDeathsCase = 0;
  let hundredRecoveredsCase = 0;

  json.forEach((keys) => {
    allCases += keys.cases;
    newCases += keys.todayCases;
    alldeaths += keys.deaths;
    newdeaths += keys.todayDeaths;
    allrecovered += keys.recovered;
    newrecovered += keys.todayRecovered;
    hundredAllCase += keys.casesPerOneMillion / 10;
    hundredDeathsCase += keys.deathsPerOneMillion / 10;
    hundredRecoveredsCase += keys.recoveredPerOneMillion / 10;
  });

  const cases = new _block_cases__WEBPACK_IMPORTED_MODULE_3__["default"](main, allCases.toLocaleString('ru-RU'));
  const mapBox = new _block_page_box__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'map');

  // mapBox.addItem('1', 'first');
  // mapBox.addItem('2', 'second');
  // mapBox.addItem('3', 'third');

  const listBox = new _block_page_box__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'list');
  // константы ниже для хранения объектов с цифрами по каждой стране
  const globalCases = Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["globalCountSort"])(Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["globalCountCases"])(json));
  const globalDeaths = Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["globalCountSort"])(Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["globalCountDeaths"])(json));
  const globalRecovered = Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["globalCountSort"])(Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["globalCountRecovered"])(json));
  const newCasesCount = Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["newCountCases"])(json);
  const newDeaths = Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["newCountDeaths"])(json);
  const newRecovered = Object(_utils_counting_cases__WEBPACK_IMPORTED_MODULE_8__["newCountRecovered"])(json);

  listBox.addItem('GC', 'Cases', _block_list__WEBPACK_IMPORTED_MODULE_5__["default"], globalCases);
  listBox.addItem('GD', 'Deaths', _block_list__WEBPACK_IMPORTED_MODULE_5__["default"], globalDeaths);
  listBox.addItem('GR', 'Recovered', _block_list__WEBPACK_IMPORTED_MODULE_5__["default"], globalRecovered);
  listBox.pagination.select(0);

  const tableBox = new _block_page_box__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'table');

  const tableData = {
    allCases: allCases.toLocaleString('ru-RU'),
    newCases: newCases.toLocaleString('ru-RU'),
    alldeaths: alldeaths.toLocaleString('ru-RU'),
    newdeaths: newdeaths.toLocaleString('ru-RU'),
    allrecovered: allrecovered.toLocaleString('ru-RU'),
    newrecovered: newrecovered.toLocaleString('ru-RU'),
  };

  const hundredData = {
    allCases: hundredAllCase.toLocaleString('ru-RU'),
    newCases: newCases.toLocaleString('ru-RU'),
    alldeaths: hundredDeathsCase.toLocaleString('ru-RU'),
    newdeaths: newdeaths.toLocaleString('ru-RU'),
    allrecovered: hundredRecoveredsCase.toLocaleString('ru-RU'),
    newrecovered: newrecovered.toLocaleString('ru-RU'),
  };

  tableBox.addItem('GC', 'Cases', _block_table__WEBPACK_IMPORTED_MODULE_6__["default"], tableData);
  tableBox.addItem('1/100 000', 'Cases', _block_table__WEBPACK_IMPORTED_MODULE_6__["default"], hundredData);

  tableBox.pagination.select(0);

  const chartBox = new _block_page_box__WEBPACK_IMPORTED_MODULE_4__["default"](main.node, 'chart');

  const arr = [
    [68, '15.03.20'],
    [32, '15.03.20'],
    [82, '16.06.20'],
    [1, '15.08.20'],
    [122, '15.03.20'],
    [12, '15.03.20'],
    [25, '20.12.20'],
  ];

  chartBox.addItem('GC', 'Cases', _block_chart__WEBPACK_IMPORTED_MODULE_7__["default"], arr);
  // tableBox.addItem('GD', 'Deaths', List, listData);
  // tableBox.addItem('GR', 'Recovered', List, listData);

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

/***/ "./src/utils/counting_cases.js":
/*!*************************************!*\
  !*** ./src/utils/counting_cases.js ***!
  \*************************************/
/*! exports provided: globalCountCases, globalCountDeaths, globalCountRecovered, newCountCases, newCountDeaths, newCountRecovered, globalCountSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalCountCases", function() { return globalCountCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalCountDeaths", function() { return globalCountDeaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalCountRecovered", function() { return globalCountRecovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCountCases", function() { return newCountCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCountDeaths", function() { return newCountDeaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCountRecovered", function() { return newCountRecovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalCountSort", function() { return globalCountSort; });
function count(massCases, country, value, flag = '') {
  massCases.push({
    src: flag,
    country,
    count: value,
  });
  return massCases;
}

function globalCountCases(json, massCases = []) {
  json.forEach((keys) => {
    count(massCases, keys.country, keys.cases, keys.countryInfo.flag);
  });
  return massCases;
}

function globalCountDeaths(json, massCases = []) {
  json.forEach((keys) => {
    count(massCases, keys.country, keys.deaths, keys.countryInfo.flag);
  });
  return massCases;
}

function globalCountRecovered(json, massCases = []) {
  json.forEach((keys) => {
    count(massCases, keys.country, keys.recovered, keys.countryInfo.flag);
  });
  return massCases;
}

function newCountCases(json, massCases = []) {
  json.forEach((keys) => {
    count(massCases, keys.country, keys.todayCases);
  });
  return massCases;
}

function newCountDeaths(json, massCases = []) {
  json.forEach((keys) => {
    count(massCases, keys.country, keys.todayDeaths);
  });
  return massCases;
}

function newCountRecovered(json, massCases = []) {
  json.forEach((keys) => {
    count(massCases, keys.country, keys.todayRecovered);
  });
  return massCases;
}

function globalCountSort(massCases) {
  massCases.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    if (a.count < b.count) {
      return 1;
    }
    return 0;
  });
  return massCases;
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
    const item = new _toggle__WEBPACK_IMPORTED_MODULE_0__["default"](this.node,'div', this.activeItemClass, this.inactiveItemClass, caption, () => {
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
class Observer {
  constructor() {
    this.listeners = [];
  }

  addListener(name, callback) {
    const id = {};
    this.listeners.push({
      id,
      name,
      callback,
    });
    return id;
  }

  addOnceListener(name, callback) {
    const id = {};
    this.listeners.push({
      id,
      name,
      callback: () => {
        callback();
        this.removeListener(id);
      },
    });
    return id;
  }

  removeListener(id) {
    this.listeners = this.listeners.filter((it) => it.id !== id);
  }

  dispath(name) {
    this.listeners.filter((it) => it.name === name).forEach((it) => it.callback());
  }
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
  constructor(parentNode, tag, activeClass, inactiveClass, caption, onClick) {
    super(parentNode, tag, inactiveClass, caption);
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