//leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real R($) 

const prompt = require('prompt-sync')()

//inicio 
const valor_do_dolar = 5.25
const dolar = (prompt(' valor em dólar:' ))

//processo
const real = dolar * valor_do_dolar 

// saída 
console.log(`O valor em reais é ${real.toFixed(0)} R$`)