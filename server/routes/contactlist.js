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
let passport = require('passport');

let Contact_List = require('../model/contactlist');      //../config/model/contactlist
let contactlistController = require('../controllers/contactlist');

function requireAuth(req,res,next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}
router.get('/',contactlistController.displayContactList);

router.get('/add', requireAuth,contactlistController.displayAddPage);

router.post('/add', requireAuth,contactlistController.processAddPage);


router.get('/edit/:id',requireAuth, contactlistController.displayEditPage);



//connect to our contact list  model
//router.get('/', (req,res,next)=>{
//Contact_List.find((err,contactlist)=>{

    //if(err){
       /* return console.error(err);
    }
    else{
       // console.log(contactsList);
       res.render('list/contactlist.ejs',{title: 'Contact List', ContactList : contactlist});
    }
});

});

router.get('/add', (req,res,next)=>{
    res.render('list/add', {title: 'Add a Book'})
    
    });

    router.post('/add', (req,res,next)=>{
        let newList = Contact_List({
            "name": req.body.name,
            "phonenumber": req.body.number,
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
        


        });

        router.get('/edit/:id', (req,res,next)=>{

            let id= req.params.id;
            Contact_List.findById(id,(err,ContactListToEdit)=>{
                if(err){
                    console.log(err);
                    res.end(err);

                }
                else{
                    res.render('list/edit', {title: 'Edit a contactlist', contactlist:ContactListToEdit});
                }

            });
        });*/

            router.post('/edit/:id',requireAuth,contactlistController.processEditPage);
        
     router.get('/delete/:id',requireAuth,contactlistController.performDelete );



module.exports= router;