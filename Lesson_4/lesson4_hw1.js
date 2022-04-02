'use strict';

/* Написать функцию, преобразующую число в объект. 
 Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в 
 соответствующих свойствах описаны единицы, десятки и сотни. 
 Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5,
 ‘десятки’: 4, ‘сотни’: 2}. 
 Если число превышает 999, необходимо выдать соответствующее сообщение с помощью 
 console.log и вернуть пустой объект.
 */

function obgNambers(number) {

    let arrNumber = number.toString().split("").reverse();

    if (!Number.isInteger(number) || number < 0 || number > 999) {
        console.log('Введено не верное значение!');
        return {}

    } else {
        return {
            'единицы': parseInt(arrNumber[0]),
            'десятки': parseInt(arrNumber[1]),
            'сотни': parseInt(arrNumber[2])
        }
    }
}


console.log(obgNambers(234));


