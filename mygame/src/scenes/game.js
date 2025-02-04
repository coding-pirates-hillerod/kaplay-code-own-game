export const gameScene = function (playerName) {
  // Platform
  add([
    rect(width(), 48),
    outline(4),
    area(),
    pos(0, height() - 48),
    // Give objects a body() component if you don't want other solid objects pass through
    body({ isStatic: true }),
  ]);

  // Add player game object
  const player = add([
    sprite(playerName),
    pos(50, height() - 48 - 53),
    area(),
    // body() component gives the ability to respond to gravity
    body({
      jumpForce: 1200,
    }),
  ]);
};
