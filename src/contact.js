const createContactContent = () => {

    const tab = document.createElement("div");
    tab.classList.add("contact");

    tab.innerHTML = ` 
    <div class="contact-container">
      <h1><b>Contact</b></h1>
      <ul>
        <p>Phone: 123-123-543</p>
        <p>Mail: labaguette@fakeemail.com</p>
        <p>Address: 123 Sandwich rd, baguetteville, Sweden </p>
      </ul>
    </div>
    `
    return tab;
}

export {createContactContent};