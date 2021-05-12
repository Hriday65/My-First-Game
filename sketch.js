var bg,Sz1,Sz2,AK1,AK2,LB,RB
var Z1,Z2
var Ak4,AK7
var lb,rb

function preload() {
  bg = loadImage("images/ZombieBG.jpg")
  Sz1 = loadImage("images/Zombie.gif")
  Sz2 = loadImage("images/Sz.gif")
  AK1 = loadImage("images/AK47.png")
  AK2 = loadImage("images/AK48.png")
  LB = loadImage("images/RB1.png")
  RB = loadImage("images/RB.png")
}



function setup() {
  createCanvas(800,550);
  Z1=createSprite(100,430)
  Z1.addImage(Sz1)
  Z1.scale=0.2
  
  Z2=createSprite(700,430)
  Z2.addImage(Sz2)
  
  AK4=createSprite(400,400)
  AK4.addImage(AK1)
  AK4.scale=0.2

  AK7=createSprite(500,400)
  AK7.addImage(AK2)
  AK7.scale=0.3

  lb=createSprite(300,300)
  lb.addImage(RB)
  lb.scale=0.09

  lb=createSprite(400,300)
  lb.addImage(LB)
  lb.scale=0.09

}

function draw() {
  background(bg);  
 
  drawSprites()

}

