const express = require('express')
const router = express.Router()
const Joi = require('Joi')

router.post('/', (req, res)=>{
    const {error, value} = validateInput(req.body)
    if(error){
        const message = error.details[0].message
        res.send({message})
    }else{
        //enter details into database
        res.send(value)
    }
})

module.exports = router

const validateInput = field => {
    const schema = Joi.object({
        username: Joi.string().min(3),
        password: Joi.string().min(4)
    })

    return schema.validate(field)
}