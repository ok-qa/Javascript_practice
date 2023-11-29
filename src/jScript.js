// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//     result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
//   //result = String(formatMessage).padStart(message, maxLength);
//     /// Change code above this line
//     return result;
//   }

//   console.log(formatMessage("Curabitur ligula sapien", 16));
//   console.log(formatMessage("Curabitur ligula sapien", 23));
//   console.log(formatMessage("Vestibulum facilisis purus nec", 20));
//   console.log(formatMessage("Vestibulum facilisis purus nec", 30));
//   console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
//   console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//     result = message.toLowercase().includes("spam") ||
//       message.toLowercase().includes("sale");
//     // Change code above this line
//     return result;
//   }
//   console.log(checkForSpam("Latest technology news"));
//   console.log(checkForSpam("JavaScript weekly newsletter"));
//   console.log(checkForSpam("Get best sale offers now!"));
//   console.log(checkForSpam("Amazing SalE, only tonight!"));
//   console.log(checkForSpam("Trust me, this is not a spam message"));
//   console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
//   console.log(checkForSpam("[SPAM] How to earn fast money?"));

// const fish = ["Lion", , "Angel"];
// console.log(fish);

// const a = [,"Helium", "Lithium","Hydrogen", "Beryllium"];

// const a2 = a.map(function (s) {
//   return s.length;
// });

// console.log(a2);

// const a3 = a.map((s) => s.length);

// console.log(a3);

// function getExtremeElements(array) {
//     // Change code below this line

//       // Change code below this line
//     const getExtremeElements = [array[0], array[array.length - 1]];
//     return getExtremeElements;

//       // Change code above this line
//     }

//     console.log(getExtremeElements([1, 2, 3, 4, 5]));
//     console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//     console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// problem11
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//   const words = message.split(" ");
//     return words.length * pricePerWord;

//     // Change code above this line
//  }
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//  console.log(calculateEngravingPrice("Web-development is creative work", 40));
//  console.log(calculateEngravingPrice("Web-development is creative work", 20));

// const fn = function () {
//     console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);

// // method "this"
// const playlist = {
//     name: 'My favorite songs',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3', 'track-4'],

// changeName(newName){
//     console.log('"this" is inside changeName option:', this);
//     this.name = newName;
// },

// addTrack(track){
//     this.tracks.push(track);
//     // this.trackCount = this.tracks.length;
// },

// getTrackCount(){
//     return this.tracks.length;
// },
// };

// playlist.changeName('New Name');
// console.log(playlist);

// playlist.addTrack('new track');
// console.log(playlist);

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line

//   const result = makePizza();
//   const pointer = makePizza;

// console.log(result, pointer);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Change code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Ultra cheese", deliverPizza));
// console.log(makeMessage("Royal Grand", makePizza));

// const pizzaPalace = {
//   pizzas: ["Ultra cheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {},
// };
// // Change code above this line
// const orderName = this.pizzaName;
// if (!orderName) {
//   onOrderError(error);
// }
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach((el) => {
//     {
//       if (el > value) {
//         filteredNumbers.push(el);
//       }
//     }
//   });
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(
//   function (number) {
//     // console.log("number", number);
//     console.log(this);
//   },
//   {a: 5, b:10},
// );
// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(console.log);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach((e1) =>
//     secondArray.forEach((e2) => {
//       if (e1 === e2) {
//         commonElements.push(e1)
//       }
//     }
//     ));

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   return commonElements;
//   // Change code above this line
// }
//  console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//   numbers.forEach((el) => {
//     {
//       if (el > value) {
//         filteredNumbers.push(el);
//       }
//     }
//   });

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = [];

// numbers.forEach(number => {

//   if (number % 2 === 0) {
//     newArr.push(number + value);
//   }
//   else {
//     newArr.push(number);
//   }
//   return newArr;
// });

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     numbers[i] = numbers[i] + value;
//   }
// }
// Change code above this line
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// => users.flatMap(user => user.isActive).filter((isActive, index, array) => array.indexOf(isActive) === index);

// const getFriends  = users => users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);

// const getUsersWithAge = (users, minAge, maxAge) => {

// return users.filter(({age}) => age >= minAge && age < maxAge);
// };
// // Change code above this line
// const getUsersWithFriend = (users, friendName) =>  users.filter(user => user.friends.includes(friendName));

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value %2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value %2 != 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value %2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value %2 != 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value %2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value %2 != 0);

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);

// values.filter((value) => value >= 0);

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

//   const sortByName = (users) =>
//     [...users].sort((firstUser, secondUser) =>
//       firstUser.name.localeCompare(secondUser.name)
//     );

//     const sortByDescendingFriendCount = users =>
//   [...users].sort(
//   (firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length
// );

// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));

//     const getNamesSortedByFriendCount = (users) =>
//       [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map((user) => user.name);

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Viennese"));

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// const inputFirst = document.querySelector('#leftSwapInput');
// const inputSecond = document.querySelector('#rightSwapInput');
// const btnEl = document.querySelector('#swapButton');

//TODO:==============================================
/*
    Завдання 3
    Кнопка "Приховати" ховає текст і замінює назву кнопки на
    "Розкрити", при повторному натисканні текст знову стає доступним
    і кнопка набуває початкового вигляду.
    */

// const a = { name: "Vladimir" };
// const b = a;
// a.name = "Elena";
// console.log(b);
// const c = { ...a };
// console.log(c);
// c.lastName = 'Lee';
// c['lastName'] = 'Lee';
// console.log(c);
// console.log(a);

// console.log(Object.values(c));


// let fruits = ['apple'];
// const basket = fruits;
// basket.push('orange');
// console.log(fruits);

// const animals = ['cat', 'dog', 'cat', 'elephant', 'lion', 'dog'];
// const uniqueAnimals = {};
// animals.map((animal) => { uniqueAnimals[animal] = animal }); 
// console.log(Object.keys(uniqueAnimals));

if (age < 3) {
  message =  'Здравствуй, малыш!';
} else if (age < 18){
  message =  'Привет!';
} else if (age < 100) {
  message =  'Здравствуйте!';
}
else { message = "Какой необычный возраст!"; }
  


