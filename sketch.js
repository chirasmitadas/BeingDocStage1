PLAY=1;
END=0;
gameState= PLAY;


var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16;

var doctor,doctorImg;

var bed1Img,bed1,bed2Img,bed2,bed3Img,bed3,bed4Img,bed4,bed5Img,bed5,bed6Img,bed6;

var gen1Img,gen1;

var genB1;

var onB,onBImage,offB,offBImage;

var germ1,  germ2,  germ3,  germ4,  germ5,  germ6,  germ7;

var germImage;

var o2,o2Image,dropBox,dropImage;

var score,kill,life;

var medal1Img,medal1,medal2,medal3;

var door;

var test,testImage;

var playAgain,playAgainImage;

var game;

var ooline;

var sani,saniImage,saniGroup;

var saniF,saniFImage,saniFGroup;

var startLine;

var doctorFlip;

var blntImage,blnt;

var wddImage,wdd;

var cm,cmImage

function preload(){

  doctorImg=loadAnimation("d1.png","d2.png","d3.png","d4.png");
  bed1Img= loadImage("download6.jpeg");
  bed2Img=loadImage("download01.jpeg");
  bed3Img=loadImage("download6flip.jpeg");
  bed4Img=loadImage("download01flip.jpeg");
  bed5Img=loadImage("download6flip.jpeg");
  bed6Img=loadImage("download01flip.jpeg");
  gen1Img=loadImage("OIP.jpeg");
  onBImage=loadImage("onButton.jpg");
  offBImage=loadImage("offButton.jpg");
  germImage=loadImage("download3.png");
  o2Image=loadImage("o2t.png");
  medalImg=loadImage("medal.jpeg");
  o2Image=loadImage("OXY.png");
  testImage=loadImage("play.png")
  dropImage=loadImage("drop.png")
  playAgainImage=loadImage("restart.png");
  saniImage=loadImage("sanitizer.png");
  doctorFlip=loadAnimation("d1flip.png","d2flip.png","d3flip.png","d4flip.png");
  blntImage=loadImage("blnt.png");
  wddImage=loadImage("wdd.jpg");
  cmImage=loadImage("cm.jpg");

}

