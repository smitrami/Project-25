
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2, side3;
var paper, paperBody;
var box, box_image;
var ground;
var world;
//var paper, paper_img;
function preload() {
	box_image = loadImage("dustbingreen.png");
	ball_img = loadImage("paper.png");
}
function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 380, 800, 10);
	side1 = new Dustbin(560, 280, 15, 170);
	side2 = new Dustbin(650, 350, 180, 15);
	side3 = new Dustbin(730, 285, 15, 170);
	paper = new Paper(50, 280, 40, 40);
	box = createSprite(645, 280, 60, 60);
	box.addImage("box", box_image);
	box.scale = 0.6;
	//ball.image = (ball_img)
	Engine.run(engine);

}


function draw() {
	background("#00EF91");
	ground.display();
	side1.display();
	side2.display();
	side3.display();
	box.display();
	paper.display();


	drawSprites();
	keypressed();
}
function keypressed() {
	if (keyCode === UP_ARROW) {
		if (paper.body.position.x < 200 && paper.body.position.y > 100) {
			Matter.Body.applyForce(paper.body, paper.body.position, { x: 85, y: -85 })
		}
		if (paper.body.position.x >= 200 && paper.body.position.y <= 100) {
			Matter.Body.applyForce(paper.body, paper.body.position, { x: 55, y: 150 })
		}
	}
}
