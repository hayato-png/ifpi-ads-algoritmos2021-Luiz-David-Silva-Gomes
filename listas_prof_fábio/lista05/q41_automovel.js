
const prompt = require('prompt-sync')()

//inicio
const preçoInicial = Number (prompt(' escreva o custo de fábrica do automovel: '))

// processo
const PreçoFinal = preçoInicial + (preçoInicial * 0.28) + (preçoInicial * 0.45)

// saída 
console.log(' preço final:', PreçoFinal.toFixed(2))
