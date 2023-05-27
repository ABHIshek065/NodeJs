
const express = require('express')
const ejs = require ('ejs')
const App = express()

App.set('view engine' , 'ejs')

App.get('/', (req,res)=>{
res.render('index')
})


App.get('/about', (req,res)=>{
res.render('about')
})

App.get('/contact', (req,res)=>{
res.render('contact')
})

App.get('*', (req,res)=>{
res.send('<h1> This  Page is not found 404</h1>')
})

App.listen(3000)

console.log('server in running on port 3000');