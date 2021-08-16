var fixedRect, movingRect;
var car, pole;
var ball;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(100,300,50,50);
  car.shapeColor = "blue";
  pole = createSprite(1000,300,20,400);
  pole.shapeColor = "brown";
  car.velocityX=2;
  ball = createSprite(110,400,20,20);
  ball.shapeColor = "white";
  ball.velocityX=1;
  //ball.velocityY=-1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

// calling function isTouching
   //isTouching();  
  
   //calling isTouching with two arguments(obj1, obj2)
   isTouching(movingRect, fixedRect);
   collide(car, pole);
   bounceOff(ball, pole);
   drawSprites();
}

//function isTouching
/*function isTouching() 
{
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
}*/

