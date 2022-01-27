const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = new Router();
const mysql = require('mysql');

//conexion bases datos//

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lorena_aiello'
});
conn.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida...');
});

router.get('/nuestrosProductos', (req, res) => {
    let sql = "SELECT * FROM productos";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('productos', {
            results: results,
            titulo:'Teutonico Uniformes: Nuestros Productos',
        });
    });
});


//handlebars//
router.get('/',(req, res)=>{ 
  res.render('home', { 
      titulo: 'Teutonico Uniformes'
  });  
});

router.get('/nosotros',(req, res)=>{ 
    res.render('nosotros', { 
        titulo: 'Teutonico Uniformes: Nosotros'
    });  
});

  router.get('/contacto',(req, res)=>{ 
    res.render('contacto', { 
        titulo: 'Teutonico Uniformes: Contactanos'
    });  
  });

  //nodemailer
  router.post('/send-email', (req, res) => {
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



module.exports = router;
