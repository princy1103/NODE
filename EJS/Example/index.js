const http = require('http')
const express = require('express')
const { log } = require('console')

const port = 4040


const app=express()

app.use(express.urlencoded())

app.set('view engine','ejs')

app.get ('/',(req,res)=>{
    return res.render('index')
})

app.get('/home',(req,res)=>{
    return res.render('home')
})

app.listen(port,(err)=>{
    !err?
    console.log(`server start on port ${port}`):
    console.log('Server not stared');
    
    
})