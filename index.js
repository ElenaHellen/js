let x = true + false // так как true=1, а false=0, то 1+0=1
console.log('task 1:', '1)', x)
let y = 12 / "6" // "6" воспринимается как число
console.log('task 1:', '2)', y)
let a = "number" + 15 + 3 // сначала выполняется "number"+15, затем к полученной строке прибавляется 3
console.log('task 1:', '3)', a)
let b = 5 + 3 + "number" // сначала выполнится сложение чисел, а потом преобразование в строку
console.log('task 1:', '4)', b)
let c = [1] > null // null - это 0, поэтому выражение правильно
console.log('task 1:', '5)', c)
let f = "foo" + + "bar" 
console.log('task 1:', '6)', f)
let d = 'true' == true // сравнение строки  и числа
console.log('task 1:', '7)', d)
let e = false == 'false' // сравнение строки  и числа
console.log('task 1:', '8)', e)
let g = null == '' // сравнение строки  и числа
console.log('task 1:', '9)', g)
let w = !!"false" == !!"true" 
console.log('task 1:', '10)', w)
let p = ['x'] == 'x' // сравнение строк
console.log('task 1:', '11)', p)
let l = [] + null + 1 
console.log('task 1:', '12)', l)
let n = 0 || "0" && {}
console.log('task 1:', '13)', n)
let m = [1,2,3] == [1,2,3]
console.log('task 1:', '14)', m)
/*
let i = 3;
while (i) {
  alert( i-- ); // Вычитает единицу из значения своего операнда, (i--) вернёт 3 и потом установит значение i равным 2.
}
*/
let z = 40
while (z < 92) {
  console.log('task 3:', z);
    z++;
}

let s = 11
while (s < 340) {
  if (s%4 == 0 ){
    console.log('task 4:', s)
  } 
    s++
}

for (let j = 100; j > -5; j--) {
  console.log('task 5:', j)
}

let arr = [1, 6, 8, 14, 0, 4];
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] > 3 && arr[k] < 10) {
      console.log('task 6:', arr[k])
    }
}

let arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = ''
for (let q = 0; q < arr1.length; q++) {
res += '-' + arr1[q]
}
console.log('task 7:', res)



let day = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье']

for(let d2 = 0; d2 < day.length; d2++){
  console.log('task 8', day[d2])
}


let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

for(let d1 = 0; d1 < days.length; d1++){
  console.log('task 9', days[d1])
}


for (let n2 = 1000, h = 0; n2 > 50; n2 = n2 / 2, h++) {
console.log('task 10:', 'n2=',n2, 'h=',h)
}
