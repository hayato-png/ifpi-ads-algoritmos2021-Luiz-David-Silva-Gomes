// leia um número inteiro (3 digitos), calcule e escreva a diferença entre o número e seu inverso

const prompt=require('prompt-sync')()

// inicio
console.log(' digite um número de 3 digitos e veja a diferença entre esse número e seu inverso')
const n1 = (prompt(' digite o número: '))

// processo
const inverso = n1.split('').reverse().join('')
const diferença = n1 - inverso

// saída 
console.log(` o resultado é: ${n1} - ${inverso} = ${diferença}` )