
const playButton = document.getElementById('play-btn');

const mainContainer = document.getElementById('main-container');

const difficultySelect = document.getElementById('game-level');

const currentBlackList = [];

let blockGame;

playButton.addEventListener('click', function () {

    blockGame = false;

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


    for (let i = 0; i < 16; i++) {

        if (boxNumber === 100) {
            let uniqueRandomNumbers = generateUniqueRandomNumber(currentBlackList, 1, 100);
            currentBlackList.push(uniqueRandomNumbers);
        } else if (boxNumber === 81) {
            let uniqueRandomNumbers = generateUniqueRandomNumber(currentBlackList, 1, 81);
            currentBlackList.push(uniqueRandomNumbers);
        } else if (boxNumber === 49) {
            let uniqueRandomNumbers = generateUniqueRandomNumber(currentBlackList, 1, 49);
            currentBlackList.push(uniqueRandomNumbers);
        }
    
    }
    console.log(currentBlackList);

    numberOfBoxGenerator(boxNumber, boxStyle);

    

});

function createNewBox(style) {
    const currentBox = document.createElement('div');
    currentBox.classList.add(style);
    return currentBox;
}


function numberOfBoxGenerator(count, boxStyle) {

    const boxContainer = document.querySelector('.box-container');
    for (let i = 1; i <= count; i++) {
        const newBox = createNewBox(boxStyle);

        newBox.innerHTML = i;
        
        
        // console.log(newBox.innerHTML)
        //  console.log(currentBlackList.includes(parseInt(newBox.innerHTML)));

        //  console.log(parseInt(newBox.innerHTML))


        addEventListenerAdd(newBox);

        boxContainer.append(newBox);

    }
}


function addEventListenerAdd(htmlElement) {


    htmlElement.addEventListener('click', function () {


        const number = parseInt(htmlElement.innerHTML);


        if (blockGame === false) {
            if (currentBlackList.includes(number)) {
                htmlElement.classList.add('red');
                console.log('Boom')
                alert('BOOM!');           
                blockGame = true;
                
            } else {
                htmlElement.classList.add('azure');

                
            }
            // let counter = document.querySelectorAll('.azure').length;
            // console.log(counter); 
            console.log('hai cliccato' + " " + htmlElement.innerHTML);

            let counter = document.querySelectorAll("." + 'azure').length;
            console.log(counter)

            let userScore = document.getElementById('punteggio');
            userScore.innerHTML = "SCORE:" + counter;
            console.log(userScore.innerHTML)


            if (counter === 84) {
                alert('Hai vinto, ricarica la pagina per iniziare una nuova partita');
                blockGame = true;
            }
        } else {
            alert("Hai perso, ricarica la pagina e inizia una nuova partita");
        }
        
    });
}


//uso un ciclo for per generare 16 numeri randomici;


//creo una funzione che genera un numero randomico e verifica se il numero è presente o meno nell'array;
function generateUniqueRandomNumber(blackList, minNum, maxNum) {
    let newRandomNumber;
    let isNumberValid = false;

    while (isNumberValid === false) {
        newRandomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum)

        if (!blackList.includes(newRandomNumber)) {
            isNumberValid = true;
        }
    }

    return newRandomNumber;
}

