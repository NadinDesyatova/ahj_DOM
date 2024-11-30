export default class PlayingField {
  constructor() {
    this.field = document.createElement("div");
  }

  createPlayingField() {
    this.field.setAttribute("class", "hole-game");
    for (let i = 0; i < 16; i++) {
      const holeElement = document.createElement("div");
      holeElement.setAttribute("class", "hole");
      this.field.appendChild(holeElement);
    }
    return this.field;
  }
}
