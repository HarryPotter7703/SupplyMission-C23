var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, gameState = "ready", boxLeft,boxBottom,boxRight;
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
	

	packageSprite=createSprite(width/2, 80, 10,10, {isStatic:true});
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.25

	boxLeft=createSprite(300,610,20,100,{isStatic:true});
	boxLeft.shapeColor = color(200, 0, 0);

	boxBottom = createSprite(400, 650, 200, 20, {isStatic:true});
	boxBottom.shapeColor = color(200,0,0);

	boxRight=createSprite(500, 610, 20,100,{isStatic:true});
	boxRight.shapeColor=color(200,0,0);


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.9

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true});
	World.add(world, ground);

	 


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);

  background(0);
  packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	if(gameState === "ready"){
		textSize(30);
		textStyle("bold")
		fill(255);
		text("Press the down arrow key", 250, 350);
	}
	drawSprites();
	keyPressed();
}

function keyPressed() {
 if (keyDown("down") && gameState === "ready") {
    
		Matter.Body.setStatic(packageBody,false);
		gameState = "play";
  }
}



