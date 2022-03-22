

let express = require('express');
let mongoose = require('mongoose');
const { findById } = require('../model/tournament');
let router = express.Router();
let passport = require('passport');

let Tournament_List = require('../model/tournament');      
let tournamentController = require('../controllers/tournament');

function requireAuth(req,res,next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}
router.get('/',tournamentController.displayTournamentList);

router.get('/add', requireAuth,tournamentController.displayAddPage);

router.post('/add', requireAuth,tournamentController.processAddPage);


router.get('/edit/:id',requireAuth, tournamentController.displayEditPage);




            router.post('/edit/:id',requireAuth,tournamentController.processEditPage);
        
     router.get('/delete/:id',requireAuth,tournamentController.performDelete );



module.exports= router;