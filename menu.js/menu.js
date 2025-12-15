// ----------------------------
// Global Variables
// ----------------------------
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// ----------------------------
// Function-Scoped Variable
// ----------------------------
function addBurger() {
  let newBurger = 'Flatburger'; // function-scoped variable
  burgers.push(newBurger);
}

// Call the function to add the burger
addBurger();

// ----------------------------
// Block-Scoped Variable & Function
// ----------------------------
if (true) {
  const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped variable
  burgers.push(anotherNewBurger);

  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
  }

  changeFeaturedDrink();
}

// ----------------------------
// Display Data on the Page
// ----------------------------

// Display burgers in a list
const burgerList = document.getElementById('burger-list');
if (burgerList) {
  burgers.forEach(burger => {
    const li = document.createElement('li');
    li.textContent = burger;
    burgerList.appendChild(li);
  });
}

// Display featured drink
const drinkElement = document.getElementById('drink');
if (drinkElement) {
  drinkElement.textContent = featuredDrink;
}

// ----------------------------
// Console output for testing
// ----------------------------
console.log("Burgers:", burgers);
console.log("Featured Drink:", featuredDrink);