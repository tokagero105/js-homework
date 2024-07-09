const arr = [1, 40, -5, 10, 0]

// sortOrder - это параметр для указания порядка сортировки, где true - это по возрастанию, а false - это по убыванию
function sort(array, sortOrder = true) {
    const newArray = array.slice()
    let iteration_length = newArray.length

    while (iteration_length != 0) {
        for (let i = 1; i < iteration_length; i++) {
            if ((newArray[i] < newArray[i - 1]) == sortOrder) {
                let temp = newArray[i - 1]
                newArray[i - 1] = newArray[i]
                newArray[i] = temp
            }
        }

        iteration_length--
    }

    return newArray
}

console.log(arr)
console.log(sort(arr, true))
console.log(arr)