var car, wall;
var speed, weight;
function setup() {
  createCanvas(1200,400);
  car = createSprite(40, 200, 50, 50);

   wall = createSprite(1100,200,60,200);

 
  speed = random(55,90);
  weight = random(400,15000);
}

function draw() {
  background(0);  
  car.velocityX = speed;

  if(wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    car.collide(wall);
    var deformation = 0.25*speed*weight*speed/22500;
    if(deformation<100){
      car.shapeColor = "green";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation>180){
      car.shapeColor = "red";
    }

  }


  drawSprites();
}