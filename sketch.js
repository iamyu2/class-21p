
//sprites
var grid = 50;
var width = 1366;
var school;
var player, cars, logs;

//groups
var carGroup1, logGroup1;
var grassHeight = 100;

//gamestates
var gameState = "play";

//image
var carImage1, carImage2, logImage, playerImage;

function preload()
{
  
  //image
  playerImage = loadImage("Player-03.png"); 
  carImage1 = loadImage("car1.png");
  carImage2 = loadImage("car2.png");
  logImage1 = loadImage("log1.png");
  logImage2 = loadImage("log2.png");
   
}

function setup() 
{

  //canvas
  createCanvas(1366, 2700);

  //groups
  carGroup1 = new Group();
  logGroup1 = new Group();

  //road, grass and river
  for(var i = 0; i < 6; i++)
  {

    var grass = createSprite(683, 2600 - (i*400), 1366, grassHeight);
    grass.shapeColor = "gray";
    if(i%2 === 0)
    {

      var road = createSprite(683, 2500 - (i*400) - grassHeight, 1366, 300);
      road.shapeColor = "black";

    }

  }

  //cars
  for(i = 0; i < 40; i++)
  {

    cars = new Car(2);
    carGroup1.add(cars.spt);

  }

  //logs
  for(i = 0; i < 40; i++)
  {
  
    logs = new Log(2);
    logGroup1.add(logs.spt);
  
  }

  //player
  player = createSprite(683, 2680, 20, 20);    
  player.addImage(playerImage);
  player.scale = 0.1;
 
}

function draw() {

  //background
  background("skyblue");

  //draw
  drawSprites();

}
