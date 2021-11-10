const ROOT = document.documentElement;
const BUT_ERASE = document.querySelector("#but-erase");
const BUT_COLOR = document.querySelector("#but-color");
const BUT_RAINBOW = document.querySelector("#but-rainbow");
const BUT_CLEAR = document.querySelector("#but-clear");

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
        (e) => {mode = "colored";}
    );
    BUT_RAINBOW.addEventListener( 
        "click",
        (e) => {mode = "rainbow";}
    );
    BUT_ERASE.addEventListener( 
        "click",
        (e) => {mode = "erased";}
    );   
    BUT_CLEAR.addEventListener(
        "click",
        (e) => {clearColors()}
    );
}

//Creates a square grid with gridNum HxV
function fillGrid(gridNum) {
    CONTAINER.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    for (let row = 0; row < gridNum; row++) {
        for (let col = 0; col < gridNum; col++) {
            CONTAINER.appendChild(CELL.cloneNode(true));      
        }   
    }

    addHoverListener();
}


function addHoverListener() {
    let cells = document.querySelectorAll(".grid-item");

    cells.forEach(cell => {
        cell.addEventListener("mouseenter", (e) => {
            if (e.buttons == 1) { //If clicked
                colorCell(cell);
            }
        });
        cell.addEventListener("touchmove", (e) => {
            console.log("event: " + e);        
            colorCell(cell);
            
        });
    });
}

function colorCell(cell) {
    if (!cell.classList.contains(`${mode}`) || cell.classList.contains(MODES[0])) {
        resetCellColor(cell);
        cell.classList.toggle(`${mode}`);
        console.log("Mode: " + mode);
        if (mode !== MODES[2]) { //If is not erasing mode
            cell.style.backgroundColor = BUT_COLOR.value;
        } else {
            cell.style.removeProperty('background-color');
        }
        
    }
}

function resetCellColor(cell){
    cell.classList = "grid-item";
}

function clearColors() {
    let cells = document.querySelectorAll(".grid-item");
    cells.forEach(cell => {
        cell.style.removeProperty('background-color');
        cell.className = "grid-item";
    });
}

/*
function changeCellSize(newSize) {
    CELL.style.width = `${newSize}px`;
}
*/

