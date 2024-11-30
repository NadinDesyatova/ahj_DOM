import Game from "./game";
import Goblin from "./goblin";
import PlayingField from "./playing-field";


document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const goblin = new Goblin();
  const goblinElement = goblin.createHtmlElement();
  const deadGoblins = card.querySelector(".dead");
  const lost = card.querySelector(".lost");
  const holeGame = new PlayingField();
  const holeGameElement = holeGame.createPlayingField();
  card.appendChild(holeGameElement);

  const game = new Game(goblinElement, holeGameElement);
  setTimeout(() => game.letPlay(deadGoblins, lost), 1000);
});
