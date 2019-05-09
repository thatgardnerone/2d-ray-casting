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

  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  particle = new Particle();
  // ray = new Ray(w / 2, h / 2);
}

function draw() {
  background(30);

  for (let wall of walls) {
    wall.show();
  }

  particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.show(walls);

  xoff += 0.001;
  yoff += 0.001;
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
}
