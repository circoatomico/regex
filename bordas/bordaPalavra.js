const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

// Borda é o mesmo que \w negado, ou \W, ou seja [^A-Za-z0-9_]

console.log(texto1.match(/\bdia\w+/gi))
console.log(texto1.match(/\w+dia\b/gi))
console.log(texto1.match(/\w+dia\w+/gi))
console.log(texto1.match(/\bdia\b/gi))


const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // A vírgula entra!
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)) // sem vírgula
