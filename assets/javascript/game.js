var winCount = 0;
	lossCount = 0;
	playerTotal = 0;
	hostNumber = 0;

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
	if (host === "Sakura") {
		$("#hostImage").show("assets/image/sakura1.png")

	}
//if host name is Kakashi, then image is kakashi1.png
//if host name is Naruto, then image is naruto1.png
//if host name is Sasuke, then image is sasuke1.png
//if host name is Sakura, then image is sakura1.png

//diplay host image in HTML .hostImage


//randomly generate hostNumber between 50-125
	var random = Math.floor(Math.random() *125) + 5;
//display hostNumber in HTML.hostNumber
	$("#hostNumber").html(random);
		console.log(random);


//randomly assign value to mask 1, 2 through 20
//onclick function to mask1
	$("#mask1").on("click", function() {
  		console.log("mask1 clicked");
		//onclick adds value to yourNumber
  		var maskOneValue = Math.floor(Math.random() *12) + 1;
  		  	console.log(maskOneValue);

    var maskOne = ($(this).attr("data-maskOneValue"));
    userTotal = parseInt(maskOne);
    	console.log(userTotal);
    playerTotal += userTotal;
    	console.log(playerTotal);

    if (userTotal === hostNumber){
    	console.log("You Win!")
    }

    else if (userTotal >= hostNumber) {
    	console.log("You lose!")
    }

	});



//randomly assign value to mask 2, 2 through 20
//onclick function to mask2
	$("#mask2").on("click", function() {
  		console.log("mask2 clicked");
  		//onclick adds value to yourNumber
  		var maskTwoValue = Math.floor(Math.random() *12) + 1;
  			console.log(maskTwoValue);
  		yourNumber++;
  		console.log(yourNumber);
	});
//onclick adds value to yourNumber


//randomly assign value to mask 3, 2 through 20
//onclick function to mask3
	$("#mask3").on("click", function() {
  		console.log("mask3 clicked");
  		//onclick adds value to yourNumber
  		var maskThreeValue = Math.floor(Math.random() *12) + 1;
  		  	console.log(maskThreeValue);
  		yourNumber++;
  		console.log(yourNumber);
	});
//onclick adds value to yourNumber


//randomly assign value to mask 4, 2 through 20
//onclick function to mask4
	$("#mask4").on("click", function() {
 		 console.log("mask4 clicked");
 		 //onclick adds value to yourNumber
  		var maskFourValue = Math.floor(Math.random() *12) + 1;
  			  console.log(maskFourValue);
  		yourNumber++;
  		console.log(yourNumber);
	});
//onclick adds value to yourNumber


//if yourNumber === hostNumber, then winCount ++
//reset game


//if yourNumber > hostNumber, then lossCount ++
//reset game


//display yourNumber total in HTML



});
