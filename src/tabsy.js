const createTabModule = (() => {

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("button-items")
    return {buttonGroup};

})();

const createHomeTab = () => {

    const button = document.createElement("button");
    button.value = "home"
    button.textContent = "Home";
    button.classList.add("button-tab");
    createTabModule.buttonGroup.appendChild(button);
}

 const createMenuTab = () => {
    
    const button = document.createElement("button");
    button.value = "menu"
    button.textContent = "Menu";
    button.classList.add("button-tab");
    createTabModule.buttonGroup.appendChild(button);

 }

 const createContactTab = () => {
    const button = document.createElement("button");
    button.value = "contact"
    button.textContent = "Contact";
    button.classList.add("button-tab");
    createTabModule.buttonGroup.appendChild(button);
}

const assembleTabsy = (() => {
    createHomeTab();
    createMenuTab();
    createContactTab();
})();

const loadTabsy = () => {
    console.log(createTabModule.buttonGroup)
    return createTabModule.buttonGroup;

}

export {loadTabsy};