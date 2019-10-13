const credentials = require('./credentials.js')
const request = require('request')
var latitude
var longitude
var temperature
var precipProbability 
var city



const getCity = function(place,callback){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + place + '.json?access_token=' + credentials.MAPBOX_TOKEN

    request({url, json: true},function(error,response){

        if (error){
            callback(error,undefined)
        } else {
            const data = response.body

            if(data.Response == 'False'){
                callback(data.Error,undefined)
        } else {
            const info = {
                latitude: data.features[0].center[1], longitude: data.features[0].center[0]
        
            }
            
            callback(undefined, info)
        }
    }
        
        
    })
}


const getWeatherConditions = function(latitude,longitude,callback){
    const url = 'https://api.darksky.net/forecast/' + credentials.DARK_SKY_SECRET_KEY + '/' + latitude + ',' + longitude + '?exclude=[minutely,hourly,daily,alerts,flags]&units=si'

    request({url, json: true},function(error,response){
        if (error){
            callback('Unable to connect to the weather service', undefined)
        } else{
            const data = response.body
            if(data.Response == 'False'){
                callback(data.Error,undefined)
            } else{
                const info = {
                    summary: data.currently.summary,
                    temperature: data.currently.temperature,
                    precipProbability: (response.body.currently.precipProbability) * 100
                }
                console.log(summary + '. Actually the temperature is ' + temperature + '°C. There is ' + precipProbability + '% of precipitation probability.')
                callback(undefined,info)
            }

        }
    })
}



module.exports = {
    getCity : getCity,
    getWeatherConditions : getWeatherConditions
  }

        
            






