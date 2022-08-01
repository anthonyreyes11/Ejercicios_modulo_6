const express = require('express')
const fs = require('fs').promises

const app = express()

app.use(express.static('static'))


app.get('/api', (req, res) => {
  respuesta = {
    fecha: new Date(),
    dolar: {
      indicador: 'Dolar EEUU',
      valor: 950
    },
    uf: {
      indicador: 'Unidad de Fomento',
      valor: 33450
    }
  }
  res.json(respuesta)
})

app.get('/api/dolar', (req, res) => {
  respuesta = {
    hoy: 950,
    ayer: 1000,
    anteayer: 'muy caro!'
  }
  res.json(respuesta)
})

app.get('/api/clima', async function (req, res) {
  const data = await axios.get('https://api.gael.cloud/general/public/clima')
  res.json(data.data)
})

app.get('*', (req, res) => {
  res.send('Página aún no implementada')
});

app.listen(3000, function () {
  console.log('servidor ejecutando correctamente');
})