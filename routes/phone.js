const express = require('express');
const router = express.Router();
const { authorizeUser } = require('../data/authorized');
router.route('/').get(authorizeUser,async (req, res) => {
    // console.log(req.user);
      if(req.user) {
        return res
            .status(200)
            .render('pages/phonePage',{
            partial: "home-script",
            css: "phone-css",
            title:"Phone",
            user:true,
          });
    } else {     
          return res
          .status(200)
          .render('pages/phonePage',{
            partial: "home-script",
          css: "phone-css",
          title:"Phone",
        });
    }
    })
module.exports = router;