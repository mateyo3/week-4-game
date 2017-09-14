var winCount = 0;
	lossCount = 0;
	playerTotal = 0;
	hostNumber = null;

//host name array
var hostArray = ["Minato", "Kakashi", "Naruto", "Sasuke", "Sakura"];

// var hostImage = [
// 	"assets/image/minato.png",
// 	"assets/image/kakashi1.png",
// 	"assets/image/naruto1.png",
// 	"assets/image/sasuke1.png",
// 	"assets/image/sakura1.png",
// ]

$(document).ready(function() {

//computer randomly picks host
	var host = hostArray[Math.floor(Math.random() * hostArray.length)];
		console.log(host)
//display host name in HTML .hostName
		$("#host-name").html(host);
		
	// document.querySelector(".hostName").innerHTML = host;
// set host name === host image
// if host name is Minato, then image is minato.png
	if (host === hostArray[0]) {
		$(".hostImage").attr("src", "assets/images/minato.png")
		//diplay host image in HTML .hostImage
		$(".host-name").text(hostArray[0])
	}
	//if host name is Kakashi, then image is kakashi1.png
	if (host === hostArray[1]) {
		$(".hostImage").attr("src", "assets/images/kakashi1.png")
		//diplay host image in HTML .hostImage
		$(".host-name").text(hostArray[1])
	}
	//if host name is Naruto, then image is naruto1.png
	if (host === hostArray[2]) {
		$(".hostImage").attr("src", "assets/images/naruto1.png")
		//diplay host image in HTML .hostImage
		$(".host-name").text(hostArray[2])
	}
	//if host name is Sasuke, then image is sasuke1.png
	if (host === hostArray[3]) {
	$(".hostImage").attr("src", "assets/images/sasuke1.png")
	//diplay host image in HTML .hostImage
	$(".host-name").text(hostArray[3])
	}
	//if host name is Sakura, then image is sakura1.png
	if (host === hostArray[4]) {
	$(".hostImage").attr("src", "assets/images/sakura1.png")
	//diplay host image in HTML .hostImage
	$(".host-name").text(hostArray[4])
	}



	//randomly generate hostNumber between 50-125
	var hostNumber = Math.floor(Math.random() *125) + 50;
	//display hostNumber in HTML.hostNumber
	$(".hostNumber").text(hostNumber);
		console.log(hostNumber);


	//randomly assign value to masks, 1 through 12
	var maskOneValue = Math.floor(Math.random() *12) + 2;
		console.log("mask1 value: " + maskOneValue);

	var maskTwoValue = Math.floor(Math.random() *12) + 2;
		console.log("mask2 value: " + maskTwoValue);

	var maskThreeValue = Math.floor(Math.random() *12) + 2;
		console.log("mask3 value: " + maskThreeValue);

	var maskFourValue = Math.floor(Math.random() *12) + 2;
		console.log("mask4 value: " + maskFourValue);

	//onclick function to mask1
	$("#mask1").on("click", function() {
  		console.log("mask1 clicked");
		//onclick adds value to yourNumber
		maskOneValue = parseInt(maskOneValue);
    		console.log(maskOneValue);
    	playerTotal += maskOneValue;
    		console.log("new player total: " + playerTotal);
    	$(".userTotal").text(playerTotal);

    	//if yourNumber > hostNumber, then lossCount ++
    	if (playerTotal > hostNumber) {
    		console.log("You lose!")
    	lossCount++;
    		console.log(lossCount);
    	$(".lossCount").text(lossCount);
    	}

		//if yourNumber === hostNumber, then winCount ++
		if (playerTotal === hostNumber){
    		console.log("You Win!")
    	winCount++;
    		console.log(winCount);
    	$(".winCount").text(winCount);
    	}
	});



//onclick function to mask2
	$("#mask2").on("click", function() {
  			console.log("mask2 clicked");
  		//onclick adds value to yourNumber
    	maskTwoValue = parseInt(maskTwoValue);
    		console.log(maskTwoValue);
    	playerTotal += maskTwoValue;
    		console.log("new player total: " + playerTotal);
    	$(".userTotal").text(playerTotal);

    	//if yourNumber > hostNumber, then lossCount ++
    	if (playerTotal > hostNumber) {
    		console.log("You lose!")
    	lossCount++;
    		console.log(lossCount);
    	$(".lossCount").text(lossCount);
    	}

		//if yourNumber === hostNumber, then winCount ++
		if (playerTotal === hostNumber){
    		console.log("You Win!")
    	winCount++;
    		console.log(winCount);
    	$(".winCount").text(winCount);
    	}

	});


//onclick function to mask3
	$("#mask3").on("click", function() {
  		console.log("mask3 clicked");
  		//onclick adds value to yourNumber
  		maskThreeValue = parseInt(maskThreeValue);
    		console.log(maskThreeValue);
    	playerTotal += maskThreeValue;
    		console.log("new player total: " + playerTotal);
    	$(".userTotal").text(playerTotal);

		//if yourNumber > hostNumber, then lossCount ++
    	if (playerTotal > hostNumber) {
    		console.log("You lose!")
    	lossCount++;
    		console.log(lossCount);
    	$(".lossCount").text(lossCount);
    	}

		//if yourNumber === hostNumber, then winCount ++
		if (playerTotal === hostNumber){
    		console.log("You Win!")
    	winCount++;
    		console.log(winCount);
    	$(".winCount").text(winCount);
    	}

	});


//onclick function to mask4
	$("#mask4").on("click", function() {
 		 console.log("mask4 clicked");
 		 //onclick adds value to yourNumber
 		 maskFourValue = parseInt(maskFourValue);
    		console.log(maskFourValue);
		playerTotal += maskFourValue;
    		console.log("new player total: " + playerTotal);
    	$(".userTotal").text(playerTotal);

		//if yourNumber > hostNumber, then lossCount ++
    	if (playerTotal > hostNumber) {
    		console.log("You lose!")
    	lossCount++;
    		console.log(lossCount);
    	$(".lossCount").text(lossCount);
    	//reset game
    	}
    	
    	//if yourNumber === hostNumber, then winCount ++
		if (playerTotal === hostNumber){
    		console.log("You Win!")
    	winCount++;
    		console.log(winCount);
    	$(".winCount").text(winCount);
    	//reset game
    	}

	});


	





});
