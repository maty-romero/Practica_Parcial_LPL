//variables globales. 
var aciertos, intentos, btn1, btn2;
var pilaBtnSeleccionados = []; 

function iniciarJuego(){
	var botones = document.getElementsByClassName("carta");
	for(let i=0; i<botones.length; i++){
		botones[i].addEventListener("click", function(){
			cartaSeleccionada(botones[i]);
		});
	}
}

function cartaSeleccionada(boton){
	pilaBtnSeleccionados.push(boton);	
	
	deshabilitarCarta(boton);
	
	//si hay 2 botones seleccionados -> evaluo
	if(pilaBtnSeleccionados.length == 2){
		evaluarTirada();
	}
}

function habilitarCarta(boton){
	boton.disabled = false; 
}

function deshabilitarCarta(boton){
	boton.disabled = true; 
}





