const texto = `CPF dos aprovados:
  - 600.567.890-12
  - 765.998.345-23
  - 116.667.530-09
  - 506.345.220-51
  - 438.935.120-63
  - 522.374.390-36`

const regex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g
const regex2 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log(texto.match(regex))
console.log(texto.match(regex2))