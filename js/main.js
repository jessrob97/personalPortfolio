import {
    planets
} from './planets.js'
import {
    people
} from './people.js'

const parseStringInt = strInt => {
    return parseInt(strInt.replace(/\,/g, ''));
}

const planetsList = document.querySelector("#planets");

planets
    .sort((a, b) => (a.name > b.name) ? 1 : -1)
    .forEach(planet => {
        const li = document.createElement("li");

        const name = document.createElement("h3");
        name.textContent = planet.name;
        li.appendChild(name);

        const terrain = document.createElement("div");
        terrain.textContent = "Terrain: " + planet.terrain;
        li.appendChild(terrain);

        const climate = document.createElement("div");
        climate.textContent = "Climate: " + planet.climate;
        li.appendChild(climate);

        planetsList.appendChild(li);
    });

const peopleList = document.querySelector("#people");
people
    .filter(person => person.mass !== "unknown")
    .sort((a, b) => (parseStringInt(a.mass) < parseStringInt(b.mass)) ? 1 : -1)
    .slice(0, 10)
    .forEach(person => {
        const li = document.createElement("li");
        li.textContent = person.name + ", " + person.mass;
        peopleList.appendChild(li);
    });


//////////////////////////////////////////////////////////////
/////////// BASEBALL CARDS ASSIGNMENT
//////////////////////////////////////////////////////////////

const parkList = document.querySelector("#parks");

const appendCard = park => {
    const li = document.createElement("li");
    li.classList.add("parkscard");
    li.addEventListener("click", () => {
        li.classList.toggle("is-flipped")
    });

    // Create and append front card
    const front = document.createElement("div");
    front.classList.add("parkscard-front");
        front.classList.add("parkscard-face");
    li.appendChild(front);

    const name = document.createElement("h3");
    name.textContent = park.name;
    front.appendChild(name);

    // Create and append back card
    const back = document.createElement("div");
    back.classList.add("parkscard-back");
        back.classList.add("parkscard-face");

    li.appendChild(back);

    const designation = document.createElement("div");
    designation.textContent = "designation: " + park.designation;
    back.appendChild(designation);

    const states = document.createElement("div");
    states.textContent = "states: " + park.states;
    back.appendChild(states);
    
    const topActivity = document.createElement("div");
    topActivity.textContent = "top activity: " + park.topActivity;
    back.appendChild(topActivity);

    parkList.appendChild(li);
    
    return;
}

const url = "https://developer.nps.gov/api/v1/parks?limit=30&api_key=miCYMXRQUXtycQSgTSa1uRK48U3pBo7RUoxAwhLk";
fetch(url)
    .then(resp => resp.json())
    .then(data => {
    console.log(data);
        document.querySelector("#parks-warning").style.display = 'none';

        data.data
            .map(park => {
                if(park.activities.length > 0) {
                    park.topActivity = park.activities[0].name;
                }
                return park;
            })
            .sort((a, b) => (a.name > b.name) ? 1 : -1)
            .forEach(park => {
                appendCard(park);
            });
})

document.getElementById("new-park-button").addEventListener("mousedown", event => {
    appendCard({
        name: "my fake park",
        topActivity:"Fishing",
        states: "Utah",
        designation: "Park"
    });
})