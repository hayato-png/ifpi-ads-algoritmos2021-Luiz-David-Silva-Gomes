// leia o salário de um zé e escreva seu novo salário com aumento de 25%

const prompt = require('prompt-sync')()

//inicio 
console.log(' Veja seu salário com aumento de 25%')
const salario = Number (prompt(' Digite aqui o seu salário: ' ))

//processo 
const aumento = salario * 0.25 
const total = salario + aumento 

// saída 
console.log(` o seu salário com aumento de 25% é: ${total.toFixed(2)}` )