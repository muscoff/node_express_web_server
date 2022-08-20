const express = require('express')
const router = express.Router()

const courses = require('../resource').courses

router.get('/', (req, res)=>{
    res.send(courses)
})

router.get('/:title', (req, res)=>{
    const title = req.params.title

    const findItem = courses.find(item=>item.title.toLowerCase() === title.toLowerCase())

    if(findItem){
        res.send(findItem)
    }else{
        res.json({status: false, message: 'Not Found'})
    }
})

router.post('/', (req, res)=>{
    const course = req.body

    const newCourses = [...courses, course]

    res.send(newCourses)
})

router.put('/', (req, res)=>{
    const {title, newTitle} = req.body

    courses.map(item=>{
        if(title.toLowerCase() === item.title.toLowerCase()){
            item.title = newTitle
        }
        return item
    })

    res.send(courses)
})

router.delete('/:title', (req, res)=>{
    const title = req.params.title

    const filteredCourses = courses.filter(item=>item.title.toLowerCase() !== title.toLowerCase())

    res.send(filteredCourses)
})

module.exports = router