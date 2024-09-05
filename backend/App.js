const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require('path');
dotenv.config({path:path.join(__dirname,'config','config.env') })

const movies = require('./routes/movies');
const booking = require('./routes/booking');

app.use(express.json());

app.use('/api/v1/',movies);
app.use('/api/v2/',booking);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})