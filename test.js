// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


// 8. Importamos las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// 2. Esta es la prueba exacta que la plataforma espera encontrar escrita por ti
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser (3.5 * 1.07)
    expect(dollars).toBe(3.745);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


// Importamos las tres funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba 1: Euro a Dólar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745); // 3.5 * 1.07
});

// Prueba 2: Dólar a Yen
test("One dollar should be correctly converted to Yen", function() {
    const yenes = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yenes).toBe(expected);
});

// Prueba 3: Yen a Libra
test("One yen should be correctly converted to Pound", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
});