const crypto = require('crypto')

const keys = crypto.randomBytes(32).toString('hex')
const key = crypto.randomBytes(32).toString('hex')
console.table({keys, key})