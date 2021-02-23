const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config')


//Middlewares
app.use(cors());
app.use(bodyParser.json());





// import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

//ROUTES
app.get('/',(req, res) => {
    res.send('home');
} )


//app.get('/posts',(req, res) => {
  //  res.send('post');
//} )

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => console.log('connected to DB')
);

//How do we start listening to the server
app.listen(3000);