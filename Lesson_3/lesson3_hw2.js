'use strict'
// 2. Реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//    Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const goods = [
    {
        name: 'майка',
        prise: 150
    },
    {
        name: 'трусы',
        prise: 300
    },
    {
        name: 'носки',
        prise: 100
    }

]



function countBasketPrice(param) {
    let prise_basket = 0

    for (let i of param) {
        prise_basket += i.prise;
    }
    return prise_basket;
}

console.log(countBasketPrice(goods));
