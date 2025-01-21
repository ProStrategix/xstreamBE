//require express, express router and bcrypt as shown in lecture code
const express = require('express');
const router = express.Router();
const helper = require('../helper');
const { addToCart,removeFromCart } = require('../data/cart');
const { authorizeUser } = require('../data/authorized');
const sanitizeHtml = require('sanitize-html');

// Middleware to sanitize all input fields
const sanitizeInputs = (req, res, next) => {
    const sanitizeObject = (obj) => {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                obj[key] = sanitizeHtml(obj[key], {
                    allowedTags: [], // No HTML tags allowed
                    allowedAttributes: {},
                });
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                sanitizeObject(obj[key]); // Recursively sanitize nested objects
            }
        }
    };

    sanitizeObject(req.body); // Sanitize request body
    sanitizeObject(req.query); // Sanitize query parameters
    sanitizeObject(req.params); // Sanitize route parameters

    next();
};

router.use(sanitizeInputs);   
router.route('/add').post(authorizeUser,async (req, res) => { 

if(req.user) {
    let requestData = req.body;
    // let requestData = {itemId:"6757ca4504e91d63e43cdf1c"};
    requestData.AccountId = req.user.AccountId;
    // console.log(requestData);
    try {
      helper.validObjectId(requestData.itemId);
      helper.validObjectId(requestData.AccountId);
      const user = await addToCart(requestData);
  
      // Check if the user was successfully created
      if (user.inserted) {
        res.status(200).send("Item Added Successfully");
        
      } else {
        res.status(400).send({hasErrors: true, error: e.message});
      }
    } catch(e) {
        if(e.statusCode===500){
          return res
          .status(500).send({hasErrors: true, error: e.message});
        }
        if(e.statusCode) {
          return res
          .status(400).send({hasErrors: true, error: e.message});
        } else {
          return res
          .status(400).send({hasErrors: true, error: e.message});
        }
      }
    }else {     
        return res
        .status(200)
        .redirect('register');
  }
})

router.route('/remove').post(authorizeUser,async (req, res) => { 

  if(req.user) {
      let requestData = req.body;
      // let requestData = {itemId:"6757ca4504e91d63e43cdf1c"};
      requestData.AccountId = req.user.AccountId;
      // console.log(requestData);
      try {
        helper.validObjectId(requestData.itemId);
        helper.validObjectId(requestData.AccountId);
        const item = await removeFromCart(requestData);
    
        // Check if the user was successfully created
        if (item.removed) {
          res.status(200).send("Item removed Successfully");
          
        } else {
          res.status(400).send({hasErrors: true, error: e.message});
        }
      } catch(e) {
          if(e.statusCode===500){
            return res
            .status(500).send({hasErrors: true, error: e.message});
          }
          if(e.statusCode) {
            return res
            .status(400).send({hasErrors: true, error: e.message});
          } else {
            return res
            .status(400).send({hasErrors: true, error: e.message});
          }
        }
      }else {     
          return res
          .status(200)
          .redirect('register');
    }
  })
  


module.exports = router;