const express = require('express');
const router = express.Router();
const { authorizeUser } = require('../data/authorized');
router.route('/').get(authorizeUser,async (req, res) => {
    // console.log(req.user);
      if(req.user) {
        return res
            .status(200)
            .render('pages/addservicesPage',{
            partial: "addservices-script",
            css: "addservices-css",
            title:"Select Services",
            user:true,
          });
    } else {     
          return res
          .status(200)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Register",
        });
    }
    })
module.exports = router;