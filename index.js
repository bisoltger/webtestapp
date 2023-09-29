const express = require('express')
const app = express()
const http = require('http').createServer(app)
const fs = require('fs')

app.use(express.urlencoded({extended: false}))
app.use(express.static('assets'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/data', (req, res)=>{
    res.sendFile(__dirname + '/data.json')
})

app.post('/data', (req, res)=>{
    let username = req.body.username
    let password = req.body.pass
    let userData = `{"username" : "${username}", "password" : "${password}"}\n`
    console.log(userData)
    if(username != '' && password != ''){
        fs.readFile('data.json', 'utf-8', (err, data)=>{
            fs.writeFile('data.json', data + userData, ()=>{
                console.log('write')
            })
        })
        res.redirect('/')
    }
})


const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`server started http://localhost:${PORT}`)
})