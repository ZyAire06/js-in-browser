function getSocSecTax(grosspay){
    let taxRate = 0.062
    let soicalTax = grosspay*taxRate
    return soicalTax;

}
console.log(`this is my social tax $ ${getSocSecTax(500)}`);

function getMedicareTax (grosspay){
    taxRate = 0.0145;
    let medTax = grosspay * taxRate;
    return medTax;

}

console.log(`this is my medicare tax $ ${getMedicareTax(500)}`);

function getFederalTax(grosspay, withholding){
    let fwithholding; 
    if (withholding = 0){
        fwithholding = .23;
    }else if( withholding = 1){
        fwithholding = .21;
    }else if (withholding = 2 ){
       fwithholding = .1905;
    } else if (withholding = 3){
        fwithholding = .185;
    }else if (withholding <= 4){
        fwithholding =.18-(2*.005)
    }
    let fedTax = fwithholding*grosspay;
    return fedTax;
}
console.log(`this is my federal taxes $ ${getFederalTax(500, 0)}`);