export default class Goblin {
  constructor() {
    this.class = "goblin-img";
  }

  createHtmlElement() {
    const goblin = document.createElement("img");
    goblin.setAttribute("class", this.class);
    return goblin;
  }
}