const isPalindrome = (string) => {
    const stringArray = string.toLowerCase().split('')
    const validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const letterArray = []
    stringArray.forEach(element => {
        if(validLetters.indexOf(element) > -1) {
            letterArray.push(element)
        }
    });
     
    return letterArray.reverse().join('') === letterArray.join('')
}
console.log(isPalindrome("Hannah"))