const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var edges;
var bgImg;
var ground;
var groundImg;
var viking;
var mago;
var morsego;

var engine, world;
var magge;

function preload() {

    bgImg = loadImage("./cenario/ImagemDeFundo1.jpg");
    groundImg = loadImage("./cenario/ground.png");
    vikingImg = loadImage("./imagensDosPersonagens/vikinSkirym.png");
    magoImg = loadImage("./imagensDosPersonagens/magoMuitoDoMal.png");
    morCEGO = loadImage("./imagensDosPersonagens/morsego.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = createSprite(600,350,1200,400);
    ground.addImage(groundImg);

    viking = createSprite(201,300,50,60);
    viking.addImage(vikingImg);
    viking.scale = 0.4;
    edges = createEdgeSprites();

    magge = new Maguinho(600,200,150,150);

}

function draw(){
    background(bgImg);
    Engine.update(engine);
    //imageMode(CENTER);
   // image(bgImg,600,200,1200,400);
    magge.display();

    morseguinho();
    drawSprites();
    
    
}



function morseguinho(){

    if (frameCount % 60 == 0 ) {

    morsego = createSprite(201,300,03,04);  
    morsego.addImage(morCEGO);
    morsego.scale = 0.2;
    morsego.velocityX = 2;
    morsego.velocityY = -2;

    }
}
