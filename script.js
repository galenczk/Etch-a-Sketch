const container = document.querySelector(".container");

//Creates a number * number grid
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

//Clears existing page.
function clearPage() {
  const rowCount = document.querySelectorAll(".row");
  for (i = 0; i < rowCount.length; i++) {
    const row = rowCount[i];
    container.removeChild(row);
  }
}

//Clears cells but keeps existing dimensions
function clearCells() {
  const cellCount = document.querySelectorAll(".cell");
  for (i = 0; i < cellCount.length; i++) {
    const cell = cellCount[i];
    cell.style.backgroundColor = "";
  }
}

//Button clears existing page, asks for new dimension, and calls color changing function.
const buttonBW = document.querySelector(".buttonBW");
buttonBW.addEventListener("click", function () {
  clearPage();
  const newGrid = prompt("Please enter a number for the size of the new grid.");
  if (newGrid >= 100) {
    alert("That number is too large, try something smaller.");
  } else {
    createPage(newGrid);
    effectBW();
  }
});

const buttonRainbow = document.querySelector(".buttonRainbow");
buttonRainbow.addEventListener("click", function () {
  clearPage();
  const newGrid = prompt("Please enter a number for the size of the new grid.");
  if (newGrid > 100) {
    alert("That number is too large, try something smaller.");
  } else {
    createPage(newGrid);
    effectRainbow();
  }
});

const buttonClear = document.querySelector(".buttonClear");
buttonClear.addEventListener("click", function () {
  clearCells();
});

//Creates the greyscale change effect on mouseover.
function effectBW() {
  const cells = document.querySelectorAll(".cell");
  for (i = 0; i < cells.length; i++) {
    const cell = cells[i];

    let greyScale = 90;
    cells[i].addEventListener("mouseover", function () {
      cell.style.backgroundColor = `hsl(180, 0%, ${greyScale}%)`;
      while (greyScale > 0) {
        greyScale -= 10;
        break;
      }
    });
  }
}

//Creates the rainbow effect on mouseover.
function effectRainbow() {
  const cells = document.querySelectorAll(".cell");
  for (i = 0; i < cells.length; i++) {
    const cell = cells[i];

    cells[i].addEventListener("mouseover", function () {
      const randomRed = Math.floor(Math.random() * 256);
      const randomGreen = Math.floor(Math.random() * 256);
      const randomBlue = Math.floor(Math.random() * 256);
      cell.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    });
  }
}

//Would be cool if the rainbow function also had a "shade-in" feature.  Fix the
//random color and shade-in on subsequent mouseovers.
