var playbutton,playbuttonImage
var kitchen,kitchenI
var fruits,fruitsI
var dia1,dia2,dia1img,dia2img;
var chef,chefimg,chefimg2;
var contButton,contbuttonimg;
var opburger,oppizza,opfries,friesI,pizzaI,burgerI;
var yes,no,yesI,noI;

function preload(){
  playbuttonImage = loadImage("play.png");
    kitchenI = loadImage("kitchen.jpg")
    fruitsI = loadImage("fruits.png")
  dia1img = loadImage("new-D1.png")
    dia2img = loadImage("new-D2.png")
  chefimg = loadImage("chefavatoon2.png")
  chefimg2 = loadImage("chefavatoon.png")
  contbuttonimg = loadImage("contbuttonC.png")
  burgerI = loadImage("burgeroption.png");
  pizzaI = loadImage("pizza-option.png");
  friesI = loadImage("friesoption.png");
  yesI = loadImage("true.png");
  noI = loadImage("false.png");
}

function setup() {
 createCanvas(600,400)
  kitchen = createSprite(300,200,600,400);
  kitchen.addImage(kitchenI)
  
  playbutton = createSprite(300,200);
  playbutton.addImage(playbuttonImage)
  playbutton.scale = 0.06
  
  fruits = createSprite(100,270,50,50)
  fruits.addImage(fruitsI)
  fruits.scale=0.2
 }

function draw() {
 background("white")
  
    if(mousePressedOver(playbutton)){
    playbutton.destroy();
    Stage1();
 }
    if(mousePressedOver(contButton)){
    Stage2();
 }
    if(mousePressedOver(contButton)){
    Stage3();
 }
    if(mousePressedOver(opburger)){
      no = createSprite(300,200,10,10);
      no.addImage(noI);
      no.scale = 0.03
} 
    drawSprites();
 }

function Stage1() {
  
  dia1 = createSprite(445,300,50,50);
  dia1.addImage(dia1img);
  dia1.scale = 0.8;
    
  chef = createSprite(100,133,50,50);
  chef.addImage(chefimg2);
  chef.scale = 0.15;
    
  contButton = createSprite(490,225,50,50);
  contButton.addImage(contbuttonimg);
  contButton.scale = 0.1;   
 }

function Stage2(){
  
  dia2 = createSprite(445,300,50,50);
  dia2.addImage(dia2img);
  dia2.scale = 0.8;
 
  chef = createSprite(100,133,50,50);
  chef.addImage(chefimg2);
  chef.scale = 0.15

  contButton = createSprite(490,225,50,50);
  contButton.addImage(contbuttonimg);
  contButton.scale = 0.1;   
}

function Stage3(){

  kitchen = createSprite(300,200,600,400);
  kitchen.addImage(kitchenI);

  dia2 = createSprite(445,200,50,50);
  dia2.addImage(dia2img);
  dia2.scale = 0.8;

  opburger = createSprite(200,300,50,50);
  opburger.addImage(burgerI);
  opburger.scale = 0.7;

  oppizza = createSprite(300,278,50,50);
  oppizza.addImage(pizzaI);
  oppizza.scale = 0.7;

  opfries = createSprite(543,278,50,50);
  opfries.addImage(friesI);
  opfries.scale = 0.7
}

//function opBurger(){

 // no = createSprite(300,200,10,10);
//  no.addImage(noI);
//  no.scale = 0.1
//}