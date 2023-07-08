import { header, initPage, clearContent } from "./pages.js";
import appendHome from "./home.js";
import appendMenu from "./menu.js";
import appendContact from "./contact.js";

initPage();
appendHome();
addTabsEvent();

function addTabsEvent() {
    header.querySelectorAll('.tab').forEach(tab => tab.onclick = swicthTab)
}

function swicthTab(e) {
  const elem = e.target,
    tabTxt = elem.textContent;

  // Do nothing if user clicked an active tab
  if (elem.classList.contains("active-tab")) return;

  // Set active tab
  header.querySelectorAll(".tab").forEach((tab) => {
    if (tab.classList.contains("active-tab")) {
      tab.classList.remove("active-tab");
    }
  });
  elem.classList.add("active-tab");

  // Modify content
  clearContent();
  if (tabTxt === "Home") {
    appendHome();
  } else if (tabTxt === "Menu") {
    appendMenu();
  } else if (tabTxt === "Contact") {
    appendContact();
  }
}
