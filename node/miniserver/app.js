const express = require('express')
const app = express()
const path = require('path')
const publicDir = path.join(__dirname,'public')

app.use(express.static(publicDir))

app.get('',function(req,res){
    res.send('Hola Mundo!')
})

app.get('/about',function(req,res){
    res.send('<h1>Un about muy interesante<h1>')
})

app.get('/contact',function(req,res){
    res.send('Contact Me!')
})

app.get('/misc',function(req,res){
    res.send({
        dia: 'jueves',
        descripcion: 'casi viernes'
    })
})

app.get('*',function(req,res){
    res.send('Oops!')
})

app.listen(3000,function(){
    console.log('Up and running')
})