<!DOCTYPE html>
<html>
	<head>
		<title>Jupiter Game</title>	
		<link type="text/css" rel="stylesheet" href="style.css" />
	</head>
	<body>
		<script>
			
			var score = JSON.parse(sessionStorage.getItem("score"));
			function setScore(){
				score += 500;
				sessionStorage.setItem("score", score);
			}
			
		</script>
		<?php 
			if ($_POST['submitbtn']) {

				$answer = $_POST['answer'];
				
				if ($answer == "Galileo" || $answer == "galileo"){
					echo "<h2>Great Job! Galileo discovered Jupiter's moons!</h2>";
					echo "<h3>You have gained 500 points!</h3>";
					echo "<br />Click the button below to go back!<br />";
					echo "<a href='homepage.html'><button id='homeButton2' onclick='setScore();'>Home</button></a>";
				} 
				else {
					echo "<h2>Wrong! Please try again!</h2>";
				}
			}
		?>
		<h3 id="jupitertitle">
			Who discovered Jupiter's moons? Unscramble the letters found in the image below!
		</h3>
		
	<!-- The following image was retrieved from https://sockrotation.com and edited to fit the theme of our website-->
		
		<img src="images/spot.png" width=60%px>
		
		<form action="jupiter.php" method="POST">
			Answer: <input type="text" name="answer" required>
			<br />
			<br />
			<input type="submit" name="submitbtn" value="Submit!" id='homeButton3'>
		</form>   
	</body>
</html>