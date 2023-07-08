import { content } from "./pages";

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

export default function appendContact() {
    content.insertBefore(contact, content.lastChild);
    document.getElementById("headertext").textContent = contactTxt;
    document.title = contactTxt;
}
