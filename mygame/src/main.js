import kaplay from "kaplay";
import "kaplay/global";

import { gameScene } from "./scenes/game";
import { addTextButton } from "./components/components";

const player = "ghosty";
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
  addTextButton(200, 100, 400, 400, Color.MAGENTA, "Hello", 20);
});

scene("game", () => {
  gameScene(player, enemy, sound);
});

go("game");
