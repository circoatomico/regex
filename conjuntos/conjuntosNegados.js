const texto = '1,2,3,a.b c!d?e[f'
console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g))
console.log(texto.match(/[^\d!\?\[\s,\.]/g))



const texto2 = '1: !"#$%&\'()*=,-./ 2: :;<=>?@'
// abaixo existem dois intervalos, de ! até -, e de : até @, além do shorthand \s
console.log(texto2.match(/[^!-/:-@\s]/g))