function setup() {
  
  createCanvas(1500,660);
  
  line1=createSprite(660, 30, 740, 20);
  line2=createSprite(300,165,20,290);
  line3=createSprite(260,320,290,20);
  line4=createSprite(110,370,20,120);
  line5=createSprite(260,420,290,20);
  line6=createSprite(260,500,290,20);
  line7=createSprite(110,470,20,80);
  line8=createSprite(230,590,20,200);
  line9=createSprite(625, 650, 810, 20);
  line10=createSprite(500,140,20,200);
  line11=createSprite(560,240,140,20);
  line12=createSprite(620,315,20,150);
  line13=createSprite(810,470,400,20);
  line14=createSprite(1020,260,20,440);
  line15=createSprite(370,180,160,20);
  line16=createSprite(1020,500,20,280)

  germ1=createSprite(650,170,20,20);
  germ1.velocityX=0;
  germ1.velocityY=-0;
  germ1.addImage("g1",germImage);
  germ1.scale=0.4;


  germ2=createSprite(500,370,20,20);
  germ2.velocityX=0;
  germ2.velocityY=-0;
  germ2.addImage("g2",germImage);
  germ2.scale=0.4;
  

  germ3=createSprite(540,500,20,20);
  germ3.velocityX=0;
  germ3.velocityY=-0;
  germ3.addImage("g3",germImage);
  germ3.scale=0.4;
  
  germ4=createSprite(400,570,20,20);
  germ4.velocityX=0;
  germ4.velocityY=-0;
  germ4.addImage("g4",germImage);
  germ4.scale=0.4;
  

  germ5=createSprite(680,600,20,20);
  germ5.velocityX=0;
  germ5.velocityY=-0;
  germ5.addImage("g5",germImage);
  germ5.scale=0.4;
  

  germ6=createSprite(880,450,20,20);
  germ6.velocityX=0;
  germ6.velocityY=-0;
  germ6.addImage("g6",germImage);
  germ6.scale=0.4;
  
  germ7=createSprite(890,570,20,20);
  germ7.velocityX=0;
  germ7.velocityY=-0;
  germ7.addImage("g7",germImage);
  germ7.scale=0.4;
 

  doctor=createSprite(300,600);
  doctor.addAnimation("d1",doctorImg);
  doctor.addAnimation("fliped",doctorFlip);
  doctor.scale = 0.7;

  bed1=createSprite(570,180);
  bed1.addAnimation("b1",bed1Img);
  bed1.scale = 0.3;


  bed2=createSprite(570,85);
  bed2.addAnimation("b2",bed2Img);
  bed2.scale = 0.3;

  bed3=createSprite(960,90);
  bed3.addAnimation("b3",bed3Img);
  bed3.scale = 0.3;


  bed4=createSprite(960,200);
  bed4.addAnimation("b4",bed4Img);
  bed4.scale = 0.3;

  bed5=createSprite(960,310);
  bed5.addAnimation("b5",bed5Img);
  bed5.scale = 0.3;

  bed6=createSprite(960,410);
  bed6.addAnimation("b6",bed6Img);
  bed6.scale = 0.3;

  gen1=createSprite(380,100);
  gen1.addImage("g1",gen1Img);
  gen1.scale=0.4;

  genB1=createSprite(380,100);
  genB1.shapeColor=("BLUE");

  genB1.depth = gen1.depth;
  gen1.depth = gen1.depth + 1;

  onB=createSprite(50,600,50,50);
  onB.addImage("on",onBImage);
  onB.scale=0.4;

  offB=createSprite(140,600,50,50);
  offB.addImage("off",offBImage);
  offB.scale=0.4;

  medal1=createSprite(1470,195,20,20);
  medal1.addImage("m1",medalImg);
  medal1.scale=0.15;

  
  medal2=createSprite(1470,235,20,20);
  medal2.addImage("m1",medalImg);
  medal2.scale=0.15;

  medal3=createSprite(1470,275,20,20);
  medal3.addImage("m1",medalImg);
  medal3.scale=0.15;

  door=createSprite(620,425,20,70);

  o2=createSprite(380,370,20,20);
  o2.addImage("tank",o2Image);
  o2.scale=0.4;

  dropBox=createSprite(800,240,50,50);
  dropBox.addImage("dropHere",dropImage);
  dropBox.scale=0.4;

  test=createSprite(1200,100,20,20);
  test.addImage("testing",testImage);
  test.scale=0.4;

  playAgain=createSprite(1400,100,20,20);
  playAgain.addImage("playAgain",playAgainImage);
  playAgain.scale=0.4,

  ooline=createSprite(470,100,10,200);

  startLine=createSprite(340,580,10,160)

  blnt=createSprite(600,270,60,60);
  blnt.addImage("blntI",blntImage);

  wdd=createSprite(600,270,60,60);
  wdd.addImage("wddI",wddImage);

  cm=createSprite(600,490,60,60);
  cm.addImage("cmI",cmImage);
  cm.scale=0.5;

  saniGroup = createGroup();
  saniFGroup = createGroup();

  ooline.visible=false;

  onB.visible=false;
  offB.visible=false;

  medal1.visible=false;
  medal2.visible=false;
  medal3.visible=false;
  


  playAgain.visible=false;
    
  blnt.visible=false;
  wdd.visible=false;
  cm.visible=false;

  door.visible=true;

  startLine.visible=true;
 
  score=0;
  
  life=1;
 
}

function game(){
  
  if (mousePressedOver(test)){

    test.visible=false;
    
    
    germ1.velocityX=0.2;
    germ1.velocityY=0.2;
  
  
    germ2.velocityX=0.5;
    germ2.velocityY=-0.3;
    
  
    germ3.velocityX=0.5;
    germ3.velocityY=-0.3;
   
    germ4.velocityX=0.5;
    germ4.velocityY=-0.3;
    
  
    germ5.velocityX=0.5;
    germ5.velocityY=-0.3;
    
  
    germ6.velocityX=-0.3;
    germ6.velocityY=-0.3;
    
    
    germ7.velocityX=0.5;
    germ7.velocityY=-0.3;

    startLine.destroy();
   
  }
 
  if (keyDown("RIGHT_ARROW")&&keyDown("space")) {

    createSani();
    
  }

  if(saniGroup.isTouching(germ1)){

    saniGroup.destroyEach();
    germ1.destroy();
    score=score+1;

  }

  if(saniGroup.isTouching(germ2)){

    saniGroup.destroyEach();
    germ2.destroy();
    score=score+1;

  }

  if(saniGroup.isTouching(germ3)){

    saniGroup.destroyEach();
    germ3.destroy();
    score=score+1;

  }

  if(saniGroup.isTouching(germ4)){

    saniGroup.destroyEach();
    germ4.destroy();
    score=score+1;
    
  }

  if(saniGroup.isTouching(germ5)){

    saniGroup.destroyEach();
    germ5.destroy();
    score=score+1;

  }

  if(saniGroup.isTouching(germ6)){

    saniGroup.destroyEach();
    germ6.destroy();
    score=score+1;

  }

  if(saniGroup.isTouching(germ7)){

    saniGroup.destroyEach();
    germ7.destroy();
    score=score+1;

  }

  if(saniGroup.isTouching(line1)){

    saniGroup.destroyEach();

  }

  if(saniGroup.isTouching(line2)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line3)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line4)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line5)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line6)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line7)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line8)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line9)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line10)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line11)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line12)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line13)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line14)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line15)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(line16)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(bed1)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(bed2)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(bed3)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(bed4)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(bed5)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(bed6)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(gen1)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(genB1)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(dropBox)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(o2)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(door)){

    saniGroup.destroyEach();
  }

  if(saniGroup.isTouching(startLine)){
    saniGroup.destroyEach();
  }

 
