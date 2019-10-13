/*
Durante esta clase, vimos callbacks.
Si dejabamos el código como estaba (que omdbMovie llamaba a omdbSeason)
No esta del todo correcto, ya que estas funciones deberian de ser independientes.

Si tenemos algo asi:

// const geocode = function(ciudad) {
//   setTimeout(function() {
//     const data = {
//       lat: 0,
//       long: 0
//     }
//     return (data)
//   }, 2000)
// }
// console.log(geocode('Monterrey'))

veremos que data nos retorna un undefined ya que en realidad estamos retonando
data de la funcion setTimeout y no de geocode.

Para poder retornar de omdbMovie y con esa informacion llamar a omdbSeason
necesitamos usar callbacks.
Las callbacks son unas funciones que se envian como parametros a otras funciones
y tambien se les conoce como call-after. El código de arriba deberemos modificarlo
para que la funcion de geocode reciba como parametro un callback


// const geocode = function(ciudad, callback) {
//   setTimeout(function() {
//     const data = {
//       lat: 0,
//       long: 0
//     }
//     callback(data)
//   }, 2000)
// }

y ahora se llamara de esta forma:

geocode('Monterrey', function(data) {
   console.log(data)
})

Donde al finalizar de obtener data, se llama a la funcion que se recibio como parametro
que es esta parte:
function(data) {
   console.log(data)

Asi es como modificaremos nuestras funciones de movie.js

Ahora, por convencion, siempre se envia el error y luego los datos en caso de que
no haya error.

Cuando haya error llamaremos el callback:
callback('error', undefined)
y cuando no hay error:
callback(undefined, data)


- Probar con una pelicula
- Probar con una serie
- Probar desconectado
- Probar con una pelicula o serie invalida (que no exista)
- Probar con una api key invalida
*/
const omdb = require('./movies.js')

// omdb.omdbMovie('Eternal Sunshine of the spotless mind')

omdb.omdbMovie('asd12l3j123', function(error, data) {
  if (error) {
    console.log(error)
  } else {
    if ( data.seasons ) {
      omdb.omdbSeason(data.title, data.seasons, function(error, data){
        console.log(data)
      })
    } else {
      console.log(data)
    }
  }
  
})



// omdb.omdbSeason('Game of Thrones', 1)
