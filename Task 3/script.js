"use strict"
// Домашка делалась до 05 марта в связи с чем возможно было выбрано далеко не лучшее решение для задачи, но переделывать через reduce уже не хотелось)

function theBiggestWordOf(phrase) { 
    
    let nowItsArray = phrase.split(" ");   
    let biggestWordInArray = "";  
    // Возможно это косяк, но я не придумал почему то решения лучше. Нужна была переменная которая воспринималась бы как стринга. 
    // Пытался по разному но только такой вариант сработал, однако изза этого потом приходится удалять пустое место потому что сплит засчитывает это за элемент.
    // если сможешь подсказать решение в данной ситуации был бы признателен)
    let arrayWithSeveralBiggestWords = biggestWordInArray.split(",");


    for (let i = 0; i < nowItsArray.length; i++) {
        if (nowItsArray[i].length > biggestWordInArray.length) {  
            biggestWordInArray = nowItsArray[i];
        } 
    }
    for (let j = 0; j < nowItsArray.length; j++){
        
        if (nowItsArray[j].length === biggestWordInArray.length){
            arrayWithSeveralBiggestWords.push(nowItsArray[j])
        }
    }
    arrayWithSeveralBiggestWords.shift()
    return alert(`${arrayWithSeveralBiggestWords}`);
}
let requestPhraseLong = prompt('Please provide any phrase you would like to use to find the longest word inside')
theBiggestWordOf(requestPhraseLong)

function theSmallestWordOf(phrase){
    let nowItsArray = phrase.split(" ");   
    let smallestWordInArray = "WordThatShouldn'tBeSmallerThenAnyOtherWordProvidedInsideOfThisString";  // еще одно гениальное решение :)))) Думаю ошибка просто делать это через 2 for
    let arrayWithSeveralSmallestWords = smallestWordInArray.split(",");
    for (let i = 1; i < nowItsArray.length; i++) {
        if (nowItsArray[i].length < smallestWordInArray.length) {  
            smallestWordInArray = nowItsArray[i];
        } 
        console.log(smallestWordInArray)
    }
    for (let j = 1; j < nowItsArray.length; j++){
        
        if (nowItsArray[j].length === smallestWordInArray.length){
            arrayWithSeveralSmallestWords.push(nowItsArray[j])
        }
    }
    arrayWithSeveralSmallestWords.shift()
    return alert(`${arrayWithSeveralSmallestWords}`);
}
let requestPhraseSmall = prompt('Please provide any phrase you would like to use to find the smallest word inside')
theSmallestWordOf(requestPhraseSmall)