if (keyDown("LEFT_ARROW")&&keyDown("B")) {
  createSaniF();
  
}
if(saniFGroup.isTouching(germ1)){
  saniFGroup.destroyEach();
  germ1.destroy();
  score=score+1;
}
if(saniFGroup.isTouching(germ2)){
  saniFGroup.destroyEach();
  germ2.destroy();

  score=score+1;

}
if(saniFGroup.isTouching(germ3)){
  saniFGroup.destroyEach();
  germ3.destroy();

  score=score+1;

}
if(saniFGroup.isTouching(germ4)){
  saniFGroup.destroyEach();
  germ4.destroy();

  score=score+1;

}
if(saniFGroup.isTouching(germ5)){
  saniFGroup.destroyEach();
  germ5.destroy();

  score=score+1;

}
if(saniFGroup.isTouching(germ6)){
  saniFGroup.destroyEach();
  germ6.destroy();

  score=score+1;

}
if(saniFGroup.isTouching(germ7)){
  saniFGroup.destroyEach();
  germ7.destroy();

  score=score+1;

}
if(saniFGroup.isTouching(line1)){
  saniFGroup.destroyEach();

}
if(saniFGroup.isTouching(line2)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line3)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line4)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line5)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line6)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line7)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line8)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line9)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line10)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line11)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line12)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line13)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line14)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line15)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(line16)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(bed1)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(bed2)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(bed3)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(bed4)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(bed5)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(bed6)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(gen1)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(genB1)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(dropBox)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(o2)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(door)){
  saniFGroup.destroyEach();
}
if(saniFGroup.isTouching(startLine)){
  saniFGroup.destroyEach();
}



 if (keyDown(LEFT_ARROW)) {
  doctor.x = doctor.x-2;
  doctor.changeAnimation("fliped");
}

if (keyDown(RIGHT_ARROW)) {
  doctor.x = doctor.x+2;
  doctor.changeAnimation("d1");
 }
  
if (keyDown(UP_ARROW)) {
 

  doctor.y = doctor.y-2;
 }
   


if (keyDown(DOWN_ARROW)) {
  doctor.y = doctor.y+2;
 
   
}
if (keyDown("space")||(keyDown("space"))) {
  createSani();
  doctor.changeAnimation("d1");
}

if (keyDown("F")||(keyDown("F"))) {
  createSaniF();
  doctor.changeAnimation("fliped");
  
}

//ddddddddddddddddddddddddddddddddddddddddddddddddddddd




if(mousePressedOver(onB)){
  
  onB.visible=false;
  offB.visible=false;
  
  medal1.visible=true;
  door.destroy();
 


}



if(doctor.isTouching(o2)){
  o2.x=doctor.x+25;
  o2.y=doctor.y;
}
if(o2.isTouching(dropBox)){
  o2.destroy();
  medal3.visible=true;
}

if(doctor.isTouching(genB1)){
  onB.visible=true;
  offB.visible=true;
  
}

if(doctor.isTouching(ooline)){
  onB.visible=false;
  offB.visible=false;
}

if(score>=7){
  medal2.visible=true;
}


if(germ1.isTouching(doctor)){
  life=life-1;
}
if(germ2.isTouching(doctor)){
  life=life-1;
}
if(germ3.isTouching(doctor)){
  life=life-1;
}
if(germ4.isTouching(doctor)){
  life=life-1;
}
if(germ5.isTouching(doctor)){
  life=life-1;
}
if(germ6.isTouching(doctor)){
  life=life-1;
}
if(germ7.isTouching(doctor)){
  life=life-1;
}

