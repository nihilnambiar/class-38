class Game{
    constructor(){

    }
    getState(){
database.ref('gameState').on("value",function(data){
    gameState=data.val()
    console.log(gameState)
})
    }
    updateState(state){
database.ref('/').update({
    gameState:state
})
    }
    start(){
        console.log("inside the start")
        if(gameState== 0 ){
            console.log("inside the if")
           player=new Player()
           player.getCount()
           console.log(playerCount)
           form=new Form()
           form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        textSize(30);
     text("Game Start", 120, 100)
Player.getPlayerinfo()
if(allPlayers!==undefined){
    var display_position = 130;
    var index=0
    var x=0
    var y
    for(var plr in allPlayers){
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x = x;
         cars[index-1].y = y;
        
        if (index ===  player.index){
        cars[index - 1].shapeColor = "red";

        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y
        }
        
    
}
}
if(keyIsDown(UP_ARROW) && player.index !== null){ 
    player.distance +=50
    player.update();
    }
    drawSprites();
}
}