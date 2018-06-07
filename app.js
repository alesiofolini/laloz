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
	document.body.style.backgroundColor = "black";
	document.getElementById("oscuridad").style.display = "block";
	document.getElementById("interruptor").innerHTML = "\\";
	luz = false;
	var click = document.getElementById("click");
	click.play();
	var mama = document.getElementById("mama");
	mama.play();
}

function prenderluz(){
	document.body.style.backgroundColor = "white";
	document.getElementById("oscuridad").style.display = "none";
	document.getElementById("interruptor").innerHTML = "/";
	luz = true;
	var mama = document.getElementById("mama");
	mama.pause();
	mama.currentTime = 0;
	var click = document.getElementById("click");
	click.play();
}