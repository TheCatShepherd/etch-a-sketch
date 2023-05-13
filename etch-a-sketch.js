//Project etch-a-sketch
//Create grid, whose squares will change color when moved over with mouse

let gridDiv = document.querySelector(".container");

function makeGrid(num) {
    for (let i = 0; i < (num*num); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        gridDiv.appendChild(square);
    } 
    gridDiv.style.setProperty("grid-template-columns", `repeat(${num}, 1fr)`);
}

makeGrid(100)

document.addEventListener("mouseover", e => {
    if (e.target.matches("div.square")) {
        e.target.style.backgroundColor = "black"
    }
})