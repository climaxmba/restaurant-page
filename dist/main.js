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
    background-color: #9b4400;
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
  baseStyleHtml: `* {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background-color: burlywood;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL3BhZ2VzXCI7XHJcblxyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICBjb250YWN0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksXHJcbiAgY29udGFjdFR4dCA9IFwiQ29udGFjdCB1c1wiO1xyXG5cclxuY29udGFjdC5pbm5lckhUTUwgPSBgPHVsPlxyXG48bGk+PHNwYW4+UGhvbmU6IDwvc3Bhbj48c3Bhbj41NTUtNTU1LTU1NTwvc3Bhbj48L2xpPlxyXG48bGk+PHNwYW4+RW1haWw6IDwvc3Bhbj48c3Bhbj5zdXBwb3J0QHJlYWxseWNvb2xyZXN0dXJhbnQuY29tPC9zcGFuPjwvbGk+XHJcbjwvdWw+YDtcclxuY29udGFjdFN0eWxlLmlubmVySFRNTCA9IGAjY29udGFjdCB1bCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVyZW0gMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiNjb250YWN0IGxpIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufWA7XHJcblxyXG5jb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcclxuY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0U3R5bGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kQ29udGFjdCgpIHtcclxuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGNvbnRhY3QsIGNvbnRlbnQubGFzdENoaWxkKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVydGV4dFwiKS50ZXh0Q29udGVudCA9IGNvbnRhY3RUeHQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL3BhZ2VzLmpzXCI7XHJcblxyXG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICBob21lU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksXHJcbiAgaG9tZVR4dCA9IFwiQ29jaW5hIGRlIGxhIEVtcGVyYXRyaXpcIjtcclxuXHJcbmhvbWUuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJob21ldGV4dFwiPldlIG9mZmVyIGEgd2lkZSB2YXJpZXR5IG9mIGZvb2RzIGZyb20gYXJvdW5kIHRoZSB3b3JsZCE8L2Rpdj5cclxuPGRpdiBpZD1cIndvcmtpbmZvXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5Ib3VyczwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+V2Vlay1kYXlzOiA4OjAwYW0gLSAxMDowMHBtPC9saT5cclxuICAgICAgICAgICAgPGxpPldlZWstZW5kczogMTA6MDBhbSAtIDk6MDBwbTwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+TG9jYXRpb248L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPkxvcyBBbmdlbGVzLCBDYWxpZm9ybmlhPC9saT5cclxuICAgICAgICAgICAgPGxpPkFjYXB1bGNvLCBNZXhpY288L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuaG9tZVN0eWxlLmlubmVySFRNTCA9IGAjaG9tZXBhZ2Uge1xyXG4gICAgbWFyZ2luOiAzcmVtIDA7XHJcbn1cclxuI2hvbWVwYWdlIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbiNob21ldGV4dCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4jd29ya2luZm8ge1xyXG4gICAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3dvcmtpbmZvID4gZGl2IHtcclxuICAgIHdpZHRoOiAyODVweDtcclxuICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliNDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jd29ya2luZm8gaDIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG59XHJcbiN3b3JraW5mbyBsaSB7XHJcbiAgICBtYXJnaW46IDAuOHJlbSAwO1xyXG59YDtcclxuXHJcbmhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lcGFnZVwiKTtcclxuaG9tZS5jbGFzc05hbWUgPSBcIm1haW4gY2VudGVyIGFjdGl2ZVwiO1xyXG5ob21lLmFwcGVuZENoaWxkKGhvbWVTdHlsZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRIb21lKCkge1xyXG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGhvbWUsIGNvbnRlbnQubGFzdENoaWxkKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcnRleHRcIikudGV4dENvbnRlbnQgPSBob21lVHh0O1xyXG59XHJcbiIsImltcG9ydCBiZXZlcmFnZUltZyBmcm9tICcuL3RpbnRvLmpwZyc7XHJcbmltcG9ydCBkaXNoSW1nIGZyb20gJy4vcmlib2xsaXRhLmpwZyc7XHJcbmltcG9ydCBkZXNzZXJ0SW1nIGZyb20gJy4vY2hvY29sYXRlIGNha2UuanBnJztcclxuaW1wb3J0IHsgY29udGVudCB9IGZyb20gJy4vcGFnZXMuanMnO1xyXG5cclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgbWVudVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLFxyXG4gIG1lbnVUeHQgPSBcIk91ciBmb29kc1wiO1xyXG5cclxubWVudS5pbm5lckhUTUwgPSBgPGRpdiBpZD1cImRpc2hlcy1jb250clwiPlxyXG48aDIgY2xhc3M9XCJjZW50ZXJcIj5EaXNoZXM8L2gyPlxyXG48ZGl2IGNsYXNzPVwiZm9vZHMgY2VudGVyXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5Qb3JrIGNhcm5pdGFzPC9oMz5cclxuICAgICAgICA8cD4kMTUuNDY8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPkdub2NjaTwvaDM+XHJcbiAgICAgICAgPHA+JDEzLjE1PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5SaWJvbGxpdGE8L2gzPlxyXG4gICAgICAgIDxwPiQ4LjE3PC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBpZD1cImRlc3NlcnRzLWNvbnRyXCI+XHJcbjxoMiBjbGFzcz1cImNlbnRlclwiPkRlc3NlcnRzPC9oMj5cclxuPGRpdiBjbGFzcz1cImZvb2RzIGNlbnRlclwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+Q2hvY29sYXRlIGNha2U8L2gzPlxyXG4gICAgICAgIDxwPiQ4LjAwPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5HaW5nZXJicmVhZDwvaDM+XHJcbiAgICAgICAgPHA+JDUuMjA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPkFwcGxlIHBpZTwvaDM+XHJcbiAgICAgICAgPHA+JDYuMTc8L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGlkPVwiYmV2ZXJhZ2UtY29udHJcIj5cclxuPGgyIGNsYXNzPVwiY2VudGVyXCI+QmV2ZXJhZ2VzPC9oMj5cclxuPGRpdiBjbGFzcz1cImZvb2RzIGNlbnRlclwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+VmVyZGVqbzwvaDM+XHJcbiAgICAgICAgPHA+JDE1LjIwPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5UaW50byBkZSBWZXJhbm88L2gzPlxyXG4gICAgICAgIDxwPiQzNi4wMDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDM+UmliZXJhIGRlbCBEdWVybzwvaDM+XHJcbiAgICAgICAgPHA+JDI4LjYwPC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5gO1xyXG5tZW51U3R5bGUuaW5uZXJIVE1MID0gYCNtZW51cGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcbiNtZW51cGFnZSA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuI21lbnVwYWdlIGgyOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxufVxyXG4jZGlzaGVzLWNvbnRyLFxyXG4jZGVzc2VydHMtY29udHIsXHJcbiNiZXZlcmFnZS1jb250ciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuI2Rpc2hlcy1jb250cjo6YmVmb3JlLFxyXG4jZGVzc2VydHMtY29udHI6OmJlZm9yZSxcclxuI2JldmVyYWdlLWNvbnRyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4jZGlzaGVzLWNvbnRyICosXHJcbiNkZXNzZXJ0cy1jb250ciAqLFxyXG4jYmV2ZXJhZ2UtY29udHIgKiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4uZm9vZHMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG59YDtcclxuXHJcbm1lbnUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluXCIpO1xyXG5tZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudXBhZ2VcIik7XHJcbm1lbnUuYXBwZW5kQ2hpbGQobWVudVN0eWxlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZE1lbnUoKSB7XHJcbiAgY29udGVudC5pbnNlcnRCZWZvcmUobWVudSwgY29udGVudC5sYXN0Q2hpbGQpO1xyXG5cclxuICAvLyBBZGQgaW1hZ2VzIGZvciBlYWNoIGZvb2QgY2F0ZWdvcnlcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiZGlzaGVzLWNvbnRyXCJcclxuICApLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2Rpc2hJbWd9JykgMCUgMCUgLyBjb3ZlcmA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImRlc3NlcnRzLWNvbnRyXCJcclxuICApLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2Rlc3NlcnRJbWd9JykgMCUgMCUgLyBjb3ZlcmA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImJldmVyYWdlLWNvbnRyXCJcclxuICApLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2JldmVyYWdlSW1nfScpIDAlIDAlIC8gY292ZXJgO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlcnRleHRcIikudGV4dENvbnRlbnQgPSBtZW51VHh0O1xyXG59XHJcbiIsImltcG9ydCBtYWluSW1nIGZyb20gXCIuL21haW4uanBnXCJcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIiksXHJcbiAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gIGJhc2VTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHJcbmNvbnN0IHBhZ2UgPSB7XHJcbiAgaGVhZGVySHRtbDogYDxkaXYgaWQ9XCJuYXYtYmFyXCI+PHNwYW4gY2xhc3M9XCJhY3RpdmUtdGFiIHRhYlwiPkhvbWU8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0YWJcIj5NZW51PC9zcGFuPjxzcGFuIGNsYXNzPVwidGFiXCI+Q29udGFjdDwvc3Bhbj48L2Rpdj5cclxuICAgIDxoMSBpZD1cImhlYWRlcnRleHRcIiBjbGFzcz1cImNlbnRlclwiPkNvY2luYSBkZSBsYSBFbXBlcmF0cml6PC9oMT5gLFxyXG4gIGZvb3Rlckh0bWw6IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9jaGFpcnMtYW5kLXRhYmxlcy1pbi1ob3RlbC0zMjAxOTIxL1wiPlBob3RvIGJ5IFF1YXJrIFN0dWRpbzwvYT48c3Bhbj58PC9zcGFuPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2xpbWF4bWJhL3Jlc3RhdXJhbnQtcGFnZVwiPlNvdXJjZSBjb2RlPC9hPmAsXHJcbiAgYmFzZVN0eWxlSHRtbDogYCoge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gICAgfVxyXG4gICAgI2NvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIG1pbm1heCg1MDBweCwgMTUwJSkgYXV0bztcclxuICAgIH1cclxuICAgICNoZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgI2hlYWRlcjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgI2hlYWRlciAqIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbiAgICAjbmF2LWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICAgICNuYXYtYmFyIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAjbmF2LWJhciBzcGFuLmFjdGl2ZS10YWIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICAgICAgICBjb2xvcjogYnVybHl3b29kO1xyXG4gICAgfVxyXG4gICAgI2hlYWRlcnRleHQge1xyXG4gICAgICAgIG1hcmdpbjogNnJlbSAwO1xyXG4gICAgfVxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxuICAgICNmb290ZXIgYSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9YCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcclxuICBjb250ZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgaWYgKGVsZW0uaWQgIT09IFwiaGVhZGVyXCIgJiYgZWxlbS5pZCAhPT0gXCJmb290ZXJcIikge1xyXG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGVsZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UGFnZSgpIHtcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICBzdHlsZVBhZ2UoKTtcclxuXHJcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcclxuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjZW50ZXJcIik7XHJcblxyXG4gIGhlYWRlci5pbm5lckhUTUwgPSBwYWdlLmhlYWRlckh0bWw7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IHBhZ2UuZm9vdGVySHRtbDtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3R5bGVQYWdlKCkge1xyXG4gIGJhc2VTdHlsZS5pbm5lckhUTUwgPSBwYWdlLmJhc2VTdHlsZUh0bWw7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYXNlU3R5bGUpO1xyXG4gIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHttYWluSW1nfScpIDAlIDAlIC8gY292ZXJgO1xyXG59XHJcblxyXG5leHBvcnQgeyBjb250ZW50LCBoZWFkZXIsIGNsZWFyQ29udGVudCwgaW5pdFBhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGhlYWRlciwgaW5pdFBhZ2UsIGNsZWFyQ29udGVudCB9IGZyb20gXCIuL3BhZ2VzLmpzXCI7XHJcbmltcG9ydCBhcHBlbmRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IGFwcGVuZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgYXBwZW5kQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcblxyXG5pbml0UGFnZSgpO1xyXG5hcHBlbmRIb21lKCk7XHJcbmFkZFRhYnNFdmVudCgpO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFic0V2ZW50KCkge1xyXG4gICAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKS5mb3JFYWNoKHRhYiA9PiB0YWIub25jbGljayA9IHN3aWN0aFRhYilcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpY3RoVGFiKGUpIHtcclxuICBjb25zdCBlbGVtID0gZS50YXJnZXQsXHJcbiAgICB0YWJUeHQgPSBlbGVtLnRleHRDb250ZW50O1xyXG5cclxuICAvLyBEbyBub3RoaW5nIGlmIHVzZXIgY2xpY2tlZCBhbiBhY3RpdmUgdGFiXHJcbiAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXRhYlwiKSkgcmV0dXJuO1xyXG5cclxuICAvLyBTZXQgYWN0aXZlIHRhYlxyXG4gIGhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXRhYlwiKSkge1xyXG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS10YWJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXRhYlwiKTtcclxuXHJcbiAgLy8gTW9kaWZ5IGNvbnRlbnRcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICBpZiAodGFiVHh0ID09PSBcIkhvbWVcIikge1xyXG4gICAgYXBwZW5kSG9tZSgpO1xyXG4gIH0gZWxzZSBpZiAodGFiVHh0ID09PSBcIk1lbnVcIikge1xyXG4gICAgYXBwZW5kTWVudSgpO1xyXG4gIH0gZWxzZSBpZiAodGFiVHh0ID09PSBcIkNvbnRhY3RcIikge1xyXG4gICAgYXBwZW5kQ29udGFjdCgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=