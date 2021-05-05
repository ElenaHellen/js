// 2

var Robot = function (name) {
	this.name = name;
}

function add (op1, op2) {
	this.name = this.name || "Human";
	return  this.name + " can count to " + (op1 + op2);
}
var voltron = new Robot("Voltron");

console.log('2.1)', add(0,1))
console.log('2.2)', add.call(voltron, 1, 2))
console.log('2.3)', add.apply(voltron , [20, 30]))

setTimeout( () => {console.log('2.4)', add.bind(voltron)('drinking', 'beer'))},
 1000);

// 3

let btn0 = document.getElementById('btn0')
btn0.addEventListener('click', func) 
function func() {
	setTimeout( () => { console.log('3a) ', 'Hello world')}, 5000);
}  

let enabledBtn1 = false
let interval;
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', func1) 
function func1() { 

	if (enabledBtn1 == true){
		enabledBtn1 = false;
	}
	else {
		enabledBtn1 = true;
	}

	if (enabledBtn1 == true){
		interval = setInterval( () =>  {console.log('3b) ', 'You are welcome')}, 3000);
	}
	else {
		clearInterval(interval);
	}
	
}

let enabledBtn2 = false
let interval2;
let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', func2) 


let seconds =  Math.floor(Math.random() * 5000-1000)
function func2() {
	if (enabledBtn2 == true){
		enabledBtn2 = false;
	}
	else {
		enabledBtn2 = true;
	}

	if (enabledBtn2 == true){
		interval2 = setInterval(() =>{console.log('3c) ',seconds + ' seconds')}, seconds)
	
	}
	else {
		clearInterval(interval2);
	}
	
}
	


let input = document.getElementById('input')
input.addEventListener('keyup', func3)
let time = 0;
function func3() {
	clearInterval(time)
	time = setTimeout( () => {console.log('3d) ', input.value)}, 1000);
}

//4

function delay(duration){
	return new Promise(resolve => setTimeout(resolve, duration))
  }
  function logHi(){
	console.log('4a)', 'hi');
  }
  delay(2000).then(logHi);


  new Promise(function(resolve, reject) {
setTimeout(() => resolve(10), 3000)
}).then((result) => {
	console.log(result)
	return result + 2
		// должно вывести в console значение полученное и передать дальше
	// увеличенное на 2
  }).then((result) => {
	setTimeout(() => console.log(result),2000)
	return result + 2
	// должно вывести в console значение полученное и передать дальше
	// увеличенное на 2 через 2 секунды
  }).then((result) => {
	console.log(result)
	// должно вывести конечный результат
  });
  
