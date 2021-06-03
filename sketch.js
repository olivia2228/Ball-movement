var ball;
var db
var pos

function setup(){
    createCanvas(500,500);
    db=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPositionref=db.ref("ball/position")
    ballPositionref.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    db.ref("ball/position").update({
        x:ball.x+x,
        y:ball.y+y

    })
    
}
function showError(){
    console.log("ërror!")
}
function readPosition(data){
     pos=data.val()
     console.log(pos)
     ball.x=pos.x
     ball.y=pos.y
}