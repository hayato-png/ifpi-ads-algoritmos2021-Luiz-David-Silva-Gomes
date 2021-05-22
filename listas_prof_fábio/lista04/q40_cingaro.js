/*calcule a quantidade de dinheiro gasta por um fumante. 
numero de anos que ele fuma, n de cigarros fumados e o preço de uma carteira(1 carteira tem 20 cigarros) */

const prompt=require('prompt-sync')()

//inicio
console.log(' dinheiro gasto por um fumante')
const anos = Number(prompt(' anos fumando: '))
const cigarros = Number(prompt(' quantos cigarros por dia: '))
const preço = Number(prompt(' quanto custa a carteira de cigarros: '))

// processo
const anos1 = anos * 365 
const total = anos1 * (preço * cigarros) / 20

//resultado
console.log(' o resultado é:', total.toFixed(2)) 