class Chef {

    constructor(name, position, number, email) {
        this.name = name;
        this.position = position;
        this.number = number;
        this.email = email;
    }

    createContact() {
        const main = document.createElement("div");
        const info = document.createElement("div");

        main.classList.add("contact");
        info.classList.add("info");

        const chefName= document.createElement("h3");
        const chefPosition = document.createElement("p");
        const chefNumber = document.createElement("p");
        const chefEmail = document.createElement("p");

        chefName.textContent = this.name;
        chefPosition.textContent = this.position;
        chefNumber.textContent = this.number;
        chefEmail.textContent = this.email;

        info.appendChild(chefPosition);
        info.appendChild(chefNumber);
        info.appendChild(chefEmail);

        main.appendChild(chefName);
        main.appendChild(info);

        contactContainer.appendChild(main);
    }
}

const content = document.querySelector("#content");
const contactContainer = document.createElement("div");
contactContainer.classList.add("contact-container");
const fam = {
    "Grandpa": ["Head Chef", "111-222-1111", "grandpa_lee@kimchi.com"],
    "Papa": ["Sous Chef", "111-222-2222", "papa_lee@kimchi.com"],
    "Son": ["Store Manager", "111-222-3333", "son_lee@kimchi.com"]
}


function contact() {
    for (let key in fam) {
        const newChef = new Chef(key, fam[key][0], fam[key][1], fam[key][2]);
        newChef.createContact();
    }

    content.appendChild(contactContainer);
}

export default contact;