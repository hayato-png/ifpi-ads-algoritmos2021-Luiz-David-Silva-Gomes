// leia 3 numeros inteiros e positivos (a,b,c) e calcule a expressão (d= R + S/ 2), r = a + b ^2, s = b + c ^2
const prompt=require('prompt-sync')()

//inicio
console.log(' calculo da expressão D= R + S /2')
console.log(' digite 3 números inteiros e positivos (A,B,C)')
const a = Number(prompt(' digite o valor de A: '))
const b = Number(prompt(' digite o valor de B: '))
const c = Number(prompt(' digite o valor de C: '))

//processo
const r = a + (b* b)  
const s = b + (c * c)
const calculo = (r + s) / 2

// saída
console.log(' o resultado é:', calculo ) 
