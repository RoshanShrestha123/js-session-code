const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const SPEED = 3;

const player = new Player();
const allBullets = [];

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  player.renderPlayer();
  for (let i = 0; i < allBullets.length; i++) {
    allBullets[i].update();
  }

  requestAnimationFrame(animate);
}

animate();

// all listener here
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowDown") player.velocity.y = SPEED;
  if (e.code === "ArrowUp") player.velocity.y = -SPEED;
  if (e.code === "ArrowRight") player.velocity.x = SPEED;
  if (e.code === "ArrowLeft") player.velocity.x = -SPEED;
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowDown") player.velocity.y = 0;
  if (e.code === "ArrowUp") player.velocity.y = 0;
  if (e.code === "ArrowRight") player.velocity.x = 0;
  if (e.code === "ArrowLeft") player.velocity.x = 0;
});

document.addEventListener("keypress", () => {
  const newBullet = new Bullet(player.position.x + 20, player.position.y);
  allBullets.push(newBullet);
});
