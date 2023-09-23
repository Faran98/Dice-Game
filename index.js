window.onload=choosepic;

var dice=['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png']

function choosepic(){
var randomedice =Math.floor(Math.random()*dice.length);
document.getElementById("p1dice").src=dice[randomedice];

var randomedice2 =Math.floor(Math.random()*dice.length);
document.getElementById("p2dice").src=dice[randomedice2];




if(randomedice>randomedice2){

    document.querySelector('h1').innerHTML="🚩 Player 1 wins!"
}

else if(randomedice2>randomedice){

    document.querySelector('h1').innerHTML="Player 2 wins! 🚩"
}
else{
    document.querySelector('h1').innerHTML="Draw!"
}

}