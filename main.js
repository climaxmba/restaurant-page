/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendContact)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/pages.js");


const contact = document.createElement("div"),
  contactStyle = document.createElement("style"),
  contactTxt = "Contact us";

contact.innerHTML = `<ul>
<li><span>Phone: </span><span>555-555-555</span></li>
<li><span>Email: </span><span>support@reallycoolresturant.com</span></li>
</ul>`;
contactStyle.innerHTML = `#contact ul {
    text-align: center;
    margin: 5rem 0;
    padding: 0;
    list-style: none;
}
#contact li {
    margin: 1rem 0;
    font-size: large;
}`;

contact.setAttribute("id", "contact");
contact.appendChild(contactStyle);

function appendContact() {
    _pages__WEBPACK_IMPORTED_MODULE_0__.content.insertBefore(contact, _pages__WEBPACK_IMPORTED_MODULE_0__.content.lastChild);
    document.getElementById("headertext").textContent = contactTxt;
    document.title = contactTxt;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendHome)
/* harmony export */ });
/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ "./src/pages.js");


const home = document.createElement("div"),
  homeStyle = document.createElement("style"),
  homeTxt = "Cocina de la Emperatriz";

home.innerHTML = `<div id="hometext">We offer a wide variety of foods from around the world!</div>
<div id="workinfo">
    <div>
        <h2>Hours</h2>
        <ul>
            <li>Week-days: 8:00am - 10:00pm</li>
            <li>Week-ends: 10:00am - 9:00pm</li>
        </ul>
    </div>
    <div>
        <h2>Location</h2>
        <ul>
            <li>Los Angeles, California</li>
            <li>Acapulco, Mexico</li>
        </ul>
    </div>
</div>`;
homeStyle.innerHTML = `#homepage {
    margin: 3rem 0;
}
#homepage ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
#hometext {
    font-style: italic;
    font-size: 1.5rem;
}
#workinfo {
    margin: 3rem 0;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#workinfo > div {
    width: 285px;
    padding: 1rem 2.5rem;
    background-color: darkgoldenrod;
    color: white;
}
#workinfo h2 {
    border-bottom: 2px solid;
}
#workinfo li {
    margin: 0.8rem 0;
}`;

home.setAttribute("id", "homepage");
home.className = "main center active";
home.appendChild(homeStyle);

function appendHome() {
  _pages_js__WEBPACK_IMPORTED_MODULE_0__.content.insertBefore(home, _pages_js__WEBPACK_IMPORTED_MODULE_0__.content.lastChild);
  document.getElementById("headertext").textContent = homeTxt;
  document.title = homeTxt;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendMenu)
/* harmony export */ });
/* harmony import */ var _img_tinto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/tinto.jpg */ "./src/img/tinto.jpg");
/* harmony import */ var _img_ribollita_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ribollita.jpg */ "./src/img/ribollita.jpg");
/* harmony import */ var _img_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/chocolate cake.jpg */ "./src/img/chocolate cake.jpg");
/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.js */ "./src/pages.js");





const menu = document.createElement("div"),
  menuStyle = document.createElement("style"),
  menuTxt = "Our foods";

