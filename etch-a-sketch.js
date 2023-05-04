//Create function that makes new divs (or whatever will create a div)
//append divs to container div

let gridDiv = document.querySelector(".container");

function makeGrid(num) {
    for (let i = 0; i < (num*num); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        gridDiv.appendChild(square);
    } 
    gridDiv.style.setProperty("grid-template-columns", `repeat(${num}, 1fr)`);
}

makeGrid(35)