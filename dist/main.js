(()=>{"use strict";var n={};n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();const e=n.p+"0d8b82be3f9951188365.jpg",t=n.p+"e821a8ae3e4594e013a9.jpg",i=n.p+"0988b86b1ffd804429b5.jpg",o=n.p+"27f5237daad1e0fea2ce.jpg",r=document.getElementById("content"),a=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),p='<div id="nav-bar"><span class="active-tab tab">Home</span><span class="tab">Menu</span><span class="tab">Contact</span></div>\n    <h1 id="headertext" class="center">Cocina de la Emperatriz</h1>',m='<div id="hometext">We offer a wide variety of foods from around the world!</div>\n        <div id="workinfo">\n            <div>\n                <h2>Hours</h2>\n                <ul>\n                    <li>Week-days: 8:00am - 10:00pm</li>\n                    <li>Week-ends: 10:00am - 9:00pm</li>\n                </ul>\n            </div>\n            <div>\n                <h2>Location</h2>\n                <ul>\n                    <li>Los Angeles, California</li>\n                    <li>Acapulco, Mexico</li>\n                </ul>\n            </div>\n        </div>',u='<div id="dishes-contr">\n        <h2 class="center">Dishes</h2>\n        <div class="foods center">\n            <div>\n                <h3>Pork carnitas</h3>\n                <p>$15.46</p>\n            </div>\n            <div>\n                <h3>Gnocci</h3>\n                <p>$13.15</p>\n            </div>\n            <div>\n                <h3>Ribollita</h3>\n                <p>$8.17</p>\n            </div>\n        </div>\n    </div>\n    <div id="desserts-contr">\n        <h2 class="center">Desserts</h2>\n        <div class="foods center">\n            <div>\n                <h3>Chocolate cake</h3>\n                <p>$8.00</p>\n            </div>\n            <div>\n                <h3>Gingerbread</h3>\n                <p>$5.20</p>\n            </div>\n            <div>\n                <h3>Apple pie</h3>\n                <p>$6.17</p>\n            </div>\n        </div>\n    </div>\n    <div id="beverage-contr">\n        <h2 class="center">Beverages</h2>\n        <div class="foods center">\n            <div>\n                <h3>Verdejo</h3>\n                <p>$15.20</p>\n            </div>\n            <div>\n                <h3>Tinto de Verano</h3>\n                <p>$36.00</p>\n            </div>\n            <div>\n                <h3>Ribera del Duero</h3>\n                <p>$28.60</p>\n            </div>\n        </div>\n    </div>',h="<ul>\n        <li><span>Phone: </span><span>555-555-555</span></li>\n        <li><span>Email: </span><span>support@reallycoolresturant.com</span></li>\n    </ul>",v='<a href="#">Source code</a>';function b(){r.childNodes.forEach((n=>{"header"!==n.id&&"footer"!==n.id&&r.removeChild(n)}))}function g(n){const e=n.target,t=e.textContent;e.classList.contains("active-tab")||(a.querySelectorAll(".tab").forEach((n=>{n.classList.contains("active-tab")&&n.classList.remove("active-tab")})),e.classList.add("active-tab"),b(),"Home"===t?(r.insertBefore(c,r.lastChild),document.getElementById("headertext").textContent="Cocina de la Emperatriz"):"Menu"===t?(r.insertBefore(s,r.lastChild),document.getElementById("headertext").textContent="Our foods",f(!1,!0)):"Contact"===t&&(r.insertBefore(l,r.lastChild),document.getElementById("headertext").textContent="Contact us"))}function f(n,r){n?a.style.background=`url('${o}') 0% 0% / cover`:r&&(document.getElementById("dishes-contr").style.background=`url('${t}') 0% 0% / cover`,document.getElementById("desserts-contr").style.background=`url('${i}') 0% 0% / cover`,document.getElementById("beverage-contr").style.background=`url('${e}') 0% 0% / cover`)}b(),function(){const n=document.createElement("style");n.innerHTML='\n* {\n    box-sizing: border-box;\n}\nbody {\n    margin: 0;\n    background-color: #ffb38c;\n}\n#content {\n    display: grid;\n    grid-template-rows: auto minmax(500px, 150%) auto;\n}\n#header {\n    padding: 30px 0;\n    position: relative;\n    color: white;\n}\n#header::before {\n    content: "";\n    background-color: black;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n#header * {\n    position: relative;\n    z-index: 10;\n}\n#nav-bar {\n    display: flex;\n    justify-content: space-around;\n}\n#nav-bar span {\n    font-weight: bold;\n    padding: 3px;\n    cursor: pointer;\n}\n#nav-bar span.active-tab {\n    border-bottom: 2px solid;\n    color: #ffb38c;\n}\n#headertext {\n    margin: 6rem 0;\n}\n.center {\n    text-align: center;\n}\n#footer {\n    margin-top: 1rem;\n    padding: 1.2rem 0;\n}\n#footer a {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n#homepage {\n    margin: 3rem 0;\n}\n#homepage ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n#hometext {\n    font-style: italic;\n    font-size: 1.5rem;\n}\n#workinfo {\n    margin: 3rem 0;\n    padding: 3rem 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#workinfo > div {\n    width: 285px;\n    padding: 1rem 2.5rem;\n    background-color: #9b4400;\n    color: white;\n}\n#workinfo h2 {\n    border-bottom: 2px solid;\n}\n#workinfo li {\n    margin: 0.8rem 0;\n}\n#menupage {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem 0;\n}\n#menupage > div {\n    margin: 15px;\n}\n#menupage h2:first-child {\n    border-bottom: 2px solid;\n}\n#dishes-contr,\n#desserts-contr,\n#beverage-contr {\n    padding: 1rem;\n    border-radius: 15px;\n    position: relative;\n    color: white;\n    opacity: 1;\n}\n#dishes-contr::before,\n#desserts-contr::before,\n#beverage-contr::before {\n    content: "";\n    background-color: black;\n    opacity: 0.4;\n    position: absolute;\n    border-radius: 15px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n#dishes-contr *,\n#desserts-contr *,\n#beverage-contr * {\n    position: relative;\n    z-index: 10;\n}\n.foods {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 16px;\n}\n#contact ul {\n    text-align: center;\n    margin: 5rem 0;\n    padding: 0;\n    list-style: none;\n}\n#contact li {\n    margin: 1rem 0;\n    font-size: large;\n}',document.body.appendChild(n)}(),a.setAttribute("id","header"),d.setAttribute("id","footer"),d.setAttribute("class","center"),s.setAttribute("class","main"),s.setAttribute("id","menupage"),c.setAttribute("id","homepage"),l.setAttribute("id","contact"),c.className="main center active",a.innerHTML=p,d.innerHTML=v,c.innerHTML=m,s.innerHTML=u,l.innerHTML=h,r.appendChild(a),r.appendChild(c),r.appendChild(d),a.querySelectorAll(".tab").forEach((n=>n.onclick=g)),f(!0)})();