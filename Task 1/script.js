function countVowels(phrase) {
    
    const vowels = ["a", "o", "e", "i", "u", "y"]
    let vowelsAmount = 0

    for (let quantity of phrase) {
        if (vowels.includes(quantity)) {
            vowelsAmount++
        }
    }
    return alert(`There are ${vowelsAmount} vowels in this phrase!`)
}
let phrase = prompt(`Please provide any phrase to count vowels inside`)
countVowels(phrase)