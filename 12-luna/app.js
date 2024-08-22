var card = '5580 4733 7202 4733'

console.log(card)

function lunaCheck(card) {
    const regex = /[-,' ']/g
    let cleanCard = card.replace(regex,'')
    
    if ((cleanCard.length != 16) || (isNaN(cleanCard))) {
        return false
    }

    const numArray = cleanCard.split('').map((num, index) => {
        if (index % 2 === 0) {
            let res  = num * 2
            if (res > 9) {
                return res - 9
            }
            return res
        }
        return Number(num)
    })
    
    const numAmount = numArray.reduce((acc, num) => {
        return acc += num
    }, 0)

    if (numAmount % 10 != 0) {
        return false
    }
    return true
}

console.log(lunaCheck(card))