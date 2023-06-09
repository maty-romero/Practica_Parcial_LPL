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
	
	
//	var leyenda = document.getElementById("leyenda");
//	eliminoMensajesPartidaPasada();
	
	
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
		aciertos++;
		mostrarResultadoTirada(true);
	}else{ 
		ocultarCarta(btn1);
		ocultarCarta(btn2);
		//habilito cartas para seguir juegando 
		habilitarCarta(btn1);
		habilitarCarta(btn2);
		mostrarResultadoTirada(false);
	}
	intentos++;

	finalizarTirada(); 
	
}

function finalizarTirada () {
	pilaBtnSeleccionados.pop();
	pilaBtnSeleccionados.pop();
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

//evaluo los aciertos al finalizar la partida. 
function mostrarResultadoPartida(){
	var mensaje = document.getElementById("mensajePartida");
	if(aciertos == 10){
		mensaje.innerHTML = "EXCELENTE MEMORIA!!!"
	}
	if(aciertos == 8 || aciertos == 9){
		mensaje.innerHTML = "MUY BUENA MEMORIA!!!"
	}
	if(aciertos == 6 || aciertos == 7){
		mensaje.innerHTML = "BUENA MEMORIA!!! PUEDES MEJORAR!"
	}
	if(aciertos<6){
		mensaje.innerHTML = "MALA MEMORIA!!! DEBES PRACTICAR MAS!"
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

	function presionarFinalizarJuego() {
	var botones = document.getElementsByClassName("carta");
	for(let i=0; i<botones.length; i++){
		botones[i].disabled=true;
	}
	var divLeyenda= document.getElementById("leyenda");
	var pFinalizarJuego = document.createElement("p");
	pFinalizarJuego.innerHTML="El jugador termina el juego"
	pFinalizarJuego.id="idPfinalizarJuego"
	divLeyenda.appendChild(pFinalizarJuego);
}


	function eliminoMensajesPartidaPasada() {
	var divLeyenda = document.getElementById("leyenda");
	var pHijo= document.getElementById("idPfinalizarJuego");
	divLeyenda.removeChild(pHijo);		
		
	}


