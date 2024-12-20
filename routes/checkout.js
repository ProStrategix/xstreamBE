const express = require('express');
const router = express.Router();
const { authorizeUser } = require('../data/authorized');
const { getItems,updateItems } = require('../data/checkout');
const helper = require('../helper');
const crypto = require('crypto');

router.route('/').get(authorizeUser,async (req, res) => {
    
      if(req.user) {
      
      try 
      {
      
      let requestData = req.user.AccountId;
      // console.log(requestData);
        helper.validObjectId(requestData);
        const order = await getItems(requestData);
        // console.log(req.cookies.userSave);

          return res
            .status(200)
            .render('pages/checkoutPage',{
            partial: "checkout-script",
            css: "checkout-css",
            title:"Checkout",
            user:true,
            orderDetails:order
          })
        
        }
        catch(e) {
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

   
    function generateReturnToken(securityKey, transactionID, authCode) {
        const hash = crypto.createHash('sha1');
        hash.update(securityKey + transactionID + authCode);
        return hash.digest('hex');
    }
    function generateToken(ReferenceID,securityKey) {
      const data = ReferenceID+securityKey;
      const hash = crypto.createHash('sha1');
      hash.update(data);
      return hash.digest('hex');
    }
    
    router.route('/payment-process').post(authorizeUser,async (req, res) => {
      if(req.user) {
        const HPP_URL = 'https://hpp-test.ippay.com/';
        const ReferenceID = Math.floor(10000000000000 + Math.random() * 90000000000000).toString();
        const token = generateToken(ReferenceID.toString(),"iuKdUBYP");
      try {
        let requestData = req.user.AccountId;
        
          helper.validObjectId(requestData);
          const checkout = await getItems(requestData);
          if(checkout){
                // Prepare the data for HPP submission
                // console.log(token);
                // console.log(ReferenceID);
                  const formData = new URLSearchParams();
                  formData.append('ReferenceID', ReferenceID);
                  formData.append('MID', "70970000377135");
                  formData.append('CustomerId', "879");
                  formData.append('Amount', checkout.grandTotal);
                  formData.append('Token', token);
                  formData.append('CallbackURL', 'http://localhost:3000/checkout/payment-status');
                  formData.append('TransactionType', 'SALE');
                  formData.append('PaymentType', 'CC');
                  formData.append('SaveForFuture', 'false');
                  formData.append('CustomField1', req.user.AccountId);
                  res.setHeader('Content-Type', 'text/html');
                  res.send(`
                      <html>
                          <body onload="document.forms[0].submit()">
                              <form method="POST" action="${HPP_URL}">
                                  ${Array.from(formData.entries())
                                      .map(([key, value]) => `<input type="hidden" name="${key}" value="${value}">`)
                                      .join('')}
                              </form>
                          </body>
                      </html>
                  `);
          }
        
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).send('An error occurred while processing your payment.');
    }
  }
  else{
    return res
    .status(200)
    .render('pages/registerPage',{
    partial: "register-script",
    css: "register-css",
    title:"Register",
  });
  }
      
    })

      router.route('/payment-status').post(async (req, res) => {
           // Extract parameters from the callback data
            const {
              ReferenceID,
              Valid,
              TransactionID,
              ResponseText,
              ReturnToken,
              AuthCode,
              Amount,
              CardToken,
              CustomField1
              // Any other parameters you may need
          } = req.body;

  // The security key that you use for hashing (provided by IPpay)
  const securityKey = 'iuKdUBYP';

  // Generate a hash to verify the ReturnToken (SHA1 hash of SecurityKey + TransactionID + AuthCode)
  const generatedReturnToken = generateReturnToken(securityKey, TransactionID, AuthCode);

  // Compare the generated token with the ReturnToken from the callback
  if (ReturnToken === generatedReturnToken) {
      // Token is valid, handle the transaction response
      if (Valid === 'True') {
          //update cart
          //update account
          //go to account page
          // Proceed with updating your order status, sending confirmation emails, etc.
          // console.log(req.body);
          
          try{

            
            helper.validObjectId(CustomField1);
            const checkout = await getItems(CustomField1);
            if(checkout){
              const update = await updateItems(checkout.data,CustomField1);
              if(update.updated===true){
                res.status(200).send('Transaction successful');
              }
            }
            
          }
          catch(e){
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

          
      } else {
          // console.log('Transaction Failed:', ResponseText);
          res.status(400).send('Transaction failed');
      }
  } else {
      // console.log('Invalid ReturnToken, possible fraud attempt');
      res.status(400).send('Invalid callback data');
  }
        })
module.exports = router;