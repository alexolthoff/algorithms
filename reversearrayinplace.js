let reverseArray = (array) => {
    for (let i = 0; i < array.length /2; i++) {
        let tempVar = array[i]
        array[i] = array[array.length-1 -i]
        array[array.length -1 -i] = tempVar
    }
    return array
}
console.log(reverseArray([1,2,3]))