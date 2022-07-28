const http = require('http')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// const server = http.createServer((req, res)=>{
//     res.end('Welcome to Node JS')
// })

// CRUD - Create Read Update Delete

app.use(express.json())

const courses = [
    {title: 'Javascript'},
    {title: 'PHP'},
    {title: 'Java'}
]

app.get('/', (req, res)=>{
    res.send('Welcome to Node JS')
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/courses/:title', (req, res)=>{
    const title = req.params.title

    const findItem = courses.find(item=>item.title.toLowerCase() === title.toLowerCase())

    if(findItem){
        res.send(findItem)
    }else{
        res.json({status: false, message: 'Not Found'})
    }
})

app.post('/courses', (req, res)=>{
    const course = req.body

    const newCourses = [...courses, course]

    res.send(newCourses)
})

app.put('/courses', (req, res)=>{
    const {title, newTitle} = req.body

    courses.map(item=>{
        if(title.toLowerCase() === item.title.toLowerCase()){
            item.title = newTitle
        }
        return item
    })

    res.send(courses)
})

app.delete('/courses/:title', (req, res)=>{
    const title = req.params.title

    const filteredCourses = courses.filter(item=>item.title.toLowerCase() !== title.toLowerCase())

    res.send(filteredCourses)
})

const server = http.createServer(app)

server.listen(port, ()=>console.log(`listening on port ${port}`))