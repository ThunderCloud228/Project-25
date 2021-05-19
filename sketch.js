
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(width/2,670,width,20);
	dustbinObj = new Dustbin(1250,650);
	paper = new Paper(250,625,50);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(230);

	if(keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:25,y:-25});
	}
	
	groundObject.display();
	dustbinObj.display();
	paper.display();
}

