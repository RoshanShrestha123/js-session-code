const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Particle {
  constructor() {
    // init
    this.x = Math.random() * 400;
    this.y = Math.random() * 400;
    this.r = Math.random() * (30 - 20) + 20;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "#64CCC5";
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();
  }

  update() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
    this.r += Math.random() * (1 - -1) + -1;
    if (this.r < 0) this.r = 0;
  }
}

let particles = [];
for (let i = 0; i < 50; i++) {
  const particleObj = new Particle();
  particles.push(particleObj);
}

// Game loop
function animate() {
  c.clearRect(0, 0, 400, 400);

  for (let i = 0; i < 50; i++) {
    particles[i].draw();
    particles[i].update();
  }

  requestAnimationFrame(animate);
}

animate();
