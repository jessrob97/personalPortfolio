import {
    planets
} from './planets.js'

const ul = document.querySelector("#planets");

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

        ul.appendChild(li);
    });