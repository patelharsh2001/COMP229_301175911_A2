/*
This is contactlist.js file
Name : Harsh Patel
Student ID: 301175911
Date : 4th March 2022 
*/

let express = require('express');
let mongoose = require('mongoose');
const { findById } = require('../model/contactlist');
let router = express.Router();

let Contact_List = require('../model/contactlist');

module.exports.displayContactList = (req,res,next)=>{
    Contact_List.find((err,contactlist)=>{
    
        if(err){
            return console.error(err);
        }
        else{
           // console.log(contactsList);
           res.render('list/contactlist.ejs',{title: 'Contact List', ContactList : contactlist,
            displayName : req.user?req.user.displayName : ''
        });
        }
    });
    
    }

    module.exports.displayAddPage = (req,res,next) => {
        res.render('list/add.ejs', {title: 'Add a Contact'});
    }

    module.exports.processAddPage = (req,res,next)=>{
        let newList = Contact_List({
            "name": req.body.name,
            "phonenumber": req.body.phonenumber,
            "email": req.body.email
        });

        Contact_List.create(newList,(err, Contact_List)=>{
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                res.redirect('/contact-list');
            }


        });
    }

    module.exports.displayEditPage = (req,res,next)=>{

        let id= req.params.id;
        Contact_List.findById(id,(err,ContactListToEdit)=>{
            if(err){
                console.log(err);
                res.end(err);

            }
            else{
                res.render('list/edit', {title: 'Edit a contactlist', contactlist:ContactListToEdit, displayName : req.user?req.user.displayName : ''});
            }

        });
    }
    module.exports.processEditPage = (req,res,next)=>{

        let id= req.params.id;

    let updatedList = Contact_List({  
        "_id": id,
        "name": req.body.name,
        "phonenumber": req.body.phonenumber,
        "email": req.body.email
    });

    Contact_List.updateOne({_id:id},updatedList, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    });
    }

    module.exports.performDelete = (req, res, next) => {
        let id = req.params.id;
        Contact_List.remove({_id:id}, (err) =>{
           if(err){
               console.log(err);
               res.end(err);
           }
           else{
               res.redirect('/contact-list');
           }
        });
    }