const arr = [1, 40, -5, 10, 0]

// sortOrder - это параметр для указания порядка сортировки, где true - это по возрастанию, а false - это по убыванию
function sort(array, sortOrder = true) {
    let iteration_length = array.length

    while (iteration_length != 0) {
        for (let i = 1; i < iteration_length; i++) {
            if ((array[i] < array[i - 1]) == sortOrder) {
                let temp = array[i - 1]
                array[i - 1] = array[i]
                array[i] = temp
            }
        }

        iteration_length--
    }

    return array
}

console.log(arr)
console.log(sort(arr, true))