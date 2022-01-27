const { Router } = require('express');
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


  //nodemailer
 



module.exports = router;
