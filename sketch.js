const Engine = Matter.Engine,World = Matter.World, Bodies = Matter.Bodies;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7; ground,sunroof1,roof2,roof3;

function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(200,380,400,50,{isStatic:true});
  World.add(world,ground);

  sun = Bodies.circle(100,50,30);

  wall1 = new Rectangle(60,250,20,250);
  wall2 = new Rectangle(95,280,35,200);
  wall3 = new Rectangle(135,300,30,170);
  wall4 = new Rectangle(180,310,45,160);
  wall5 = new Rectangle(230,300,30,170);
  wall6 = new Rectangle(270,280,35,200);
  wall7 = new Rectangle(310,250,20,250);

  roof1 = new Triangle(180,210,{isStatic:true});
  roof2 = new Triangle(95,160,{isStatic:true});
  roof3 = new Triangle(270,160,{isStatic:true});

}

function draw() {
  background("black");

  Engine .update(engine);

   wall1.display();
   wall2.display();
   wall3.display();
   wall4.display();
   wall5.display();
   wall6.display();
   wall7.display();
   
   roof1.show();
   roof2.show();
   roof3.show();

   rectMode(CENTER);
   fill("green");
   rect(ground.position.x,ground.position.y,400,50);

   ellipseMode(RADIUS);
   fill(0,255,255);
   ellipse(sun.position.x,sun.position.y,30);
}