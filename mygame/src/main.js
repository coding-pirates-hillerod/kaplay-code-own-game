import kaplay from "kaplay";
import "kaplay/global";

const player = "bean";
const enemy = "ghosty";
const jumpSound = "fart";

kaplay();

loadSprite(player, `sprites/${player}.png`);
loadSprite(enemy, `sprites/${enemy}.png`);
loadSound(jumpSound, `sounds/${jumpSound}.wav`);

scene("main", () => {
  // Tilføj start knap her
});

go("main");
