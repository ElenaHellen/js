
function buttonClick5() {
	let btn = document.getElementById('btn');
	alert(btn.value);
}
function buttonClick6() {
	let input = document.getElementById('input');
	input.value = 'Ой, поменялся текст';
}
function buttonClick14() {
	let box = document.getElementById('box');
	box.style.color = 'red'
	box.style.width =  '20%'
}

function buttonClick15() {
	let box1 = document.getElementById('box1');
	box1.style.display = 'none';
}
function buttonClick1() {
	let box1 = document.getElementById('box1');
	box1.style.display = 'block';	
}
function buttonClick16() {
	let box2 = document.getElementById('box2');
	box2.value = 'Ой, я поменял свой текст и css!';
	box2.style.color = 'red'
	box2.style.width =  '15%'
	box2.style.padding = '2%'
	box2.style.borderRadius = '20px'
}
function buttonClick18() {
	let a = document.getElementById('box4');
	a.style.width = "10%";
	a.value ++;
}
/*function buttonClick19() {
	let box5 = document.getElementById('box5');
	box5.value = 'Теперь я справа'
	
}*/

function buttonClick20() {
	let box6 = document.getElementById('box6');
	let name = box6.classList;
	box6.value = name
	box6.style.width = "20%";
}
