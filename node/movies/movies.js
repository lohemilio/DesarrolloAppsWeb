const credentials = require('./credentials.js')
const request = require('request')
const omdbMovie = function(title){
    const url = 'http://www.omdbapi.com/?apikey=' + credentials.apikey + '&t=' + title

    request({url, json: true},function(error,response){
        console.log(response.body)
        
    })

}

omdbMovie('Avengers')