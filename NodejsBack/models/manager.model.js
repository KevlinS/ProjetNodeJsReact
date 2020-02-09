const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManagerSchema = new Schema ( 
{

    lastname: {
        type: String
    },
    firstname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
        //lowercase: true,
        //maxength: 150,
    },
    telephone: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Manager', ManagerSchema);