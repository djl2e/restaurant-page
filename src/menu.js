import baechuImage from "./img/baechu.jpg";
import chonggakImage from "./img/chonggak.jpg";
import paImage from "./img/pa.jpg";

class Menu {

    constructor(ingredient, price, info, imgSrc) {
        this.ingredient = ingredient;
        this.header = ingredient[0].toUpperCase() + ingredient.slice(1) + " Kimchi";
        this.price = "$" + price.toString() + "/gal";
        this.info = info;
        this.imgSrc = imgSrc;
    }

    createMenu() {
        const mainDiv = document.createElement("div");
        const leftDiv = document.createElement("div");
        const topLeftDiv = document.createElement("div");
        const divHeader = document.createElement("h3");
        const divPrice = document.createElement("p");
        const divInfo = document.createElement("p");
        const divImg = new Image();

        mainDiv.classList.add("menu");
        leftDiv.classList.add("menu-left");
        topLeftDiv.classList.add("menu-top-left");
        
        divHeader.textContent = this.ingredient[0].toUpperCase() + this.ingredient.slice(1) + " Kimchi";
        divPrice.textContent = this.price;
        divInfo.textContent = this.info;
        divImg.src = this.imgSrc;

        topLeftDiv.appendChild(divHeader);
        topLeftDiv.appendChild(divPrice);
        leftDiv.appendChild(topLeftDiv);
        leftDiv.appendChild(divInfo);
        mainDiv.appendChild(leftDiv);
        mainDiv.appendChild(divImg);

        content.appendChild(mainDiv);
    }
}

const content = document.querySelector("#content");
const menuList = {
    "baechu": ["baechu", 60, "The classic, traditional kimchi made with napa cabbage. Complements any type of food. \
    Perfect ingredient to make jjigae (stew) or bokkeum (stir-fry).", baechuImage],
    "chonggak": ["chonggak", 65, "A radish kimchi that has a fresh taste with a crunchy texture. \
    Goes especially well with noodle dishs like ramen and kalguksu (noodle soup) and meat-based soups.", chonggakImage],
    "pa": ["pa", 75, "A kimchi made with green onion (owner's personal favorite!). A heavens match with pork dishes, \
    especially samgyeopsal (pork belly roast). Great as a snack to go with makgeolli (milky sparkling rice wine)", paImage]
}

function menu() {
    const header = document.createElement("h1");
    header.textContent = "Menu";
    content.appendChild(header);

    for (let key in menuList) {
        const newMenu = new Menu(menuList[key][0], menuList[key][1], menuList[key][2], menuList[key][3]);
        newMenu.createMenu();
    }
}

export default menu;