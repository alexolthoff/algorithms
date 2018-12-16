let mean = (array) => {
   let sum = array.reduce( (a,b) => a+b)
   return sum / array.length
}

let median = (array) => {
    array = array.sort((a,b) => a-b)
    if (array.length % 2 === 0) {
        let first = array[array.length /2]
        let second = array[array.length/2 -1]
        return (first+second)/2
        }  else {
            return array[Math.floor((array.length -1)/2)]
        }
}

let mode = (array) => {
    let modeHash = {}
    array.forEach( (num) =>{
        if (modeHash[`${num}`]){
            modeHash[`${num}`] ++
        } else {
            modeHash[`${num}`] = 1
        }
    })
    console.log(modeHash)
    let maxFrequency =  0
    let modes = []
    for(let num in modeHash){
        if (modeHash[num] > maxFrequency) {
            modes = [num]
            maxFrequency = modeHash[num]
        } else if (modeHash[num] === maxFrequency){
            modes.push(num)
        }
    }
    if (modes.length === Object.keys(modeHash).length) {
        modes = []
    }
    return modes
    
}

let meanMedianMode = (array) => {
    return {
        mean: mean(array),
        median: median(array),
        mode: mode(array)
    }
}

console.log(meanMedianMode([1,3,6,7,9,9]))