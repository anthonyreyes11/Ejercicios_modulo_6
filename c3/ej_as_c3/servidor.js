const express = require('express');
const fs = require('fs')
const app = express();

app.use(express.static('public'));

app.get('/crear', (req, res) => {
    console.log(req.query)
    const nombre = req.query.nombre
    const contenido = req.query.contenido

    function crearArchivo(){
        fs.writeFile(`archivos/${nombre}.txt`, contenido, 'utf8', function(){
            console.log('Archivo creado');
            res.send('archivo creado')
        })
    }
    crearArchivo();
    console.log(req.query)
    //res.send('Todo Ok');
})

app.get('/leer', (req, res) => {
    const nombre_a_leer = req.query.leer
    console.log(req.query)
        fs.readFile(`archivos/${nombre_a_leer}.txt`,'utf8', function (err, info) {
            console.log(info);
            res.send(`<h1>${info}</h1>`)
        })
})

app.get('/renombrar', (req, res) => {
    const viejo = req.query.viejo
    const nuevo = req.query.nuevo

    console.log('Archivo renombrado');

    fs.rename(`archivos/${viejo}.txt`,`archivos/${nuevo}.txt`, function(){
        return res.send('archivo renombrado')
    })

})

app.get('/eliminar', (req, res) => {
    const nombre_a_eliminar = req.query.eliminar
        fs.unlink(`archivos/${nombre_a_eliminar}.txt`, function(){
            console.log('Archivo Eliminado')
            res.send('archivo eliminado')
        })
})

app.listen(3000, function(){
    console.log('Servidor ejecutando')
});