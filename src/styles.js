const styleHtml = `
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    background-color: #ffb38c;
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
    color: #ffb38c;
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
}
#homepage {
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
}
#menupage {
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
}
#contact ul {
    text-align: center;
    margin: 5rem 0;
    padding: 0;
    list-style: none;
}
#contact li {
    margin: 1rem 0;
    font-size: large;
}`;

export default function stylePage() {
    const node = document.createElement('style');
    node.innerHTML = styleHtml;
    document.body.appendChild(node);
}