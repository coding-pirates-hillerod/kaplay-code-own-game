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

  // Add player game object
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
};