if(germ1.isTouching(bed1)){
  bed1.destroy();
  life=life-1;
}
if(germ1.isTouching(bed2)){
  bed2.destroy();
  life=life-1;
}
if(germ1.isTouching(bed3)){
  bed3.destroy();
  life=life-1;
}if(germ1.isTouching(bed4)){
  bed4.destroy();
  life=life-1;
}if(germ1.isTouching(bed5)){
  bed5.destroy();
  life=life-1;
}
if(germ1.isTouching(bed6)){
  bed6.destroy();
  life=life-1;
}

if(germ2.isTouching(bed1)){
  bed1.destroy();
  life=life-1;
}
if(germ2.isTouching(bed2)){
  bed2.destroy();
  life=life-1;
}
if(germ2.isTouching(bed3)){
  bed3.destroy();
  life=life-1;
}if(germ2.isTouching(bed4)){
  bed4.destroy();
  life=life-1;
}if(germ2.isTouching(bed5)){
  bed5.destroy();
  life=life-1;
}
if(germ2.isTouching(bed6)){
  bed6.destroy();
  life=life-1;
}

if(germ3.isTouching(bed1)){
  bed1.destroy();
  life=life-1;
}
if(germ3.isTouching(bed2)){
  bed2.destroy();
  life=life-1;
}
if(germ3.isTouching(bed3)){
  bed3.destroy();
  life=life-1;
}if(germ3.isTouching(bed4)){
  bed4.destroy();
  life=life-1;
}if(germ3.isTouching(bed5)){
  bed5.destroy();
  life=life-1;
}
if(germ3.isTouching(bed6)){
  bed6.destroy();
  life=life-1;
}

if(germ4.isTouching(bed1)){
  bed1.destroy();
  life=life-1;
}
if(germ4.isTouching(bed2)){
  bed2.destroy();
  life=life-1;
}
if(germ4.isTouching(bed3)){
  bed3.destroy();
  life=life-1;
}if(germ4.isTouching(bed4)){
  bed4.destroy();
  life=life-1;
}if(germ4.isTouching(bed5)){
  bed5.destroy();
  life=life-1;
}
if(germ4.isTouching(bed6)){
  bed6.destroy();
  life=life-1;
}
if(germ5.isTouching(bed1)){
  bed1.destroy();
  life=life-1;
}
if(germ5.isTouching(bed2)){
  bed2.destroy();
  life=life-1;
}
if(germ5.isTouching(bed3)){
  bed3.destroy();
  life=life-1;
}if(germ5.isTouching(bed4)){
  bed4.destroy();
  life=life-1;
}if(germ5.isTouching(bed5)){
  bed5.destroy();
  life=life-1;
}
if(germ5.isTouching(bed6)){
  bed6.destroy();
  life=life-1;
}
if(germ6.isTouching(bed1)){
  bed1.destroy();
  life=life-1;
}
if(germ6.isTouching(bed2)){
  bed2.destroy();
  life=life-1;
}
if(germ6.isTouching(bed3)){
  bed3.destroy();
  life=life-1;
}if(germ6.isTouching(bed4)){
  bed4.destroy();
  life=life-1;
}if(germ6.isTouching(bed5)){
  bed5.destroy();
  life=life-1;
}
if(germ6.isTouching(bed6)){
  bed6.destroy();
  life=life-1;
}
if(germ7.isTouching(bed1)){
  bed1.destroy();
  life=life-1;
}
if(germ7.isTouching(bed2)){
  bed2.destroy();
  life=life-1;
}
if(germ7.isTouching(bed3)){
  bed3.destroy();
  life=life-1;
}if(germ7.isTouching(bed4)){
  bed4.destroy();
  life=life-1;
}if(germ7.isTouching(bed5)){
  bed5.destroy();
  life=life-1;
}
if(germ7.isTouching(bed6)){
  bed6.destroy();
  life=life-1;
}

o2.bounceOff(line1);
o2.bounceOff(line2);
o2.bounceOff(line3);
o2.bounceOff(line4);
o2.bounceOff(line5);
o2.bounceOff(line6);
o2.bounceOff(line7);
o2.bounceOff(line8);
o2.bounceOff(line9);
o2.bounceOff(line10);
o2.bounceOff(line11);
o2.bounceOff(line12);
o2.bounceOff(line13);
o2.bounceOff(line14);
o2.bounceOff(line15);
o2.bounceOff(line16);
o2.bounceOff(door);

