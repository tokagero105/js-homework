function serializeQueryParams(queryObject) {
    let finalString = ''
    for (key in queryObject) {
        finalString += `${key}=${queryObject[key]}&`
    }
    finalString = finalString.slice(0, -1)

    return finalString
}

let queryObject = {
    search: 'Vasya',
    take: '5'
}

console.log(serializeQueryParams(queryObject))