const gridSizeContainer = document.querySelector('.gridSizeContainer')
const labelGridSize = document.querySelector("#labelGridSize")
const gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'container');
gridSizeContainer.after(gridContainer)

//create event listener for set grid size
const inputSize = document.querySelector("#gridSize")
inputSize.addEventListener('change', (event) =>{
    gridSize = inputSize.value
    labelGridSize.innerHTML = `${gridSize}x${gridSize}`
})
const applyButton = document.querySelector("#apply")
let gridSize = inputSize.value
applyButton.addEventListener('click', (event) => {
    setGridSize()
})
//variable for event listener for mouse hover => set color
let gridPixels;

//set starter gridSize and function to change it from the input range
//start screen with default value
setGridSize()

function setGridSize(){
    changeGridLayout();
    addGridElement();
    }

function changeGridLayout(){
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

}
function addGridElement(){
    for(i=0;i<gridSize*gridSize;i++){
        const gridElement = document.createElement('div')
        gridElement.classList.add('gridElement', 'g9')
        gridContainer.appendChild(gridElement)
}
addEventListenerToElements();

}

function addEventListenerToElements(){
    gridPixels = document.querySelectorAll(".gridElement");
    gridPixels.forEach((item) => {
        item.addEventListener('mouseover', (event) => {
            item.style.backgroundColor = changeColor(item)
        })
    } )
}
let currentColor;
let checkInput = 'default'

const inputColor = document.querySelector("#color")
inputColor.addEventListener('change', (event) => {
    currentColor = inputColor.value
    checkInput = 'change'
})

const colorGray = document.querySelector("#colorGray")
colorGray.addEventListener('click', (event) =>{
    checkInput = 'gray'
})
const colorRandom = document.querySelector("#colorRandom")
colorRandom.addEventListener('click', (event) =>{
    checkInput = 'random'
})

const eraser = document.querySelector("#eraser")
eraser.addEventListener('click', (event) => {
    checkInput = 'eraser'
})

function changeColor(pixel){
    switch(checkInput){
        case 'default':
            currentColor = 'black'
            break;
        case 'change':
            //color already defined
            break;
        case 'gray':
            currentColor = setGrayColor(pixel)
            break;
        case 'random':
            currentColor = randomColor()
            break;
        case 'eraser':
            currentColor = 'white'
            redefineClassEraser(pixel)
    }
    return currentColor
}
let gray;
function setGrayColor(pixel){
    if(pixel.classList.contains('g9')){
        gray = 90
        pixel.classList.replace('g9','g8')
    } else if(pixel.classList.contains('g8')){
        gray = 80
        pixel.classList.replace('g8','g7')
    } else if(pixel.classList.contains('g7')){
        gray = 70
        pixel.classList.replace('g7','g6')
    } else if(pixel.classList.contains('g6')){
        gray = 60
        pixel.classList.replace('g6','g5')
    } else if(pixel.classList.contains('g5')){
        gray = 50
        pixel.classList.replace('g5','g4')
    } else if(pixel.classList.contains('g4')){
        gray = 40
        pixel.classList.replace('g4','g3')
    } else if(pixel.classList.contains('g3')){
        gray = 30
        pixel.classList.replace('g3','g2')
    } else if(pixel.classList.contains('g2')){
        gray = 20
        pixel.classList.replace('g2','g1')
    } else if(pixel.classList.contains('g1')){
        gray = 10
        pixel.classList.replace('g1','g0')
    } else {
        gray = 0
    }

    pixel.style.backgroundColor = `rgb(${gray}%,${gray}%,${gray}%)`
}

function randomColor(){
    let R = Math. random() * 255
    let G = Math. random() * 255
    let B = Math. random() * 255
    let randomRGB = `rgb(${R},${G},${B})`
    return randomRGB
}

//eraser reset class of grayscale
function redefineClassEraser(pixel){
    if(!pixel.classList.contains('g9')){
        pixel.classList.remove(pixel.classList[1])
        pixel.classList.add('g9')
    }
}


