const texto = '.$+*?-'

// Dentro de um conjunto não precisa escapar metacaracteres, eles já são considerados literais
console.log(texto.match(/[+.?*$]./g))
console.log(texto.match(/[$-?]/g))

// Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g)) // escapando o hífen pora evitar de criar um range
console.log(texto.match(/[-?]/g))

// Pode precisar de escape dentro do conjunto: - [ ] ^
