var box1, box2, box3, box4

function setup() {
  createCanvas(800,400);
  box1=createSprite(0,100,100,50)
  box2=createSprite(800,100,75,75)
  box1.velocityX=2
  box2.velocityX=-2
  box3=createSprite(400,0,85,65)
  box4=createSprite(400,400,95,85)
  box3.velocityY=3
  box4.velocityY=-3
  box1.shapeColor= "green";
  box2.shapeColor= "green";
  box3.shapeColor= "red";
  box4.shapeColor= "aqua";
  //box3.shapeColor= "green";
  //box4.shapeColor= "green";
  box1.debug=true;
  box2.debug=true;
 //box3.debug=true;
  //box4.debug=true;
}

function draw() {
  background(0,0,0); 
  text(box1.x,100,300);
  text(box2.x,200,300)
  drawSprites();
  bounceOff(box1,box2);
  bounceOff(box3,box4);
}
//function with two arguements
function bounceOff(object1,object2){
 if (object2.x-object1.x < object1.width/2 + object2.width/2
    && object1.x-object2.x < object1.width/2 + object2.width/2){
    object1.velocityX=object1.velocityX*-1
    object2.velocityX=object2.velocityX*-1
    }
    if (object2.y-object1.y<object1.height/2 + object2.height/2
    &&object1.y-object2.y<object1.height/2 + object2.height/2){
      object1.velocityY=object1.velocityY*-1
      object2.velocityY=object2.velocityY*-1
  }
}