
const credentials = require('./credentials.js')
const request = require('request')


const omdbMovie = function(title) {
  const url = 'http://www.omdbapi.com/?apikey=' + credentials.apikey +
              '&t=' + title
  console.log(url)
  request({ url, json: true }, function(error, response) {
    if (error) {
      consolelog(error.Error)
    } else {
      const data = response.body

      if ( data.Response == 'False' ) {
        console.log('Error: ' + data.Error)
      } else {
        const info = {
          title: data.Title,
          plot: data.Plot,
          rating: data.imdbRating,
          seasons: data.totalSeasons
        }

        console.log(info)
        omdbSeason(title, info.seasons)
      }
    }
    
    
  })
}


const omdbSeason = function(title, season) {
  const url = 'http://www.omdbapi.com/?apikey=' + credentials.apikey +
              '&t=' + title + '&Season=' + season
  request({ url, json: true }, function(error, response) {
    const data = response.body
    const info = {
      season : season,
      episodes : []
    }
    for ( i in data.Episodes ) {
      info.episodes.push( data.Episodes[i].Title )
    }
    console.log(info)
  })
}

module.exports = {
  omdbMovie : omdbMovie,
  omdbSeason : omdbSeason
}
