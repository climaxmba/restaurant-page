import mainImg from "./img/main.jpg";

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
  header.style.background = `url('${mainImg}') 0% 0% / cover`;
}

export { content, header, clearContent, initPage };
