const texto = 'João é calmo, mas no trânsito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive Lookahead
// Vai buscar um conjunto que tenha uma determinada expressao na frente dele

// busca palavras que tenham ',' na frente
console.log(texto.match(/[\wÀ-ú]+(?=,)/g))

// busca palavras que tenha '.' na frente
console.log(texto.match(/[\wÀ-ú]+(?=\.)/g))

// busca palavras que tenham ', mas' na frente
console.log(texto.match(/[\wÀ-ú]+(?= ,mas)/g))





// Nergative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/g))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/g))