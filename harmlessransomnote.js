let harmlessRansomNote = (note, magText) =>{
    const magTextObject = {}
    const noteArray = note.split(' ')
    const magTextArray = magText.split(' ')
    magTextArray.forEach(element => {
        if (!magTextObject[element]){
            magTextObject[element] = 1
        }
        else{
            magTextObject[element]++
        }
    })
    let noteIsPossible = true
    noteArray.forEach(element => {
        if(!magTextObject[element] || magTextObject[element] <= 0){
            noteIsPossible = false
        } else if (magTextObject[element]) {
            magTextObject[element]--
        }
    })
    return noteIsPossible
}
console.log(harmlessRansomNote('I like potatoes','I am going to france. I like france. It has great potatoes'))