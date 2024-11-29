
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});


test("Convertir 1 euro a dólares (1 euro = 1.07 dólares)", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07, 2);
});

// Prueba de dólares a yenes
test("Convertir 1 dólar a yenes", () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});



// Prueba de yenes a libras
test("Convertir 100 yenes a libras", () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.556, 3);
});

