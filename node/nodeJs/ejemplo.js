/*console.log("hola mundo")

const fs = require('fs')
fs.appendFile('prueba.txt','hola de nuevo', function(err){
    if(err){
        console.log("hubo un error")
    }
    console.log("Escribí en el archivo")
})*/

const archivo = require('./funciones.js')
console.log(archivo.imprimeHOLA())

const _ = require('lodash')

var arr= ['Ricardo','Alberto','Eduardo']

console.log(arr)
console.log(_.reverse(arr))
console.log(_.isString(arr[0]))
console.log(_.isString(1234))
