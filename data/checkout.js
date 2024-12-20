const express = require('express');
const helper = require('../helper');
const {ObjectId} = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const cart = mongoCollections.cart;
const account = mongoCollections.account;
const item = mongoCollections.item;


const getItems = async ( data) => { 
  data= data.trim();
//   console.log(stateNameToAbbreviation(data.State));
  try{
    helper.validObjectId(data);
  } catch (e) {
      throw e;
  }
  let order = {found: false}
  const cartCollection = await cart();
  const itemCollection = await item();
  let total = 0;
  const isItem = await cartCollection.find({AccountId: data, purchased:false}).toArray();
  if(isItem.length===0){
    throw {statusCode: 400, message: 'Cart is empty!'};
  }
  for (const item of isItem) {
    let name = await itemCollection.findOne({_id: new ObjectId(item.itemId)});
    item.subtotal = parseFloat(name.Price);
    item.name = name.Name;
    total = total + parseFloat(name.Price);
    order.total = total.toFixed(2);
  }
//   console.log(isItem.Price);
    
    order.tax = (parseFloat(10/100) * parseFloat(order.total)).toFixed(2);
    order.grandTotal = (parseFloat(order.total+order.tax)).toFixed(2);
    order.found = true;
    order.data = isItem;
    return order;



};

const updateItems = async ( data,AccountId) => { 
  AccountId= AccountId.trim();
    try{
      helper.validObjectId(AccountId);
    } catch (e) {
        throw e;
    }
  let update = {updated: false}
  const cartCollection = await cart();
  const accountCollection = await account();
  for (const item of data) {
    let cartUpdate = await cartCollection.updateOne({itemId: (item.itemId),AccountId:AccountId,purchased:false},{ $set: { purchased: true} });
    if(cartUpdate.insertedCount === 0){
      throw {statusCode: 500, message: 'Internal Server Error'};
    }
    let accountUpdate = await accountCollection.updateOne({_id:new ObjectId(AccountId)},{ $push: { PlanPurchased: item.itemId } });
    if(accountUpdate.insertedCount === 0){
      throw {statusCode: 500, message: 'Internal Server Error'};
    }
  }

    update.updated = true;
    return update;



};
module.exports = {
    getItems,
    updateItems
};