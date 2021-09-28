var background_img,ground;
var shooter,shooter2_img,shooter3_img,shooter_img;
var zombie_img,zombie;
var live1_img,live2_img,live3_img,lives;
var bullet;

function preload(){
  background_img = loadImage("background.jpeg");
  shooter_img = loadImage("shooter_2.png");
  shooter2_img = loadImage("shooter .png");
  
  live1_img = loadImage("lives_1.png");
  live2_img = loadImage("lives-2.png");
  live3_img = loadImage("lives _3.png");
  zombie_img = loadImage("zombie1.png");

}

function setup(){
  createCanvas(1000,600);
  ground = createSprite(500,300,50,60)
  ground.addImage("background",background_img);
  ground.scale = 0.9;

shooter = createSprite(180,450,60,60);
//shooter.addImage()
shooter.addImage(shooter_img);
shooter.scale = 0.3;

lives = createSprite(900,50,60,60);
lives.addImage(live3_img);
lives.scale = 0.3;
  


}

function draw(){
  background("black");
  
  if(keyDown("UP_ARROW")){
    shooter.y = shooter.y - 10;
  }
  if(keyDown("DOWN_ARROW")){
    shooter.y = shooter.y + 10;
  }
  if(keyWentDown("SPACE")){
    shooter.addImage(shooter2_img);
  }
  else if(keyWentUp("SPACE")){
    shooter.addImage(shooter_img);
    bullet = createSprite(shooter.x,shooter.y,10,10);
    bullet.velocityX = 10;
  }
  if(zombie.isTouching(bullet)){
    zombie.destroy();
  }
  
 // if(zombie.x<180){

  //}
  
  if(frameCount%50 === 0){
    zombie = createSprite(random(600,800),random(100,550),60,60);
    zombie.addImage(zombie_img);
    zombie.scale = 0.15;
    zombie.velocityX = -3;
  }

  
  drawSprites();
}









/*var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =100;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var alien_img,alien;
var player_img;
var player1score =100;
var player2score =100;

function preload(){
 player_img =loadImage("player3.gif");
 alien_img = loadImage("center.gif");
 back_img = loadImage("space.gif");
  //fruitGroup = new Group();
  alienGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}*/