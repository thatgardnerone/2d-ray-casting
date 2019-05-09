class Boundary {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }

  static showWalls() {
    walls.push(new Boundary(0, 0, w, 0));
    walls.push(new Boundary(0, 0, 0, h));
    walls.push(new Boundary(w, h, 0, h));
    walls.push(new Boundary(w, h, w, 0));
  }

  static randomWalls(num) {
    for (let i = 0; i < num; i++) {
      let x1 = random(width);
      let x2 = random(width);
      let y1 = random(height);
      let y2 = random(height);
      walls[i] = new Boundary(x1, y1, x2, y2);
    }
  }

  static pentagon() {
    // 1
    let ax1 = w * 0.1;
    let ay1 = h * 2 / 7;
    let ax2 = w * 0.5;
    let ay2 = h * 0.1;
    // 2
    let bx1 = w * 0.5;
    let by1 = h * 0.1;
    let bx2 = w * 0.9;
    let by2 = h * 2 / 7;
    // 3
    let cx1 = w * 0.9;
    let cy1 = h * 2 / 7;
    let cx2 = w * 4 / 5;
    let cy2 = h * 0.9;
    // 4
    let dx1 = w * 4 / 5;
    let dy1 = h * 0.9;
    let dx2 = w * 1 / 5;
    let dy2 = h * 0.9;
    // 5
    let ex1 = w * 1 / 5;
    let ey1 = h * 0.9;
    let ex2 = w * 0.1;
    let ey2 = h * 2 / 7;

    walls[0] = new Boundary(ax1 * random(0.8, 1.2), ay1 * random(0.8, 1.2), ax2 * random(0.8, 1.2), ay2 * random(0.8, 1.2));
    walls[1] = new Boundary(bx1 * random(0.8, 1.2), by1 * random(0.8, 1.2), bx2 * random(0.8, 1.2), by2 * random(0.8, 1.2));
    walls[2] = new Boundary(cx1 * random(0.8, 1.2), cy1 * random(0.8, 1.2), cx2 * random(0.8, 1.2), cy2 * random(0.8, 1.2));
    walls[3] = new Boundary(dx1 * random(0.8, 1.2), dy1 * random(0.8, 1.2), dx2 * random(0.8, 1.2), dy2 * random(0.8, 1.2));
    walls[4] = new Boundary(ex1 * random(0.8, 1.2), ey1 * random(0.8, 1.2), ex2 * random(0.8, 1.2), ey2 * random(0.8, 1.2));
  }
}
