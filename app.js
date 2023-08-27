const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();
require('./connections/mongoose.js');
const Auth_user = require('./routes/user.js');
const { verifyAccessToken } = require("./helpers/user_jwt.js")

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', Auth_user);

app.get('/', verifyAccessToken, async (req, res, next) => {
    res.send('HEllO SATYA');
});

app.use(async (req, res, next) => {
    // const err = new Error("Not Found")
    // err.status = 404
    // next(err)
    next(createError.NotFound('This route does not exits'));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
});