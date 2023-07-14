'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order : function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};


/******** Array Destructuring **********/

const arr = [2,3,4];
const [x,y,z] = arr;
console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;
console.log(i, j);

const [a, , [b, c]] = nested;
console.log(a, b, c);

const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);

/******** Object Destructuring **********/

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

let prop1 = 111, prop2 = 999;
const obj = {prop1: 14, prop2: 21, c: 7};
({prop1, prop2} = obj);
console.log(prop1, prop2);

const {fri: {open, close}} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: '1039 South Oakley',
  starterIndex: 2,
  mainIndex: 2
});

/******** Spread Operator **********/

const spreadArr = [3,4,5];
const bigSpreadArr = [1, 2, ...spreadArr];
console.log(bigSpreadArr);
console.log(...bigSpreadArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

const completeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(completeMenu);

const str = 'Aakash';
const letters = [...str, " ", "D."];
console.log(...letters);

const ingredients = [
  // prompt("Let\'s make pasta. Ingredient 1?"), 
  // prompt("Let\'s make pasta. Ingredient 2?"), 
  // prompt("Let\'s make pasta. Ingredient 3?")
];
restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = {foundedIn: '1998', ...restaurant, founder: 'Mario'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name, restaurantCopy.name);

/******** Rest pattern and parameters **********/
const [ele1, ele2, ...others] = [1, 2, 3, 4, 5];
console.log(ele1, ele2, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFoods);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

restaurantCopy.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

/******** Short Circuiting **********/
console.log("----------OR----------");
const guests = restaurant.numGuests || 20;
console.log(guests);

console.log("----------AND----------");
restaurant.orderPizza && restaurant.orderPizza('cheese');

