const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisionHeight = 300;



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  var particles = [];
 
  var plinkos = [];

  ground = new box(0,789,500,20);
  
  division6 = new box(0,500,10,300);
  division = new box(80,500,10,300);
  division2 = new box(160,500,10,300);
  division3 = new box(240,500,10,300);
  division4 = new box(320,500,10,300);
  division5 = new box(400,500,10,300);  
  division7 = new box(480,500,10,300);


  if(frameCount%60 === 0){
    particles.push(new particle(random(width/2-10, width/2+10),10,10));
  }

  for(var j = 0;j < particles.length; j++){
    particles[j].display();

  }

  for(var k = 40;k <= width; k =  k + 50){
    plinkos[k].display();

  }

  for(var a = 15;a <= width; a =  a + 75){
    plinkos[a].display();

  }

}

function draw() {
  background("black");  
  Engine.update(engine);
 ground.display();
 division.display2(); 
 division2.display2();
 division3.display2();
 division4.display2();
 division5.display2();
 division6.display2();
 division7.display2();
 
 drawSprites();
}