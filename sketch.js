var wall,wall1,wall2;
var bullet1,bullet2,bullet3;
var line1,line2;

function setup() {
  createCanvas(400,400);
  bullet1 = createSprite(100,100,20,10)
  bullet1.shapecolor = 'yellow'
  bullet2 = createSprite(100,200,20,10)
  bullet2.shapecolor = 'red'
  bullet3 = createSprite(100,300,20,10)
  bullet3.shapecolor = 'green'

  line1 = createSprite(200,150,400,10)
  line1.shapecolor = 'white'
  line2 = createSprite(200,250,400,10)
  line2.shapecolor = 'white'

  bullet1.velocityX = 9
  bullet2.velocityX = 9
  bullet3.velocityX = 9

  wall = createSprite(300,100,10,40)
  wall1 = createSprite(300,200,10,40)
  wall2 = createSprite(300,300,10,40)
}

function draw() {
  if(isTouching(bullet1,wall)){
  bullet1.velocityX = 0
  wall.shapecolor = 'yellow'
  }
  else{
    wall.shapecolor = 'white'
  }

  if(isTouching(bullet2,wall1)){
    bullet2.velocityX = 0
  wall1.shapecolor = 'red'
  }
  else{
    wall1.shapecolor = 'white'
  }

  if(isTouching(bullet3,wall2)){
  bullet3.velocityX = 0
  wall2.shapecolor = 'green'
  }
  else{
    wall2.shapecolor = 'white'
  }

  background(0);  
  rect(CENTER)
  drawSprites();
}
function isTouching(object1,object2){
 if(object2.x - object1.x < object1.width/2 + object2.width/2){
   return true
 }
else {return false
}
}