menu.innerHTML = `<div id="dishes-contr">
<h2 class="center">Dishes</h2>
<div class="foods center">
    <div>
        <h3>Pork carnitas</h3>
        <p class="prices">$15.46</p>
    </div>
    <div>
        <h3>Gnocci</h3>
        <p class="prices">$13.15</p>
    </div>
    <div>
        <h3>Ribollita</h3>
        <p class="prices">$8.17</p>
    </div>
</div>
</div>
<div id="desserts-contr">
<h2 class="center">Desserts</h2>
<div class="foods center">
    <div>
        <h3>Chocolate cake</h3>
        <p class="prices">$8.00</p>
    </div>
    <div>
        <h3>Gingerbread</h3>
        <p class="prices">$5.20</p>
    </div>
    <div>
        <h3>Apple pie</h3>
        <p class="prices">$6.17</p>
    </div>
</div>
</div>
<div id="beverage-contr">
<h2 class="center">Beverages</h2>
<div class="foods center">
    <div>
        <h3>Verdejo</h3>
        <p class="prices">$15.20</p>
    </div>
    <div>
        <h3>Tinto de Verano</h3>
        <p class="prices">$36.00</p>
    </div>
    <div>
        <h3>Ribera del Duero</h3>
        <p class="prices">$28.60</p>
    </div>
</div>
</div>`;
menuStyle.innerHTML = `#menupage {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 1rem 0;
}
#menupage > div {
    margin: 15px;
}
#menupage h2:first-child {
    border-bottom: 2px solid;
}
#dishes-contr,
#desserts-contr,
#beverage-contr {
    padding: 1rem;
    border-radius: 15px;
    position: relative;
    color: white;
    opacity: 1;
}
#dishes-contr::before,
#desserts-contr::before,
#beverage-contr::before {
    content: "";
    background-color: black;
    opacity: 0.4;
    position: absolute;
    border-radius: 15px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
#dishes-contr *,
#desserts-contr *,
#beverage-contr * {
    position: relative;
    z-index: 10;
}
.foods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}
p.prices {
    padding: 2px 8px;
    background-color: darkgoldenrod;
    border-radius: 5px;
    display: inline-block;
}`;

menu.setAttribute("class", "main");
menu.setAttribute("id", "menupage");
menu.appendChild(menuStyle);

function appendMenu() {
  _pages_js__WEBPACK_IMPORTED_MODULE_3__.content.insertBefore(menu, _pages_js__WEBPACK_IMPORTED_MODULE_3__.content.lastChild);

  // Add images for each food category
  document.getElementById(
    "dishes-contr"
  ).style.background = `url('${_img_ribollita_jpg__WEBPACK_IMPORTED_MODULE_1__}') 0% 0% / cover`;
  document.getElementById(
    "desserts-contr"
  ).style.background = `url('${_img_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_2__}') 0% 0% / cover`;
  document.getElementById(
    "beverage-contr"
  ).style.background = `url('${_img_tinto_jpg__WEBPACK_IMPORTED_MODULE_0__}') 0% 0% / cover`;

  document.getElementById("headertext").textContent = menuTxt;
  document.title = menuTxt;
}


/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContent: () => (/* binding */ clearContent),
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   initPage: () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _img_main_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/main.jpg */ "./src/img/main.jpg");


const content = document.getElementById("content"),
  header = document.createElement("div"),
  footer = document.createElement("div"),
  baseStyle = document.createElement("style");

const page = {
  headerHtml: `<div id="nav-bar"><span class="active-tab tab">Home</span><span class="tab">Menu</span><span class="tab">Contact</span></div>
    <h1 id="headertext" class="center">Cocina de la Emperatriz</h1>`,
  footerHtml: `<a href="https://www.pexels.com/photo/chairs-and-tables-in-hotel-3201921/">Photo by Quark Studio</a><span>|</span><a href="https://github.com/climaxmba/restaurant-page">Source code</a>`,
  baseStyleHtml: `@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background-color: burlywood;
        font-family: 'Noto Serif', serif;
    }
    #content {
        display: grid;
        grid-template-rows: auto minmax(500px, 150%) auto;
    }
    #header {
        padding: 30px 0;
        position: relative;
        color: white;
    }
    #header::before {
        content: "";
        background-color: black;
        opacity: 0.6;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    #header * {
        position: relative;
        z-index: 10;
    }
    #nav-bar {
        display: flex;
        justify-content: space-around;
    }
    #nav-bar span {
        font-weight: bold;
        padding: 3px;
        cursor: pointer;
    }
    #nav-bar span.active-tab {
        border-bottom: 2px solid;
        color: burlywood;
    }
    #headertext {
        margin: 6rem 0;
        font-size: 2.75rem;
        font-family: 'Noto Serif Display', serif;
    }
    .center {
        text-align: center;
    }
    #footer {
        margin-top: 1rem;
        padding: 1.2rem 0;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    #footer a {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }`,
};

