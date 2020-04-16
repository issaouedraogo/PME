            
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Listing } = db;
//for authentication ................
const passport = require('../middlewares/authentication');
const upload = require('../services/file-upload');
const singleUpload = upload.single('image');


router.get('/', (req,res) => {
  Listing.findAll()
    .then(listing => {
      res.json(listing);
      // console.log(listing);
    });
});
// creating new listings
router.post('/',
  upload.single('image'),
  //passport.isAuthenticated(), // Dont forget to uncomment that back
  (req, res) => {
    let { price } = req.body;
    // let { image } = req.body;
    let { description } = req.body;
    let { address } = req.body;
    let { availability } = req.body;
    let { longitude } = req.body;
    let { latitude } = req.body;
    let { user_id } = req.body;

    Listing.create({user_id,price,image:req.file.location,description,address,availability,longitude,latitude})
      .then(listing => {
        res.status(201).json(listing);
      })
      .catch(err => {
        res.status(400).json(err);
      }); 

  // file = res.json({'imageUrl':req.file.location});

});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Listing.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});
//---------------------------------------
// finding by borough
router.get('/:borough', (req, res) => {
  const { borough } = req.params;
  Listing.findAll({
    where: {borough :borough},
  })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});

// update listing

router.put('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Listing.findByPk(id)
      .then(listing => {
        if(!listing) {
          return res.sendStatus(404);
        }

        listing.price = req.body.price;
        listing.image = req.body.price;
        listing.description = req.body.price;
        listing.address = req.body.price;
        listing.availability = req.body.price;
        listing.longitude = req.body.price;
        listing.latitude = req.body.price;


        listing.save()
          .then(listing => {
            res.json(listing);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
  }
);

// delete listing
router.delete('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    listing.findByPk(id)
      .then(listing => {
        if(!listing) {
          return res.sendStatus(404);
        }

        listing.destroy();
        res.sendStatus(204);
      });
  }
);

module.exports = router;
