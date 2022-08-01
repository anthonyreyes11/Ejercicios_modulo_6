const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const animales= ['rata','toro','tigre','conejo','dragon','serpiente','caballo','siervo','mono','gallo','perro','cerdo']


const server = http.createServer((req, res) => {

  const pos_azar = Math.floor(Math.random() * animales.length);

  const animal_azar = animales[pos_azar];
  
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end (`<h1> tu animal esno ${animal_azar}</h1>`)
})



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

