var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1,wall2,wall3;
var wall1body,wall2body,wall3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1 = createSprite(300,610,20,100);
	wall1.shapeColor = 'red';
	wall2 = createSprite(500,610,20,100);
	wall2.shapeColor = 'red';
	wall3 = createSprite(400,650,200,20);
	wall3.shapeColor = 'red';


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true } );
 	World.add(world, ground);

	wall1body = Bodies.rectangle(300,610,20,100,{isStatic:true} );
	World.add(world,wall1body);

	wall2body = Bodies.rectangle(500,610,20,100,{isStatic:true} );
	World.add(world,wall2body);

	wall3body = Bodies.rectangle(400,650,200,20,{isStatic:true} );
	World.add(world,wall3body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  wall1.x = wall1body.position.x
  wall1.y = wall1body.position.y
  wall2.x = wall2body.position.x
  wall2.y = wall2body.position.y
  wall3.x = wall3body.position.x
  wall3.y = wall3body.position.y

  rect(wall1.x,wall1.y,20,100);
  
  rect(wall2.x,wall2.y,20,100);
  
  rect(wall3.x,wall3.y,100,20);
  
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	rect(packageSprite.x,packageSprite.y,10,10);
	Matter.Body.setStatic(packageBody,false)
	
    
  }
}


