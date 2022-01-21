let container = document.querySelector('#container');
const resetBtn = document.querySelector('#resetBtn');
let counter = 25;
let root = document.documentElement;

// clears the grid and makes a new grid
function reset(){
    gridRemover();

    let newCounterNum = Number(prompt('Enter any number from 1 and 100', "25"));
    if(newCounterNum > 100 || newCounterNum < 1){
        makeGrid(25)
    }else if(newCounterNum === 0){
        makeGrid(25);    
    }else if(newCounterNum){
        makeGrid(newCounterNum);
    }

    mouseHoverRainbow();
}

// makes the grid
function makeGrid(num){
    let dimensions = 490/num;
    let properDimen = dimensions.toFixed(1);
    root.style.setProperty('--module-dimensions', properDimen+'px');
    for(let j = 1; j <= num; j++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let i = 1; i <= num; i++){
            let theDiv = document.createElement('div');
            theDiv.classList.add('module');
            row.appendChild(theDiv);
        }
        container.appendChild(row);
    }
}

// changes the color of module of grid to a random color
function mouseHoverRainbow(){
    let modules = document.querySelectorAll('.module');
    modules.forEach(module=>{
        module.addEventListener('mouseover',(e)=>{
            const randomColor = Math.floor(Math.random()*16777216).toString(16);
            module.style.backgroundColor = "#" + randomColor;
        });
    });
}

// removes last used grid in preparation for new grid to be created
function gridRemover(){
    let rowRemoved = document.querySelectorAll(".row");
    rowRemoved.forEach((row)=>{
        container.removeChild(row);
    });
}

// changes the color of the module of grid to black
function mouseHoverBlack(){
    let modules = document.querySelectorAll('.module');
    modules.forEach(module=>{
        module.addEventListener('mouseover',(e)=>{
            module.style.backgroundColor = "#000000";
        });
    });
}

makeGrid(counter);

mouseHoverRainbow();

resetBtn.addEventListener('click', reset);

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener('click', mouseHoverRainbow);

const monoChrome = document.querySelector('#monochrome');
monoChrome.addEventListener('click', mouseHoverBlack);