const texto = `
123456
cod3r
QUASE123!
#0pA1
#essaSenhaEhGrande1234

#0pA1?
Foi123!
`

// Maiuscula, minuscula, numero, simbolo, 6-20 caracteres


console.log(texto.match(/^.{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!&*]).{6,20}$/gm))

