var canvas;
var mover;
function setup(){
canvas = createCanvas(400,400);
mover = createSprite(200,200,30,30);
}
function draw(){
background(0);
if(keyDown(UP_ARROW)){
mover.position.y = mover.position.y-10;
}
if(keyDown(DOWN_ARROW)){
    mover.position.y = mover.position.y+10;
    }
if(keyDown(RIGHT_ARROW)){
        mover.position.x = mover.position.x+10;
}
if(keyDown(LEFT_ARROW)){
            mover.position.x = mover.position.x-10;
}
drawSprites();
}