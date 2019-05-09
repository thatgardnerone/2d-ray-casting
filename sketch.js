let w, h;

let walls = [];
let particle;
let ray;

// Perlin noise movement
let xoff = 0;
let yoff = 1000;

let fontOpacity;
let fontSize;
let isActive;
let currentFrame;

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);

  particle = new Particle();

  // Boundary.randomWalls(5);
  Boundary.pentagon();

  // Boundary.showWalls();

  fontOpacity = 0;
  fontSize = w * 0.018;
  isActive = false;
  currentFrame = 0;
}

function draw() {
  background(30);

  // Walls
  for (let wall of walls) {
    wall.show();
  }

  // Dot
  particle.update(mouseX, mouseY);
  // particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.show(walls);

  xoff += 0.001;
  yoff += 0.001;

  // Instructions
  let limit = 60;
  if (!isActive) {
    if (fontSize < w * 0.02) {
      fontSize += w * 0.0001;
    }
    fontOpacity += 15;
  } else if (isActive && frameCount > currentFrame + limit) {
    fontOpacity -= 15;
    if (fontSize < w * 0.023) {
      fontSize += w * 0.00005;
    }
  }

  fill(255, fontOpacity);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text("Move the mouse", w / 2, h / 2);
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
}

function mouseMoved() {
  if (!isActive) {
    currentFrame = frameCount;
    isActive = true;
  }
  return false;
}
