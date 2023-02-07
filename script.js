const body = document.querySelector('body')
const gridContainer = document.createElement("div");
gridContainer.setAttribute('class', 'container');
body.appendChild(gridContainer)

//create event listener for set grid size
const inputSize = document.querySelector("#gridSize")
let gridSize = inputSize.value
inputSize.addEventListener('change', (event) => {
    gridSize = inputSize.value
})

