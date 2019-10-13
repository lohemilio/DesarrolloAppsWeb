
const credentials = require('./credentials.js')

const request = require('request')

const omdbMovie = function(title) {
  const url = 'http://www.omdbapi.com/?apikey=' + credentials.apikey +
              '&t=' + title

  request({ url, json: true }, function(error, response) {
    const data = response.body
    console.log(data.Director)
    console.log(error)
  })
}


omdbMovie('Eternal Sunshine of the spotless mind')