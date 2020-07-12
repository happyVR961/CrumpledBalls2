var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var ball, ground1;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	ball = new Paper (100,687,70);
	Engine.run(engine);
	ground1 = new Ground (400,690,800,40);
	box1 = new Dustbin (600,520,100,0);
	box1.scale = 0.5;
	//box2  = new Dustbin (508,600,10,150);
	//box3 = new Dustbin(692,600,10,150)
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.scale = 2;
   ball.display();
   ground1.display();
   box1.display();
   //box2.display();
   //box3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{x:500,y:-1095})
	}
}


