function hacerclic(){
	document.querySelector("#principal p").onclick=clic;
}

function clic(){
			fondo.style.background="rgb(47,180,12)";
			titulo.style.color="white";
			alert("Color verde, texto blanco.");
}
window.onload=hacerclic;
