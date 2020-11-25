const Engine=Matter.Engine;       //universe    //namespacing
const World=Matter.World ;        //earth
const Bodies=Matter.Bodies;        //real life objects 

var engine ,world;      //local engine and local world for your game 



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

var options={        //JSON datastructure
  isStatic:true      //
}

object=Bodies.rectangle(200,200,50,50,options);
World.add(world,object);

}

function draw() {
  background(0); 
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);



  drawSprites();
}