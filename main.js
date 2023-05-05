//variables globales. 
var aciertos, intentos, btn1, btn2;
var pilaBtnSeleccionados = []; 

function iniciarJuego(){
	var botones = document.getElementsByClassName("carta");
	for(let i=0; i<botones.length; i++){
		botones[i].addEventListener("click", function(){
			cartaSeleccionada(botones[i].value);
		});
	}
}

function cartaSeleccionada(valorBtn){
	var botones = document.getElementsByClassName("carta");
	//busco que boton hizo click 
	for(let i=0; i<botones.length; i++){
		console.log("no hay coincidencia");
		if(botones[i].value == valorBtn){
			console.log("hay coincidencia");
			pilaBtnSeleccionados.push(botones[i]);
			break; 
		}	
	}
	console.log(pilaBtnSeleccionados.length);
	deshabilitarCarta(pilaBtnSeleccionados.peek) //deshabilito la ultima carta 
	//si hay 2 botones seleccionados -> evaluo
	if(pilaBtnSeleccionados.length == 1){
		evaluarTirada();
	}
}

function deshabilitarCarta(boton){
	boton.disabled = true; 
}



