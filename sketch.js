var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

   if(edges( movingRect,fixedRect)){

   
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
   if(edges1(movingRect,fixedRect)){

   
  
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   }
  
  else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }

  drawSprites();
}

function edges(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      return true;
}
else{
  return false;
}
}

