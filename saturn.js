
// JavaScript Saturn 
// http://riddles-for-kids.org/planet-riddles/ and http://riddles-for-kids.org/space-riddles/ - the riddles used were retrieved from this site 

var score = JSON.parse(sessionStorage.getItem("score"));
var scoreboard = 0;
var hello= 0;

//Code enables drag and drop for rocketship
 
function dropStar1(){
    document.getElementById("rocketship").style.left = 50 + "%";
    document.getElementById("rocketship").style.top = 30 +"%";
}

function dropStar2(){
    document.getElementById("rocketship").style.left = 90 + "%";
    document.getElementById("rocketship").style.top = 20 +"%";
}

function dropStar3(){
    document.getElementById("rocketship").style.left = 55 + "%";
    document.getElementById("rocketship").style.top = 70 +"%";
}

function dropStar4(){
    document.getElementById("rocketship").style.left = 80 + "%";
    document.getElementById("rocketship").style.top = 80 +"%";
}

function dropStar5(){
    document.getElementById("rocketship").style.left = 90 + "%";
    document.getElementById("rocketship").style.top = 50 +"%";
}
function dropStar6(){
    document.getElementById("rocketship").style.left = 65 + "%";
    document.getElementById("rocketship").style.top = 10 +"%";
}

function dropStar7(){
    document.getElementById("rocketship").style.left = 70 + "%";
    document.getElementById("rocketship").style.top = 45 +"%";
}

/* 
Code for all the riddles (riddles show up on rocketship-drop, scores add up once the correct answer is submitted 
and final homeland-drag-and-drop task appears once all 7 rings are collected
*/

//Riddle 1

function riddle1(){
    document.getElementById("riddleBox").innerHTML = "<h3> This is the second largest planet <br /> And has over 50 moons in its orbit <br /> The reason it’s recognizable <br /> is because of all the rings surrounding it <br /> <span class='question'> What Am I? </span> </h3> <br /> <form> <input id='r1' type='radio' name='riddle' value='Jupiter'> <label for='r1'> Jupiter </label> <br /> <input id='r2' type='radio' name='riddle' value='Saturn'> <label for='r2'> Saturn </label> <br /> <input id='r3' type='radio' name='riddle' value='Uranus'> <label for='r3'> Uranus </label> <input id='riddlesubmit' type='submit' value='Submit' onclick='checkAnswer1();'> </form>";
    homelandHide();
}
function checkAnswer1(){
    if(document.getElementById("r2").checked){
        document.getElementById("riddleBox").innerHTML = "<span class='result'> Congrats it's correct! </span>";
        document.getElementById("star1").style.visibility = "hidden";
        scoreboard += 1;
        score += 100;
        document.getElementById("scoreboard").innerHTML = scoreboard +" ring(s) out of 7 collected";
		if (scoreboard === 7){
			document.getElementById("homeland").style.visibility = "visible";
			document.getElementById("riddleBox").innerHTML = "<span class ='result'> Congrats you have collected all of the rings! Please drag the ship back to homeland! </span>";
		}
    }
    else if (document.getElementById("r1").checked || document.getElementById("r3").checked){
        document.getElementById("riddleBox").innerHTML = "<span class ='result'> Wrong answer, WOW, try again later okay! </span>";
        score -= 200;
    }
}

//Riddle 2

function riddle2(){
    document.getElementById("riddleBox").innerHTML = "<h3> I’m found in some thermometers <br /> As I move up when I get hot <br /> I’m also the smallest planet <br /> And so Jupiter I am not <br /> <span class='question'> What Am I? </span> </h3> <br /> <form> <input id='r1' type='radio' name='riddle' value='Jupiter'> <label for='r1'> Jupiter </label> <br /> <input id='r2' type='radio' name='riddle' value='Saturn'> <label for='r2'> Saturn </label> <br /> <input id='r3' type='radio' name='riddle' value='Mercury'> <label for='r3'> Mercury </label> <input id='riddlesubmit' type='submit' value='Submit' onclick='checkAnswer2();'> </form>";
    homelandHide();
}
function checkAnswer2(){
    if(document.getElementById("r3").checked == true){
        document.getElementById("riddleBox").innerHTML = "<span class='result'> Congrats it's correct! </span>";
        document.getElementById("star2").style.visibility = "hidden";
        scoreboard += 1;
        score += 100;
        document.getElementById("scoreboard").innerHTML = scoreboard +" ring(s) out of 7 collected";
        if (scoreboard === 7){
			document.getElementById("homeland").style.visibility = "visible";
			document.getElementById("riddleBox").innerHTML = "<span class ='result'> Congrats you have collected all of the rings! Please drag the ship back to homeland! </span>";
		}
    }
    else if (document.getElementById("r1").checked == true || document.getElementById("r2").checked == true){
        document.getElementById("riddleBox").innerHTML = "<span class ='result'> Wrong answer, WOW, try again later okay! </span>";
        score -= 200;
    }
}

