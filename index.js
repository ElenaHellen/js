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

let btn = document.getElementById('btn')
btn.addEventListener('click', func) 
function func() {
	setTimeout( () => { console.log('3a) ', 'Hello world')}, 5000);
}  

let btn1 = document.getElementById('btn1')
btn1.addEventListener('click', func1) 
let t = 0
function func1() {
	setInterval( () =>  {console.log('3b) ', 'You are welcome')}, 3000);
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
  
