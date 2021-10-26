const container = document.querySelector(".container");

function createPage(number) {
  for (i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }
}

createPage();
