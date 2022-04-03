const storeHours = {
    "Monday": "9am - 6pm",
    "Tuesday": "9am - 6pm",
    "Wednesday": "9am - 6pm",
    "Thursday": "9am - 6pm",
    "Friday": "10am - 5pm",
    "Saturday": "10am - 3pm"
}


function home() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "Lee's Kimchi Market"

    const aboutUs = document.createElement("div");
    const aboutUsHeader = document.createElement("h3");
    const aboutUsInfo = document.createElement("p");

    aboutUs.classList.add("about-us");
    aboutUsHeader.textContent = "About Us";
    aboutUsInfo.textContent = "Lee's Kimchi Market aims to serve the authentic Korean taste to customers all around the globe. \
        Our recipe has been passed on for 4 generations and has not been changed ever since our founder, Ki Lee, opened the store over a century ago. \
        Take a look at our products and try our samples to discover your \"Kimchi palate\".";
    aboutUs.appendChild(aboutUsHeader);
    aboutUs.appendChild(aboutUsInfo);


    const hours = document.createElement("div");
    const hoursHeader = document.createElement("h3");
    const hoursInfo = document.createElement("ul");

    hours.classList.add("hours");
    hoursHeader.textContent = "Hours";
    for (let key in storeHours) {
        const dayHour = document.createElement("li");
        dayHour.textContent = (key + " : " + storeHours[key]);
        hoursInfo.appendChild(dayHour);
    }
    hours.appendChild(hoursHeader);
    hours.appendChild(hoursInfo);

    const location = document.createElement("div");
    const locationHeader = document.createElement("h3");
    const locationInfo = document.createElement("p");

    location.classList.add("location");
    locationHeader.textContent = "Location"
    locationInfo.textContent = "123 Tiger St, New York, NY 10003"
    location.appendChild(locationHeader);
    location.appendChild(locationInfo);

    content.appendChild(header);
    content.appendChild(aboutUs);
    content.appendChild(hours);
    content.appendChild(location);
}

export default home;