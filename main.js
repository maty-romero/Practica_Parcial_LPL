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
	//habilito los botones pues si el usuario apretó antes el boton FinalizarJuego(), me quedarían todos deshabilitados al apretar iniciarJuego
	habilitarBotones();
	
}

function cartaSeleccionada(boton){
	pilaBtnSeleccionados.push(boton);	
	mostrarCarta(boton);
	
	deshabilitarCarta(boton);
	
	//si hay 2 botones seleccionados -> evaluo
	if(pilaBtnSeleccionados.length == 2){
		evaluarTirada();
	}
}


function mostrarCarta(boton){
	boton.innerHTML = boton.value; 
}

function ocultarCarta(boton){
	boton.innerHTML = "0"; 
}

function evaluarTirada(){
	var btn1 = pilaBtnSeleccionados[0];
	var btn2 = pilaBtnSeleccionados[1];
	//se acerto la jugada 
	if(btn1.value == btn2.value){ 
		mostrarResultadoTirada(true);
	}else{ 
		ocultarCarta(btn1);
		ocultarCarta(btn2);
		//habilito cartas para seguir juegando 
		habilitarCarta(btn1);
		habilitarCarta(btn2);
		mostrarResultadoTirada(false);
	}
	//finalizarTirada(); 
	
}

function mostrarResultadoTirada(acierto){
	//se acerto la jugada
	mensaje = document.getElementById("mensajePartida");
	if(acierto){
		mensaje.innerHTML = "ACIERTO!"
	}else{
		mensaje.innerHTML = "NO HAY ACIERTO!"
	}
}


function habilitarCarta(boton){
	boton.disabled = false; 
}

function deshabilitarCarta(boton){
	boton.disabled = true; 
}


//habilito los botones
	function habilitarBotones() {
	var botones = document.getElementsByClassName("carta");
	for(let i=0; i<botones.length; i++){
		botones[i].disabled=false;	
	}
	
	}

	function finalizaJuego() {
	var botones = document.getElementsByClassName("carta");
		for(let i=0; i<botones.length; i++){
		botones[i].disabled=true;
	}
		var divLeyenda= document.getElementById("leyenda");
		var pFinalizarJuego = document.createElement("p");
		pFinalizarJuego.innerHTML="FIN DEL JUEGO"
		pFinalizarJuego.id="idPfinalizarJuego"
		divLeyenda.appendChild(pFinalizarJuego);
	}





