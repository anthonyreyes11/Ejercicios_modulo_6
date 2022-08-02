//Seleccionamos las Variables.
const axios = require('axios');
const fs = require('fs');
const moment = require('moment');
let valor_moneda;

//Creamor la funcion asincrona.
async function getDivisa(){
  // crear la constante url que traera la informacion de la api
    const url = 'https://mindicador.cl/api/'
    //creamos la constante divisa la cual a travez de process.argv traera la posicion 4 de la api
    const divisa = process.argv[4]
    //creamos la constante resp que nos traera la informacion del url mas la divisa
    const resp = await axios.get(url + divisa);
    //creamos la fecha con let ya que es una contaste con variacion
    let fecha = moment().locale('es').format('MMMM Do YYYY, h:mm:ss a');
    // infomracion 2 y 3 de la api
    const nombre_archivo = process.argv[2]+ '.' + process.argv[3]
    // infomracion  5 de la api
    const dinero = process.argv[5]
    // el response de la api se llama data y la creamos en una constante
    const divisas = resp.data
    valor_moneda = (divisas.serie[0].valor);
    const total = dinero/valor_moneda;
    //esta constante llamada relleno, tendra toda la informacion ordenada con las constantes
    const relleno = `A la fecha: ${fecha}
    Fue realizada cotización con los siguientes datos:
    Cantidad de pesos a convertir: ${dinero} pesos
    Convertido a "${divisa}" da un total de: $${total}.-`
    function crear_documento() {
        fs.writeFile(`${nombre_archivo}`, relleno, 'utf8', function(){
            console.log('Archivo creado')
        })
    } crear_documento()
}
getDivisa()

//Leer documento.
function leer() {
fs.readFile('documento_importante.txt', 'utf8', function(err, res){
    console.log(res)
})
}
leer()


