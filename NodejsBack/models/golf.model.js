const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const managermodel = require('./manager.model');

const golfSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        latitude: {
            type: String,
            required: true,
        },
        longitude: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            maxLength: 5000
        },
        manager: [{ type: Schema.Types.ObjectId, ref: managermodel }]
        
    }
)

module.exports = mongoose.model('Golf', golfSchema);