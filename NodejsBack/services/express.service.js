const express = require('express');
const config = require('../configs/server.config');
const bodyParser = require('body-parser');
const apiRouter = require("../routes/index");
const cors = require('cors');

//starting express
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

//services

app.use('/api/v1', apiRouter);

exports.start = () =>
{
    let port = config.port;

    app.listen(port, (err) =>
    {
        if(err)
        {
            console.log(err);
            process.exit(-1);
        }
        console.log("App is running .. port:" + port )
    })
}
