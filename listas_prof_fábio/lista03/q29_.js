// leia um numero inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde

const input=require('prompt-sync')()

//inicio
console.log(' digite o número de meses e veja o resultado em anos e meses ')
const t =  Number(input(' digite o número: '))

//processo
const anos = t / 12
const meses = t % 12

// saída
console.log(` resultado: ${anos} ano(s) e ${meses} mese(s) `)
