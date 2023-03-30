// . ? * + - ^ $ | [ ] { } ( ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

// preciso usar o símbolo de escape antes do ponto, pq o ponto é um metacaractere,
// logo preciso escapalo pro regex entender que to procurando uim ponto apenas
const regexPonto = /\./

console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))