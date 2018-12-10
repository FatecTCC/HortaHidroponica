const router = require('express').Router();
const bodyParser = require('body-parser');
const Usuario = require('../models/usuario');

var urlencodedParser = bodyParser.urlencoded({extended: false});

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

const authCheck = (req, res, next) => {
    if(req.user != null){
        next();
    }
    else{
        res.redirect('/home');
    }
};

router.get("/", authCheck, function(req, res){
    res.render('profile', {user: req.user, msg: ''});
});

router.get("/horta/:id", authCheck, function(req,res){
    console.log(req.params.id);
    const userId = (req.params.id).match(/^[0-9a-f]{24}/)
    const hortaId = (req.params.id).match(/-(.*)$/);

    Usuario.findById(userId).then(user => {
        const horta = user.hortas.find(horta => {
            return horta.id === hortaId[1]
        });
        res.render('hortaSpecs', {horta: horta, user: req.user });
    });
}); 


module.exports = router;