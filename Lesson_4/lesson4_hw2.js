'use strict';

/*
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
     Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/


class Product {
    constructor(name, prise, quantity) {
        this.name = name;
        this.prise = prise;
        this.quantity = quantity;
    }
    sumQuantity = function () {
        return this.prise * this.quantity
    };
};


function sumBasket(object) {
    let s = 0;
    object.forEach(product => {
        s += product.sumQuantity();
    })
    // let result = object.reduce((s, product) => { s += product.sumQuantity() }, 0)
    return `Общая стимость корзины: ${s}`
};


let goods = [];

goods.push(new Product('колбаса', 23, 1))
goods.push(new Product('сыр', 12, 5))
goods.push(new Product('чай', 67, 2))
goods.push(new Product('хлеб', 30, 40))

console.log(goods);

console.log(sumBasket(goods)); // Общая стимость корзины: 1417



