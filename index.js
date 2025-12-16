// ----------------------------
// Global Variables (Array and String)
// ----------------------------
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// ----------------------------
// Function with Function-Scoped Variable
// ----------------------------
function addBurger() {
  let newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Execute the function
addBurger();

// ----------------------------++++++
// Block Scope with Const Variable
// ----------------------------
if (true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);

  // Function that changes the featured drink
  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
  }

  changeFeaturedDrink();
}

// ----------------------------
// DOM Manipulation (if elements exist)
// ----------------------------
if (typeof document !== 'undefined') {
  const burgerList = document.getElementById('burger-list');
  if (burgerList) {
    burgers.forEach(burger => {
      const li = document.createElement('li');
      li.textContent = burger;
      burgerList.appendChild(li);
    });
  }

  const drinkElement = document.getElementById('drink');
  if (drinkElement) {
    drinkElement.textContent = featuredDrink;
  }
}

// ----------------------------
// Module Exports (for testing)
// ----------------------------
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    burgers,
    featuredDrink,
    addBurger
  };
}