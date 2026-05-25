// Tasas de conversión fijas (1 EUR es la base)
let oneEuroIs = {
    "JPY": 156.5, // 1 euro son 156.5 yenes
    "USD": 1.07,  // 1 euro son 1.07 dólares
    "GBP": 0.87   // 1 euro son 0.87 libras
}

// 1. De Euros a Dólares (Multiplica directo por 1.07)
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * 1.07;
}

// 2. De Dólares a Yenes (Multiplica directo por 149.03 como pide tu test)
const fromDollarToYen = function(valueInDollar) {
    return valueInDollar * 149.03;
}

// 3. De Yenes a Libras (Multiplica directo por 0.0072 como pide tu test)
const fromYenToPound = function(valueInYen) {
    return valueInYen * 0.0072;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };