const BUT_ERASE = document.querySelector("#but-erase");
const BUT_COLOR = document.querySelector("#but-color");
const BUT_RAINBOW = document.querySelector("#but-rainbow");

const CONTAINER = document.querySelector(".grid-container");
const CELL = document.createElement("div");
const MODES = [
    "colored",
    "rainbow",
    "erased"
];

let mode = "colored";
let selectedColor = "#000";

CELL.classList.add("grid-item");

configureButtons();
fillGrid(10);

//Buttons config
function configureButtons() {
    BUT_COLOR.addEventListener( 
        "click",
        (e) => {mode = "colored";console.log(mode);}
    );
    BUT_RAINBOW.addEventListener( 
        "click",
        (e) => {mode = "rainbow";console.log(mode);}
    );
    BUT_ERASE.addEventListener( 
        "click",
        (e) => {mode = "erased";console.log(mode);}
    );    
}

//Creates a square grid with gridNum HxV
function fillGrid(gridNum) {
    CONTAINER.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    for (let row = 0; row < gridNum; row++) {
        for (let col = 0; col < gridNum; col++) {
            //console.log("hola");
            CONTAINER.appendChild(CELL.cloneNode(true));      
        }   
    }

    addHoverListener();
}


function addHoverListener() {
    let cells = document.querySelectorAll(".grid-item");

    cells.forEach(cell => {
        cell.addEventListener("mouseenter", (e) => {
            console.log("entered: " + cell);
            //e.target.style.backgroundColor = selectedColor;
            colorCell(cell);
        });
    });
}

function colorCell(cell) {
    if (!cell.classList.contains(`${mode}`)) {
        resetCellColor(cell);
        cell.classList.toggle(`${mode}`);
    }
}

function resetCellColor(cell){
    cell.classList = "grid-item";
}

/*
function changeCellSize(newSize) {
    CELL.style.width = `${newSize}px`;
}
*/

