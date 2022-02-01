zad.1 Funkcja solution1 zwraca index min elementu (Wartość absolutna)
const arr = [6, 2, 10, 4, 2, -1, 3, 5]
solution1(arr) // 5

function solution1(arr) {
    let min = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {

        if (Math.abs(arr[i]) < Math.abs(min)) {
            min = arr[i];
            minIndex = i;
        }
    }
    console.log(minIndex)
}

const arr = [6, 2, 10, 4, 2, -1, 3, 5]

solution1(arr);



zad.2. Funkcja solution2 zwraca ilosc dodatnich, ujemnych oraz zer

function solution2(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            positive = positive + 1;
        }
        if (arr[i] < 0) {
            negative = negative + 1;
        }
        if (arr[i] === 0) {
            zero = zero + 1;
        } 
    }
    return [positive, negative, zero];
}

const arr = [6, 2, 10, 4, 2, -1, 3, 5]
const result = solution2(arr) // [7, 1, 0]
console.log(result);



zad.3. Funkcja solution3 zwraca elementy ktore są wieksze niz średnia arytmetyczna.


function solution3(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    const average = sum / arr.length;
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
}

const arr = [6, 2, 10, 4, 2, -1, 3, 5]

const result = solution3(arr)     // [6, 10, 4, 5] w tym przypadku S.A jest 3.875
console.log(result);


zad.4.  Funkcja solution4 przyjmuje text. Zwraca najdluzsze zdanie

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
//solution4(text) // 'Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

function solution4(text) {

    let newText = text.split(".");
    let theLongestSentence = newText[0];

    for (let i = 1; i < newText.length; i++) {
        
        if (theLongestSentence.length < newText[i].length) {

            theLongestSentence = newText[i];
        } 
    }
    return theLongestSentence;
}

const result = solution4(text)
console.log(result)

zad.5.  Funkcja solution5 przyjmuje text, zwraca najdluzsze slowo 

function solution5 (text) {
    let splitText = text.split(' ');
    console.log(splitText);

    theLongestWord = splitText[0];

    for (let i = 1; i < splitText.length; i++) {

         if (theLongestWord.length < splitText[i].length) {

             theLongestWord = splitText[i];
        }
    }
    return theLongestWord;
}

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
solution5(text) // typesetting 
console.log(theLongestWord)