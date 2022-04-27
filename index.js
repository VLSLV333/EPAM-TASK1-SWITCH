// function v (year){
//     if (year > 0){
//         switch(year%12){
//             case 0: console.log("Monkey")
//             break;
//             case 1: console.log("Rooster")
//             break;
//             case 2: console.log("Dog")
//             break;
//             case 3: console.log("Pig")
//             break;
//             case 4: console.log("Rat")
//             break;
//             case 5: console.log("Ox")
//             break;
//             case 6: console.log("Tiger")
//             break;
//             case 7: console.log("Rabbit")
//             break;
//             case 8: console.log("Dragon")
//             break;
//             case 9: console.log("Snake")
//             break;
//             case 10: console.log("Horse")
//             break;
//             case 11: console.log("Goat")
//             break;
//         }
//     } else {
//         console.log("YOU THINK YOU FUNNY, BRO?")
//     }
// }

// const readline = require("readline"); 
// const rl = readline.createInterface({ 
//   input: process.stdin, 
//   output: process.stdout, 
// }); 
// const ask = (question) => 
//   new Promise((resolve) => rl.question(question, resolve)); 
 
// async function main() { 
//   let year = await ask("Enter the year (positive value and less than 10000 \n"); 
//   year = Number(year); 
 
//   while (true) { 
//     if (year <= 0 || year > 10000) { 
//       year = await ask("Enter correct value\n"); 
//       year = Number(year); 
//     } else { 
//       break; 
//     } 
//   } 
 
//   const k = year % 12; 
//   switch (k) { 
//     case 11: 
//       console.log(`${year} - The year of the Goat`); 
//       break; 
//     case 10: 
//       console.log(`${year} - The year of the Horse`); 
//       break; 
//     case 9: 
//       console.log(`${year} - The year of the Snake`); 
//       break; 
//     case 8: 
//       console.log(`${year} - The year of the Dragon`); 
//       break; 
//     case 7: 
//       console.log(`${year} - The year of the Rabbit`); 
//       break; 
//     case 6: 
//       console.log(`${year} - The year of the Tiger`); 
//       break; 
//     case 5: 
//       console.log(`${year} - The year of the Ox`); 
//       break; 
//     case 4: 
//       console.log(`${year} - The year of the Rat`); 
//       break; 
//     case 3: 
//       console.log(`${year} - The year of the Pig`); 
//       break; 
//     case 2: 
//       console.log(`${year} - The year of the Dog`); 
//       break; 
//     case 1: 
//       console.log(`${year} - The year of the Rooster`); 
//       break; 
//     case 0: 
//       console.log(`${year} - The year of the Monkey`); 
//       break; 
//   } 
// } 

// main(); 

// need to get better with readline

// function v (miles) {
//   if (miles < 0){
//     console.log("Provide real number, bro")
//   } else if (miles > 22.5){
//     console.log("drive violated trafic rules")
//   } else {
//     console.log("drive followed trafic rules")
//   }
// }

// function pay(price){

//   if (price > 0 && price < 100){
//     console.log(`you will pay: ${price *0.95}`)
//   } else if (price >= 100 && price < 200){
//     console.log(`you will pay: ${price *0.9}`)
//   } else if (price >= 200){
//     console.log(`you will pay: ${price *0.85}`)
//   } else {
//     console.log(`provide real price please!`)
//   }
// }

// function pay(price){

//   if (price >= 200){
//     console.log(`you will pay: ${price *0.85}`)
//   } else if (price >= 100){
//     console.log(`you will pay: ${price *0.9}`)
//   } else if (price > 0){
//     console.log(`you will pay: ${price *0.95}`)
//   } else {
//     console.log(`provide real price please!`)
//   }
// }

