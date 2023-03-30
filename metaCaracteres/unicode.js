// No início...
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0,9

// Dois bytes (16 bits) - 65500+ caracteres
// +símbolos, +pontuação, A-Z, a-z, 0,9

// Unicode
// Quantidade de Bytes variavel - Expansível
// Suporta mais de 1 milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuídos


// https://unicode-table.com/pt/

const texto = 'aஆb௵'
console.log(texto.match(/\u0B86|\u0BF5/g))
