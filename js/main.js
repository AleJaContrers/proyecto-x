function colorLetra(){
	var cambio=document.getElementById("nombre");
    cambio.style.color = "#4D83BB";
}


function agregarTexto(){
	var msje=document.getElementById('mensajes').value;
	var contenedorMsje=document.getElementsByName('pane').value;

	
	var mensajeUsuario=document.createElement('div');

	var elementoMensaje=document.createElement('p');

	var nodoTextoMensaje=document.createTextNode(mensaje);

	elementoMensaje.appendChild(nodoTextoMensaje);

	mensajeUsuario.appendChild(elementoMensaje);

	contenedorMsje.appendChild(mensajeUsuario);
}





