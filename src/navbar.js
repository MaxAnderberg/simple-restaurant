import {
    loadTabsy
} from './tabsy'

const navbarModule = (() => {
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    return {
        navbar
    };
})();

const createHeader = () => {

    const navBar_header = document.createElement("h1");
    navBar_header.textContent = "Max' Sandwiches"
    navBar_header.classList.add("navbar-header");

    return navBar_header;
}

const assembleNavbar = (() => {


    // add the header for the navbar 'La Baguette'
    navbarModule.navbar.appendChild(createHeader());
    // add the tabs
    navbarModule.navbar.appendChild(loadTabsy());
})();

const loadNavbar = () => {
    console.log("I'm stuck behind the screen!");
    return navbarModule.navbar;
}

export {
    loadNavbar
};