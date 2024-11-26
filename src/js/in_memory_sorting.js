[
  {
      "id": 26,
      "title": "Побег из Шоушенка",
      "imdb": 9.30,
      "year": 1994
  },
  {
      "id": 25,
      "title": "Крёстный отец",
      "imdb": 9.20,
      "year": 1972
  },
  {
      "id": 27,
      "title": "Крёстный отец 2",
      "imdb": 9.00,
      "year": 1974
  },
  {
      "id": 1047,
      "title": "Тёмный рыцарь",
      "imdb": 9.00,
      "year": 2008
  },
  {
      "id": 223,
      "title": "Криминальное чтиво",
      "imdb": 8.90,
      "year": 1994
  }
]

export default class Table {
  constructor (data, container) {
    this.data = data;
    this.container = container;
    this.tableElement = document.createElement('table');
    this.columnNames = [id, title, year, imdb];
  }

  sort(sortParam, ascending) {
    ascending
      ? this.data.sort((current, next) = current[sortParam] - next[sortParam])
      : this.data.sort((current, next) = next[sortParam] - current[sortParam]);
  }

  loadTable(sortParam, ascending) {
    this.sort(sortParam, ascending);
    const titleTableRow = document.createElement('tr');
    this.columnNames.forEach(name => {
      const titleCell = document.createElement('td');
      name !== sortParam 
        ? titleCell.textContent = name
        : ascending
          ? titleCell.textContent = `${name}↑`
          : titleCell.textContent = `${name}↓`;
      titleTableRow.appendChild(titleCell);
    });
    this.tableElement.appendChild(titleTableRow);
    this.data.forEach(element => {
      const tableRow = document.createElement('tr');
      Object.values(element).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        tableRow.appendChild(cell);
      });
      this.tableElement.appendChild(tableRow);
    });

    this.container.appendChild(this.tableElement);
  }

  changeSortingOrder() {
    let ascending = false;
    setInterval(() => {
      ascending = !ascending;
      this.columnNames.forEach(name => this.loadTable(name, ascending));
    }, 10000);
  }
}
