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
/* harmony import */ var _tinto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tinto.jpg */ "./src/tinto.jpg");
/* harmony import */ var _ribollita_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ribollita.jpg */ "./src/ribollita.jpg");
/* harmony import */ var _chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chocolate cake.jpg */ "./src/chocolate cake.jpg");
/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.js */ "./src/pages.js");





const menu = document.createElement("div"),
  menuStyle = document.createElement("style"),
  menuTxt = "Our foods";

menu.innerHTML = `<div id="dishes-contr">
<h2 class="center">Dishes</h2>
<div class="foods center">
    <div>
        <h3>Pork carnitas</h3>
        <p>$15.46</p>
    </div>
    <div>
        <h3>Gnocci</h3>
        <p>$13.15</p>
    </div>
    <div>
        <h3>Ribollita</h3>
        <p>$8.17</p>
    </div>
</div>
</div>
<div id="desserts-contr">
<h2 class="center">Desserts</h2>
<div class="foods center">
    <div>
        <h3>Chocolate cake</h3>
        <p>$8.00</p>
    </div>
    <div>
        <h3>Gingerbread</h3>
        <p>$5.20</p>
    </div>
    <div>
        <h3>Apple pie</h3>
        <p>$6.17</p>
    </div>
</div>
</div>
<div id="beverage-contr">
<h2 class="center">Beverages</h2>
<div class="foods center">
    <div>
        <h3>Verdejo</h3>
        <p>$15.20</p>
    </div>
    <div>
        <h3>Tinto de Verano</h3>
        <p>$36.00</p>
    </div>
    <div>
        <h3>Ribera del Duero</h3>
        <p>$28.60</p>
    </div>
</div>
</div>`;
menuStyle.innerHTML = `#menupage {
    display: flex;
    flex-direction: column;
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
}`;

menu.setAttribute("class", "main");
menu.setAttribute("id", "menupage");
menu.appendChild(menuStyle);

function appendMenu() {
  _pages_js__WEBPACK_IMPORTED_MODULE_3__.content.insertBefore(menu, _pages_js__WEBPACK_IMPORTED_MODULE_3__.content.lastChild);

  // Add images for each food category
  document.getElementById(
    "dishes-contr"
  ).style.background = `url('${_ribollita_jpg__WEBPACK_IMPORTED_MODULE_1__}') 0% 0% / cover`;
  document.getElementById(
    "desserts-contr"
  ).style.background = `url('${_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_2__}') 0% 0% / cover`;
  document.getElementById(
    "beverage-contr"
  ).style.background = `url('${_tinto_jpg__WEBPACK_IMPORTED_MODULE_0__}') 0% 0% / cover`;

  document.getElementById("headertext").textContent = menuTxt;
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
/* harmony import */ var _main_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.jpg */ "./src/main.jpg");


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
        opacity: 0.5;
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
  header.style.background = `url('${_main_jpg__WEBPACK_IMPORTED_MODULE_0__}') 0% 0% / cover`;
}




/***/ }),

/***/ "./src/chocolate cake.jpg":
/*!********************************!*\
  !*** ./src/chocolate cake.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0988b86b1ffd804429b5.jpg";

/***/ }),

/***/ "./src/main.jpg":
/*!**********************!*\
  !*** ./src/main.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27f5237daad1e0fea2ce.jpg";

/***/ }),

/***/ "./src/ribollita.jpg":
/*!***************************!*\
  !*** ./src/ribollita.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e821a8ae3e4594e013a9.jpg";

/***/ }),

