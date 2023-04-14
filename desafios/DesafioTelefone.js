const texto = `Lista telefônica
- (11) 98765-4321
-98765-4321
- (48) 92804-1351
- (55) 98939-9646
- 99677-5925
- (82) 99482-3572
- 99627-4157`

const regex = /\(?\d{0,2}?\)?\s?\d{4,5}-\d{4}/g

console.log(texto.match(regex))






const texto2 = `Lista telefônica
- (21) 12345-6789
- (11) 62300-4321
- 5678-7771
- (85)3333-9646
- (1) 4321-1234
`

const rgx = /(\(\d{2}\)?\s?)?\d{4,5}-\d{4}/gm
console.log(texto2.match(rgx))