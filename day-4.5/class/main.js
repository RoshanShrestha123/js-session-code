const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box {
  constructor(x, y = 50, color = "red", width) {
    this.x = x;
    this.y = y;

    this.width = width || 40;
    this.height = 40;
    this.color = color || "red";
    this.x_speed = 1;
    this.y_speed = 1;
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.rect(this.x, this.y, this.width, this.height);
    c.fill();
  }

  move() {
    this.x = this.x + this.x_speed;
    this.y = this.y + this.y_speed;
  }

  checkCollision() {
    if (this.x + this.width > canvas.width) {
      // check collision on right side
      this.x_speed = -1; // return to left
    } else if (this.x < 0) {
      // check collision on right side
      this.x_speed = 1; // return to right
    }

    if (this.y + this.height > canvas.height) {
      // check collision on right side
      this.y_speed = -1; // return to left
    } else if (this.y < 0) {
      // check collision on right side
      this.y_speed = 1; // return to right
    }
  }

  update() {
    this.draw();
    this.checkCollision();
    this.move();
  }
}

const box = new Box(50, null, "", 50);
const box2 = new Box(40, 40, "black");
const box3 = new Box(300, 200, "green");

// game loop
function animate() {
  //update logic here
  c.clearRect(0, 0, canvas.width, canvas.height);
  box2.update();
  box.update();

  requestAnimationFrame(animate);
}

animate();
