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
//variable for event listener for mouse hover => set color
let gridPixels;

//set starter gridSize and function to change it from the input range
const gridElement = `<div class='gridElement'></div>`
//start screen with default value
setGridSize()

function setGridSize(){
    changeGridLayout();
    addGridElement();
    }

function changeGridLayout(){
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.innerHTML = '';
}
function addGridElement(){
    for(i=0;i<gridSize**2;i++){
        gridContainer.innerHTML += gridElement
        addEventListenerToElements();

}}

function addEventListenerToElements(){
    gridPixels = document.querySelectorAll(".gridElement");
    gridPixels.forEach((item) => {
        item.addEventListener('mouseover', (event) => {
            item.style.backgroundColor = 'black'
        })
    } )
}