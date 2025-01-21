const express = require('express');
const router = express.Router();
const { authorizeUser } = require('../data/authorized');
const { getTv } = require('../data/item');
router.route('/').get(authorizeUser,async (req, res) => {
    // console.log(req.user);
      if(req.user) {
        try{
          const Tv = await getTv();
          if(Tv.fetched){
        return res
            .status(200)
            .render('pages/cablePage',{
            partial: "cable-script",
            css: "cable-css",
            title:"Cable",
            user:true,
            data:Tv
          });
        }
      }
      catch(e){
        if(e.statusCode===500){
          return res
          .status(500)
          .render('pages/cablePage',{
          partial: "cable-script",
          css: "cable-css",
          title:"Cable",
          user:true,
          hasErrors: true, error: e.message, 
        });
        }
        if(e.statusCode) {
          return res
          .status(400)
          .render('pages/cablePage',{
          partial: "cable-script",
          css: "cable-css",
          title:"Cable",
          user:true,
          hasErrors: true, error: e.message,
        });
         
        } else {
          return res
          .status(400)
          .render('pages/cablePage',{
          partial: "cable-script",
          css: "cable-css",
          title:"Cable",
          user:true,
          hasErrors: true, error: e.message,
        });
        }
      }
    } else {     
          return res
          .status(200)
          .render('pages/cablePage',{
          partial: "cable-script",
          css: "cable-css",
          title:"Cable",
        });
    }
    })
module.exports = router;