const express = require('express');
const helper = require('../helper');
const {ObjectId} = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const item = mongoCollections.item;



const getTv = async () => { 
  
  let getitems = {fetched: false}
  const itemCollection = await item();
  const isItem = await itemCollection.find({Type:{ $regex: new RegExp('TV', 'i')},CostCenter:{$regex: new RegExp('XSTREAM CABLE', 'i')},Deprecated:"false"}).toArray();
  if(isItem.length===0){
    throw {statusCode: 400, message: 'There are no items!'};
  }
  
  isItem.forEach(element => {
    // console.log(element.Name.includes("Sports"));
    if(element.Name.includes("OP Basic")){
        getitems.basic ={};
        getitems.basic.Name = element.Name;
        getitems.basic.id = element._id.toString();
        getitems.basic.Price = element.Price;
    }
    else if(element.Name.includes("Expanded")){
        getitems.expanded ={};
        getitems.expanded.Name = element.Name;
        getitems.expanded.id = element._id.toString();
        getitems.expanded.Price = element.Price;
    }
    else if(element.Name.includes("Choice")){
        getitems.choice ={};
        getitems.choice.Name = element.Name;
        getitems.choice.id = element._id.toString();
        getitems.choice.Price = element.Price;
    }
    else if(element.Name.includes("Preferred")){
        getitems.preferred ={};
        getitems.preferred.Name = element.Name;
        getitems.preferred.id = element._id.toString();
        getitems.preferred.Price = element.Price;
    }
    else if(element.Name.includes("HBO")){
        getitems.hbo ={};
        getitems.hbo.Name = element.Name;
        getitems.hbo.id = element._id.toString();
        getitems.hbo.Price = element.Price;
    }
    else if(element.Name.includes("Sports")){
        getitems.sports ={};
        getitems.sports.Name = element.Name;
        getitems.sports.id = element._id.toString();
        getitems.sports.Price = element.Price;
        // console.log(getitems.sports)
    }
    else if(element.Name.includes("Spanish")){
        getitems.spanish ={};
        getitems.spanish.Name = element.Name;
        getitems.spanish.id = element._id.toString();
        getitems.spanish.Price = element.Price;
    }
  });
//   console.log(getitems);
  getitems.fetched = true;
  return getitems;



};

const getInternet = async () => { 
  
  let getitems = {fetched: false}
  const itemCollection = await item();
  const isItem = await itemCollection.find({Type:{ $regex: new RegExp('Internet', 'i')},CostCenter:{$regex: new RegExp('INTERNET', 'i')},Deprecated:"false"}).toArray();
  if(isItem.length===0){
    throw {statusCode: 400, message: 'There are no items!'};
  }
  isItem.forEach(element => {
    element._id = element._id.toString();

  })
  getitems.data=isItem;
//   console.log(getitems);
  getitems.fetched = true;
  return getitems;



};
const getPhone = async () => { 
  
  let getitems = {fetched: false}
  const itemCollection = await item();
  const isItem = await itemCollection.find({Type:{ $regex: new RegExp('Voip', 'i')},CostCenter:{$regex: new RegExp('VOIP', 'i')},Deprecated:"false"}).toArray();
  if(isItem.length===0){
    throw {statusCode: 400, message: 'There are no items!'};
  }
  
  getitems.data=isItem;
//   console.log(getitems);
  getitems.fetched = true;
  return getitems;



};
module.exports = {
    getTv,
    getInternet,
    getPhone
};