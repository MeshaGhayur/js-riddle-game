
//Code retrives cumulative score and prevents it from converting into a string
var score = JSON.parse(sessionStorage.getItem("score"));

//Code that makes the gameover div pop up which contains the updated score
function gameOver(){
    document.getElementById("gameover").style.visibility = "visible";
    document.getElementById("gameovercontainer").style.visibility = "visible";
    document.getElementById("gameover").innerHTML += "<br /> Your Score = " + score;
}

//If "Yes" is clicked, users are not allowed to click anything else and are redirected to the game over pop up in 2 seconds
function changePlutoHappy(){
    document.getElementById("plutoimage").innerHTML = "<img src='images/pluto2.png'>";
    document.getElementById("plutoheading").innerHTML = "Are you Dumb!? Pluto is not a planet!";
    document.getElementById("no").style.pointerEvents = "none";
    document.getElementById("yes").style.pointerEvents = "none";
	setTimeout(gameOver, 2000);
}

//If "No" is clicked, users are given the option to select another answer. If they click "No" again, the game over pop up appears in 2 seconds
var counter = 0;
function changePlutoSad(){
    counter++;
    if(counter==1){
    document.getElementById("plutoimage").innerHTML = "<img src='images/pluto3.png'>";
    document.getElementById("plutoheading").innerHTML = "Science Lies! I am a planet at heart...You made me cry! <br /><span class='secondtry'>(Wanna give this question another shot?) </span>";
    }
    else {
        document.getElementById("plutoimage").innerHTML = "<img src='images/pluto3.png'>";
    document.getElementById("plutoheading").innerHTML = "Fine be that way! <br /><span class='secondtry'> (but your right!) </span>";
    setTimeout(gameOver, 2000);
    }
}