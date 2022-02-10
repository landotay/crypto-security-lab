const alphabet = "abcdefghijklmnopqrstuvwxyz ".split('')
const cipherKey = "badcfehgjilknmporqtsvuxwzy ".split('')
let solution = []
let encoded = []


const decipher = (str) => {
    for(let i = 0; i < str.length; i++) {
        solution.push(alphabet[cipherKey.indexOf(str[i])])
    }
    return solution.join('')
}

const encode = (str) => {
    for(let i = 0; i < str.length; i++) {
        encoded.push(cipherKey[alphabet.indexOf(str[i])])
    }
    return encoded.join('')
}

console.log(decipher('j kpuf dpcjmh'))
console.log(encode('i love coding'))