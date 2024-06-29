var randomNumber1= Math.floor(Math.random()*6 +1 );
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2= Math.floor(Math.random()*6 +1 );
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2){
    document.querySelector("#player").innerHTML= "Player 1 wins ";
    document.querySelector(".winner").setAttribute("src","./images/winner.gif")
    document.querySelector(".loser").setAttribute("src","./images/loser.gif")
}

if(randomNumber1<randomNumber2){
    document.querySelector("#player").innerHTML = "Player 2 wins ";
    document.querySelector(".winner").setAttribute("src","./images/loser.gif")
    document.querySelector(".loser").setAttribute("src","./images/winner.gif")
}

if(randomNumber1==randomNumber2){
    document.querySelector("#player").innerHTML = "Its a tie ";
    document.querySelector(".winner").setAttribute("src","./images/shocked.gif")
    document.querySelector(".loser").setAttribute("src","./images/shocked.gif")
}
