function inicio(){
	var button = document.getElementById("boton");	
	button.addEventListener("click",cambiarFoto);	
}

function cambiarFoto(){
	var imagenes = {1:"1.jpg",2:"2.jpg",3:"3.jpg"};
	var campo = document.getElementById("campo");
	var numeroFoto = parseInt(campo.value);
	var figura= document.getElementById("figura")
	//alert(numeroFoto+2);
	if( numeroFoto <= 4 && numeroFoto >= 1 ){
		figura.removeChild(document.getElementById("imagen"));
		figura.innerHTML="<img src='"+numeroFoto+".jpg' id='imagen' alt='imagen' width='700' height='300' >";
	}else{
		alert("ingrese un numero entre el 1 y el 3");
	}

}