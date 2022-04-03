import "./style.css";
import tabs from "./tabs.js";
import home from "./home.js";
import menu from "./menu.js";

let currentTab = "home";
const content = document.querySelector("#content");

function clickTab() {
    const btns = document.querySelectorAll("button");
    btns.forEach ((btn) => {
        btn.addEventListener("click", (event) => {
            const tab = btn.id.split("-")[0];
            if (tab == currentTab) {
                return;
            }

            if (tab == "home") {
                currentTab = "home";
                removeDisplay();
                home();
            } else if (tab == "menu") {
                currentTab = "menu";
                removeDisplay();
                menu();
            } else if (tab == "contact") {
                currentTab = "contact";
                removeDisplay();
                contact();
            }
        })
    })
}

function removeDisplay() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function main() {
    tabs();
    home();
    clickTab();
}

main();