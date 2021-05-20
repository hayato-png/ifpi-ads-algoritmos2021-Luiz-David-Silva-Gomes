// leia uma temperatura em °C, calcule e escreva em °F (t°F=(9 * t°C + 160)/5)

const prompt = require('prompt-sync')()

// inicio
console.log(' conversor de graus °C para graus °F ')
const c = Number(prompt( ' digite a temperatura em graus Celsius: ' ))

// processo
const f =  (9 * c + 160) /5

// saída 
console.log(` a temperatura em graus Fahrenheit é: ${f}°`)