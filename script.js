'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: { // same as putting thu
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
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, // ES6 enhanced object literal, no need to do openingHours: openingHours

  // order : function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // orderDelivery: function({starterIndex, mainIndex, time, address}) {
  //   console.log(`Order received! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  // },

  // orderPasta: function(ing1, ing2, ing3) {
  //   console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  // },

  // orderPizza: function(mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // }
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex, mainIndex, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
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

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

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

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

restaurantCopy.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

/******** Short Circuiting **********/
console.log("----------OR----------");
const guests = restaurant.numGuests || 20;
console.log(guests);

console.log("----------AND----------");
restaurant.orderPizza && restaurant.orderPizza('cheese');

/******** CODING CHALLENGE #1 ********/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// question 1
const [players1, players2] = game.players;
console.log(players1, players2);

// question 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// question 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// question 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// question 5
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

// question 6
function printGoals(...players) {
  for(const player of players) {
    console.log(player);
  }
  console.log(players.length);
}

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');

printGoals(...game.scored);

(team1 < team2) && console.log('Team #1 is more likely to win');
(team2 < team1) && console.log('Team #2 is more likely to win');

/******** END OF CHALLENGE ********/

console.log('\nCHALLENGE COMPLETE\n');

const totalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log([...totalMenu.entries()]);


/******** CODING CHALLENGE #2 ********/

console.log('\nCODING CHALLENGE #2\n');

// question 1
for(const [idx, ele] of game.scored.entries()) {
  console.log(`Goal ${idx}: ${ele}`);
}

// question 2
let average = 0;
for(const odd of Object.values(game.odds)) {
  average += odd;
}
average /= 3;

console.log(average);

// question 3
for(const [key, odds] of Object.entries(game.odds)) {
  game[key] && console.log(`Odd of victory ${game[key]}: ${odds}`);
  game[key] || console.log(`Odd of draw: ${odds}`);
}

console.log('\nCHALLENGE COMPLETE\n');

/******** END OF CHALLENGE ********/

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);

/******** CODING CHALLENGE #3 ********/

console.log('\nCODING CHALLENGE #3\n');

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// question 1
const events = [...new Set([...gameEvents.values()])];
console.log(events);

// question 2
gameEvents.delete(64);

// question 3
console.log(`An event happened on average, every ${90/gameEvents.size} minutes`);

// question 4
for(const [key, value] of gameEvents.entries()) {
  key <= 45 && console.log(`[FIRST HALF] ${key}: ${value}`);
  key > 45 && console.log(`[SECOND HALF] ${key}: ${value}`);
}

console.log('\nCHALLENGE COMPLETE\n');

/******** END OF CHALLENGE ********/

console.log('aaaaa'.replaceAll('a', 'b'));

/******** CODING CHALLENGE #4 ********/

console.log('\nCODING CHALLENGE #3\n');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const textInput = document.querySelector('textarea').value;
  const lines = textInput.split('\n');
  // console.log(lines);
  for(const [idx, line] of lines.entries()) {
    const [firstHalf, secondHalf] = line.trim().toLowerCase().split('_');
    const output = `${firstHalf}${secondHalf.replace(secondHalf[0], secondHalf[0].toUpperCase())}`;
    const modifiedLine = `${output.padEnd(20)}${'✅'.repeat(idx + 1)}`;
    console.log(modifiedLine);

  }
})


console.log('\nCHALLENGE COMPLETE\n');

/******** END OF CHALLENGE ********/

// const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;
// bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;
// fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const formatFlightData = function(str) {
  const flightsArray = flights.split('+');
  for(const flightData of flightsArray) {
    const [flightStatus, source, destination, time] = flightData.split(';');
    const [hour, minute] = time.split(":");
    const output = `${flightStatus.includes("Delayed") ? "🛑 " : ""}${flightStatus.split('_').join(' ').trim()} from ${source.slice(0, 4).toUpperCase()} to ${destination.slice(0, 4).toUpperCase()} (${hour}h${minute})`
    console.log(output.padStart(50, ' '));
  }
}

formatFlightData(flights);