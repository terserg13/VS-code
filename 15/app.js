const GAME_DIMENSION = 4;
const EMPTY_CLASS = "empty";

setupEmptyTable = () => {
  const board = document.querySelector("#board");

  for (id = 1; id < GAME_DIMENSION * GAME_DIMENSION + 1; id += 1) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", id);
    cell.addEventListener("click", cellClicked);

    const slot = document.createElement("div");
    slot.classList.add("slot");
    cell.append(slot);
    board.append(cell);
  }
};

getRandomArray = () => {
  const ORDERED_ARRAY = Array.from(
    Array(GAME_DIMENSION * GAME_DIMENSION - 1).keys(),
    (n) => n + 1
  );
  return [...ORDERED_ARRAY, ""].sort(() => Math.random() - 0.5);
};

fillTable = () => {
  const currentNumbers = getRandomArray();
  document.querySelectorAll(".slot").forEach((slot) => {
    const cell = slot.parentNode
    cell.classList.remove(EMPTY_CLASS)
    const slotValue = currentNumbers.pop();
    if (slotValue) {
      slot.innerText = slotValue;
    } else {
        cell.classList.add(EMPTY_CLASS)
        slot.innerText = "";
    }
  });
};

cellClicked = (event) => {
    const clickedCell = event.currentTarget;
    console.log(clickedCell)
    if (clickedCell.classList.contains(EMPTY_CLASS)) {return}
    const leftCell = document.getElementById(+clickedCell.id-1)
    
    // if () {}
};
setupEmptyTable();
fillTable();
