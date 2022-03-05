/*
This is contactlist.js file
Name : Harsh Patel
Student ID: 301175911
Date : 4th March 2022 
*/

let mongoose = require('mongoose');

//create book model
let contactListModel = mongoose.Schema({
  name : String,
  phonenumber : Number,
  email : String
},
{
    collection : "contactlist"
})

module.exports = mongoose.model('Contact_List',contactListModel);