import {
    loadNavbar
} from './navbar';
import {
    createMenuContent
} from './menu';
import {
    createHomeContent
} from './home';

const pageLoader = () => {

    const content = document.getElementById("content");

    content.appendChild(loadNavbar());

    const main_container = document.createElement("section");
    main_container.classList.add("content-container")

    const main = document.createElement("div");
    main.id = "main";

    // load the homepage info when the page is generated
    main.appendChild(createHomeContent());
    main_container.appendChild(main)
    content.appendChild(main_container);


}

export {
    pageLoader
}
