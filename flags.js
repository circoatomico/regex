// g - global
// i - ignore case (maiusculo ou minusculo)

const texto = 'Luiz assinou um abaixo-assinado.'

// Primeira ocorrência de 'L' ou 'ab'
console.log(texto.match(/L|ab/))

// Todas as ocorrências de 'L' e 'ab'
console.log(texto.match(/L|ab/gi))

