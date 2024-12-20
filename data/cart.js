const express = require('express');
const helper = require('../helper');
const {ObjectId} = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const cart = mongoCollections.cart;
const item = mongoCollections.item;



const addToCart = async ( data) => { 
  data.itemId= data.itemId.trim();
  data.AccountId= data.AccountId.trim();
//   console.log(stateNameToAbbreviation(data.State));
  try{
    helper.validObjectId(data.itemId);
    helper.validObjectId(data.AccountId);
  } catch (e) {
      throw e;
  }
  let addtocart = {inserted: false}
  const itemCollection = await item();
  const cartCollection = await cart();
  const isItem = await itemCollection.findOne({_id: new ObjectId(data.itemId)});
  if(!isItem){
    throw {statusCode: 400, message: 'There is no such service to add!'};
  }
//   console.log(isItem.Price);
let newCartItem = {
        itemId:data.itemId,
        subtotal:parseFloat(isItem.Price),
        created:new Date(),
        AccountId: data.AccountId,
        purchased:false
};
    const insert = await cartCollection.insertOne(newCartItem);
    if(insert.insertedCount === 0){
        throw {statusCode: 500, message: 'Internal Server Error'};
    }
    addtocart.inserted = true;
    return addtocart;



};
const removeFromCart = async ( data) => { 
  data.itemId= data.itemId.trim();
  data.AccountId= data.AccountId.trim();
  // console.log(data);
  try{
    helper.validObjectId(data.itemId);
    helper.validObjectId(data.AccountId);
  } catch (e) {
      throw e;
  }
  let removedcart = {removed: false}
  const cartCollection = await cart();
  const isItem = await cartCollection.findOne({itemId: data.itemId,AccountId: data.AccountId,purchased:false});
  // console.log(isItem);
  if(!isItem){
    throw {statusCode: 400, message: 'There is no such item to remove!'};
  }
 

    const insert = await cartCollection.deleteOne({itemId: data.itemId,AccountId: data.AccountId,purchased:false});
    if(insert.insertedCount === 0){
        throw {statusCode: 500, message: 'Internal Server Error'};
    }
    removedcart.removed = true;
    return removedcart;



};

const getCart = async (data) => { 
  data= data.trim();
    try{
      helper.validObjectId(data);
    } catch (e) {
        throw e;
    }
  let getcart = {fetched: false}
  const cartCollection = await cart();
  const carts = await cartCollection.find({AccountId:data,purchased:false}).toArray();
  if(carts.length===0){
    //no items in cart 
    return getcart;
  }
  else{
    getcart.fetched = true;
    getcart.data=carts;
    return getcart;
  
  }
  



};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};