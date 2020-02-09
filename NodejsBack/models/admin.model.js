const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const AdminSchema = new Schema ( 
{
    lastname: {
        type: String
    },
    firstname: {
        type: String
    },
    role: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //lowercase: true,
        //maxength: 150,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 150
    },
    admin: {
        type: Boolean
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Admin', AdminSchema);