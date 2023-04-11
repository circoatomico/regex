const texto = 'ABC [abc] a-c 1234'

// https://symbl.cc/pt/unicode/blocks/basic-latin/#subblock-0000

// INTERVALOS USAM A ORDEM DA TABELA UNICODE ACIMA

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // não é um range

console.log(texto.match(/[A-z]/g))
console.log(texto.match(/[A-Za-z]/g))