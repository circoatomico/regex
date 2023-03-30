const texto = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'


const regexContagemMp3 = /\.mp3/g
console.log(texto.match(regexContagemMp3))