function tabs() {
    const body = document.querySelector("body");
    const tabs = document.createElement("div");
    tabs.classList.add("tabs");
    const pages = ["home", "menu", "contact"];
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const tab = document.createElement("button");
        tab.setAttribute("id", page + "-tab");
        tab.textContent = page.charAt(0).toUpperCase() + page.slice(1);
        tabs.appendChild(tab);
    }
    body.appendChild(tabs);
}

export default tabs;