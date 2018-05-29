var luz = false;

function moverinterruptor(){
	if(luz){
		apagarluz();
	}
	else{
		prenderluz();
	}
}

function apagarluz(){
	document.getElementById("oscuridad").style.display = "block";
	document.getElementById("interruptor").innerHTML = "\\";
	luz = false;
	var mama = document.getElementById("mama");
	mama.play();
}

function prenderluz(){
	document.getElementById("oscuridad").style.display = "none";
	document.getElementById("interruptor").innerHTML = "/";
	luz = true;
	var mama = document.getElementById("mama");
	mama.pause();
	mama.currentTime = 0;
}