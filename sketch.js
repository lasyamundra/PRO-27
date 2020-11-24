const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject;
var rope1,rope2,rope3, rope4,rope5;


function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	bobObject1 = new Bob (250,600,100);
	bobObject2 = new Bob (350,600,100);
	bobObject3 = new Bob (450,600,100);
	bobObject4 = new Bob (550,600,100);
	bobObject5 = new Bob (650,600,100);

	roofObject = new Roof (450,100,640,50);
	
	rope1 = new rope (bobObject1.body,roofObject.body,-200,0);
	rope2 = new rope(bobObject2.body,roofObject.body,-100, 0)
	rope3 = new rope(bobObject3.body,roofObject.body,0, 0)
	rope4 = new rope(bobObject4.body,roofObject.body,100, 0)
	rope5 = new rope(bobObject5.body,roofObject.body,200, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) 
	{
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:-195});
	}
}