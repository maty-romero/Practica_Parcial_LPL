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
	//var botones = document.getElementsByClassName("carta");
	
	pilaBtnSeleccionados.push(boton);	
	
	console.log(pilaBtnSeleccionados.length);
	deshabilitarCarta(boton);
	//deshabilitarCarta(pilaBtnSeleccionados[pilaBtnSeleccionados.length - 1]) //deshabilito la ultima carta 
	//si hay 2 botones seleccionados -> evaluo
	if(pilaBtnSeleccionados.length == 2){
		evaluarTirada();
	}
}

function deshabilitarCarta(boton){
	boton.disabled = true; 
}





