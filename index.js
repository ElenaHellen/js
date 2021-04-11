//1. Создать объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - 1-й и т.д.). Вывести текущий день недели.
let objWeek = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'}
console.log('1)',objWeek[7])

//2. Напишите функцию, которая принимает объект а  возвращает вложенный массив вида [[key, value], [key, value]]
let objArr = { a: 1, b: 2 };
let obj = (objArr) => Object.entries(objArr);
console.log('2)', obj(objArr))

//3.??? Напишите функцию isPlainObject, которая проверяет, является ли элемент именно объектом, а не массивом, null и т.п.
let objElement = { id: 'Pasha' };
let isPlainObject = (el) => typeof el === 'object' && !Array.isArray(el) && el !== null;
console.log('3)', isPlainObject(objElement))

//4. Напишите функцию, которая возвращает новый объект без указанных значений.Т.е в качестве параметров функции вы указываете свойства объекта и на выходе вы получите объект без этих свойств.
const data = { a: 1, b: 2, c: 3 };
const without = (object, ...args) => {
  const newObject = { ...object };

  args.forEach((arg) => {
    delete newObject[arg];
  });

  return newObject;
};
console.log('4)',without(data, 'b', 'c'));

//5. Напишите функцию, которая сравнивает два объекта по значениям.
let a = { a: 1, b: 1 };
let b = { a: 1, b: 1 };
console.log('5)', Object.is(a,b)); 



const data4 = { a: 1, b: 2 };
const data5 = { c: 1, b: 2 };
const intersection = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);

  return firstObjKeys.reduce((acc = {}, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {
        ...acc,
        [key]: firstObj[key],
      };
    }

    return acc;
  }, {});
};
console.log(intersection('7)', data4, data5));