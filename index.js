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

const arrObj = { js: "test", jq: "hello", css: "world" };
console.log("Task 6", Object.keys(arrObj));

let arr = [[1, 2],[2, 3],[4, 5]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
console.log(sum);

let arr1 = [[1, 2],[3, 4], [5, 6], [7, 8]];
let summ = 0;
for (let i1 = 0; i1 < arr1.length; i1++) {
  for (let j1 = 0; j1 < arr1[i1].length; j1++) {
    for (let k = 0; k < arr1[i1][j1].length; k++) {
      summ += arr1[i1][j1][k];
    }
  }
}
console.log(summ);

let num = [1, 2, 3, 4, 5, 6];
result = num.join("", 6, "", 5, 4, 3, 2, 1);
console.log(result);
