const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
 
var ground,ground_bg; 
var tower,tower_img; 
var cannon; 
var angle; 



function preload() {
 ground_bg = loadImage("./assets/background.gif"); 
tower_img = loadImage("./assets/tower.png"); 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var ground_opt={
    isStatic:true,
  } 
  var tower_opt={
    isStatic:true,
  } 

  
  ground = Bodies.rectangle (1,height-10,1200,600,ground_opt); 
   World.add(world,ground); 
  tower = Bodies.rectangle (160, 350, 160, 310,tower_opt); 
  World.add(world,tower); 

 cannon= new Cannon (180,110,130,100,20); 
 
  
}

function draw() {
  image(ground_bg,0,0,width,height); 
  
  cannon.display();

  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,600);
  push();
  imageMode(CENTER); 
  image(tower_img, tower.position.x,tower.position.y,160,310);
pop();
  
   
}
