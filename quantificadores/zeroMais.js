const texto = 'De longe eu avistei o fogo e uma pessao gritando: FOGOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> zero ou mais (opcional)
const regex = /fogo*/gi
// a letra que está do quantificador *, letra o, pode ter zero ou mais ocorrências.

console.log(texto.match(regex))
console.log(texto2.match(regex))