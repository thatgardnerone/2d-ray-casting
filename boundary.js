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
    let ay1 = h * 2 / 5;
    let ax2 = w * 0.6;
    let ay2 = h * 0.06;
    // 2
    let bx1 = w * 0.52;
    let by1 = h * 0.15;
    let bx2 = w * 0.9;
    let by2 = w * 0.5;
    // 3
    let cx1 = w * 0.95;
    let cy1 = h * 0.45;
    let cx2 = w / 2;
    let cy2 = w / 2;
    // 4
    let dx1 = w / 2;
    let dy1 = w / 2;
    let dx2 = w / 2;
    let dy2 = w / 2;
    // 5
    let ex1 = w / 2;
    let ey1 = w / 2;
    let ex2 = w / 2;
    let ey2 = w / 2;

    walls[0] = new Boundary(ax1, ay1, ax2, ay2);
    walls[1] = new Boundary(bx1, by1, bx2, by2);
    walls[2] = new Boundary(cx1, cy1, cx2, cy2);
    walls[3] = new Boundary(dx1, dy1, dx2, dy2);
    walls[4] = new Boundary(ex1, ey1, ex2, ey2);
  }
}
