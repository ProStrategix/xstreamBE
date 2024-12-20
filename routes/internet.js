const express = require('express');
const router = express.Router();
const { authorizeUser } = require('../data/authorized');
router.route('/').get(authorizeUser,async (req, res) => {
    // console.log(req.user);
      if(req.user) {
        return res
            .status(200)
            .render('pages/internetPage',{
              partial: "home-script",
            css: "internet-css",
            title:"Internet",
            user:true,
          });
    } else {     
          return res
          .status(200)
          .render('pages/internetPage',{
            partial: "home-script",
          css: "internet-css",
          title:"Internet",
        });
    }
    })
module.exports = router;