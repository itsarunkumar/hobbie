const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tableSchema = new Schema({

    Name: {
        type: String,
        required: true,
    },
    Phone_Number: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Hobbies: {
        type: String,
    },
}
)

const Table = mongoose.model('Table', tableSchema)

module.exports = Table