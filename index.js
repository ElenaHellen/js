let str = 'Привет'
console.log(typeof str, 'task1')
let num = 123
console.log(typeof num, 'task1')
let flag = true
console.log(typeof flag, 'task1')
let txt = 'true'
console.log(typeof txt, 'task1')
 
let a1 = 5+3
console.log(a1, 'task2')
let a2 = 5-3
console.log(a2, 'task2')
let a3 = 5*3
console.log(a3, 'task2')
let a4 = 5/3
console.log(a4, 'task2')

let a6 = 5%3
console.log(a6, 'task3')
let a7 = 3%5
console.log(a7, 'task3')
let a8 = 5 + '3'
console.log(a8, 'task3')
let a9 = '5' - 3
console.log(a9, 'task3')
let a10 = 75+ 'кг'
console.log(a10, 'task3')

const height = 23
const width = 10
let s = height * width
console.log(s, 'task4')

const heightC = 10
const dC = 4
let v = Math.PI * (dC/2) * (dC/2)* heightC
console.log(v, 'task5')

const n = 3
const m = 4
let k = Math.pow(Math.pow(m,2) + Math.pow(n,2), 1/2)
console.log(k, 'task6')

let nFib = 12
let n1 = nFib - 1
let el12 = (Math.pow((1 + Math.pow(5, 1/2))/2,n1) - Math.pow((1 - Math.pow(5, 1/2))/2,n1))/Math.pow(5, 1/2)
console.log(Math.round(el12), 'task7')

let S = 2
let p = 0.1
let years = 5
Pereplata = (S * p * years);
console.log(Pereplata, 'млн. руб', 'task8');