//leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real R($) 

const prompt = require('prompt-sync')()

//inicio 
console.log(' Conversor de real(R$) para dolár($)')
console.log(' (ps : coloque ponto ao invés da vírgula)')
const valor_do_dolar = Number(prompt(' Digite a cotação do dólar($) hoje: '))
const dolar = Number (prompt(' Digite o valor em dólar($): ' ))

//processo
const real = dolar * valor_do_dolar 

// saída 
console.log(` O valor em reais é: ${real.toFixed(2)} R$`)