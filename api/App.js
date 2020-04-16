require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000 ;
// for authentication.........
//const expressSession = require('express-session');
//const passport = require('./middlewares/authentication');

// database
const db = require('./models');


app.use(bodyParser.json())

// // setup passport and session cookies
// app.use(expressSession({ 
//   secret: "hjkhkhfghdhgfjgh", 
//   resave: false,
//   saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });
//backend
app.get('/', (req, res) => {
    res.send('Backend is working');
    console.log("Backend is working");
});
//app.use('/api', require('./routes'));


// start up the server
app.listen(PORT, () => console.log(`Backend is listening on ${PORT}`));

