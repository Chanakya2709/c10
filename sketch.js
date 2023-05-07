var ball,ballimage
function preload() {
ballimage=loadImage("images/ball.jpg")
}


function setup() {
  createCanvas(1000, 1000)
  ball = createSprite(500, 500, 100, 100)
  ball.addImage("ball",ballimage)
  ball.scale=0.25
}

function draw() {
  background("cyan")
  if (keyDown("RIGHT")) {
    ball.x = ball.x + 50
  }
  if (keyDown("LEFT")) {
    ball.x = ball.x - 50
  }
  if (keyDown("UP")) {
    ball.y = ball.y - 50
  }
  if (keyDown("DOWN")) {
    ball.y = ball.y + 50
  }
  drawSprites()
}