let container = document.querySelector('#container');
for(let j = 0; j < 16; j++){
    let row = document.createElement('div');
    row.classList.add('row');
    for(let i = 0; i < 16; i++){
        let theDiv = document.createElement('div');
        theDiv.classList.add('module');
        theDiv.style.cssText ="height: 24px; width: 24px;";
        row.appendChild(theDiv);
    }
    container.appendChild(row);
}


let modules = document.querySelectorAll('.module');

modules.forEach(module=>{
    module.addEventListener('mouseover',(e)=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        module.style.backgroundColor = "#" + randomColor;
    });
})
