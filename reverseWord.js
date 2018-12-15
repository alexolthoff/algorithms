const reverseWord = (string) => {
    let wordArray = []
    const firstWordArray = string.toLowerCase().split(' ')
    firstWordArray.forEach(word => {
        let reversedWord = ''
        for (let i = word.length - 1; i >= 0; i--){
            reversedWord += word[i]
        }
        wordArray.push(reversedWord)
    })
        // console.log(wordArray)
        return wordArray.join(' ')
    }
console.log(reverseWord('Scott is here'))


