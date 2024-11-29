

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,  
    "GBP": 0.87   
};

/* de euros a dólares */
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

/* de dólares a yenes */
function fromDollarToYen(dollars) {
    return dollars * (oneEuroIs.JPY / oneEuroIs.USD);
}


/* de yenes a libras */
function fromYenToPound(yen) {
    return yen * (oneEuroIs.GBP / oneEuroIs.JPY);
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
