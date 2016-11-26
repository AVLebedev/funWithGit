//Выполняет сложение чисел и выводит результат
function getSum(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var res = Number(a) + Number(b);
	document.getElementById("resOut").textContent=res;
}
//Выполняет вычитание чисел и выводит результат
function getSubtraction(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var res = Number(a) - Number(b);
	document.getElementById("resOut").textContent=res;
}
//Выполняет умножение чисел и выводит результат
function getMultiplication(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var res = Number(a) * Number(b);
	document.getElementById("resOut").textContent=res;
}

//Выполняет деление чисел и выводит результат
function getDivision(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var res = Number(a) / Number(b);
	document.getElementById("resOut").textContent=res;
}
