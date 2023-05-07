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


// method "this"
const playlist = {
    name: 'My favorite songs',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3', 'track-4'], 

changeName(newName){
    console.log('"this" is inside changeName option:', this);
    this.name = newName;
},

addTrack(track){
    this.tracks.push(track);
    // this.trackCount = this.tracks.length;
},

getTrackCount(){
    return this.tracks.length;
},
};

playlist.changeName('New Name');
console.log(playlist);

playlist.addTrack('new track');
console.log(playlist);

