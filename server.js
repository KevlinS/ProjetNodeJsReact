const app = require('./NodejsBack/services/express.service');
const mongoose = require('./NodejsBack/services/mongoose.service');

app.start();
mongoose.connect();