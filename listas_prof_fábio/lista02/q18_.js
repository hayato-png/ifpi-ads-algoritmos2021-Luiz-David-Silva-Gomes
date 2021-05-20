// leia o valor do raio de uma circunferência, calcule e escreva seu comprimento (c = 2 * pi * r)

const prompt = require('prompt-sync')()

// inicio
console.log(' digite o valor do raio e veja o comprimento dessa circunfêrencia')
const raio = Number (prompt(' digite o valor do raio: '))

// processo
const pi = 3.14;
const comprimento = (2 * pi * raio )

// saída 
console.log(' o comprimento dessa circunfêrencia é:', comprimento )

