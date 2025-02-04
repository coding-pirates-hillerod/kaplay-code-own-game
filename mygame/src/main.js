import kaplay from "kaplay";
import "kaplay/global";

import { gameScene } from "./scenes/game";
import { addTextButton } from "./components/components";

const player = "bean";
const enemy = "ghosty";
const sound = "fart";

kaplay({
  buttons: {
    jump: {
      keyboard: ["space"],
    },
  },
});

loadSprite(player, `sprites/${player}.png`);
loadSprite(enemy, `sprites/${enemy}.png`);
loadSound(sound, `sounds/${sound}.wav`);

setGravity(3100);

scene("main", () => {
  // Tilføj start knap her
  addTextButton(200, 100, 400, 400, Color.MAGENTA, "Hello", 20, "game");
});

scene("game", () => {
  gameScene(player, enemy, sound);
});

scene("gameover", () => {
  add([text("Game over"), pos(center().x, center().y - 200), anchor("center")]);
  addTextButton(
    200,
    100,
    center().x,
    center().y,
    Color.RED,
    "Play again",
    20,
    "game"
  );
});

go("main");
