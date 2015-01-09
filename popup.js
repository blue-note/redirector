paused = false;
window.onload = function() {
paused = false;
document.getElementById("pause").onclick=
function() {
paused = !paused;
document.getElementById("PAUSE").innerHTML = paused;

}

}

function isPaused() {return paused;}

function beans() {
	return "beans";
}
