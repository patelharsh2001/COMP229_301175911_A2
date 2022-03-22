

let express = require('express');
let mongoose = require('mongoose');
const { findById } = require('../model/tournament');
let router = express.Router();

let Tournament_List = require('../model/tournament');

module.exports.displayTournamentList = (req,res,next)=>{
    Tournament_List.find((err,tournament)=>{
    
        if(err){
            return console.error(err);
        }
        else{
           
           res.render('list/tournament.ejs',{title: 'Tournament List', TournamentList : tournament,
            displayName : req.user?req.user.displayName : ''
        });
        }
    });
    
    }

    module.exports.displayAddPage = (req,res,next) => {
        res.render('list/add.ejs', {title: 'Add a Tournament'});
    }

    module.exports.processAddPage = (req,res,next)=>{
        let newList = Tournament_List({
            "name": req.body.name,
            "Location": req.body.location,
            "EntryFee": req.body.entryfee,
            "StartDate":req.body.startdate
        });

        Tournament_List.create(newList,(err, Tournament_List)=>{
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                res.redirect('/tournament-list');
            }


        });
    }

    module.exports.displayEditPage = (req,res,next)=>{

        let id= req.params.id;
        Tournament_List.findById(id,(err,TournamentListToEdit)=>{
            if(err){
                console.log(err);
                res.end(err);

            }
            else{
                res.render('list/edit', {title: 'Edit a tournament', tournament:TournamentListToEdit, displayName : req.user?req.user.displayName : ''});
            }

        });
    }
    module.exports.processEditPage = (req,res,next)=>{

        let id= req.params.id;

    let updatedList = Tournament_List({  
        "_id": id,
        "name": req.body.name,
        "Location": req.body.location,
        "EntryFee": req.body.entryfee,
        "StartDate":req.body.startdate
    });

    Tournament_List.updateOne({_id:id},updatedList, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/tournament-list');
        }
    });
    }

    module.exports.performDelete = (req, res, next) => {
        let id = req.params.id;
        Tournament_List.remove({_id:id}, (err) =>{
           if(err){
               console.log(err);
               res.end(err);
           }
           else{
               res.redirect('/tournament-list');
           }
        });
    }