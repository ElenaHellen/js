let btn1 = document.getElementById('button1')
btn1.addEventListener('click', npt1, true)
function npt1() { alert('Привет')}

let btn2 = document.getElementById('button2')
btn2.addEventListener('mouseover', npt2)
function npt2() { alert('Привет')}

let btn3 = document.getElementById('button3')
btn3.addEventListener('dblclick', npt3)
function npt3() { alert('Привет')}

let btn4 = document.getElementById('button4')
btn4.addEventListener('mouseout', npt4)
function npt4() { alert('Привет')}

let btn5 = document.getElementById('button5')
btn5.addEventListener('click', buttonClick5)
function buttonClick5() {
	let btn = document.getElementById('btn');
	alert(btn.value);
}

let btn6 = document.getElementById('button6')
btn6.addEventListener('click', buttonClick6)
function buttonClick6() {
	let input = document.getElementById('input');
	input.value = 'Ой, поменялся текст';
}

let btn14 = document.getElementById('button14')
btn14.addEventListener('click', buttonClick14)
function buttonClick14() {
	let box = document.getElementById('box');
	box.style.color = 'red'
	box.style.width =  '20%'
}

let btn15 = document.getElementById('button15')
btn15.addEventListener('click', buttonClick15)
function buttonClick15() {
	let box1 = document.getElementById('box1');
	box1.style.display = 'none';
}
let btn151 = document.getElementById('button151')
btn151.addEventListener('click', buttonClick151)
function buttonClick151() {
	let box11 = document.getElementById('box1');
	box11.style.display = 'block';
}

let btn16 = document.getElementById('button16')
btn16.addEventListener('click', buttonClick16)
function buttonClick16() {
	let box2 = document.getElementById('box2');
	box2.value = 'Ой, я поменял свой текст и css!';
	box2.style.color = 'red'
	box2.style.width =  '15%'
	box2.style.padding = '2%'
	box2.style.borderRadius = '20px'
}

let btn18 = document.getElementById('button18')
btn18.addEventListener('click', buttonClick18)
function buttonClick18() {
	btn18.style.width = "10%";
	btn18.value ++;
}

let btn19 = document.getElementById('button19')
btn19.addEventListener('click', buttonClick19)
function buttonClick19() {
	let box5 = document.getElementById('box5');
	box5.value = 'Теперь я справа'
	box5.style.cssFloat = 'right'
	
}

let btn20 = document.getElementById('button20')
btn20.addEventListener('click', buttonClick20)
function buttonClick20() {
	let box6 = document.getElementById('box6');
	let name = box6.classList;
	box6.value ="Мои классы: " + name
	box6.style.width = "20%";
}

let btn21 = document.getElementById("button21");
btn21.addEventListener('click', buttonClick21) ;

    function buttonClick21() {
    let input1 = document.getElementById('first');
	let input2 = document.getElementById('second');
	let f = input1.value;
	let h = input2.value;
	input1.value = h;
	input2.value = f;
    }

	let btn22 = document.getElementById("button22");
	btn22.addEventListener('click', buttonClick22);
	let l = document.getElementById('input2')
	l.disabled = true
	function buttonClick22() {
	let g = document.getElementById('input1')
	let s = document.getElementById('input2')
	let m = g.value
	s.value = Math.pow(m,2) 
}

let btn23 = document.getElementById("button23");
btn23.addEventListener('click', buttonClick23);
let l23 = document.getElementById('second23')
l23.disabled = true
function buttonClick23() {	
	let g23 = document.getElementById('first23')
	let s23 = document.getElementById('second23')
	let m23 = g23.value
	if (isFinite(m23))
	s23.value = Math.pow(m23,2) 
	else 
	alert("Введите число!")
}

let btn24 = document.getElementById("button24");
btn24.addEventListener('click', buttonClick24);
function buttonClick24() { 
	btn24.disabled = true
	btn24.style.cursor = 'not-allowed'
}
