let twoSum = (numArray,sum) => {
    const pairs = []
    const hashTable = []
    for (let i = 0; i<numArray.length;i++){
        let currentElement = numArray[i]
        let counterPart = sum - currentElement
        if (hashTable.indexOf(counterPart) !== -1){
            pairs.push([currentElement,counterPart])
        } 
        hashTable.push(currentElement)
    }
    return pairs
} 