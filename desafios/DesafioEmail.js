const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- luiz.gomes@outlook.com
- luiz_lgvasconcelos@gmail.com
- joao@empresa.info.br
- aline_amv@hotmail.com`

const regex = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9]{2,4}/gi

console.log(texto.match(regex))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))