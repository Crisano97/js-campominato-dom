
const playButton = document.getElementById('play-btn');

const mainContainer = document.getElementById('main-container');

const difficultySelect = document.getElementById('game-level');

playButton.addEventListener ('click', function(){
      
    mainContainer.innerHTML = "";
    
    let newElementDiv = createNewBox('box-container', 'd-flex');

    mainContainer.append(newElementDiv);

    let selectValue = difficultySelect.value;

    let boxNumber = 100;
    let boxStyle = 'box-l';

    if (selectValue == 2) {
        boxNumber = 81;
        boxStyle = 'box-m';

    } else if (selectValue == 3) {
        boxNumber = 49;
        boxStyle = 'box-s';
    }

    numberOfBoxGenerator(boxNumber,boxStyle);

});

function createNewBox(style){
    const currentBox = document.createElement('div');
    currentBox.classList.add(style);
    return currentBox;
}


function numberOfBoxGenerator (count, boxStyle){

    const boxContainer = document.querySelector('.box-container');
    for (let i = 1; i <= count; i++) {
        const newBox = createNewBox(boxStyle);
        newBox.innerHTML = i;

        addEventListenerAdd(newBox, 'azure');

        boxContainer.append(newBox);

    }
}


function addEventListenerAdd (htmlElement, classToToggle) {
        htmlElement.addEventListener('click', function() {
        htmlElement.classList.add(classToToggle);
        console.log('hai cliccato' + "" + htmlElement.innerHTML)
        
    });
}

const generatedUniqueRandomNumbers = [];

for (let i = 1; i <= 16; i++){
    let randomNumber = Math.floor(Math.random() * (100 -1) + 1);
    generatedUniqueRandomNumbers.push(randomNumber);
}

console.log(generatedUniqueRandomNumbers);
