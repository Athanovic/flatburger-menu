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

// ----------------------------
// Block-Scoped Variable & Function
// ----------------------------
if (true) { // this block always executes
  const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped variable
  burgers.push(anotherNewBurger);

  function changeFeaturedDrink() { // function inside block
    featuredDrink = 'The JavaShake';
  }

  changeFeaturedDrink(); // call function to update drink
}

// ----------------------------
// Display Data on the Page
// ----------------------------

// Display burgers in a list
const burgerList = document.getElementById('burger-list');
burgers.forEach(burger => {
  const li = document.createElement('li');
  li.textContent = burger;
  burgerList.appendChild(li);
});

// Display featured drink
document.getElementById('drink').textContent = featuredDrink;

// ----------------------------
// Optional Test in Console
// ----------------------------
console.log("Burgers:", burgers);
console.log("Featured Drink:", featuredDrink);
