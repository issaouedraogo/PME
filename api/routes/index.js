const express = require('express');
const router = express.Router();


// Load each controller
const listingRoute = require('./listings.js');
const authenticationRoute = require('./auth.js');
//const reservationRoute = require('./reservations.js');
const userRoute = require('./users.js');


// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/listings', listingRoute);
router.use('/users', userRoute);
router.use('/auth', authenticationRoute);
//router.use('/reservations', reservationRoute);


module.exports = router;