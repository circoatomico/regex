const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) // todos os números, atalho para [0-9]
console.log(texto.match(/\D/g)) // todos os NÃO números, [^0-9]

console.log(texto.match(/\w/g)) // todos os caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // todos os NÃO caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espaços em geral [ \t\n\r\f ]
console.log(texto.match(/\S/g)) // NÃO espaços em geral [^ \t\n\r\f ]

