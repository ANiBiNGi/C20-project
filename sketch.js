var car, car2, car3, car4, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  wall = createSprite(1500, 50, 20, 50);
  wall2 = createSprite(1500, 150, 20, 50);
  wall3 = createSprite(1500, 250, 20, 50);
  wall4 = createSprite(1500, 350, 20, 50);

  speed = random(55,90);
  weight = random(400,1500);

  car=createSprite(50,50,40,20);
  car2=createSprite(50,150,40,20);
  car3=createSprite(50,250,40,20);
  car4=createSprite(50,350,40,20);

  car.velocityX = random(speed);
  car2.velocityX = random(speed);
  car3.velocityX = random(speed);
  car4.velocityX = random(speed);

}

function draw() {
  background(0); 
  
  if (wall.x - car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

  if (wall2.x - car2.x < (car2.width+wall2.width)/2){
    car2.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car2.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car2.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car2.shapeColor=color(0,255,0);
    }
  }

  if (wall3.x - car3.x < (car3.width+wall3.width)/2){
    car3.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car3.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car3.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car3.shapeColor=color(0,255,0);
    }
  }

  if (wall4.x - car4.x < (car4.width+wall4.width)/2){
    car4.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
      car4.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car4.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car4.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}