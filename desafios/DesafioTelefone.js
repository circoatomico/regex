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