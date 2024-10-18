function countCharacters(str) {
    const charCount = {}

    for (let char of str) {
        if(charCount[char]) {
            charCount[char]++
        } else {
            charCount[char] = 1
        }
    }

    return charCount
}

console.log(countCharacters('abbas')) // { a: 2, b: 2, s: 1 }
