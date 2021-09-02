var bath,bathImg;
var brush,brushImg;
var drink,drinkImg;
var eat,eatImg;
var gym,gymImg;
var iss,issImg;
var move,moveImg;
var sleep,sleepImg;

var astronaut;

function preload() {

  bathImg = loadAnimation("bath1.png","bath2.png");

  brushImg = loadAnimation("brush.png");

  drinkImg1 = loadAnimation("drink1.png","drink2.png");

  eatImg = loadAnimation("eat1.png","eat2.png");
 
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");

  issImg = loadImage("iss.png");

  moveImg = loadAnimation("move.png","move1.png");

  sleepImg = loadAnimation("sleep.png");

}


function setup() {
  
  createCanvas(800,400);
  

  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale = 0.1;

}

function draw() {

  background("issImg");  

  textSize(15);
  text("Instructions :",10,20);

  textSize(15);
  text("Up Arrow = Brushing",10,40);

  textSize(15);
  text("Down Arrow = Gymming",10,60);

  textSize(15);
  text("Left Arrow = Eating",10,80);

  textSize(15);
  text("Right Arrow = Bathing",10,100);

  textSize(15);
  text("M Key = moving",10,120);

  drawSprites();

  if (keyCode == UP_ARROW){
    astronaut.addAnimation("brush",brushImg);
    astronaut.changeAnimation("brush");
    astronaut.scale = 0.1;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyCode == DOWN_ARROW){
    astronaut.addAnimation("gym",gymImg);
    astronaut.changeAnimation("gym");
    astronaut.scale = 0.1;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyCode == LEFT_ARROW){
    astronaut.addAnimation("eat",eatImg);
    astronaut.changeAnimation("eat");
    astronaut.scale = 0.1;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyCode == RIGHT_ARROW){
    astronaut.addAnimation("bath",bathImg);
    astronaut.changeAnimation("bath");
    astronaut.scale = 0.1;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

}