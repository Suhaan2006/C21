//isTouching with arguments
function isTouching(obj1, obj2) 
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    &&  obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
      obj1.shapeColor = "red";
  obj2.shapeColor = "red";
}
else {
  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
}
}


//function collide
function collide(obj1, obj2) 
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    &&  obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
      obj1.shapeColor = "red";
      obj1.velocityX=0;
      console.log("touching");
  //obj2.shapeColor = "red";
}

}

// function bounceOff
function bounceOff(obj1, obj2) 
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    &&  obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
     ball.velocityX = -1 * ball.velocityX ;
     ball.velocityY = -1 * ball.velocityY ;
      //    obj1.shapeColor = "red";
  //obj2.shapeColor = "red";
}

}