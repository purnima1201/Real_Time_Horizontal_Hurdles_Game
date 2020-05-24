// Create a class called Player
 
  class Player {
    
    // Call the constructor
    
      constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
      }

    // Create a function that will hold the total number of players
      getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }

    // Create a function that will update the value of playerCount
      updateCount(count){
        database.ref('/').update({
          playerCount : count
        })
      }

    // Update the player info
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name : this.name,
          distance : this.distance
        });
      }

    // Get player info and store it in allPlayers
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
  }