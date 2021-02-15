var player1, player2, player3, player4, player5;
var buff;
var blindman, playImg, playImg1, playImg2, playImg3, playImg4;

function preload(){

blindman= loadAnimation("img/BuffmanStanding.png","Images/BuffmanWalking.png")
playImg= loadAnimation("img/Anime1Running.png","Images/Anime1Standing.png");
playImg1= loadAnimation("img/Anime2Running.png","Images/Anime2Standing.png");


}
function setup(){

  createCanvas(displayWidth,displayHeight);
  


  

  player1=createSprite(100,50,15,15);
  player1.addAnimation("playImg", playImg1);
  player1.scale=0.5;

  player2=createSprite(displayWidth/2,50,15,15);
  player2.addAnimation("playImg1", playImg1);


  player3=createSprite(displayWidth-75,displayHeight/2,15,15);


  player4=createSprite(50,displayHeight/3,15,15);


  player5=createSprite(displayWidth/2+50,displayHeight-75,15,15)

  
  buff=createSprite(displayWidth/2,displayHeight/2,15,15);
  buff.addAnimation("Blind", blindman);
  buff.scale=0.5;


}
function draw(){

  background("cyan");

  drawSprites()
  

}