const texto = 'Bom\ndia'

// o caractere \n não é pego pelo metacaractere do ponto .

console.log(texto.match(/../gi))
console.log(texto.match(/..../gi))

// dotall - algumas linguagens tem uma flag \exp\s, mas JS não!

