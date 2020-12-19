
// sessionStorage code is referenced from https://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh
// JSON.parse code is referenced from https://stackoverflow.com/questions/37376152/session-storage-number-variable-stored-as-string
// Pointer Events code is referenced from https://stackoverflow.com/questions/16492401/javascript-setting-pointer-events

var score = JSON.parse(sessionStorage.getItem("score"));
var counter = 0;
var speed = 20;
var rememberNeptune = sessionStorage.getItem('rememberNeptune');
var rememberMercury = sessionStorage.getItem('rememberMercury');
var rememberVenus = sessionStorage.getItem('rememberVenus');
var rememberEarth = sessionStorage.getItem('rememberEarth');
var rememberMars = sessionStorage.getItem('rememberMars');
var rememberJupiter = sessionStorage.getItem('rememberJupiter');
var rememberSaturn = sessionStorage.getItem('rememberSaturn');
var rememberUranus = sessionStorage.getItem('rememberUranus');

//Code for saving user's activity on the homepage

window.onload = function() {
    var remove = sessionStorage.getItem('remove');
    if(remove === 'true'){
         hideForm();
    }
	if(rememberJupiter === 'true' && rememberSaturn === 'true'){
         setTimeout(showPluto,2000);
    }
    if(rememberMercury === 'true'){
         document.getElementById("mercury").innerHTML = "<img src='images/boom2.png' width=200px>";
         document.getElementById("mercury").style.opacity="1";
         document.getElementById("mercury").style.pointerEvents = "none";
         counter++;
    }
    if(rememberVenus === 'true'){
         document.getElementById("venus").innerHTML = "<img src='images/boom2.png' width=200px>";
         document.getElementById("venus").style.opacity="1";
         document.getElementById("venus").style.pointerEvents = "none";
         counter++;
    }
    if(rememberEarth === 'true'){
         document.getElementById("earth").innerHTML = "<img src='images/boom2.png' width=200px>";
         document.getElementById("earth").style.opacity="1";
         document.getElementById("earth").style.pointerEvents = "none";
         counter++;
    }
    if(rememberMars === 'true'){
         document.getElementById("mars").innerHTML = "<img src='images/boom2.png' width=200px>";
         document.getElementById("mars").style.opacity="1";
         document.getElementById("mars").style.pointerEvents = "none";
         counter++;
    }
    if(rememberJupiter === 'true'){
         document.getElementById("jupiter").innerHTML = "<img src='images/boom2.png' width=200px>";
         document.getElementById("jupiter").style.opacity="1";
         document.getElementById("jupiter").style.pointerEvents = "none";
         counter++;
    }
    if(rememberSaturn === 'true'){
         document.getElementById("saturn").innerHTML = "<img src='images/boom2.png' width=200px>";
         document.getElementById("saturn").style.opacity="1";
         document.getElementById("saturn").style.pointerEvents = "none";
         counter++;
    }
    if(rememberUranus === 'true'){
         document.getElementById("uranus").innerHTML = "<img src='images/boom2.png' width=200px>";
         document.getElementById("uranus").style.opacity="1";
         document.getElementById("uranus").style.pointerEvents = "none";
         counter++;
    }
    if(rememberNeptune === 'true'){
         document.getElementById("neptune").innerHTML = "<img src='images/boom2.png' width=200px>";
         document.getElementById("neptune").style.opacity="1";
         document.getElementById("neptune").style.pointerEvents = "none";
         counter++;
    }  
};  

//Code to hide the login form and make the first insult visible as soon as user submits the form

function hideForm() {
    document.getElementById("form").style.visibility = "hidden";
    var i = 0; 
	function insult(){
	    if (counter === 0) {
    		var insults = "Hey " + document.getElementById("nickname").value + ", " + "Find the 9 planets...";
        	if (i < insults.length) {
         			document.getElementById("insults").innerHTML += insults.charAt(i);
         			i++;
         	}
	    }
	    else if(counter === 1) {
	        var insultsTwo = "Hey " + document.getElementById("nickname").value + ", " + "Find " + (9 - counter) + " more planet...";
        	if (i < insultsTwo.length) {
         			document.getElementById("insults").innerHTML += insultsTwo.charAt(i);
         			i++;
			}
	    }
	    else {
	        var insultsThree = "Hey " + document.getElementById("nickname").value + ", " + "Find " + (9 - counter) + " more planets...";
        	if (i < insultsThree.length) {
         			document.getElementById("insults").innerHTML += insultsThree.charAt(i);
         			i++;
         	}
	    }
	    setTimeout(insult, speed);
	}
	insult();
	sessionStorage.setItem('remove', 'true');
}

// Code for audio effect that plays once a planet explodes

function audio() {
// Following 2 lines of code are referenced from https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
	var audio = new Audio('audio/Bomb.mp3');
    audio.play();
}

//Code to display each planet, the following insults and explosions

//Code to ensure planets stay visible after hover
function showMercury(){
    document.getElementById("mercury").style.opacity="1";
}
function showVenus(){
    document.getElementById("venus").style.opacity="1";
}
function showEarth(){
    document.getElementById("earth").style.opacity="1";
}
function showJupiter(){
    document.getElementById("jupiter").style.opacity="1";
}
function showSaturn(){
    document.getElementById("saturn").style.opacity="1";
}
function showMars(){
    document.getElementById("mars").style.opacity="1";
}
function showUranus(){
    document.getElementById("uranus").style.opacity="1";
}
function showNeptune(){
    document.getElementById("neptune").style.opacity="1";
}

