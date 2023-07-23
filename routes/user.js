const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const User = require('../models/user_models.js')
const { authSchema } = require('../models/user_validation.js')
const { signAccessToken, signRefreshToken } = require("../models/user_jwt.js")

router.post('/register', async (req, res, next) => {
    try {
        // const { name, email, phone_number, password } = req.body
        // if (!email || !password) throw createError.BadRequest()
        const results = await authSchema.validateAsync(req.body)
        console.log(results)

        const doesExits = await User.findOne({ email: results.email })
        if (doesExits) throw createError.Conflict(`${results.email} already has been registed`)
        const user = new User(results)
        const saveUser = await user.save()
        const accessToken = await signAccessToken(saveUser.id)
        const refreshToken = await signRefreshToken(saveUser.id)

        res.send({ accessToken, refreshToken, message: "User Created Successfully" })

    } catch (err) {
        if (err.isjoi == true) err.status = 422
        next(err)
    }
});

router.post('/login', async (req, res, next) => {
    try {

        const results = await authSchema.validateAsync(req.body)
        const user = await User.findOne({ email: results.email })
        if (!user) throw createError.NotFound("User is not registered")
        const ismatch = await user.isValidPassword(results.password)
        if (!ismatch) throw createError.Unauthorized("username/password not valid")
        const accessToken = await signAccessToken(user.id)
        const refreshToken = await signRefreshToken(user.id)

        res.send({ accessToken, refreshToken, message: "User Login Successfully" })

    } catch (error) {
        if (error.isjoi === true)
            return next(createError.BadRequest('Invalid Username/Password'))
        next(error)
    }
})

router.post('/refresh-token', async (req, res, next) => {
    res.send('user refresh-token successfully')
})

router.delete('/logout', async (req, res, next) => {
    res.send('user logout successfully')
})

module.exports = router