//Riddle 3

function riddle3(){
    document.getElementById("riddleBox").innerHTML = "<h3> If you go to outer space <br /> And head away from the sun <br /> The first planet you would reach <br /> Would be this red, dusty one <br /> <span class='question'> What Am I? </span> </h3> <br /> <form> <input id='r1' type='radio' name='riddle' value='Mars'> <label for='r1'> Mars </label> <br /> <input id='r2' type='radio' name='riddle' value='Jupiter'> <label for='r2'> Jupiter </label> <br /> <input id='r3' type='radio' name='riddle' value='Mercury'> <label for='r3'> Mercury </label> <input id='riddlesubmit' type='submit' value='Submit' onclick='checkAnswer3();'> </form>";
    homelandHide();
}
function checkAnswer3(){
    if(document.getElementById("r1").checked == true){
        document.getElementById("riddleBox").innerHTML = "<span class='result'> Congrats it's correct! </span>";
        document.getElementById("star3").style.visibility = "hidden";
        scoreboard += 1;
        score += 100;
        document.getElementById("scoreboard").innerHTML = scoreboard + " ring(s) out of 7 collected";
        if (scoreboard === 7){
			document.getElementById("homeland").style.visibility = "visible";
			document.getElementById("riddleBox").innerHTML = "<span class ='result'> Congrats you have collected all of the rings! Please drag the ship back to homeland! </span>";
		}
    }
    else if (document.getElementById("r2").checked == true || document.getElementById("r3").checked == true){
        document.getElementById("riddleBox").innerHTML = "<span class ='result'> Wrong answer, WOW, try again later okay! </span>";
        score -= 200;
    }
}

//Riddle 4

function riddle4(){
    document.getElementById("riddleBox").innerHTML = "<h3> 71% is water <br /> And the rest of it is land <br /> Some of that is made up of soil <br /> And some of it’s made of sand <br /> <span class='question'> What Am I? </span> </h3> <br /> <form> <input id='r1' type='radio' name='riddle' value='Neptune'> <label for='r1'> Neptune </label> <br /> <input id='r2' type='radio' name='riddle' value='Earth'> <label for='r2'> Earth </label> <br /> <input id='r3' type='radio' name='riddle' value='Mars'> <label for='r3'> Mars </label> <input id='riddlesubmit' type='submit' value='Submit' onclick='checkAnswer4();'> </form>";
    homelandHide();
}

function checkAnswer4(){
    if(document.getElementById("r2").checked == true){
        document.getElementById("riddleBox").innerHTML = "<span class='result'> Congrats it's correct! </span>";
        document.getElementById("star4").style.visibility = "hidden";
        scoreboard += 1;
        score += 100;
        document.getElementById("scoreboard").innerHTML = scoreboard + " ring(s) out of 7 collected";
        if (scoreboard === 7){
			document.getElementById("homeland").style.visibility = "visible";
			document.getElementById("riddleBox").innerHTML = "<span class ='result'> Congrats you have collected all of the rings! Please drag the ship back to homeland! </span>";
		}
    }
    else if (document.getElementById("r1").checked == true || document.getElementById("r3").checked == true){
       document.getElementById("riddleBox").innerHTML = "<span class ='result'> Wrong answer, WOW, try again later okay! </span>";
       score -= 200;
    }
}

//Riddle 5

function riddle5(){
    document.getElementById("riddleBox").innerHTML = "<h3> I’m full of gas but I’m not a car <br /> I have many rings but I’m not a jewelry store <br /> I’m a Roman god but I’m not Janus <br /> I’m a large planet but I’m not Jupiter <br /> <span class='question'> What Am I? </span> </h3> <br /> <form> <input id='r1' type='radio' name='riddle' value='Jupiter'> <label for='r1'> Jupiter </label> <br /> <input id='r2' type='radio' name='riddle' value='Saturn'> <label for='r2'> Saturn </label> <br /> <input id='r3' type='radio' name='riddle' value='Star'> <label for='r3'> Star </label>  <input id='riddlesubmit' type='submit' value='Submit' onclick='checkAnswer5();'> </form>";
    homelandHide();
}
function checkAnswer5(){
    if(document.getElementById("r2").checked == true){
        document.getElementById("riddleBox").innerHTML = "<span class='result'> Congrats it's correct! </span>";
        document.getElementById("star5").style.visibility = "hidden";
        scoreboard += 1;
        score += 100;
        document.getElementById("scoreboard").innerHTML = scoreboard + " ring(s) out of 7 collected";
        if (scoreboard === 7){
			document.getElementById("homeland").style.visibility = "visible";
			document.getElementById("riddleBox").innerHTML = "<span class ='result'> Congrats you have collected all of the rings! Please drag the ship back to homeland! </span>";
		}
    }
    else if (document.getElementById("r1").checked == true || document.getElementById("r3").checked == true){
       document.getElementById("riddleBox").innerHTML = "<span class ='result'> Wrong answer, WOW, try again later okay! </span>";
       score -= 200;
    }
}

