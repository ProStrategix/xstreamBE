const express = require('express');
const router = express.Router();
const { authorizeUser } = require('../data/authorized');
const { getTv,getInternet,getPhone} = require('../data/item');
const { getCart } = require('../data/cart');
function checkMatch(data, id) {
  if (data.id === id) {
    return true;
  }


  return false;
}
function checkMatch2(data, id) {
  if (data === id) {
    return true;
  }


  return false;
}
router.route('/').get(authorizeUser,async (req, res) => {
    // console.log(req.user);
      if(req.user) {
        
        try{
          const Tv = await getTv();
          const Phone = await getPhone();
          const Internet = await getInternet();
          const cartFetched = await getCart(req.user.AccountId);
          // console.log(Internet);

          if(Tv.fetched || Phone.fetched || Internet.fetched){
            if(cartFetched.fetched){
              cartFetched.data.forEach(element => {
                for (const key in Tv) {
                  if (typeof Tv[key] === 'object') {
                    // console.log(Tv[key]);
                    if (checkMatch(Tv[key], element.itemId)) {
                      Tv[key].purchased=true;
                    }
                  }
                }
                for (const key in Phone.data) {
                  if (typeof Phone.data[key] === 'object') {
                    if (checkMatch2(Phone.data[key]._id.toString(), element.itemId)) {
                      Phone.purchased=true;
                      Phone.data[key].thispurchased=true;
                    }
                  }
                }
                for (const key in Internet.data) {
                  // console.log(Internet.data[key].purchased);
                  if (typeof Internet.data[key] === 'object') {
                    if (checkMatch2(Internet.data[key]._id.toString(), element.itemId)) {
                      Internet.purchased=true;
                      Internet.data[key].thispurchased=true;
                     
                    }
                  }
                }
              });
              // console.log(Internet);
              return res
              .status(200)
              .render('pages/addservicesPage',{
              partial: "addservices-script",
              css: "addservices-css",
              title:"Select Services",
              user:true,
              data:Tv,
              phone:Phone,
              internet:Internet,
              // datacart:cartFetched
            });
            }
            else{
              return res
              .status(200)
              .render('pages/addservicesPage',{
              partial: "addservices-script",
              css: "addservices-css",
              title:"Select Services",
              user:true,
              data:Tv,
              phone:Phone.data,
              internet:Internet.data,
            });
            }
                
          }
          else{
            return res
                .status(200)
                .render('pages/addservicesPage',{
                partial: "addservices-script",
                css: "addservices-css",
                title:"Select Services",
                user:true,
              });
          }
        }
        catch(e){
          if(e.statusCode===500){
            return res
            .status(500)
            .render('pages/addservicesPage',{
            partial: "addservices-script",
            css: "addservices-css",
            title:"Select Services",
            user:true,
            hasErrors: true, error: e.message, 
          });
          }
          if(e.statusCode) {
            return res
            .status(400)
            .render('pages/addservicesPage',{
            partial: "addservices-script",
            css: "addservices-css",
            title:"Select Services",
            user:true,
            hasErrors: true, error: e.message,
          });
           
          } else {
            return res
            .status(400)
            .render('pages/addservicesPage',{
            partial: "addservices-script",
            css: "addservices-css",
            title:"Select Services",
            user:true,
            hasErrors: true, error: e.message,
          });
          }
        }
        
    } else {     
          return res
          .status(200)
          .redirect('/register');
    }
    })
module.exports = router;