function doAction(action){
	var a = Number(document.getElementById('a').value);
	var b = Number(document.getElementById('b').value);
	var res;
	switch(action){
		case "+":
			res = getSummary(a, b);
			break;
		case "-":
			res = getSubstraction(a, b);
			break;
		case "*":
			res = getMultiplication(a, b);
			break;
		case "/":
			res = getDivision(a, b);
			break;
	}
	document.getElementById("resOut").textContent = res;


	//Выполняет сложение чисел и выводит результат
	function getSummary(valueA, valueB){
		return valueA+valueB;
	}
	
	//Выполняет вычитание чисел и выводит результат
	function getSubstraction(valueA, valueB){
			return valueA-valueB;
	}
	//Выполняет умножение чисел и выводит результат
	function getMultiplication(valueA, valueB){
		return valueA*valueB;
	}

	//Выполняет деление чисел и выводит результат
	function getDivision(valueA, valueB){
		if(b != 0){
			return valueA/valueB;
		}
	}
}