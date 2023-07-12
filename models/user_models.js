const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema

const UserSchema = new schema({
    name: {
        type: String
    },
    email: {
        type: String, required: true, unique: true, lowercase: true
    },
    phone_number: {
        type: Number, required: true, unique: true
    },
    password: {
        type: String, required: true
    }
})

UserSchema.pre('save', async function (next) {
    try {
      if (this.isNew) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
      }
      next()
    } catch (error) {
      next(error)
    }
  })

UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password)
  }catch (error){
    throw error
  }
}

const user = mongoose.model('user', UserSchema)
module.exports = user