//Riddle 6

function riddle6(){
    document.getElementById("riddleBox").innerHTML = "<h3> These are giant balls of gas <br /> Many light years away <br /> Most are only seen at night <br /> Although one’s seen in the day <br /> <span class='question'> What Am I? </span> </h3> <br /> <form> <input id='r1' type='radio' name='riddle' value='Saturn'> <label for='r1'> Saturn </label> <br /> <input id='r2' type='radio' name='riddle' value='Star'> <label for='r2'> Star </label> <br /> <input id='r3' type='radio' name='riddle' value='Moon'> <label for='r3'> Moon </label> <input id='riddlesubmit' type='submit' value='Submit' onclick='checkAnswer6();'> </form>";
    homelandHide();
}
function checkAnswer6(){
    if(document.getElementById("r2").checked == true){
        document.getElementById("riddleBox").innerHTML = "<span class='result'> Congrats it's correct! </span>";
        document.getElementById("star6").style.visibility = "hidden";
        scoreboard += 1;
        score += 100;
        document.getElementById("scoreboard").innerHTML = scoreboard + " ring(s) out of 7 collected";
        if (scoreboard === 7){
			document.getElementById("homeland").style.visibility = "visible";
			document.getElementById("riddleBox").innerHTML = "<span class ='result'> Congrats you have collected all of the rings! Please drag the ship back to homeland! </span>";
		}
    }
    else if (document.getElementById("r1").checked == true || document.getElementById("r3").checked == true){
       document.getElementById("riddleBox").innerHTML = "<span class ='result'> Wrong answer, WOW, try again later okay! </span>";
       score -= 200;
    }
}

//Riddle 7

function riddle7(){
    document.getElementById("riddleBox").innerHTML = "<h3> There is a far away place <br /> That has both light and dark sides <br /> Its gravitational pull <br /> Has an effect on Earth’s tides <br /> <span class='question'> What Am I? </span> </h3> <br /> <form> <input id='r1' name='riddle' type='radio'  value='Venus'> <label for='r1'> Venus </label> <br /> <input id='r2' name='riddle' type='radio' value='Mars'> <label for='r2'> Mars </label> <br /> <input id='r3' name='riddle' type='radio' value='Moon'> <label for='r3'> Moon </label> <input id='riddlesubmit' type='submit' value='Submit' onclick='checkAnswer7();'> </form>";
    homelandHide();
}
function checkAnswer7(){
    if(document.getElementById("r3").checked == true){
       document.getElementById("riddleBox").innerHTML = "<span class='result'> Congrats it's correct! </span>";
        document.getElementById("star7").style.visibility = "hidden";
        scoreboard += 1;
        score += 100;
        document.getElementById("scoreboard").innerHTML = scoreboard + " ring(s) out of 7 collected";
        if (scoreboard === 7){
			document.getElementById("homeland").style.visibility = "visible";
			document.getElementById("riddleBox").innerHTML = "<span class ='result'> Congrats you have collected all of the rings! Please drag the ship back to homeland! </span>";
		}
    }
    else if (document.getElementById("r1").checked == true || document.getElementById("r2").checked == true){
        document.getElementById("riddleBox").innerHTML = "<span class ='result'> Wrong answer, WOW, try again later okay! </span>";
        score -= 200;
    }
}

//Code for the congrats screen that links user back to the home screen

function endSaturn(){
    document.getElementById("rocketship").style.left = 14 + "%";
    document.getElementById("rocketship").style.top = 77 +"%";
	if(scoreboard === 7){
		document.getElementById("riddleBox").innerHTML = "<span class ='result'> GangStars have all been eliminated, thank you! </span>";
		document.getElementById("endSaturnGame").style.visibility = "visible";
		document.getElementById("endSaturnGame").innerHTML += "<h1> "+ (score - JSON.parse(sessionStorage.getItem("score"))) +". <br /> Click the button below to go back! </h1> <br /> <a href='homepage.html'> <button type='button' id='homeButton'> Home </button> </a>";
		sessionStorage.setItem("score", score);
	}
}

function homelandHide(){
    document.getElementById("homeland").style.visibility = "hidden";
}