const {ObjectId} = require('mongodb');
const validator = require('email-validator');
function validationFunction(data){
    if(!data.FirstName || typeof(data.FirstName)!=='string' || !data.FirstName.trim().length){
      throw {statusCode: 400, message: "Please provide a valid First Name!"};
    } 
    if(!data.LastName || typeof(data.LastName)!=='string' || !data.LastName.trim().length ){
      throw {statusCode: 400, message: "Please provide a valid Last Name!"};
    } 
    if(!data.Email || typeof(data.Email)!=='string' || !data.Email.trim().length ){
      throw {statusCode: 400, message: "Please provide a valid Email!"};
    } 
    if(!data.Password || typeof(data.Password)!=='string' || !data.Password.trim().length ){
      throw {statusCode: 400, message: "Please provide a valid Password!"};
    } 
    if(!data.BillingAddress || typeof(data.BillingAddress)!=='string' || !data.BillingAddress.trim().length ){
      throw {statusCode: 400, message: "Please provide a valid Billing Address!"};
    } 
   
    
    var validatePassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
  
    if(!validatePassword.test(data.Password) || data.Password.trim().length<6 ){
      throw {statusCode: 400, message: 'Password should be atleast 6 characters long and should follow contraints'};
    }
    if(!validator.validate(data.Email)){
      throw {statusCode: 400, message: 'Please enter valid email'};
    }
  
  }
  function validationLogin(data){
    
    if(!data.Email || typeof(data.Email)!=='string' || !data.Email.trim().length ){
      throw {statusCode: 400, message: "Please provide a valid Email!"};
    } 
    if(!data.Password || typeof(data.Password)!=='string' || !data.Password.trim().length ){
      throw {statusCode: 400, message: "Please provide a valid Password!"};
    } 
    
    var validatePassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
  
    if(!validatePassword.test(data.Password) || data.Password.trim().length<6 ){
      throw {statusCode: 400, message: 'Password should be atleast 6 characters long and should follow contraints'};
    }
  
  }
  function validObjectId(data){
    if(!ObjectId.isValid(data)){
      throw {statusCode: 400, message: 'Invalid ID'};
    }
  }
  module.exports = {
    validationFunction,
    validationLogin,
    validObjectId
  };