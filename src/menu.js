const createMenuContent = () => {
    const tab = document.createElement("div");
    tab.classList.add("home");
    tab.classList.add("card-container")
    
    const card1 = document.createElement("div");
    card1.classList.add("card")
    card1.innerHTML = ` 
    <img src="/images/sandwich.png" alt="Avatar" style="width:100%">
    <div class="info-container">
        <h4><b>Mustard Panini </br> 2.00$</b></h4>
    </div>`

  const card2 = document.createElement("div");
  card2.classList.add("card")
  card2.innerHTML = `
  <img src="/images/burger.png" alt="Avatar" style="width:100%">
  <div class="info-container">
    <h4><b>Cheese Burger </br> 4.00$</b></h4>
  </div>`

const card3 = document.createElement("div");
card3.classList.add("card")
card3.innerHTML = `
<img src="/images/sandwich_2.png" alt="Avatar" style="width:100%">
<div class="info-container">
    <h4><b>Whole wheat </br> 1.50$</b></h4>
</div>`

const card4 = document.createElement("div");
card4.classList.add("card")
card4.innerHTML = `
<img src="/images/sandwich_3.png" alt="Avatar" style="width:100%">
<div class="info-container">
  <h4><b>Salami Sandwich </br> 2.50$ </b></h4>
</div>`

const card5 = document.createElement("div");
card5.classList.add("card")
card5.innerHTML = `
<img src="/images/sandwich_3.png" alt="Avatar" style="width:100%">
<div class="info-container">
  <h4><b>Vegie Sandwich </br> 2.00$</b></h4>
</div>`


const card6 = document.createElement("div");
card6.classList.add("card")
card6.innerHTML = `
<img src="/images/sandwich_3.png" alt="Avatar" style="width:100%">
<div class="info-container">
  <h4><b>Curry Sandwich 3.50$</b></h4>
</div>`


  tab.appendChild(card1);
  tab.appendChild(card2);
  tab.appendChild(card3);
  tab.appendChild(card4);
  tab.appendChild(card5);
  tab.appendChild(card6);
    
    return tab;
}

export {createMenuContent};