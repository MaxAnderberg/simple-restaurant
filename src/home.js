const createHomeContent = () => {

    const tab = document.createElement("div");
    tab.classList.add("home");

    tab.innerHTML = ` 
    <div class="home-container">
      <h1><b>Welcome to La Baguette</b></h1>
      <p>We are lucky to live in a glorious age that gives us everything we 
      could ask for as a human race. What more could you need when 
      you have meat covered in cheese nestled between bread as a 
      complete meal.</p>
    <img id="home-img" src="/images/pexels-photo-784633.jpeg" alt="Avatar">
    <p id="contact-us">What more could you need when 
    you have meat covered in cheese nestled between bread.</p>
    </div>
    `

    return tab;
}

export {
    createHomeContent
};