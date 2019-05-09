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
}
