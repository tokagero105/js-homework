function crypto(pass) {
    const array = pass.split('')
    const counter = Math.floor(array.length / 2)
    const firstPart = array.splice(0, counter).reverse()
    const secondPart = array.reverse()
    const result = firstPart.concat(secondPart).join('')
    return result
}

function checkPass(origPass, hashedPass) {
    if (origPass === crypto(hashedPass)) {
        return true
    }
    return false 
}

let pass1 = 'text1'
let hashedPass1 = crypto(pass1)
console.log(checkPass(pass1, hashedPass1))

let pass2 = 'TextText'
let hashedPass2 = 'TestTest'
console.log(checkPass(pass2, hashedPass2))