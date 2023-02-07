const body = document.querySelector('body')
const gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'container');
body.appendChild(gridContainer)

//create event listener for set grid size
const inputSize = document.querySelector("#gridSize")
let gridSize = inputSize.value
inputSize.addEventListener('change', (event) => {
    gridSize = inputSize.value
    setGridSize()

})

//set starter gridSize and function to change it from the input range
const gridElement = `<div class='gridElement'></div>`
setGridSize()
function setGridSize(){
    gridContainer.innerHTML = '';
    for(i=0;i<gridSize;i++){
        gridContainer.innerHTML += gridElement
    }
}
