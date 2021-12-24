
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var player, form, game;
var database, gameState = 0, playerCount =0, allPlayers;
var hp1IMG,slytherin,gryffindor,ravenclaw,hufflepuff, gryf, raven, slyther, huffle, bg, bgImg, hp2IMG, hp3IMG, hp4IMG, hogwarts
var potion,dragon,broom,hippogriff,felix;
var unicorn, phoenix;
var player1,player2,player3,player4,players;
var pointsGroup , dangerGroup,houseGrp;
var goodNPC, badNPC, house;
var scoreSound,gameOver, end;
var count = 0;
//var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10




function preload(){ 
 hogwarts= loadImage("images/hogwarts.png");
 bgImg = loadImage("images/bg.jpeg");
 hp1IMG = loadImage("images/luna.png");
 hp2IMG = loadImage("images/cedric.png");
 hp3IMG = loadImage("images/draco.png");
 hp4IMG = loadImage("images/harry.png");
 gryf = loadImage("images/gryff.png");
 raven = loadImage("images/raven.jpeg");
 slyther = loadImage("images/slyther.jpeg");
 huffle = loadImage("images/huffle.png");
 
  unicorn = loadImage("images/unicorns.png");
  phoenix = loadImage("images/phoenix.png");
  broom = loadImage("images/brooms.png");
  dragon  = loadImage("images/dragon.png");
  hippogriff = loadImage("images/hippogriff.png");
  potion = loadImage("images/potion.png");
  felix = loadImage("images/felix.png");

  //scoreSound = loadSound('themeSong.mp3'); 
  gameOver = loadImage("images/gameOver.jpg");
  end = loadImage("images/lastpg.jpeg");
}
function setup() {
  createCanvas(1450,750);
  
  engine = Engine.create();
    world = engine.world;

    database = firebase.database();
    hogwarts.scale = 1.0;
    game = new Game();
    game.readGameState(); 
    game.start();
    pointsGroup = new Group();
    dangerGroup = new Group();
    houseGrp = new Group();
}

function draw() {

    Engine.update(engine);
  //background(rgb(193,112,65));  
  
  if(gameState ===0)
  //scoreSound.play();
  if(playerCount ===4){
    game.updateGameState(1);
  }
  if(gameState ===1){
    game.play();
  }
  if(gameState==2){
    game.end();
  }
  
  
  
  
}

