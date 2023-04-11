const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores são gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// quantificadores não gulosos (lazy)...
// para usar o operador lazy, basta usar o caracter ? após um metacaractere quantificador
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))