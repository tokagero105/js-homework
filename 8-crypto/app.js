function encrypt(pass) {
    const array = pass.split('')
    const counter = Math.floor(array.length / 2)
    const arrayPart = array.splice(counter)
    const result = arrayPart.concat(array).join('')
    return result
}

function decrypt(pass) {
    const array = pass.split('')
    const counter = Math.ceil(array.length / 2)
    const arrayPart = array.splice(counter)
    const result = arrayPart.concat(array).join('')
    return result
}

function checkPass(origPass, hashedPass) {
    if (origPass === decrypt(hashedPass)) {
        return true
    }
    return false 
}

let pass1 = 'text1'
let hashedPass1 = encrypt(pass1)
console.log(checkPass(pass1, hashedPass1))

let pass2 = 'TextText'
let hashedPass2 = 'TestTest'
console.log(checkPass(pass2, hashedPass2))