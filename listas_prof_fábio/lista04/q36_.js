// leia a idade de uma pessoa em anos, meses e dias e escreva apenas em dias

const prompt = require('prompt-sync')()

// inicio 
console.log(' digite a idade em anos, meses e dias e veja o resultado em dias ')
const anos = Number(prompt(' digite os anos: '))
const meses = Number(prompt(' digite os meses: '))
const dias = Number(prompt(' digite os dias: '))

// processo
const anosD = anos * 365
const meses2 = meses * 31 

const tempo = Math.trunc (anosD + meses2 + dias)

// saída 
console.log(` a idade em dias é: ${tempo}`)