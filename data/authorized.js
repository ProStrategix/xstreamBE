const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const {ObjectId} = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const account = mongoCollections.account;
dotenv.config({
    path:'./.env'
})
const authorizeUser = async (req,res,next) => {
    // console.log("auth");
    if(!req.cookies.userSave){
        return next();
        
        // res.status(400).send( {hasErrors: true, error: 'UnAuthorizied Access', title: "Authorization1"});
    }
   
    try{
        
        const decodeToken = jwt.verify(req.cookies.userSave,process.env.ACCESS_KEY);
        const userCollection = await users();
        const accountCollection = await account();
        // console.log("auth1");
        // console.log(typeof(ObjectId(decodeToken.id)));
        // console.log("auth1");
        const user = await userCollection.findOne({_id:new ObjectId(decodeToken.id)});
        const accounts = await accountCollection.findOne({OwnerId:decodeToken.id});
        // console.log("auth2");
        if(user && accounts){
            req.user = {id:decodeToken.id,AccountId:accounts._id.toString(),FirstName:user.FirstName,LastName:user.LastName,Email:user.Email};
            return next();
                
        }
        else{
                // console.log(user)
                // res.status(500).send( {hasErrors: true, error: "Internal Server Error", title: "Authorization"});
                return next();
        }
    }
    catch(err){
        if(err){
            res.status(400).send( {hasErrors: true, error: 'UnAuthorizied Access', title: "Authorization"});
          
        }
    }

};


module.exports = {
    authorizeUser,
};