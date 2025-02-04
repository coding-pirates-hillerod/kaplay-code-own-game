const HEIGHTS = {
  bean: 53,
  ghosty: 55,
};

export const gameScene = function (playerName, enemyName, jumpSound) {
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
      enemy.move(-300, 0);
    });

    enemy.onExitScreen(() => {
      if (enemy.pos.x < 0) {
        destroy(enemy);
      }
    });

    const waitTime = rand(0.7, 2);
    wait(waitTime, spawnEnemy);
  };

  spawnEnemy();
};
