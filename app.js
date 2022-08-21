const http = require('http')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// const server = http.createServer((req, res)=>{
//     res.end('Welcome to Node JS')
// })

// CRUD - Create Read Update Delete

app.use(express.json())

app.use('/courses', require('./api/courses'))
app.use('/registration', require('./api/registration'))

app.get('/', (req, res)=>{
    res.send('Welcome to Node JS')
})

const server = http.createServer(app)

server.listen(port, ()=>console.log(`listening on port ${port}`))