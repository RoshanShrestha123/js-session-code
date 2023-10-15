const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const player = new Bird();
const pipe = new Pipe(canvas.width);
const pipe2 = new Pipe(pipe.position.x + pipe.size.width + 150);
let score = 0;
const background = new Background();
let backgrounds = [
  new Background(0, 0),
  new Background(canvas.width, 0),
  new Background(canvas.width * 2, 0),
];

const intervalId = setInterval(() => {
  score++;
}, 1000);

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  backgrounds.forEach((element) => {
    element.update(player.isDead);
  });

  pipe.update();
  pipe.collision();
  pipe2.update();
  pipe2.collision();

  player.update();

  // render all text here
  if (player.isDead) {
    c.beginPath();
    c.font = "30px sans serif";
    c.fillStyle = "white";
    c.fillText("GAME OVER", 65, canvas.height / 3);
    clearInterval(intervalId);
  }

  c.beginPath();
  c.font = "30px sans serif";
  c.fillStyle = "white";
  c.fillText(score, 10, 30);

  requestAnimationFrame(animate);
}
animate();

document.addEventListener("keydown", () => {
  player.jump();
});
