'use strict'
// Adan Asaad, Jana khlaily
 const numbers = [1, 0, -5, 3, 0, 2, 0, -1, 9, 9, 8, 0];

let count=0;
for(let i=0;i<numbers.length;i++){
count += (numbers[i]===0)? 1: 0;
}



console.log(count);