// Create a class called Game
  class Game {
    
    // Create an empty constructor
      constructor(){
        // Empty constructor
      }

    getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",function (data){
        gameState = data.val();
      }) 
    }

    update(state){
      database.ref('/').update({
        gameState : state
      })
    }

    async start(){
      if (gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
      athelete1 = createSprite(100,100);
      athelete2 = createSprite(100,200);
      
      atheletes = [athelete1,athelete2];
    }
    play(){
      form.hide();
      Player.getPlayerInfo()

      if(allPlayers !== undefined){
        background(255);
        index = 0;
        
        var x;
        var y = 175;

        for(var plr in allPlayers){
          index++;
          y+=200
          x = displayWidth-allPlayers[plr].distance;
          atheletes[index-1].x = x;
          atheletes[index-1].y = y;
          if (index === player.index){
            strokeWeight(10);
            stroke("black")
            fill("white")
            circle(x,y,70)
            atheletes[index - 1].shapeColor = "red";
            camera.position.x = atheletes[index-1].x;
            camera.position.y = displayHeight/2;
            atheletes[index-1].collide(invisibleGround1);
            atheletes[index-1].collide(invisibleGround2);
            atheletes[index-1].velocityY =atheletes[index-1].velocityY+0.8;

            if(keyIsDown(UP_ARROW)){
              atheletes[index-1].velocityY=-4;
              console.log(atheletes[index-1].y);
            }
            
          }
        }
      }
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      
      if(player.distance>3860){
        gameState = 2;
      }

      drawSprites();
    }
    end(){
      game.update(2);
      console.log("GAME HAS ENDED")
    }
  }