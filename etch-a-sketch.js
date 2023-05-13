//Project etch-a-sketch

let gridDiv = document.querySelector(".container");

function makeGrid(num) {
    for (let i = 0; i < (num*num); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        gridDiv.appendChild(square);
    } 
    gridDiv.style.setProperty("grid-template-columns", `repeat(${num}, 1fr)`);
}


function clearGrid() {
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
}

//Get value of color selection
let select = document.getElementById("color");
let value = select.options[select.selectedIndex].value;
console.log(value)

//Change square to black when mouse over
/*document.addEventListener("mouseover", e => {
    if (e.target.matches("div.square")) {
        e.target.style.backgroundColor = "black"
    }
})*/

document.addEventListener("mouseover", e => {
    if (e.target.matches("div.square")) {
        e.target.style.backgroundColor = "black"
        e.target.style.opacity -= '-0.1';
    }
})

/*document.addEventListener("mouseover", e => {
    if (e.target.matches("div.square")) {
        let red = Math.floor(Math.random() * (255));
        let green = Math.floor(Math.random() * (255))
        let blue = Math.floor(Math.random() * (255));
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
})*/

//User input grid number
let button = document.querySelector("button");
button.addEventListener('click', () => {
    clearGrid();
    let num = document.getElementById("gridNum").value;
    makeGrid(num);
})
