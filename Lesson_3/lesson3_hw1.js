'use strict'
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let nambers = []

for (let n = 0; n <= 100; n++) {
    nambers[n] = n;
}

let i = 2;
while (i <= 100) {
    if (nambers[i] != 0) {
        let j = i + i;
        while (j <= 100) {
            nambers[j] = 0;
            j = j + i;
        }
    }
    i++
}

let new_nambers = Array.from(new Set(nambers)).slice(2);

console.log(new_nambers);






