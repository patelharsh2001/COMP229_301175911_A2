

let mongoose = require('mongoose');

//create model
let Tournament = mongoose.Schema({
  name : String,
  location : String,
  entryfee : String,
  startdate: String
},
{
    collection : "tournaments"
})

module.exports = mongoose.model('Tournament_List',Tournament);