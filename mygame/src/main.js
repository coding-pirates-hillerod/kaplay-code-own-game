import kaplay from "kaplay";
import "kaplay/global";

import { addTextButton } from "./components/components";

const player = "bean";
const enemy = "ghosty";
const jumpSound = "fart";

kaplay();

loadSprite(player, `sprites/${player}.png`);
loadSprite(enemy, `sprites/${enemy}.png`);
loadSound(jumpSound, `sounds/${jumpSound}.wav`);

scene("main", () => {
  // Tilføj start knap her
  addTextButton(200, 100, 400, 400, Color.MAGENTA, "Hello", 20);
});

go("main");
