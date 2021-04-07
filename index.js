let arrayStr = ["a", "b", "c"];
let arrayNum = [1, 2, 3];
let arrayCombined = arrayStr.concat(arrayNum);
console.log("Task 1:", arrayCombined);

arrayStr.push(1, 2, 3);
console.log("Task 2:", arrayStr);

arrayNum.reverse();
console.log("Task 3:", arrayNum);

let arrNum = [1, 2, 3, 4, 5];
let arrNumCutFirst = arrNum.slice(0, 3);
console.log("Task 4:", arrNumCutFirst);

let arrNumCutSecond = arrNum.slice(3, 5);
console.log("Task 5:", arrNumCutSecond);

const arrObj = { js: "test", jq: "hello", css: "world" }
console.log("Task 6", Object.keys(arrObj))

let arrElement = [1, 2, 3, 4, 5, 6];
let arrElementMap = arrElement.map(el => el*el);
console.log('Task 11:', arrElementMap);

let arrNegativeElement = [-2, 1, 2, -30, 4, -1, -26];
let arrNegative = arrNegativeElement.filter(el => el < 0);
console.log('Task 12:', arrNegative);

let arrSumElement = arrElement.reduce((el1, el2) => el1 + el2);
console.log('Task 13:', arrSumElement);

// Task 10
let arrFirst = [1, 2, 3];
let arrSecond = [1, 2, 3];
function arrСomparison(arrFirst, arrSecond) {
  if(arrFirst.length == arrSecond.length) return true;

for(h = 0; h < arrFirst.length; h++)
   if(arrFirst[h] == arrSecond[h]) return true;
}
// 8
let arrSum = [[1, 2, 3], [4, 5], [6]];
sum = arrSum.flat(Infinity).reduce((i, j)=> i + j, 0);
console.log(sum);
