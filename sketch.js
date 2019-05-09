let w, h;

let walls = [];
let particle;
let ray;

// Perlin noise movement
let xoff = 0;
let yoff = 1000;

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);


  particle = new Particle();
  Boundary.randomWalls(5);
  // Boundary.pentagon();
  // Boundary.showWalls();
}

function draw() {
  background(30);

  for (let wall of walls) {
    wall.show();
  }

  particle.update(mouseX, mouseY);
  // particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.show(walls);

  xoff += 0.001;
  yoff += 0.001;
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
}
