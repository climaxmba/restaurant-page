import stylePage from './styles.js';
import beverageImg from './tinto.jpg';
import dishImg from './ribollita.jpg';
import dessertImg from './chocolate cake.jpg';
import mainImg from './main.jpg';

const content = document.getElementById("content"),
  header = document.createElement("div"),
  footer = document.createElement("div"),
  home = document.createElement("div"),
  menu = document.createElement("div"),
  contact = document.createElement("div"),
  homeTxt = "Cocina de la Emperatriz",
  menuTxt = "Our foods",
  contactTxt = "Contact us";



const page = {
    headerHtml: `<div id="nav-bar"><span class="active-tab tab">Home</span><span class="tab">Menu</span><span class="tab">Contact</span></div>
    <h1 id="headertext" class="center">Cocina de la Emperatriz</h1>`,
    homeHtml: `<div id="hometext">We offer a wide variety of foods from around the world!</div>
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
        </div>`,
    menuHtml: `<div id="dishes-contr">
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
    </div>`,
    contactHtml: `<ul>
        <li><span>Phone: </span><span>555-555-555</span></li>
        <li><span>Email: </span><span>support@reallycoolresturant.com</span></li>
    </ul>`,
    footerHtml: `<a href="https://www.pexels.com/photo/chairs-and-tables-in-hotel-3201921/">Photo by Quark Studio</a><span>|</span><a href="#">Source code</a>`
}

function clearContent() {
    content.childNodes.forEach(elem => {
        if (elem.id !== 'header' && elem.id !== 'footer') {
            content.removeChild(elem);
        }
    })
}

export default function initPage() {
    clearContent()
    stylePage();

    header.setAttribute('id', 'header');
    footer.setAttribute('id', 'footer');
    footer.setAttribute('class', 'center');
    menu.setAttribute('class', 'main');
    menu.setAttribute('id', 'menupage');
    home.setAttribute('id', 'homepage');
    contact.setAttribute('id', 'contact');
    home.className = 'main center active';

    header.innerHTML = page.headerHtml;
    footer.innerHTML = page.footerHtml;
    home.innerHTML = page.homeHtml;
    menu.innerHTML = page.menuHtml;
    contact.innerHTML = page.contactHtml;

    content.appendChild(header);
    content.appendChild(home)
    content.appendChild(footer);

    addTabsEvent();
    addImg(true);
}

function addTabsEvent() {
    header.querySelectorAll('.tab').forEach(tab => tab.onclick = swicthTab)
}

function swicthTab(e) {
    const elem = e.target,
    tabTxt = elem.textContent;

    // Do nothing if user clicked an active tab
    if (elem.classList.contains('active-tab')) return;

    // Set active tab
    header.querySelectorAll('.tab').forEach(tab => {
        if (tab.classList.contains('active-tab')) {
            tab.classList.remove('active-tab')
        }
    })
    elem.classList.add('active-tab');

    // Modify content
    clearContent();
    if (tabTxt === 'Home') {
        content.insertBefore(home, content.lastChild);
        document.getElementById("headertext").textContent = homeTxt;
    } else if (tabTxt === 'Menu') {
        content.insertBefore(menu, content.lastChild);
        document.getElementById("headertext").textContent = menuTxt;
        addImg(false, true);
    } else if (tabTxt === 'Contact') {
        content.insertBefore(contact, content.lastChild);
        document.getElementById("headertext").textContent = contactTxt;
    }
}

function addImg(main, menu) {
    if (main) {
      header.style.background = `url('${mainImg}') 0% 0% / cover`;
    } else if (menu) {
      document.getElementById(
        "dishes-contr"
      ).style.background = `url('${dishImg}') 0% 0% / cover`;
      document.getElementById(
        "desserts-contr"
      ).style.background = `url('${dessertImg}') 0% 0% / cover`;
      document.getElementById(
        "beverage-contr"
      ).style.background = `url('${beverageImg}') 0% 0% / cover`;
    }
}