function clearContent() {
  content.childNodes.forEach((elem) => {
    if (elem.id !== "header" && elem.id !== "footer") {
      content.removeChild(elem);
    }
  });
}

function initPage() {
  clearContent();
  stylePage();

  header.setAttribute("id", "header");
  footer.setAttribute("id", "footer");
  footer.setAttribute("class", "center");

  header.innerHTML = page.headerHtml;
  footer.innerHTML = page.footerHtml;

  content.appendChild(header);
  content.appendChild(footer);
}

function stylePage() {
  baseStyle.innerHTML = page.baseStyleHtml;
  document.body.appendChild(baseStyle);
  header.style.background = `url('${_img_main_jpg__WEBPACK_IMPORTED_MODULE_0__}') 0% 0% / cover`;
}




/***/ }),

/***/ "./src/img/chocolate cake.jpg":
/*!************************************!*\
  !*** ./src/img/chocolate cake.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0988b86b1ffd804429b5.jpg";

/***/ }),

/***/ "./src/img/main.jpg":
/*!**************************!*\
  !*** ./src/img/main.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27f5237daad1e0fea2ce.jpg";

/***/ }),

/***/ "./src/img/ribollita.jpg":
/*!*******************************!*\
  !*** ./src/img/ribollita.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e821a8ae3e4594e013a9.jpg";

/***/ }),

