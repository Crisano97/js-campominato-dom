
const playButton = document.getElementById('play-btn');

const mainContainer = document.getElementById('main-container');

const difficultySelect = document.getElementById('game-level');

const currentBlackList = [];

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
        console.log(newBox.innerHTML)
        console.log(currentBlackList.includes(parseInt(newBox.innerHTML)));

        console.log(parseInt(newBox.innerHTML))
        console.log(currentBlackList);

        if (currentBlackList.includes(newBox.innerHTML)){
            addEventListenerAdd(newBox, 'red');
            console.log('Boom')

        } else {
            addEventListenerAdd(newBox, 'azure');

        }


        boxContainer.append(newBox);

    }
}


function addEventListenerAdd (htmlElement, classToToggle) {
        htmlElement.addEventListener('click', function() {
        htmlElement.classList.add(classToToggle);
        console.log('hai cliccato' + " " + htmlElement.innerHTML);
        
    });
}


//uso un ciclo for per generare 16 numeri randomici;
for (let i = 0; i < 16; i++){
    let uniqueRandomNumbers = generateUniqueRandomNumber (currentBlackList, 1, 100);
    currentBlackList.push(uniqueRandomNumbers);

}
console.log(currentBlackList);


//creo una funzione che genera un numero randomico e verifica se il numero è presente o meno nell'array;
function generateUniqueRandomNumber (blackList, minNum, maxNum) {
    let newRandomNumber;
    let isNumberValid = false;

    while (isNumberValid === false){
        newRandomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum)

        if (!blackList.includes(newRandomNumber)){
            isNumberValid = true;
        }
    }

    return newRandomNumber;
}