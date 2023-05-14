//Project etch-a-sketch

let gridDiv = document.querySelector(".container");

function makeGrid(num) {
    for (let i = 0; i < (num*num); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        gridDiv.appendChild(square);
    } 
    gridDiv.style.setProperty("grid-template-columns", `repeat(${num}, 1fr)`);
};


function clearGrid() {
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
};


let colorBtns = document.querySelectorAll('button');
let selectedButton = null;

colorBtns.forEach((button) => {
  button.addEventListener('click', () => {
    if (selectedButton !== null) {
      document.removeEventListener("mouseover", mouseOverHandler);
    }

    selectedButton = button;

    if (button.id == "black" ||
        button.id == "progressive" ||
        button.id == "rainbow") {
            document.addEventListener("mouseover", mouseOverHandler);
        }
  });
});

function mouseOverHandler(e) {
  if (e.target.matches("div.square")) {
    if (selectedButton.id === "black") {
      e.target.style.backgroundColor = "black";
      e.target.style.opacity = "";
    } else if (selectedButton.id === "progressive") {
      e.target.style.backgroundColor = "black";
      e.target.style.opacity -= '-0.1';
    } else if (selectedButton.id === "rainbow") {
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      e.target.style.opacity = "";
    }
  }
};


//User input grid number
let gridBtn = document.getElementById("gridBtn");
gridBtn.addEventListener('click', () => {
    clearGrid();
    let num = document.getElementById("gridNum").value;
    makeGrid(num);
});
