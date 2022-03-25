var Girl2,Girl2Img   
var Girl1,Girl1Img;
var tree,treeImg;
var girl3,girl3Img;
var girl4,girl4Img;
var house,houseImg;
var girl5,girl5Img
var snow1,snow1Img, snow2, snow2Img
var bg2,bg2Img;
var family,familyImg;


function preload()
{

   bgImg=loadImage("bgImg.jpg")
   Girl2Img= loadImage("computerGirlImg.png")
   Girl1Img= loadImage("girl1.png")
   treeImg= loadImage("tree.png")
   girl3Img=loadImage("girl3.png")
   girl4Img=loadImage("girl4.png")
   houseImg = loadImage("house.png")
   girl5Img = loadImage("girl5.png")
   snow1Img = loadImage("snow1.png")
   snow2Img = loadImage("snow2.png")
   bg2Img = loadImage("bg2Img.jpg")
   familyImg = loadImage("familyImg.png")

}
function setup() {
  createCanvas(1350,600)

  house = createSprite(350,400)
  house.addImage(houseImg)
  house.scale=1.9

  Girl2= createSprite(800,400)
  Girl2.addImage(Girl2Img)
  Girl2.scale=0.2

  Girl1=createSprite(200,415)
  Girl1.addImage(Girl1Img)
  Girl1.scale=0.5 

  tree = createSprite(150,300,30,10)
  tree.addImage(treeImg)
  tree.scale=0.5
 
  girl3 = createSprite(950,400)
  girl3.addImage(girl3Img)
  girl3.scale=0.7

  girl4 = createSprite(600,400)
  girl4.addImage(girl4Img)
  girl4.scale=0.5

  girl5 = createSprite(800,430)
  girl5.addImage(girl5Img)
  girl5.scale=0.5

  if(frameCount%60===0){
    snow1 = createSprite(random(0,1350),0);
    snow1.addImage(snow1Img);
    snow1.scale=0.12;
    snow1.velocityY=5;
  }

  if(frameCount%10===0){
    snow2 = createSprite(random(0,1300),0);
    snow2.addImage(snow2Img);
    snow2.scale=0.065;
    snow2.velocityY=6;
  }

}
function draw() {
  background(bgImg);  
  
  if(keyDown(ENTER)){
    Girl1.destroy()
    Girl2.destroy()
    girl3.destroy()
    girl4.destroy()
    girl5.destroy()
    bgImg.visible=false
     
    bg2 = createSprite(700,300,1500,600)
    bg2.addImage(bg2Img)
    bg2.scale=1.2

    family = createSprite(700,450)
    family.addImage(familyImg)
  }
  

    textSize(40);
    textFont("Baskerville Old Face");
    fill("darkgreen");
    stroke("black");
    strokeWeight(3);
    text("Press Up Arrow to run ", 800, 40, 440, 400);  

    textSize(60);
    textAlign(CENTER, TOP);
    textFont("Baskerville Old Face");
    fill("darkgreen");
    stroke("black");
    strokeWeight(3);
    text("Press enter ", 60, 40, 440, 400);

  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
  
    Girl2.velocityX=-9.5
    girl5.velocityY=9.5

  }

}