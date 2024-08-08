function filterArray(array, func) {
    let newArray = []

    for (let element of array) {
        if (func(element)) {
            newArray.push(element)
        }
    }

    return newArray
}

const testArray = [5, 6, 7, 8, 3, 1, 3, 100]

const result = filterArray(testArray, (num) => num > 5)
console.log(result)