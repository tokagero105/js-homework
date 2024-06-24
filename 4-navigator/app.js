// Адресс назначения
let addressLat = 7;
let addressLong = 8;
// Текущее положение
let positionLat = 0;
let positionLong = 0;

let result = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2)
console.log(result)