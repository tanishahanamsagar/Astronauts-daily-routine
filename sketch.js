var bath, bathing, brush, brushing;
var drink, drinking, eat, eatImg;
var gym1, gym, gymImg, gym1Img;
var iss, sleep, sleepImg;
var issImg, bathImg, drinkImg;
var move, moveImg, moving;
var brushImg;
var eating;
var gyming;

function preload() {
    bathImg = loadAnimation("bath1.png", "bath2.png");
    drinkImg = loadAnimation("drink1.png", "drink2.png");
    eatImg = loadAnimation("eat1.png", "eat2.png");
    gymImg = loadAnimation("gym1.png", "gym2.png");
    gym1Img = loadAnimation("gym11.png", "gym12.png");
    moveImg = loadImage("move.png", "move1");

    brushImg = loadImage("brush.png");
    issImg = loadImage("iss.png");
    sleepImg = loadImage("sleep.png");
}


function setup() {
    createCanvas(1100, 600);
    iss = createSprite(500, 200, 100, 100);
    iss.addImage("iss ", issImg);

    move = createSprite(500, 400, 30, 30);
    move.addAnimation("moving", moveImg);
    move.scale = 0.17
    move.lifetime = 200
    move.visible = false;

    drink = createSprite(500, 400, 20, 20);
    drink.addAnimation("drinking", drinkImg);
    drink.scale = 0.16
    drink.lifetime = 200
    drink.visible = false

    bath = createSprite(500, 400, 40, 40);
    bath.addAnimation("bathing", bathImg);
    bath.scale = 0.16
    bath.lifetime = 200
    bath.visible = false

    brush = createSprite(500, 400, 30, 30);
    brush.addImage("brushing", brushImg);
    brush.scale = 0.16;
    brush.lifetime = 200;
    brush.visible = false

    eat = createSprite(500, 400, 40, 40);
    eat.addAnimation("eating", eatImg);
    eat.scale = 0.16;
    eat.lifetime = 200;
    eat.visible = false

    gym = createSprite(500, 400, 30, 30);
    gym.addAnimation("gyming", gymImg);
    gym.scale = 0.18;
    gym.lifetime = 200;
    gym.visible = false

    gym1 = createSprite(500, 400, 30, 30);
    gym1.addAnimation("gyming", gym1Img);
    gym1.scale = 0.18;
    gym1.lifetime = 200;
    gym1.visible = false

    sleep = createSprite(500, 400, 40, 40);
    sleep.addAnimation("sleeping", sleepImg);
    sleep.scale = 0.17
    sleep.liftime = 100
    sleep.visible = false;

}

function draw() {
    background(0);
    text("tanisha", 500, 50);

    if (keyDown("UP_ARROW")) {
        brush.visible = true
        brush.addImage("brushing", brushImg);
        brush.changeAnimation("brushing");
        brush.y = 350;
        brush.velocityX = 0;
        brush.velocityY = 0
    }
    if (keyDown("DOWN_ARROW")) {
        gym.visible = true
        gym.addAnimation("gyming", gymImg);
        gym.changeAnimation("gyming");
        gym.y = 300;
        gym.velocityX = 0;
        gym.velocityY = 0
    }
    if (keyDown("g")) {
        gym.visible = true
        gym.addAnimation("gyming", gym1Img);
        gym.changeAnimation("gyming");
        gym.y = 300;
        gym.velocityX = 0;
        gym.velocityY = 0
    }
    if (keyDown("RIGHT_ARROW")) {
        bath.visible = true
        bath.addAnimation("bathing", bathImg);
        bath.changeAnimation("bathing");
        bath.y = 350;
        bath.velocityX = 0;
        bath.velocityY = 0
    }
    if (keyDown("LEFT_ARROW")) {
        eat.visible = true
        eat.addAnimation("eating", eatImg);
        eat.changeAnimation("eating");
        eat.y = 350;
        eat.velocityX = 0;
        eat.velocityY = 0
    }

    if (keyDown("m")) {
        move.visible = true;
        move.addAnimation("moving", moveImg);
        move.changeAnimation("moving");
        move.y = 350;
        move.velocityX = 0;
        move.velocityY = 0
    }

    if (keyDown("s")) {
        sleep.visible = true;
        sleep.addAnimation("sleeping", sleepImg);
        sleep.changeAnimation("sleeping");
        sleep.y = 350;
        sleep.velocityX = 0;
        sleep.velocityY = 0
    }
    drawSprites();
}