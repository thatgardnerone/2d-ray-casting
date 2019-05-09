class Particle {
  constructor() {
    this.pos = createVector(w / 2, h / 2);
    this.rays = [];

    for (let a = 0; a < 360; a += 1) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  show(walls) {
    for (let ray of this.rays) {
      let record = Infinity;
      let closest = null;
      for (let wall of walls) {
        const pt = ray.cast(wall);

        if (pt) {
          // const d = ray.min;
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
          record = min(d, record);
        }
      }
      if (closest) {
        // Only cast to the closest wall
        stroke(50, 180, 255, 150);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }

    // Centre
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, 8);
  }
}
