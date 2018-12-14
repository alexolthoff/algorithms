const reverseWord = (string) => {
    let wordArray = []
    let firstWordArray = string.toLowerCase().split(' ')
    firstWordArrayFiltered = firstWordArray.filter( (word) => word !== ' ' )
    firstWordArrayFiltered.forEach( (word) => {
        if (word !== ' ') {
        const localWordArray = word.split('')
        let localReversedArray = []
        let counter = localWordArray.length - 1
        while (counter > -1) {
            localReversedArray.push(localWordArray[counter]) 
            counter--
        }
        wordArray.push(localReversedArray.join(''))
        }
    })
        // console.log(wordArray)
        return wordArray.join(' ')
    }
console.log(reverseWord('Scott is here'))


