import { content } from "./pages.js";

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

export default function appendHome() {
  content.insertBefore(home, content.lastChild);
  document.getElementById("headertext").textContent = homeTxt;
}
