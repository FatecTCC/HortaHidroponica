const router = require('express').Router();
const bodyParser = require('body-parser');
const Usuario = require('../models/usuario');
var mongoose = require('mongoose');

var errorMsg = [{msg: ''}];
var success = {msg: ''};

var urlencodedParser = bodyParser.urlencoded({extended: false});

//GET REQUESTS
router.get('/home', function(req, res){
    res.render('home', {data: ''});
});

router.get('/register', function(req, res){
    res.render('register', {error: errorMsg, success: success});
});

//POST REQUESTS
router.post('/register', urlencodedParser, function(req, res){
    Usuario.find({email: req.body["email"]}).then(function(result){
        if (result.length == 0){
            var newUser = new Usuario({
                nome: req.body["nome"],
                senha: req.body["senha"],
                email: req.body["email"],
                estado: req.body["estado"],
                hortas: []

            });

            Usuario.createUser(newUser, function(err, user){
                if (err) throw err;
                console.log(err);
            });

            success.msg = 'Successfully Registered!!';
            res.redirect('home');
        }
        else{
            errorMsg.msg = "Esse e-mail já foi cadastrado!";
            res.render('register', {error: errorMsg});
        }
    });
});

router.post('/formHorta', urlencodedParser, function(req, res) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var mmm = today.getMinutes();
    var ss = today.getSeconds();
    today = mm + '/' + dd + '/' + yyyy + "-" + hh + ":" + mmm + ":" + ss;

    Usuario.findOne({nome: req.user.nome}).then(function(result){
        result.hortas.push({
            data: today
        });

        hortaId = result.hortas[result.hortas.length-1]["id"];
        console.log("Esse eh o numero da sua horta! " + hortaId);
        result.save();
        res.redirect('/profile/');
    });

     //generate a random number of garden
     //console.log(randomNumber);
     //search on database if there is such a number 
    // Usuario.find({}).then(function(Cliente){
     //   console.log(Cliente);
     //});
     //if there isnt, create
    
     //else generate new number
});


//GET API
router.get('/api/usuarios', function(req, res){
    Usuario.find({}).then(function(result){
        res.json(result);
    });
}); 


router.get('/api/userlogged', function(req, res){
    if(req.user !== undefined){
        res.json(req.user);
    }
    else{
        res.send("Nenhum resultado obtido");
    }
});

//DELETE API
router.delete('/api/usuarios/:id', function(req, res){
    Usuario.findOneAndDelete({_id: req.params.id}).then(function(data){
       res.send(data);
    });
});

router.delete('/deleteHorta/:id', function(req, res){
    Usuario.findById({_id: req.user.id}).then(function(user){
        newHortas = user.hortas.filter(hortas => {
            return hortas.id !== req.params.id
        });
        user.hortas = newHortas;
        user.save();
        res.json(newHortas);
     });
});


module.exports = router;