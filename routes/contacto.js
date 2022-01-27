const { Router } = require("express");
const nodemailer = require("nodemailer");
const contacto = new Router();

contacto.get('/contacto', (req, res) => {
    res.render('contacto', {
        titulo: 'Teutonico Uniformes: Contactanos'
    });
});

contacto.post('/send-email', (req, res) => {
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let mensaje = req.body.mensaje;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'destiney.schoen99@ethereal.email',
            pass: 'BatX4gx9Ns2maneH12'
        }
    });


    const mailOptions = {
        from: `${correo}`,
        to: 'naranjaspintadas@gmail.com',
        subject: `${nombre} a través de la web`,
        text: `${mensaje}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.menssage);
        } else {
            console.log('Email enviado');
            res.render('emailEnviado', {
                titulo: 'Gracias por contactarnos',
            });
            res.status(200).jsonp(reqbody);
        }
    });
});



module.exports = contacto