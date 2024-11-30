export default class Game {
  constructor(goblinElement, playingField) {
    this.playingField = playingField;
    this.goblin = goblinElement;
    this.activeHoleIndex = Math.floor(Math.random() * 16);
    this.playing = true;
  }

  getHole(index) {
    return this.playingField.querySelectorAll(".hole")[index];
  }

  getActiveHoleElement() {
    return this.playingField.querySelector(".hole_has-goblin");
  }

  activateHole(index) {
    this.getHole(index).classList.add("hole_has-goblin");
    this.getActiveHoleElement().appendChild(this.goblin);
  }

  deactivateHole(index) {
    if (this.getActiveHoleElement() !== null) {
      this.getHole(index).classList.remove("hole_has-goblin");
    }
  }

  countPoints(deadGoblinsCounter, lostCounter) {
    for (let index = 0; index < 16; index++) {
      let hole = this.getHole(index);
      hole.onclick = function () {
        hole.classList.contains("hole_has-goblin")
          ? (deadGoblinsCounter.textContent = +deadGoblinsCounter.textContent + 1)
          : (lostCounter.textContent = +lostCounter.textContent + 1);

        if (deadGoblinsCounter.textContent === "10") {
          alert("Победа!");
          deadGoblinsCounter.textContent = "0";
          lostCounter.textContent = "0";
        } else if (lostCounter.textContent === "5") {
          alert("Вы проиграли!");
          deadGoblinsCounter.textContent = "0";
          lostCounter.textContent = "0";
        }
      };
    }
  }

  letPlay(deadGoblinsCounter, lostCounter) {
    const interval = setInterval(() => {
      if (!this.playing) {
        clearInterval(interval);
      }
      this.countPoints(deadGoblinsCounter, lostCounter);

      this.deactivateHole(this.activeHoleIndex);
      const lastActiveIndex = this.activeHoleIndex;
      this.activeHoleIndex = Math.floor(Math.random() * 16);
      while (lastActiveIndex === this.activeHoleIndex) {
        this.activeHoleIndex = Math.floor(Math.random() * 16);
      } 
      this.activateHole(this.activeHoleIndex);
    }, 1000);
  }

  stopGame() {
    this.playing = false;
  }
}
