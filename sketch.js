//Global Variables
var monkey, monkeyimg, ground, bg, bgimage, banana, bananaimg, rocks, rockimg, foodG, rockG, score;


function preload(){
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

bananaimg=loadImage("banana.png");
rockimg=loadImage("stone.png"); bgimg=loadImage("jungle.jpg"); 

}
function setup() {
  createCanvas(600,300);
  bg=createSprite(300,10);
  bg.addImage(bgimg)
  bg.scale=1.2
monkey = createSprite(100,240,20,50);
monkey.addAnimation( "monkey_running",monkeyimg);
monkey.scale=0.1;
ground = createSprite(300,250,1200,10);
  ground.visible=false;
bg.velocityX=-4;
foodG = new Group();
rockG = new Group();
score=0; 

}

function draw() {
  
  background(255);
  if(bg.x<0){
    
    bg.x=bg.width/2;
  }
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
// console.log( monkey.y);
//monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);
if(foodG.isTouching(monkey)){
  score=score+2;
 foodG.destroyEach();
  
}
  if(rockG.isTouching(monkey)){
  score=0;
  
     monkey.scale=0.1 
  
}
  switch(score){
    case 10: monkey.scale=0.12;
      break;
      case 20: monkey.scale=0.14;
      break;
      case 30: monkey.scale=0.16;
      break;
      case 40: monkey.scale=0.18;
      break;
      default:break;
      
      
      
  }
  spawnBananas();
  spawnRocks();
  
  drawSprites();
      
  
 
  textSize(20);
  
  fill("white");
  text("Score: "+ score, 100,50);
}
function spawnBananas(){
  if(World.frameCount%80===0){
banana = createSprite(400, random(110,170));
 banana.addImage(bananaimg);
 banana.scale=0.05;
 banana.velocityX=-4;
 foodG.add(banana);
  
  }
}
function spawnRocks(){
  if(World.frameCount%300===0){
 rocks = createSprite(400, 220);
 rocks.addImage(rockimg);
 rocks.scale=0.15;
 rocks.velocityX=-4;
 rockG.add(rocks);
  
  }
}