const fs = require('fs')

const read = nomeArquivo => {
  return fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, { encoding: 'utf8'})
}

const write = (nomeArquivo, conteudo) => {
  const dirname = `${__dirname}/alterados`
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
  }

  fs.writeSileSync(`${dirname}/${nomeArquivo}`, conteudo)
}

module.exports = { read, write }