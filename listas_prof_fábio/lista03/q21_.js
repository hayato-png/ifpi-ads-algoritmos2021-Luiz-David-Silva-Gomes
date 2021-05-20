// de f para c (c=( 5 * f - 160) /9)

const prompt=require('prompt-sync')()

// inicio
console.log(' conversor de °F para °C')
const f = Number (prompt(' digite a temperatura em graus Fahrenheit: '))

// processo
const c = (5 * f - 160) /9

// saída 
console.log(` a temperatura em graus Celsius é: ${c}`)