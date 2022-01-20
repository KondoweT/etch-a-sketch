let container = document.querySelector('#container');
const resetBtn = document.querySelector('#resetBtn');
let counter = 25;
let root = document.documentElement;

function reset(){
    gridRemover();

    let newCounterNum = Number(prompt('Enter any number from 1 and 100', "25"));
    makeGrid(newCounterNum);

    mouseHover();
}

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

function mouseHover(){
    let modules = document.querySelectorAll('.module');
    modules.forEach(module=>{
        module.addEventListener('mouseover',(e)=>{
            const randomColor = Math.floor(Math.random()*16777216).toString(16);
            module.style.backgroundColor = "#" + randomColor;
        });
    });
}

function gridRemover(){
    let rowRemoved = document.querySelectorAll(".row");
    rowRemoved.forEach((row)=>{
        container.removeChild(row);
    });
}

makeGrid(counter);

mouseHover();


resetBtn.addEventListener('click', reset);

