const uuid = require('uuid');
const express = require('express');
const helper = require('../helper');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const locations = mongoCollections.locations;
const accounts = mongoCollections.account;
const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');
dotenv.config({
    path:'./.env'
})


 function stateNameToAbbreviation(name) {
    const lowerCaseAbbreviationKey = name.trim().replace(/[^\w ]/g, "").toLowerCase(); // Trim, lowercase and remove all non-word characters with the exception of spaces
    return states[lowerCaseAbbreviationKey] ?? name; // Return name if record is not found
}

const states = {
    "arizona": "AZ",
    "alabama": "AL",
    "alaska": "AK",
    "arkansas": "AR",
    "california": "CA",
    "colorado": "CO",
    "connecticut": "CT",
    "district of columbia": "DC",
    "delaware": "DE",
    "florida": "FL",
    "georgia": "GA",
    "hawaii": "HI",
    "idaho": "ID",
    "illinois": "IL",
    "indiana": "IN",
    "iowa": "IA",
    "kansas": "KS",
    "kentucky": "KY",
    "louisiana": "LA",
    "maine": "ME",
    "maryland": "MD",
    "massachusetts": "MA",
    "michigan": "MI",
    "minnesota": "MN",
    "mississippi": "MS",
    "missouri": "MO",
    "montana": "MT",
    "nebraska": "NE",
    "nevada": "NV",
    "new hampshire": "NH",
    "new jersey": "NJ",
    "new mexico": "NM",
    "new york": "NY",
    "north carolina": "NC",
    "north dakota": "ND",
    "ohio": "OH",
    "oklahoma": "OK",
    "oregon": "OR",
    "pennsylvania": "PA",
    "rhode island": "RI",
    "south carolina": "SC",
    "south dakota": "SD",
    "tennessee": "TN",
    "texas": "TX",
    "utah": "UT",
    "vermont": "VT",
    "virginia": "VA",
    "washington": "WA",
    "west virginia": "WV",
    "wisconsin": "WI",
    "wyoming": "WY",
    "american samoa": "AS",
    "guam": "GU",
    "northern mariana islands": "MP",
    "puerto rico": "PR",
    "us virgin islands": "VI",
    "us minor outlying islands": "UM",
};
const createUser = async ( data) => { 
  data.FirstName=data.FirstName.trim().toLowerCase();
  data.LastName=data.LastName.trim().toLowerCase();
  data.Street= data.Street.trim();
  data.City= data.City.trim();
  data.State= data.State.trim();
  data.Zip= data.Zip.trim();
//   console.log(stateNameToAbbreviation(data.State));
  try{
    helper.validationFunction(data);
  } catch (e) {
      throw e;
  }
  let userAuth = {insertedUser: false}
  const userCollection = await users();
  const locationCollection = await locations();
  const accountCollection = await accounts();
  const isDuplicateUser = await userCollection.findOne({Email: data.Email});
  if(isDuplicateUser){
    throw {statusCode: 400, message: 'There is already a user with that Email!'};
  }
  const query = { street: { $regex: new RegExp(data.Street, 'i')},city:{$regex: new RegExp(data.City, 'i')}, state:{$regex: new RegExp(stateNameToAbbreviation(data.State), 'i')}};
  const location_validate = await locationCollection.countDocuments(query);
  // console.log(location_validate);
  if(location_validate>=1){
    const hashedPassword = await bcrypt.hash(data.Password,saltRounds);
    let location = {
      _id:new ObjectId(),
      address:data.AptNo,
      street:data.Street,
      city:data.City,
      state:stateNameToAbbreviation(data.State),
      zip:data.Zip
    }
    let newUser = {
        FirstName:data.FirstName,
        LastName:data.LastName,
        Email:data.Email,
        Password: hashedPassword,
        BillingAddress:location._id.toString()
    };
    const insertUser = await userCollection.insertOne(newUser);
    // console.log(insertUser);
    if(insertUser.insertedCount === 0){
        throw {statusCode: 500, message: 'Internal Server Error'};
    }
    let account = {
      OwnerId:insertUser.insertedId.toString(),
      PlanPurchased:[]
    }
    
    const insertAccount = await accountCollection.insertOne(account);
    const insertLocation = await locationCollection.insertOne(location);
    if(insertAccount.insertedCount === 0 || insertLocation.insertedCount===0){
      throw {statusCode: 500, message: 'Internal Server Error'};
    }
    userAuth.insertedUser = true;
    return userAuth;
  }
  else{
    throw {statusCode: 400, message: 'Location out of service'};
  }


};

const checkUser = async (data) => {
    data.Email=data.Email.trim();
    data.Password=data.Password.trim();

    try{
      helper.validationLogin(data);
    } catch (e) {
        throw e;
    }
    let userAuth = {authenticatedUser: false}

    const userCollection = await users();
    const user = await userCollection.findOne({Email: data.Email});
    if(!user){
        throw {statusCode: 400, message: "Either the username or password is invalid"};
    }
    let comparePassword = await bcrypt.compare(data.Password, user.Password);
    if(comparePassword) {
        userAuth.authenticatedUser = true;
    } else {
        throw {statusCode: 400, message: 'Either the username or password is invalid'};
    }
    // const id = user._id.toString();
    // console.log("in data...",typeof(id));
    const accessToken = jwt.sign({id:user._id.toString()},process.env.ACCESS_KEY,{expiresIn:process.env.JWT_EXP});
    const cookieOptions = {
            expiresIn: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000),
            httpOnly:true
    }
    userAuth.accessToken=accessToken;
    userAuth.cookieOptions=cookieOptions;
    return userAuth;

    
  };
module.exports = {
  createUser,
  checkUser
};