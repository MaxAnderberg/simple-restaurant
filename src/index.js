import {
    pageLoader
} from './website';

import {
    createMenuContent
} from './menu';
import {
    createHomeContent
} from './home';

import {
    createContactContent
} from './contact';

import {
    removeAllChildNodes
} from './removeChildren';

// load the main page
pageLoader();

const buttons = document.getElementsByClassName("button-tab")
const buttonsArray = [...buttons]

// add event listeners
buttonsArray.forEach(button => {
    button.addEventListener('click', () => {
        // if there is one or more children remove them.
        if (main.childNodes.length >= 1) {
            removeAllChildNodes(main);
        }
        if (button.value === "menu") {
            main.appendChild(createMenuContent());
            console.log(main.childNodes.length)
            main_container.appendChild(main)
        } else if (button.value === "home") {
            main.appendChild(createHomeContent());
            main_container.appendChild(main)
        } else if (button.value === "contact") {
            main.appendChild(createContactContent());
            main_container.appendChild(main)
        }
    });
});