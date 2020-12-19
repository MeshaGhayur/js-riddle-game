
// Code to make the loading bar stretch and for the submit button to become visible once the width is 100%

var Left = 50;
function spacebar(){
	if (document.getElementById("theActualBar").style.width == 100 + "%") {
		document.getElementById("button").style.visibility = "visible";
		document.getElementById("loading").innerHTML = "You May Enter, if you dare...";
	}
	else {
		Left+=0.5;
		document.getElementById("theActualBar").style.width = Left +"%";
	}
}

/* 
	Part of the following code is referenced from https://www.w3schools.com/howto/howto_js_progressbar.asp
	This is where we interpreted the code, and added our own functions in order to make the loading bar 
	stretch automatically on window load, stop midway and then load completely when the space bar is pressed. 
*/

function load(){
	var loadingBar = document.getElementById("theActualBar");
	var length = 1;
	var interval = setInterval(loading, 50);
	function loading(){
		if (length >= 100){
			clearInterval(interval);
		}
		else if (length >= 50 ){
			document.getElementById("hint").innerHTML = "<span class='bold'> In order to load the game you must solve this riddle: </span> <br /> <br /> What is an alien's favourite place to hang out?";
			document.onkeydown = function(event){
				for(var i = 0; i <10; i++){
					if(event.keyCode == 32){
						spacebar();
					}
				}
			}
		}
		else{
			length++;
			document.getElementById("theActualBar").style.width = length + "%";
		}
	}
}
load();