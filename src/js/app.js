import Game from "./game";
import Goblin from "./goblin";


document.addEventListener("DOMContentLoaded", () => {
  const goblin = new Goblin();
  const card = document.querySelector(".card");
  const goblinElement = goblin.createHtmlElement();
  const deadGoblins = card.querySelector(".dead");
  const holeGame = card.querySelector(".hole-game");
  const lost = card.querySelector(".lost");

  const game = new Game(holeGame, goblinElement);
  game.letPlay(deadGoblins, lost);

  // setTimeout(game.stopGame(), 80000);
});
