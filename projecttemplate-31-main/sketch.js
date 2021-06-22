const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thunder,t1,t2,t3,t4
var drops = []
var rn,maxDrops=100
var thunderCreatedFrame = 0

function preload(){
    t1 = loadImage("images/thunderbolt/1.png")
    t2 = loadImage("images/thunderbolt/2.png")
    t3 = loadImage("images/thunderbolt/3.png")
    t4 = loadImage("images/thunderbolt/4.png")
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world; 
    umbrella = new Umbrella(200,500)
    if(frameCount%150===0){
        for(var i =0;i<maxDrops;i++){
            drops.push(new Drop(random(0,400),random(0,400)))
        }
    }
}

function draw(){
    background(0)
    Engine.update(engine);
  
    rn=Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount
        thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(rn){
            case 1: thunder.addImage(t1)
            break; 
            case 2: thunder.addImage(t2)
            break; 
            case 3: thunder.addImage(t3)
            break; 
            case 4: thunder.addImage(t4)
            break; 
            default:break;
        }
    }
    if(thunderCreatedFrame+10===frameCount&&thunder){
        thunder.destroy()
    }
    umbrella.display()
    for(var i = 0; i<maxDrops;i++){
        drops[i].display()
        drops[i].updatey()
    }
    drawSprites();
}   

