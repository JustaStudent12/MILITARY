var wall,thick;
var bullet,speed,weigth;
var lbullet,lwall;

function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weigth=random(30,52);
thick=random(22,83);
bullet=createSprite(50, 200, 60, 40);
bullet.velocityX=speed;
 wall=createSprite(1200,200,thick,height/2);
}

function draw() {
  background(255,255,255);  
 
  if (collide(bullet,wall)) {
    bullet.velocityX=0;
    var d=0.5*wieght*speed*speed/(thick*thick*thick);

    if (d>10) {
      wall.shapeColor=color(255,0,0);
    }
   
    if (d<10) {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function collide(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
    return true;
}

    return false;
}