/***/ "./src/tinto.jpg":
/*!***********************!*\
  !*** ./src/tinto.jpg ***!
  \***********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBWTtBQUNkO0FBQ0EsSUFBSSxvREFBVTtBQUNkLElBQUk7QUFDSixJQUFJLG9EQUFVO0FBQ2QsSUFBSTtBQUNKLElBQUksdURBQWE7QUFDakI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlc1wiO1xyXG5cclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgY29udGFjdFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLFxyXG4gIGNvbnRhY3RUeHQgPSBcIkNvbnRhY3QgdXNcIjtcclxuXHJcbmNvbnRhY3QuaW5uZXJIVE1MID0gYDx1bD5cclxuPGxpPjxzcGFuPlBob25lOiA8L3NwYW4+PHNwYW4+NTU1LTU1NS01NTU8L3NwYW4+PC9saT5cclxuPGxpPjxzcGFuPkVtYWlsOiA8L3NwYW4+PHNwYW4+c3VwcG9ydEByZWFsbHljb29scmVzdHVyYW50LmNvbTwvc3Bhbj48L2xpPlxyXG48L3VsPmA7XHJcbmNvbnRhY3RTdHlsZS5pbm5lckhUTUwgPSBgI2NvbnRhY3QgdWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4jY29udGFjdCBsaSB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1gO1xyXG5cclxuY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XHJcbmNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFN0eWxlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZENvbnRhY3QoKSB7XHJcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShjb250YWN0LCBjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcnRleHRcIikudGV4dENvbnRlbnQgPSBjb250YWN0VHh0O1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlcy5qc1wiO1xyXG5cclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgaG9tZVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLFxyXG4gIGhvbWVUeHQgPSBcIkNvY2luYSBkZSBsYSBFbXBlcmF0cml6XCI7XHJcblxyXG5ob21lLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiaG9tZXRleHRcIj5XZSBvZmZlciBhIHdpZGUgdmFyaWV0eSBvZiBmb29kcyBmcm9tIGFyb3VuZCB0aGUgd29ybGQhPC9kaXY+XHJcbjxkaXYgaWQ9XCJ3b3JraW5mb1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+SG91cnM8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPldlZWstZGF5czogODowMGFtIC0gMTA6MDBwbTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5XZWVrLWVuZHM6IDEwOjAwYW0gLSA5OjAwcG08L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkxvY2F0aW9uPC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5Mb3MgQW5nZWxlcywgQ2FsaWZvcm5pYTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5BY2FwdWxjbywgTWV4aWNvPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbmhvbWVTdHlsZS5pbm5lckhUTUwgPSBgI2hvbWVwYWdlIHtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG59XHJcbiNob21lcGFnZSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4jaG9tZXRleHQge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuI3dvcmtpbmZvIHtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiN3b3JraW5mbyA+IGRpdiB7XHJcbiAgICB3aWR0aDogMjg1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3dvcmtpbmZvIGgyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxufVxyXG4jd29ya2luZm8gbGkge1xyXG4gICAgbWFyZ2luOiAwLjhyZW0gMDtcclxufWA7XHJcblxyXG5ob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZXBhZ2VcIik7XHJcbmhvbWUuY2xhc3NOYW1lID0gXCJtYWluIGNlbnRlciBhY3RpdmVcIjtcclxuaG9tZS5hcHBlbmRDaGlsZChob21lU3R5bGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kSG9tZSgpIHtcclxuICBjb250ZW50Lmluc2VydEJlZm9yZShob21lLCBjb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJ0ZXh0XCIpLnRleHRDb250ZW50ID0gaG9tZVR4dDtcclxufVxyXG4iLCJpbXBvcnQgYmV2ZXJhZ2VJbWcgZnJvbSAnLi90aW50by5qcGcnO1xyXG5pbXBvcnQgZGlzaEltZyBmcm9tICcuL3JpYm9sbGl0YS5qcGcnO1xyXG5pbXBvcnQgZGVzc2VydEltZyBmcm9tICcuL2Nob2NvbGF0ZSBjYWtlLmpwZyc7XHJcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL3BhZ2VzLmpzJztcclxuXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gIG1lbnVTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxcclxuICBtZW51VHh0ID0gXCJPdXIgZm9vZHNcIjtcclxuXHJcbm1lbnUuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJkaXNoZXMtY29udHJcIj5cclxuPGgyIGNsYXNzPVwiY2VudGVyXCI+RGlzaGVzPC9oMj5cclxuPGRpdiBjbGFzcz1cImZvb2RzIGNlbnRlclwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+UG9yayBjYXJuaXRhczwvaDM+XHJcbiAgICAgICAgPHA+JDE1LjQ2PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5Hbm9jY2k8L2gzPlxyXG4gICAgICAgIDxwPiQxMy4xNTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+Umlib2xsaXRhPC9oMz5cclxuICAgICAgICA8cD4kOC4xNzwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgaWQ9XCJkZXNzZXJ0cy1jb250clwiPlxyXG48aDIgY2xhc3M9XCJjZW50ZXJcIj5EZXNzZXJ0czwvaDI+XHJcbjxkaXYgY2xhc3M9XCJmb29kcyBjZW50ZXJcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPkNob2NvbGF0ZSBjYWtlPC9oMz5cclxuICAgICAgICA8cD4kOC4wMDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+R2luZ2VyYnJlYWQ8L2gzPlxyXG4gICAgICAgIDxwPiQ1LjIwPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5BcHBsZSBwaWU8L2gzPlxyXG4gICAgICAgIDxwPiQ2LjE3PC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBpZD1cImJldmVyYWdlLWNvbnRyXCI+XHJcbjxoMiBjbGFzcz1cImNlbnRlclwiPkJldmVyYWdlczwvaDI+XHJcbjxkaXYgY2xhc3M9XCJmb29kcyBjZW50ZXJcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPlZlcmRlam88L2gzPlxyXG4gICAgICAgIDxwPiQxNS4yMDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+VGludG8gZGUgVmVyYW5vPC9oMz5cclxuICAgICAgICA8cD4kMzYuMDA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPlJpYmVyYSBkZWwgRHVlcm88L2gzPlxyXG4gICAgICAgIDxwPiQyOC42MDwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9kaXY+YDtcclxubWVudVN0eWxlLmlubmVySFRNTCA9IGAjbWVudXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG4jbWVudXBhZ2UgPiBkaXYge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbiNtZW51cGFnZSBoMjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbn1cclxuI2Rpc2hlcy1jb250cixcclxuI2Rlc3NlcnRzLWNvbnRyLFxyXG4jYmV2ZXJhZ2UtY29udHIge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbiNkaXNoZXMtY29udHI6OmJlZm9yZSxcclxuI2Rlc3NlcnRzLWNvbnRyOjpiZWZvcmUsXHJcbiNiZXZlcmFnZS1jb250cjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuI2Rpc2hlcy1jb250ciAqLFxyXG4jZGVzc2VydHMtY29udHIgKixcclxuI2JldmVyYWdlLWNvbnRyICoge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLmZvb2RzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogMTZweDtcclxufWA7XHJcblxyXG5tZW51LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpblwiKTtcclxubWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVwYWdlXCIpO1xyXG5tZW51LmFwcGVuZENoaWxkKG1lbnVTdHlsZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRNZW51KCkge1xyXG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1lbnUsIGNvbnRlbnQubGFzdENoaWxkKTtcclxuXHJcbiAgLy8gQWRkIGltYWdlcyBmb3IgZWFjaCBmb29kIGNhdGVnb3J5XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImRpc2hlcy1jb250clwiXHJcbiAgKS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHtkaXNoSW1nfScpIDAlIDAlIC8gY292ZXJgO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJkZXNzZXJ0cy1jb250clwiXHJcbiAgKS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHtkZXNzZXJ0SW1nfScpIDAlIDAlIC8gY292ZXJgO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJiZXZlcmFnZS1jb250clwiXHJcbiAgKS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHtiZXZlcmFnZUltZ30nKSAwJSAwJSAvIGNvdmVyYDtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJ0ZXh0XCIpLnRleHRDb250ZW50ID0gbWVudVR4dDtcclxufVxyXG4iLCJpbXBvcnQgbWFpbkltZyBmcm9tIFwiLi9tYWluLmpwZ1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKSxcclxuICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgYmFzZVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cclxuY29uc3QgcGFnZSA9IHtcclxuICBoZWFkZXJIdG1sOiBgPGRpdiBpZD1cIm5hdi1iYXJcIj48c3BhbiBjbGFzcz1cImFjdGl2ZS10YWIgdGFiXCI+SG9tZTwvc3Bhbj48c3BhbiBjbGFzcz1cInRhYlwiPk1lbnU8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0YWJcIj5Db250YWN0PC9zcGFuPjwvZGl2PlxyXG4gICAgPGgxIGlkPVwiaGVhZGVydGV4dFwiIGNsYXNzPVwiY2VudGVyXCI+Q29jaW5hIGRlIGxhIEVtcGVyYXRyaXo8L2gxPmAsXHJcbiAgZm9vdGVySHRtbDogYDxhIGhyZWY9XCJodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL2NoYWlycy1hbmQtdGFibGVzLWluLWhvdGVsLTMyMDE5MjEvXCI+UGhvdG8gYnkgUXVhcmsgU3R1ZGlvPC9hPjxzcGFuPnw8L3NwYW4+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jbGltYXhtYmEvcmVzdGF1cmFudC1wYWdlXCI+U291cmNlIGNvZGU8L2E+YCxcclxuICBiYXNlU3R5bGVIdG1sOiBgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTZXJpZitEaXNwbGF5Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Tm90bytTZXJpZjppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAgKiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNlcmlmJywgc2VyaWY7XHJcbiAgICB9XHJcbiAgICAjY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gbWlubWF4KDUwMHB4LCAxNTAlKSBhdXRvO1xyXG4gICAgfVxyXG4gICAgI2hlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAjaGVhZGVyOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAjaGVhZGVyICoge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuICAgICNuYXYtYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgI25hdi1iYXIgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICNuYXYtYmFyIHNwYW4uYWN0aXZlLXRhYiB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG4gICAgICAgIGNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICB9XHJcbiAgICAjaGVhZGVydGV4dCB7XHJcbiAgICAgICAgbWFyZ2luOiA2cmVtIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjc1cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZiBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgI2Zvb3RlciBhIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1gLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xyXG4gIGNvbnRlbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBpZiAoZWxlbS5pZCAhPT0gXCJoZWFkZXJcIiAmJiBlbGVtLmlkICE9PSBcImZvb3RlclwiKSB7XHJcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRQYWdlKCkge1xyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIHN0eWxlUGFnZSgpO1xyXG5cclxuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XHJcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNlbnRlclwiKTtcclxuXHJcbiAgaGVhZGVyLmlubmVySFRNTCA9IHBhZ2UuaGVhZGVySHRtbDtcclxuICBmb290ZXIuaW5uZXJIVE1MID0gcGFnZS5mb290ZXJIdG1sO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHlsZVBhZ2UoKSB7XHJcbiAgYmFzZVN0eWxlLmlubmVySFRNTCA9IHBhZ2UuYmFzZVN0eWxlSHRtbDtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhc2VTdHlsZSk7XHJcbiAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke21haW5JbWd9JykgMCUgMCUgLyBjb3ZlcmA7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbnRlbnQsIGhlYWRlciwgY2xlYXJDb250ZW50LCBpbml0UGFnZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgaGVhZGVyLCBpbml0UGFnZSwgY2xlYXJDb250ZW50IH0gZnJvbSBcIi4vcGFnZXMuanNcIjtcclxuaW1wb3J0IGFwcGVuZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgYXBwZW5kTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBhcHBlbmRDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuXHJcbmluaXRQYWdlKCk7XHJcbmFwcGVuZEhvbWUoKTtcclxuYWRkVGFic0V2ZW50KCk7XHJcblxyXG5mdW5jdGlvbiBhZGRUYWJzRXZlbnQoKSB7XHJcbiAgICBoZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpLmZvckVhY2godGFiID0+IHRhYi5vbmNsaWNrID0gc3dpY3RoVGFiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2ljdGhUYWIoZSkge1xyXG4gIGNvbnN0IGVsZW0gPSBlLnRhcmdldCxcclxuICAgIHRhYlR4dCA9IGVsZW0udGV4dENvbnRlbnQ7XHJcblxyXG4gIC8vIERvIG5vdGhpbmcgaWYgdXNlciBjbGlja2VkIGFuIGFjdGl2ZSB0YWJcclxuICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtdGFiXCIpKSByZXR1cm47XHJcblxyXG4gIC8vIFNldCBhY3RpdmUgdGFiXHJcbiAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtdGFiXCIpKSB7XHJcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXRhYlwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtdGFiXCIpO1xyXG5cclxuICAvLyBNb2RpZnkgY29udGVudFxyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIGlmICh0YWJUeHQgPT09IFwiSG9tZVwiKSB7XHJcbiAgICBhcHBlbmRIb21lKCk7XHJcbiAgfSBlbHNlIGlmICh0YWJUeHQgPT09IFwiTWVudVwiKSB7XHJcbiAgICBhcHBlbmRNZW51KCk7XHJcbiAgfSBlbHNlIGlmICh0YWJUeHQgPT09IFwiQ29udGFjdFwiKSB7XHJcbiAgICBhcHBlbmRDb250YWN0KCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==