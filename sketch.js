// Create variables
  var canvas, backgroundImg;
  var gameState = 0;
  var playerCount;
  var allPlayers;
  var distance = 0;
  var database;
  var form, player, game;
  var index;
  var athelete1, athelete2, athelete3, athelete4, atheletes;
  var invisibleGround1, invisibleGround2;

function setup(){

  // Create canvas
    canvas = createCanvas(displayWidth-20,displayHeight-30);

  // Create database
    database = firebase.database();

  // Start the game
    game = new Game();
    game.getState();
    game.start();
    hurdle1 = createSprite(500,600,50,50)  
  invisibleGround1 = createSprite(0,140,4000);
  invisibleGround2 = createSprite(0,140,4000);
  invisibleGround1.visible = false;
  invisibleGround2.visible = false;
}

function draw(){
  
  // Change gameState when 4 players have registered
    if(playerCount === 2){
      game.update(1);
    }
  
  // Play game when gameState is 1  
    if(gameState === 1){
      clear();
      game.play();
    }
  
  // End the game when user reaches a certain distance
    if(gameState == 2){
      game.end();
    }


}