germ1.bounceOff(line1);
germ1.bounceOff(line2);
germ1.bounceOff(line3);
germ1.bounceOff(line4);
germ1.bounceOff(line5);
germ1.bounceOff(line6);
germ1.bounceOff(line7);
germ1.bounceOff(line8);
germ1.bounceOff(line9);
germ1.bounceOff(line10);
germ1.bounceOff(line11);
germ1.bounceOff(line12);
germ1.bounceOff(line13);
germ1.bounceOff(line14);
germ1.bounceOff(line15);
germ1.bounceOff(line16);
germ1.bounceOff(door);


doctor.bounceOff(line1);
doctor.bounceOff(line2);
doctor.bounceOff(line3);
doctor.bounceOff(line4);
doctor.bounceOff(line5);
doctor.bounceOff(line6);
doctor.bounceOff(line7);
doctor.bounceOff(line8);
doctor.bounceOff(line9);
doctor.bounceOff(line10);
doctor.bounceOff(line11);
doctor.bounceOff(line12);
doctor.bounceOff(line13);
doctor.bounceOff(line14);
doctor.bounceOff(line15);
doctor.bounceOff(line16);
doctor.bounceOff(door);
doctor.bounceOff(gen1);
doctor.bounceOff(genB1);
doctor.bounceOff(startLine);



doctor.bounceOff(bed1);
doctor.bounceOff(bed2);
doctor.bounceOff(bed3);
doctor.bounceOff(bed4);
doctor.bounceOff(bed5);
doctor.bounceOff(bed6);

doctor.bounceOff(dropBox);

germ2.bounceOff(line1);
germ2.bounceOff(line2);
germ2.bounceOff(line3);
germ2.bounceOff(line4);
germ2.bounceOff(line5);
germ2.bounceOff(line6);
germ2.bounceOff(line7);
germ2.bounceOff(line8);
germ2.bounceOff(line9);
germ2.bounceOff(line10);
germ2.bounceOff(line11);
germ2.bounceOff(line12);
germ2.bounceOff(line13);
germ2.bounceOff(line14);
germ2.bounceOff(line15);
germ2.bounceOff(line16);
germ2.bounceOff(door);


germ3.bounceOff(line1);
germ3.bounceOff(line2);
germ3.bounceOff(line3);
germ3.bounceOff(line4);
germ3.bounceOff(line5);
germ3.bounceOff(line6);
germ3.bounceOff(line7);
germ3.bounceOff(line8);
germ3.bounceOff(line9);
germ3.bounceOff(line10);
germ3.bounceOff(line11);
germ3.bounceOff(line12);
germ3.bounceOff(line13);
germ3.bounceOff(line14);
germ3.bounceOff(line15);
germ3.bounceOff(line16);
germ3.bounceOff(door);


germ4.bounceOff(line1);
germ4.bounceOff(line2);
germ4.bounceOff(line3);
germ4.bounceOff(line4);
germ4.bounceOff(line5);
germ4.bounceOff(line6);
germ4.bounceOff(line7);
germ4.bounceOff(line8);
germ4.bounceOff(line9);
germ4.bounceOff(line10);
germ4.bounceOff(line11);
germ4.bounceOff(line12);
germ4.bounceOff(line13);
germ4.bounceOff(line14);
germ4.bounceOff(line15);
germ4.bounceOff(line16);
germ4.bounceOff(door);

germ5.bounceOff(line1);
germ5.bounceOff(line2);
germ5.bounceOff(line3);
germ5.bounceOff(line4);
germ5.bounceOff(line5);
germ5.bounceOff(line6);
germ5.bounceOff(line7);
germ5.bounceOff(line8);
germ5.bounceOff(line9);
germ5.bounceOff(line10);
germ5.bounceOff(line11);
germ5.bounceOff(line12);
germ5.bounceOff(line13);
germ5.bounceOff(line14);
germ5.bounceOff(line15);
germ5.bounceOff(line16);
germ5.bounceOff(door);

germ6.bounceOff(line1);
germ6.bounceOff(line2);
germ6.bounceOff(line3);
germ6.bounceOff(line4);
germ6.bounceOff(line5);
germ6.bounceOff(line6);
germ6.bounceOff(line7);
germ6.bounceOff(line8);
germ6.bounceOff(line9);
germ6.bounceOff(line10);
germ6.bounceOff(line11);
germ6.bounceOff(line12);
germ6.bounceOff(line13);
germ6.bounceOff(line14);
germ6.bounceOff(line15);
germ6.bounceOff(line16);
germ6.bounceOff(door);

