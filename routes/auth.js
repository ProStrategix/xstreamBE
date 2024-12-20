//require express, express router and bcrypt as shown in lecture code
const express = require('express');
const router = express.Router();
const helper = require('../helper');
const { createUser,checkUser } = require('../data/auth');
const { authorizeUser } = require('../data/authorized');

router.route('/').get(authorizeUser,async (req, res) => {
  console.log(req.user);
    if(req.user) {
      return res
          .status(200)
          .render('pages/homePage',{
          partial: "home-script",
          css: "home-css",
          title:"Home All",
          user:true,
        });
  } else {     
    return res
    .status(200)
    .render('pages/homePage',{
    partial: "home-script",
    css: "home-css",
    title:"Home All",
  });
  }
  })



  router.route('/register').post(async (req, res) => {
    let requestData = req.body;
    // console.log(requestData);
    requestData.BillingAddress = requestData.Street;
    
    try {
      helper.validationFunction(requestData);
 
      const usersList = await createUser(requestData);
  
      // Check if the user was successfully created
      if (usersList.insertedUser) {
        // console.log(req.user);
        return res
            .status(200)
            .redirect('/service');
      } else {
        return res
          .status(400)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Register",
          hasErrors: true, error: "Resgitration failed.",
        });
      }
    } catch(e) {
        if(e.statusCode===500){
          return res
          .status(500)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Register",
          hasErrors: true, error: e.message, 
        });
        }
        if(e.statusCode) {
          return res
          .status(400)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Register",
          hasErrors: true, error: e.message,
        });
         
        } else {
          return res
          .status(400)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Register",
          hasErrors: true, error: e.message,
        });
        }
      }
    })
   
router.route('/login').post(async (req, res) => { 
  let requestData = req.body;
    
    try {
      helper.validationLogin(requestData);
   
      const user = await checkUser(requestData);
  
      // Check if the user was successfully created
      if (user.authenticatedUser) {
        // console.log(req.user);
        res.cookie("userSave",user.accessToken,user.cookieOptions);
        if(res.cookie){
          return res
          .status(200)
          .redirect('/service');
        }
        
      } else {
        return res
          .status(500)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Sign In",
          hasErrors: true, error: "Sign In Failed", 
        });
      }
    } catch(e) {
        if(e.statusCode===500){
          return res
          .status(500)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Sign In",
          hasErrors: true, error: e.message, 
        });
        }
        if(e.statusCode) {
          return res
          .status(400)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Sign In",
          hasErrors: true, error: e.message, 
        });
        } else {
          return res
          .status(400)
          .render('pages/registerPage',{
          partial: "register-script",
          css: "register-css",
          title:"Sign In",
          hasErrors: true, error: e.message, 
        });
        }
      }
})



router
  .route('/logout').get(authorizeUser,async (req, res) => {
    if (!req.user) {
      return res.status(403).redirect('/register');
  } else {
      res.clearCookie('userSave');
      res.status(200).redirect('/register');
  }   
  
})
module.exports = router;