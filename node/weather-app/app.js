const credentials = require('./credentials.js')
const request = require('request')
var latitude
var longitude
var temperature
var precipProbability 
var city



const getWeatherConditions = function(place){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + place + '.json?access_token=' + credentials.MAPBOX_TOKEN

    request({url, json: true},function(error,response){
        city = response.body.features[0].place_name
        longitude = response.body.features[0].center[0]
        latitude = response.body.features[0].center[1]
        
        
            const url = 'https://api.darksky.net/forecast/' + credentials.DARK_SKY_SECRET_KEY + '/' + latitude + ',' + longitude + '?exclude=[minutely,hourly,daily,alerts,flags]&units=si'
        
            request({url, json: true},function(error,response){
                summary = response.body.currently.summary
                temperature = response.body.currently.temperature
                precipProbability = (response.body.currently.precipProbability) * 100
                
                console.log('Wheater conditions in '+ city + ':\n' + summary + '. Actually the temperature is ' + temperature + '°C. There is ' + precipProbability + '% of precipitation probability.')
            })
        
    })
}

getWeatherConditions('New York')




