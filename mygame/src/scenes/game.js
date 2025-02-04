const HEIGHTS = {
  bean: 53,
  ghosty: 55,
};

export const gameScene = function (playerName, enemyName, jumpSound) {
  let gameSpeed = 300;

  loop(1, () => {
    gameSpeed += 25;
  });

  // Platform
  add([
    rect(width(), 48),
    outline(4),
    area(),
    pos(0, height() - 48),
    body({ isStatic: true }),
  ]);

  // Player
  const player = add([
    sprite(playerName),
    pos(50, height() - 48 - HEIGHTS[playerName]),
    area(),
    body({
      jumpForce: 1200,
    }),
  ]);

  onButtonPress("jump", () => {
    if (player.isGrounded()) {
      play(jumpSound);
      player.jump();
    }
  });

  player.onCollide(enemyName, () => {
    go("gameover");
  });

  // Enemy
  const spawnEnemy = () => {
    const enemy = add([
      sprite(enemyName),
      area(),
      pos(width() - 50, height() - 48 - HEIGHTS[enemyName]),
      offscreen(),
      enemyName,
    ]);

    enemy.onUpdate(() => {
      enemy.move(-gameSpeed, 0);
    });

    enemy.onExitScreen(() => {
      if (enemy.pos.x < 0) {
        destroy(enemy);
      }
    });

    const waitTime = rand(0.7, 1.5);
    wait(waitTime, spawnEnemy);
  };

  spawnEnemy();
};
