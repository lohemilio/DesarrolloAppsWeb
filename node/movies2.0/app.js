

const omdb = require('./movies.js')

// omdb.omdbMovie('Eternal Sunshine of the spotless mind')

omdb.omdbMovie('Game of Thrones',function(error,data){
    if (error){
        console.log(error)
    }else{
        console.log(data)
        if(data.seasons){
            omdb.omdbSeason(data.title, data.seasons, function(error,data){
                console.log(data)
            })
        }else{
            console.log(data)
        }
    }
})

// omdb.omdbSeason('Game of Thrones', 1)