//Pluto
function showPluto(){
    var insult = function() {};
    if(counter==8){
        document.getElementById("pluto").style.visibility = "visible";
        document.getElementById("insults").innerHTML = "";
        var i = 0; 
	insult = function(){
		var insults = "Hey " + document.getElementById("nickname").value + ", " + "You found the 9th planet, Pluto! Click on it.";
    	if (i < insults.length) {
     			document.getElementById("insults").innerHTML += insults.charAt(i);
     			i++;
     			setTimeout(insult, speed);
     		}
	};
	insult();
    }
} 
//Saturn
function saturn(){
    sessionStorage.setItem('rememberSaturn', 'true');
    document.getElementById("saturn").innerHTML = "<img src='images/boom2.png' width=200px>";
    counter++;
}
//Jupiter
function jupiter(){
    sessionStorage.setItem('rememberJupiter', 'true');
    document.getElementById("jupiter").innerHTML = "<img src='images/boom2.png' width=200px>";
    counter++;
}

//Mercury

function explodeMercury(){
    document.getElementById("mercury").innerHTML = "<img src='images/boom2.png' width=200px>";
	audio();
	document.getElementById("insults").innerHTML = "";
	var i = 0; 
	function insult(){
		var insults = "Who's gonna take your temperature now?";
     
		if (i < insults.length) {
			document.getElementById("insults").innerHTML += insults.charAt(i);
			i++;
			setTimeout(insult, speed);
		}
	}
	insult();
	document.getElementById("mercury").style.pointerEvents = "none";
	sessionStorage.setItem('rememberMercury', 'true');
	counter++;
	setTimeout(showPluto,2000);
}

//Venus

function explodeVenus(){
    document.getElementById("venus").innerHTML = "<img src='images/boom2.png' width=200px>";
    audio();   
    document.getElementById("insults").innerHTML = "";
	var i = 0;
	function insult(){
		var insults = "Guess you created a new masterpiece, THE DEATH OF VENUS";
 
		if (i < insults.length) {
			document.getElementById("insults").innerHTML += insults.charAt(i);
			i++;
			setTimeout(insult, speed);
		}
}
	insult();
	document.getElementById("venus").style.pointerEvents = "none";
	sessionStorage.setItem('rememberVenus', 'true');
	counter++;
	setTimeout(showPluto,2000);
}

//Earth

function explodeEarth(){
    document.getElementById("earth").innerHTML = "<img src='images/boom2.png' width=200px>";
    audio();    
    document.getElementById("insults").innerHTML = "";
	var i = 0;
	function insult(){
		var insults = "Congratulations, you have successfully murdered yourself... how are you still playing this game";
		if (i < insults.length) {
			document.getElementById("insults").innerHTML += insults.charAt(i);
			i++;
			setTimeout(insult, speed);
		}
}
	insult();
	document.getElementById("earth").style.pointerEvents = "none";
	sessionStorage.setItem('rememberEarth', 'true');
	counter++;
	setTimeout(showPluto,2000);
}

//Mars

function explodeMars(){
    document.getElementById("mars").innerHTML = "<img src='images/boom2.png' width=200px>";
    audio();
    document.getElementById("insults").innerHTML = "";
    var i = 0;  
	function insult(){
		var insults = "Oh no you just cost NASA $2.5 BIllion PAY UP!, Poor Rover, a life wasted.";
		if (i < insults.length) {
			document.getElementById("insults").innerHTML += insults.charAt(i);
			i++;
			setTimeout(insult, speed);
	  }
}
	insult();
	document.getElementById("mars").style.pointerEvents = "none";
	sessionStorage.setItem('rememberMars', 'true');
	counter++;
	setTimeout(showPluto,2000);
}

//Uranus

function explodeUranus(){
    document.getElementById("uranus").innerHTML = "<img src='images/boom2.png' width=200px>";
    audio();
    document.getElementById("insults").innerHTML = "";
    var i = 0; 
	function insult(){
		var insults = "GREAT! You just lost 1000 points. Have fun losing :)";
		if (i < insults.length) {
			document.getElementById("insults").innerHTML += insults.charAt(i);
			i++;
			setTimeout(insult, speed);
		}
	}
	insult();
	document.getElementById("uranus").style.pointerEvents = "none";
	sessionStorage.setItem('rememberUranus', 'true');
	counter++;
	setTimeout(showPluto,2000);
	score -= 1000;
	sessionStorage.setItem("score", score);
}

//Neptune

function explodeNeptune(){
    document.getElementById("neptune").innerHTML = "<img src='images/boom2.png' width=200px>";
	audio();
	document.getElementById("insults").innerHTML = "";
    var i = 0; 
	function insult(){
		var insults = "Well, you just blew up the galaxy's freezer, minus 500 points";
		if (i < insults.length) {
			document.getElementById("insults").innerHTML += insults.charAt(i);
			i++;
			setTimeout(insult, speed);
		}
	}
	insult();
	document.getElementById("neptune").style.pointerEvents = "none";
	sessionStorage.setItem('rememberNeptune', 'true');
	counter++;
	setTimeout(showPluto,2000);
	score -= 500;
	sessionStorage.setItem("score", score);
}