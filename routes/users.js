var express = require('express');
var router = express.Router();
var User = require('../models/user');


//*************************//
/*Nos registramos en la web*/
//*************************//
router.post('/register', function (req, res) {

    console.log('POST /user');
    console.log(req.body);

    var user = new User({
        name: req.body.name,
        role: req.body.role,
        password: req.body.password,
        email: req.body.email
    });

    console.log('\n');
    console.log("Devuelve el user registrado");

    user.save(function (err, user) {
        if (err) return res.status(500).send(err.message);
        console.log(user);
        res.status(200).jsonp(user);
    });
});

//***********************//
/*Nos logueamos en la web*/
//***********************//
router.post('/login', function (req, res) {

    console.log('LOGIN /user');
    console.log("Comprueba si la contraseña es correcta");

    User.findOne({email: req.body.email}, function (err, user) {
        if (err) res.send(500, err.message);

        else if (user == null) {
            console.log("No existe el usuario");
            return res.status(404).jsonp({"loginSuccessful": false, "email": req.body.email});
        }
        else {
            console.log(user);

            var usuario = JSON.stringify(user);
            var trozos = usuario.split(",");
            var role = JSON.stringify(req.body.role);
            var password = trozos[4].split(":");
            var pwd2 = password[1];
            var pwd1 = JSON.stringify(req.body.password);

            console.log("Password del login: " + pwd2);
            if (pwd1 == pwd2 && role == "master") {
                console.log("Login Correcto");
                return res.status(200).jsonp({"loginSuccessful": true, "user": user});
                res.redirect('Canvas/Master')
            }
            else if( pwd1 == pwd2 && role == "slave") {
                console.log("Login Correcto");
                return res.status(200).jsonp({"loginSuccessful": true, "user": user});
                res.redirect('Canvas/Slave')
            }
            else {
                console.log("Contraseña erronea");
                return res.status(404).jsonp({"loginSuccessful": false, "email": req.body.email});
            }
        }
    });
});

module.exports = router;


