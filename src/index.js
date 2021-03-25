import {
    pageLoader
} from './website';
import {
    loadNavbar
} from './navbar';
import {
    createMenuContent
} from './menu';
import {
    createHomeContent
} from './home';

import {createContactContent} from './contact';

console.log("Hello World");

const content = document.getElementById("content");

content.appendChild(loadNavbar());

const main_container = document.createElement("section");
main_container.classList.add("content-container")

const main = document.createElement("div");
main.id = "main";

// removes all the children of a node
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

main.appendChild(createHomeContent());
main_container.appendChild(main)
content.appendChild(main_container);

// add event listeners

const buttons = document.getElementsByClassName("button-tab")
const buttonsArray = [...buttons]

buttonsArray.forEach(button => {
    button.addEventListener('click', () => {
        // if there is one or more children remove them.
        if (main.childNodes.length >= 1) {
            removeAllChildNodes(main);
        } 
        if (button.value === "menu" ) {
            main.appendChild(createMenuContent());
            console.log(main.childNodes.length)
            main_container.appendChild(main)
        } else if (button.value === "home") {
            main.appendChild(createHomeContent());
            main_container.appendChild(main)
        } else if ( button.value === "contact") {
            main.appendChild(createContactContent());
            main_container.appendChild(main)
        }
    });
});

/*
    1. When I click the button I want to load content for respective button
    2. So if I click "menu" I want to load the menu content
        1. The content should probably be stored in a div
*/