const joi = require('@hapi/joi')

const authSchema = joi.object({
    name: joi.string(),
    email: joi.string().lowercase().email().required(),
    phone_number: joi.number(),
    password: joi.string().required()
})

module.exports = {
    authSchema
}