/***/ "./src/img/tinto.jpg":
/*!***************************!*\
  !*** ./src/img/tinto.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d8b82be3f9951188365.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ "./src/pages.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





(0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.initPage)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
addTabsEvent();

function addTabsEvent() {
    _pages_js__WEBPACK_IMPORTED_MODULE_0__.header.querySelectorAll('.tab').forEach(tab => tab.onclick = swicthTab)
}

function swicthTab(e) {
  const elem = e.target,
    tabTxt = elem.textContent;

  // Do nothing if user clicked an active tab
  if (elem.classList.contains("active-tab")) return;

  // Set active tab
  _pages_js__WEBPACK_IMPORTED_MODULE_0__.header.querySelectorAll(".tab").forEach((tab) => {
    if (tab.classList.contains("active-tab")) {
      tab.classList.remove("active-tab");
    }
  });
  elem.classList.add("active-tab");

  // Modify content
  (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
  if (tabTxt === "Home") {
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (tabTxt === "Menu") {
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } else if (tabTxt === "Contact") {
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkNBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBWTtBQUNkO0FBQ0EsSUFBSSxvREFBVTtBQUNkLElBQUk7QUFDSixJQUFJLG9EQUFVO0FBQ2QsSUFBSTtBQUNKLElBQUksdURBQWE7QUFDakI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlc1wiO1xyXG5cclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgY29udGFjdFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLFxyXG4gIGNvbnRhY3RUeHQgPSBcIkNvbnRhY3QgdXNcIjtcclxuXHJcbmNvbnRhY3QuaW5uZXJIVE1MID0gYDx1bD5cclxuPGxpPjxzcGFuPlBob25lOiA8L3NwYW4+PHNwYW4+NTU1LTU1NS01NTU8L3NwYW4+PC9saT5cclxuPGxpPjxzcGFuPkVtYWlsOiA8L3NwYW4+PHNwYW4+c3VwcG9ydEByZWFsbHljb29scmVzdHVyYW50LmNvbTwvc3Bhbj48L2xpPlxyXG48L3VsPmA7XHJcbmNvbnRhY3RTdHlsZS5pbm5lckhUTUwgPSBgI2NvbnRhY3QgdWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4jY29udGFjdCBsaSB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1gO1xyXG5cclxuY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XHJcbmNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFN0eWxlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZENvbnRhY3QoKSB7XHJcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShjb250YWN0LCBjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcnRleHRcIikudGV4dENvbnRlbnQgPSBjb250YWN0VHh0O1xyXG4gICAgZG9jdW1lbnQudGl0bGUgPSBjb250YWN0VHh0O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlcy5qc1wiO1xyXG5cclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgaG9tZVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLFxyXG4gIGhvbWVUeHQgPSBcIkNvY2luYSBkZSBsYSBFbXBlcmF0cml6XCI7XHJcblxyXG5ob21lLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiaG9tZXRleHRcIj5XZSBvZmZlciBhIHdpZGUgdmFyaWV0eSBvZiBmb29kcyBmcm9tIGFyb3VuZCB0aGUgd29ybGQhPC9kaXY+XHJcbjxkaXYgaWQ9XCJ3b3JraW5mb1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+SG91cnM8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPldlZWstZGF5czogODowMGFtIC0gMTA6MDBwbTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5XZWVrLWVuZHM6IDEwOjAwYW0gLSA5OjAwcG08L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkxvY2F0aW9uPC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5Mb3MgQW5nZWxlcywgQ2FsaWZvcm5pYTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5BY2FwdWxjbywgTWV4aWNvPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbmhvbWVTdHlsZS5pbm5lckhUTUwgPSBgI2hvbWVwYWdlIHtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG59XHJcbiNob21lcGFnZSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4jaG9tZXRleHQge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuI3dvcmtpbmZvIHtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiN3b3JraW5mbyA+IGRpdiB7XHJcbiAgICB3aWR0aDogMjg1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3dvcmtpbmZvIGgyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxufVxyXG4jd29ya2luZm8gbGkge1xyXG4gICAgbWFyZ2luOiAwLjhyZW0gMDtcclxufWA7XHJcblxyXG5ob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZXBhZ2VcIik7XHJcbmhvbWUuY2xhc3NOYW1lID0gXCJtYWluIGNlbnRlciBhY3RpdmVcIjtcclxuaG9tZS5hcHBlbmRDaGlsZChob21lU3R5bGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kSG9tZSgpIHtcclxuICBjb250ZW50Lmluc2VydEJlZm9yZShob21lLCBjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJ0ZXh0XCIpLnRleHRDb250ZW50ID0gaG9tZVR4dDtcclxuICBkb2N1bWVudC50aXRsZSA9IGhvbWVUeHQ7XHJcbn1cclxuIiwiaW1wb3J0IGJldmVyYWdlSW1nIGZyb20gJy4vaW1nL3RpbnRvLmpwZyc7XHJcbmltcG9ydCBkaXNoSW1nIGZyb20gJy4vaW1nL3JpYm9sbGl0YS5qcGcnO1xyXG5pbXBvcnQgZGVzc2VydEltZyBmcm9tICcuL2ltZy9jaG9jb2xhdGUgY2FrZS5qcGcnO1xyXG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9wYWdlcy5qcyc7XHJcblxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICBtZW51U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksXHJcbiAgbWVudVR4dCA9IFwiT3VyIGZvb2RzXCI7XHJcblxyXG5tZW51LmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiZGlzaGVzLWNvbnRyXCI+XHJcbjxoMiBjbGFzcz1cImNlbnRlclwiPkRpc2hlczwvaDI+XHJcbjxkaXYgY2xhc3M9XCJmb29kcyBjZW50ZXJcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPlBvcmsgY2Fybml0YXM8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzPVwicHJpY2VzXCI+JDE1LjQ2PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5Hbm9jY2k8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzPVwicHJpY2VzXCI+JDEzLjE1PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5SaWJvbGxpdGE8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzPVwicHJpY2VzXCI+JDguMTc8L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGlkPVwiZGVzc2VydHMtY29udHJcIj5cclxuPGgyIGNsYXNzPVwiY2VudGVyXCI+RGVzc2VydHM8L2gyPlxyXG48ZGl2IGNsYXNzPVwiZm9vZHMgY2VudGVyXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5DaG9jb2xhdGUgY2FrZTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJwcmljZXNcIj4kOC4wMDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+R2luZ2VyYnJlYWQ8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzPVwicHJpY2VzXCI+JDUuMjA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPkFwcGxlIHBpZTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJwcmljZXNcIj4kNi4xNzwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgaWQ9XCJiZXZlcmFnZS1jb250clwiPlxyXG48aDIgY2xhc3M9XCJjZW50ZXJcIj5CZXZlcmFnZXM8L2gyPlxyXG48ZGl2IGNsYXNzPVwiZm9vZHMgY2VudGVyXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5WZXJkZWpvPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cInByaWNlc1wiPiQxNS4yMDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+VGludG8gZGUgVmVyYW5vPC9oMz5cclxuICAgICAgICA8cCBjbGFzcz1cInByaWNlc1wiPiQzNi4wMDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+UmliZXJhIGRlbCBEdWVybzwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJwcmljZXNcIj4kMjguNjA8L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PmA7XHJcbm1lbnVTdHlsZS5pbm5lckhUTUwgPSBgI21lbnVwYWdlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcbiNtZW51cGFnZSA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuI21lbnVwYWdlIGgyOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxufVxyXG4jZGlzaGVzLWNvbnRyLFxyXG4jZGVzc2VydHMtY29udHIsXHJcbiNiZXZlcmFnZS1jb250ciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuI2Rpc2hlcy1jb250cjo6YmVmb3JlLFxyXG4jZGVzc2VydHMtY29udHI6OmJlZm9yZSxcclxuI2JldmVyYWdlLWNvbnRyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4jZGlzaGVzLWNvbnRyICosXHJcbiNkZXNzZXJ0cy1jb250ciAqLFxyXG4jYmV2ZXJhZ2UtY29udHIgKiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4uZm9vZHMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG59XHJcbnAucHJpY2VzIHtcclxuICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59YDtcclxuXHJcbm1lbnUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluXCIpO1xyXG5tZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudXBhZ2VcIik7XHJcbm1lbnUuYXBwZW5kQ2hpbGQobWVudVN0eWxlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZE1lbnUoKSB7XHJcbiAgY29udGVudC5pbnNlcnRCZWZvcmUobWVudSwgY29udGVudC5sYXN0Q2hpbGQpO1xyXG5cclxuICAvLyBBZGQgaW1hZ2VzIGZvciBlYWNoIGZvb2QgY2F0ZWdvcnlcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiZGlzaGVzLWNvbnRyXCJcclxuICApLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2Rpc2hJbWd9JykgMCUgMCUgLyBjb3ZlcmA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImRlc3NlcnRzLWNvbnRyXCJcclxuICApLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2Rlc3NlcnRJbWd9JykgMCUgMCUgLyBjb3ZlcmA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImJldmVyYWdlLWNvbnRyXCJcclxuICApLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2JldmVyYWdlSW1nfScpIDAlIDAlIC8gY292ZXJgO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcnRleHRcIikudGV4dENvbnRlbnQgPSBtZW51VHh0O1xyXG4gIGRvY3VtZW50LnRpdGxlID0gbWVudVR4dDtcclxufVxyXG4iLCJpbXBvcnQgbWFpbkltZyBmcm9tIFwiLi9pbWcvbWFpbi5qcGdcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIiksXHJcbiAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gIGJhc2VTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHJcbmNvbnN0IHBhZ2UgPSB7XHJcbiAgaGVhZGVySHRtbDogYDxkaXYgaWQ9XCJuYXYtYmFyXCI+PHNwYW4gY2xhc3M9XCJhY3RpdmUtdGFiIHRhYlwiPkhvbWU8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0YWJcIj5NZW51PC9zcGFuPjxzcGFuIGNsYXNzPVwidGFiXCI+Q29udGFjdDwvc3Bhbj48L2Rpdj5cclxuICAgIDxoMSBpZD1cImhlYWRlcnRleHRcIiBjbGFzcz1cImNlbnRlclwiPkNvY2luYSBkZSBsYSBFbXBlcmF0cml6PC9oMT5gLFxyXG4gIGZvb3Rlckh0bWw6IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9jaGFpcnMtYW5kLXRhYmxlcy1pbi1ob3RlbC0zMjAxOTIxL1wiPlBob3RvIGJ5IFF1YXJrIFN0dWRpbzwvYT48c3Bhbj58PC9zcGFuPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2xpbWF4bWJhL3Jlc3RhdXJhbnQtcGFnZVwiPlNvdXJjZSBjb2RlPC9hPmAsXHJcbiAgYmFzZVN0eWxlSHRtbDogYEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2VyaWYrRGlzcGxheTppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PU5vdG8rU2VyaWY6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICoge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZicsIHNlcmlmO1xyXG4gICAgfVxyXG4gICAgI2NvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIG1pbm1heCg1MDBweCwgMTUwJSkgYXV0bztcclxuICAgIH1cclxuICAgICNoZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgI2hlYWRlcjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgI2hlYWRlciAqIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbiAgICAjbmF2LWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICAgICNuYXYtYmFyIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAjbmF2LWJhciBzcGFuLmFjdGl2ZS10YWIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICAgICAgICBjb2xvcjogYnVybHl3b29kO1xyXG4gICAgfVxyXG4gICAgI2hlYWRlcnRleHQge1xyXG4gICAgICAgIG1hcmdpbjogNnJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi43NXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ05vdG8gU2VyaWYgRGlzcGxheScsIHNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxuICAgICNmb290ZXIgYSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9YCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcclxuICBjb250ZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgaWYgKGVsZW0uaWQgIT09IFwiaGVhZGVyXCIgJiYgZWxlbS5pZCAhPT0gXCJmb290ZXJcIikge1xyXG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGVsZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UGFnZSgpIHtcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICBzdHlsZVBhZ2UoKTtcclxuXHJcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcclxuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjZW50ZXJcIik7XHJcblxyXG4gIGhlYWRlci5pbm5lckhUTUwgPSBwYWdlLmhlYWRlckh0bWw7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IHBhZ2UuZm9vdGVySHRtbDtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3R5bGVQYWdlKCkge1xyXG4gIGJhc2VTdHlsZS5pbm5lckhUTUwgPSBwYWdlLmJhc2VTdHlsZUh0bWw7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYXNlU3R5bGUpO1xyXG4gIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHttYWluSW1nfScpIDAlIDAlIC8gY292ZXJgO1xyXG59XHJcblxyXG5leHBvcnQgeyBjb250ZW50LCBoZWFkZXIsIGNsZWFyQ29udGVudCwgaW5pdFBhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGhlYWRlciwgaW5pdFBhZ2UsIGNsZWFyQ29udGVudCB9IGZyb20gXCIuL3BhZ2VzLmpzXCI7XHJcbmltcG9ydCBhcHBlbmRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IGFwcGVuZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgYXBwZW5kQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcblxyXG5pbml0UGFnZSgpO1xyXG5hcHBlbmRIb21lKCk7XHJcbmFkZFRhYnNFdmVudCgpO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFic0V2ZW50KCkge1xyXG4gICAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKS5mb3JFYWNoKHRhYiA9PiB0YWIub25jbGljayA9IHN3aWN0aFRhYilcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpY3RoVGFiKGUpIHtcclxuICBjb25zdCBlbGVtID0gZS50YXJnZXQsXHJcbiAgICB0YWJUeHQgPSBlbGVtLnRleHRDb250ZW50O1xyXG5cclxuICAvLyBEbyBub3RoaW5nIGlmIHVzZXIgY2xpY2tlZCBhbiBhY3RpdmUgdGFiXHJcbiAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXRhYlwiKSkgcmV0dXJuO1xyXG5cclxuICAvLyBTZXQgYWN0aXZlIHRhYlxyXG4gIGhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXRhYlwiKSkge1xyXG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS10YWJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXRhYlwiKTtcclxuXHJcbiAgLy8gTW9kaWZ5IGNvbnRlbnRcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICBpZiAodGFiVHh0ID09PSBcIkhvbWVcIikge1xyXG4gICAgYXBwZW5kSG9tZSgpO1xyXG4gIH0gZWxzZSBpZiAodGFiVHh0ID09PSBcIk1lbnVcIikge1xyXG4gICAgYXBwZW5kTWVudSgpO1xyXG4gIH0gZWxzZSBpZiAodGFiVHh0ID09PSBcIkNvbnRhY3RcIikge1xyXG4gICAgYXBwZW5kQ29udGFjdCgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=