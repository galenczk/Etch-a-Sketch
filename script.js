const container = document.querySelector(".container");

function createPage(number) {
  for (i = 0; i < number; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (j = 0; j < number; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }
}

createPage(30);

const cells = document.querySelectorAll(".cell");

for (i = 0; i < cells.length; i++) {
  const cell = cells[i];
  cells[i].addEventListener("mouseover", function () {
    cell.style.backgroundColor = "black";
  });
  cells[i].addEventListener("mouseout", function () {
    cell.style.backgroundColor = "white";
  });
}
