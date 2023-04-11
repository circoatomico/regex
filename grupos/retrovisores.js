const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

// Retrovisores são formas de rereferenciar o que foi salvo em um grupo

console.log(texto1.match(/<(\w+)>.*<\/\1>/g))
// Por exemplo, o \1 acima referencia ao que foi encontrado no grupo (\w+)


const texto2 = 'Lentamente é mente muita lenta.'

console.log(texto2.match(/(lenta)(mente).*\1/gi))

// o ?: não guarda o valor do grupo para o retrovisor
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

console.log(texto2.match(/(lenta)(mente)?/gi))

console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))