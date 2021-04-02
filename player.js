class Player{
    constructor(){
this.index=null;
this.distance=0;
this.name=null;
    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount=data.val()
        })
            }
            updateCount(count){
                database.ref('/').update({
                    playerCount:count
                })
                    }
                    update(){
                        var playerref="players/player"+this.index
                        database.ref(playerref).update({
                            name:this.name,
                            distance:this.distance
                        })

                    }
                    static getPlayerinfo(){
                        database.ref('players').on("value",function(data){
                           allPlayers=data.val()
                         //  console.log(allPlayers)
                        }
                        )
                    }
                        
}