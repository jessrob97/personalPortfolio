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