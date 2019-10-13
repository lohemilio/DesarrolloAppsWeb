const credentials = require('./credentials.js')
const request = require('request')
var latitude
var longitude
var temperature
var precipProbability 
var city

const getWeatherConditions = function(latitude,longitude,callback){
    const url = 'https://api.darksky.net/forecast/' + credentials.DARK_SKY_SECRET_KEY + '/' + latitude + ',' + longitude + '?exclude=[minutely,hourly,daily,alerts,flags]&units=si'

    request({url, json: true},function(error,response){
        if (error){
            callback('Unable to connect to the weather service', undefined)
        } else if(response.body["error"]){
            callback(response.body["error"],undefined)
        } 
        
        else{
            const data = response.body.currently
             
            const msg = data.summary + '. Actually the temperature is ' + String(data.temperature) + '°C. There is ' + String(data.precipProbability) + '% of precipitation probability.'
                
            callback(error,msg)

        }
    })
}

const getCoordinates = function(place,callback){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + place + '.json?access_token=' + credentials.MAPBOX_TOKEN

    request({url, json: true},function(error,response){

        if (error){
            callback(error,undefined)
        } 
        else if(response.body.message){
            callback(response.body.message, undefined)
        }
        else if(!response.body.features[0]){
            callback("city not found", undefined)
        }
        else {
            const data = response.body

             
            const latitude = data.features[0].center[1]
            const longitude = data.features[0].center[0]
            callback(undefined, latitude, longitude)
        }
    
        
        
    })
}






getCoordinates("Monterrey", function(error, latitude, longitude){
    if(error){
      console.log(error)
    }
    else{
      getWeatherConditions(latitude, longitude, function(error2, output){
        if(error2){
          console.log(error2)
        }
        else{
          console.log(output)
        }
      })
    }
  })
        
            






