const testDates = [
    '02-02-2020',    // Валидная дата
    '15/08/2021',    // Валидная дата
    '29-02-2020',    // Валидная дата
    '31-04-2023',    // Невалидная дата
    '30/02/2023',    // Невалидная дата
    '31.11.2022',    // Невалидная дата
    '00/12/2022',    // Невалидная дата
    '01-13-2022',    // Невалидная дата
    'test',          // Строка
    '31/12/2023',    // Валидная дата
    '28-02-2021',    // Валидная дата
    '2020-02-29'    // Невалидная дата
];

// Чуть не умер пока писал эти регулярки
const datePaternSlash = /(0[1-9]|[12][0-9]|3[01])\/(0[13578]|1[02])\/(\d{4})|(0[1-9]|[12][0-9]|30)\/(0[2469]|11)\/(\d{4})/
const datePaternDash = /(0[1-9]|[12][0-9]|3[01])-(0[13578]|1[02])-(\d{4})|(0[1-9]|[12][0-9]|30)-(0[2469]|11)-(\d{4})/

// Проверка является ли строка датой
function isValidDate(date) {
    switch (true) {
        case (datePaternDash.test(date)):
            return [date, '-']
        case (datePaternSlash.test(date)):
            return [date, '/']
        default:
            return false
    }
}

// Проверка года на високосность
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Отдельная проверка на колисество дней в феврале
function februaryCheck(splittedDate) {
    let [day, , year] = splittedDate
    switch (true) {
        case (isLeapYear(Number(year)) && (Number(day) <= 29)):
            return true
        case (!isLeapYear(Number(year)) && (Number(day) <= 28)):
            return true
        default:
            return false
    }
}

function validDatesArray(data) {
    const resultArr = []

    for (date of data) {

        let validRes = isValidDate(date)
        if (validRes == false) {
            continue
        }

        let [validDate, separator] = validRes
        let splittedDate = validDate.split(separator)

        if (splittedDate[1] === '02') {
            if (!februaryCheck(splittedDate)) {
                continue
            }
        }

        resultArr.push(splittedDate.join('/'))
    }

    return resultArr
}

console.log(validDatesArray(testDates))