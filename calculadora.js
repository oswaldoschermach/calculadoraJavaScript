var operador;
var valor;
var resultado;

function digitado(e) {

	var visor = document.getElementById('visor');
	var tecla = e.target.innerText;

	console.log('tecla ' + tecla);

	switch (tecla) {
		case 'C': visor.innerHTML = "0"; return;
        case '+': valor = visor.innerText; visor.innerHTML = "0"; operador = '+'; return;
		case '-': valor = visor.innerText; visor.innerHTML = "0"; operador = '-'; return;
		case '×': valor = visor.innerText; visor.innerHTML = "0"; operador = '×'; return;
		case '÷': valor = visor.innerText; visor.innerHTML = "0"; operador = '÷'; return; 
        case '=': calculo(resultado, valor, visor, operador);  return;
		case '+/-': if(visor.innerHTML[0] == '-'){
						visor.innerHTML = visor.innerHTML.substr(1, visor.innerHTML.length); return;
					}else{
						visor.innerHTML = "-" + visor.innerHTML; return;
					}
		case 'CE': visor.innerHTML = visor.innerHTML.substr(0, visor.innerHTML.length - 1); return;
	}
    if(visor.innerHTML == '0'){
		visor.innerHTML = "";
	}
		visor.innerHTML += tecla;
	
		
}
window.onload = function() {
	var buttons = document.querySelectorAll('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", digitado);
	}
}

function calculo(resultado, valor, visor, operador) {
	if (operador == '+') {
		soma(resultado, valor, visor);
	} else if(operador == '-'){
		subtrair(resultado, valor, visor);
	}else if(operador == '×'){
		multiplicar(resultado, valor, visor);
	}else if(operador == '÷'){
		if(parseFloat(visor.innerText) == 0){
			visor.innerHTML = 'ERRO!';
		}else{
			dividir(resultado, valor, visor);
		}
	}
}

function soma(resultado, valor, visor){
	resultado = parseFloat(valor) + parseFloat(visor.innerText);
	visor.innerHTML = resultado;
}
function subtrair(resultado, valor, visor){
	resultado = parseFloat(valor) - parseFloat(visor.innerText);
	visor.innerHTML = resultado;
}
function multiplicar(resultado, valor, visor){
	resultado = parseFloat(valor) * parseFloat(visor.innerText);
	visor.innerHTML = resultado;
}
function dividir(resultado, valor, visor){
	resultado = parseFloat(valor) / parseFloat(visor.innerText);
	visor.innerHTML = resultado;
}