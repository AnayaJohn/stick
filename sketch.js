const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var block1,block2, block3, block4, block5, block6, block7,
block8, block9, ground;

function setup() {
  var canvas=createCanvas(800, 400)

  engine = Engine.create();
  world = engine.world;
  
  ground= new Ground(400,400,800,50);
  
  /*
  block1= new Block(330,235,30,40);
  block2= new Block(360,235,30,40);
  block3= new Block(390,235,30,40);
  block4= new Block(420,235,30,40);
  block5= new Block(450,235,30,40);

  block6= new Block(360,195,30,40);
  block7= new Block(390,195,30,40);
  block8= new Block(420,195,30,40);

  block9= new Block(390,155,30,40);
  */

  block1= new Block(330,300,50,200);
  block2=new Block(355,200,50,350);
  block3= new Block(305,200,50,350);
  block4= new Block(375,300,50,150);
  block5= new Block(280,300,50,150);
  block6= new Block(265,300,50,100);
  block7= new Block(400,300,50,100);

  
  }

function draw() {
  background(0); 

  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  
  /*
  block8.display();

  block9.display();
*/
  
  drawSprites();
}