germ7.bounceOff(line1);
germ7.bounceOff(line2);
germ7.bounceOff(line3);
germ7.bounceOff(line4);
germ7.bounceOff(line5);
germ7.bounceOff(line6);
germ7.bounceOff(line7);
germ7.bounceOff(line8);
germ7.bounceOff(line9);
germ7.bounceOff(line10);
germ7.bounceOff(line11);
germ7.bounceOff(line12);
germ7.bounceOff(line13);
germ7.bounceOff(line14);
germ7.bounceOff(line15);
germ7.bounceOff(line16);
germ7.bounceOff(door);




}
function draw() {
  background("WHITE");  


  if (gameState === PLAY){
     
    
game();
  
    if(gameState===PLAY && medal1.visible===true && medal2.visible===true && medal3.visible===true){
     
      gameState=END;

  

    }
  


  if(life<=0|| gameState===PLAY && medal1.visible===true && medal2.visible===true && medal3.visible===true){
    gameState=END;
  }

  
}

  else if (gameState === END) {
    blnt.visible=true;
    cm.visible=true;
    wdd.visible=true;
    playAgain.visible=true;
    test.visible=false;
line1.destroy();
line2.destroy();
line3.destroy();
line4.destroy();
line5.destroy();
line6.destroy();
line7.destroy();
line8.destroy();
line9.destroy();
line10.destroy();
line11.destroy();
line12.destroy();
line13.destroy();
line14.destroy();
line15.destroy();
line16.destroy();
doctor.destroy();
door.destroy();
bed1.destroy();
bed2.destroy();
bed3.destroy();
bed4.destroy();
bed5.destroy();
bed6.destroy();
gen1.destroy();
genB1.destroy();
onB.destroy();
offB.destroy();
germ1.destroy();
germ2.destroy();
germ3.destroy();
germ4.destroy();
germ5.destroy();
germ6.destroy();
germ7.destroy();
o2.destroy();
dropBox.destroy();
medal1.destroy();
medal2.destroy();
medal3.destroy();
saniGroup.destroyEach();
saniFGroup.destroyEach();

if(gameState===END&&mousePressedOver(playAgain)){
  playAgain.visible=false;
  cm.visible=false;
  wdd.visible=false;
  blnt.visible=false;
  score=0;
  life=1;
  gameState=PLAY;
  setup();
  
  



}

}


  drawSprites();
  textSize(14);
  fill("red")
  text("kill: "+ score,200,50);
  text("life: "+ life,200,100);

  text("Task's ----" ,1200,180);
  text("1)Go to the generator room and start it to enter the covid ward",1050,210);
  text("2)Move the oxygen cylinder to the drop box",1120,240);
  text("3)Kill all the germs",1190,270);
  text("--------------------------------------------------------------------------------------------------------------------",1050,300);
  text(" How to play----",1200,330);
  text("/ Press the play button to start the game ",1125,360)
  text("/ Press the arrow keys to move ",1125,390);
  text("/ Press space bar to shoot to the right ",1125,420);
  text("/ Press F to shoot to the left ",1125,450);
  text("/ Press the re-start button to re-start the game",1125,480);
  text("--------------------------------------------------------------------------------------------------------------------",1050,510);
  text("General instructions----",1200,540);
  text("/ You have only 1 life if a germ touches you then the game will stop",1055,570);
  text("/ If the germ touches  any 1 patient then the game will stop",1055,600);
  text("/ The button to start the generator appears on the left side of the screen",1055,630);
  text("/ If the sanitizer touches the germ then the score increases by 1",1060,658);
  
  textSize(120);
  fill("red")
  text("+",1250,100);
  
  textSize(25);
  fill("BROWN")
  text("BEING",1190,50);
  text("DOCTOR",1300,50);





  
}

function createSani() {
  if (frameCount % 10 === 0){
  var sani= createSprite(100, 300, 60, 10);
  sani.addImage(saniImage);
  sani.x = 175;
  sani.y=doctor.y;
  sani.x = doctor.x;
  sani.velocityX = 2;
  
  sani.scale = 0.1;
  saniGroup.add(sani);
   
}

}






function createSaniF() {
  if (frameCount % 10 === 0){
  var saniF= createSprite(100, 300, 60, 10);
  saniF.addImage(saniImage);
  saniF.x = 175;
  saniF.y=doctor.y;
  saniF.x = doctor.x;
  saniF.velocityX = -2;
  
  saniF.scale = 0.1;
  saniFGroup.add(saniF);
   
}

}



