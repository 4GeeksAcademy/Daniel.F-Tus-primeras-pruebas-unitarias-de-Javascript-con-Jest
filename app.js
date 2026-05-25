/*//console.log("Hello World")


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
//module.exports = { sum };




// 8. Planning Our Functionalities
// Contenedor con las tasas de conversión
const oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87,  // Libra esterlina
}

// 1. De Euro a Dólar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}

// 2. De Dólar a Yen
const fromDollarToYen = function(valueInDollar) {
    // Convertimos a Euros primero, luego a Yenes
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
}

// 3. De Yen a Libra
const fromYenToPound = function(valueInYen) {
    // Convertimos a Euros primero, luego a Libras
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    return valueInPound;
}

// IMPORTANTE: Exportar las tres funciones exactamente con estos nombres
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };*/


// Tasas de conversión base (1 Euro)
const oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87,  // Libra esterlina
}

// Euros a Dólares
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}

// Dólares a Yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
}

// Yenes a Libras
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    return valueInPound;
}

// Exportación requerida para las pruebas
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };