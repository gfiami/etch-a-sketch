const body = document.querySelector('body')
const labelGridSize = document.querySelector("#labelGridSize")
const gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'container');
body.appendChild(gridContainer)

//create event listener for set grid size
const inputSize = document.querySelector("#gridSize")
let gridSize = inputSize.value
inputSize.addEventListener('change', (event) => {
    gridSize = inputSize.value
    labelGridSize.innerHTML = `${gridSize}x${gridSize}`
    setGridSize()

})

//set starter gridSize and function to change it from the input range
const gridElement = `<div class='gridElement'>A</div>`
setGridSize()
function setGridSize(){
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.innerHTML = '';
    for(i=0;i<gridSize**2;i++){
        gridContainer.innerHTML += gridElement
    }
}
