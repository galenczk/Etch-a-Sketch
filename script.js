const container =
  document.querySelector(".container");

let newGrid = 30;
let effectSet = 0; //Setting for either black and white mode, or rainbow
createPage(newGrid);

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
  const containerHeight =
    window.innerHeight * 0.85;
  container.style.height = containerHeight + "px";
  container.style.width = containerHeight + "px";

  if (effectSet === 1) {
    effectRainbow();
  } else if (effectSet === 0) {
    effectBW();
  }
}

//Clears existing page.
function clearPage() {
  const rowCount =
    document.querySelectorAll(".row");
  for (i = 0; i < rowCount.length; i++) {
    const row = rowCount[i];
    container.removeChild(row);
  }
}

//Clears cells but keeps existing dimensions
function clearCells() {
  clearPage();
  createPage(newGrid);
  /*
  const cellCount =
    document.querySelectorAll(".cell");
  for (i = 0; i < cellCount.length; i++) {
    const cell = cellCount[i];
    cell.style.backgroundColor = "";
  }
  */
}

//Button clears existing page, asks for new dimension, and calls color changing function.
const buttonBW =
  document.querySelector(".buttonBW");
buttonBW.addEventListener("click", function () {
  clearPage();
  newGrid = prompt(
    "Please enter a number for the size of the new grid.",
  );
  if (newGrid >= 100) {
    alert(
      "That number is too large, try something smaller.",
    );
  } else {
    effectSet = 0;
    createPage(newGrid);
  }
});

const buttonRainbow = document.querySelector(
  ".buttonRainbow",
);
buttonRainbow.addEventListener(
  "click",
  function () {
    clearPage();
    newGrid = prompt(
      "Please enter a number for the size of the new grid.",
    );
    if (newGrid > 100) {
      alert(
        "That number is too large, try something smaller.",
      );
    } else {
      effectSet = 1;
      createPage(newGrid);
    }
  },
);

const buttonClear = document.querySelector(
  ".buttonClear",
);
buttonClear.addEventListener(
  "click",
  function () {
    clearCells();
  },
);

//Creates the greyscale change effect on mouseover.
function effectBW() {
  const cells =
    document.querySelectorAll(".cell");
  for (i = 0; i < cells.length; i++) {
    const cell = cells[i];

    let lightness = 90;
    cells[i].addEventListener(
      "mouseover",
      function () {
        cell.style.backgroundColor = `hsl(180, 0%, ${lightness}%)`;
        while (lightness > 0) {
          lightness -= 10;
          break;
        }
      },
    );
  }
}

//Creates the rainbow effect on mouseover.
function effectRainbow() {
  const cells =
    document.querySelectorAll(".cell");
  for (i = 0; i < cells.length; i++) {
    const cell = cells[i];

    let opacity = 10;
    cells[i].addEventListener(
      "mouseover",
      function () {
        if (!cell.style.backgroundColor) {
          const randomHue = Math.floor(
            Math.random() * 360,
          );
          cell.style.backgroundColor = `hsl(${randomHue}, 90%, 50%`;
          cell.style.filter = `opacity(10%)`;
        } else {
          while (opacity < 100) {
            opacity += 20;
            cell.style.filter = `opacity(${opacity}%)`;
            break;
          }
        }
      },
    );
  }
}
