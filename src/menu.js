import beverageImg from './img/tinto.jpg';
import dishImg from './img/ribollita.jpg';
import dessertImg from './img/chocolate cake.jpg';
import { content } from './pages.js';

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

export default function appendMenu() {
  content.insertBefore(menu, content.lastChild);

  // Add images for each food category
  document.getElementById(
    "dishes-contr"
  ).style.background = `url('${dishImg}') 0% 0% / cover`;
  document.getElementById(
    "desserts-contr"
  ).style.background = `url('${dessertImg}') 0% 0% / cover`;
  document.getElementById(
    "beverage-contr"
  ).style.background = `url('${beverageImg}') 0% 0% / cover`;

  document.getElementById("headertext").textContent = menuTxt;
  document.title = menuTxt;
}
