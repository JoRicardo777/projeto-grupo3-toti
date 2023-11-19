const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    email: String,
    contract: Boolean,
    phone: Number
})

module.exports = Person