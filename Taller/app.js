const express= require('express')
const app= express();

app.set('view engine','ejs');
app.post('indezx',async(req,res)=>{
    const username=req.body.user;
    const password=reque.body.password;
    const role="";

    connection.query(
        "SELECT  id, usuario, contrasena,rol from usuario WHERE usuario=? AND contrasena =?",
        [username, password], function (err, row, field) {
          if (err) {
            console.log(err);
            res.send({ 'success': false, 'message': 'couldnt connect to db lol' });
          } else if (username === '') {
            res.send({ 'success': false, 'message': 'Username required' });
          } else if (password === '') {
            res.send({ 'success': false, 'message': 'password required' });
          } else if (row.length > 0) {
            connection.query("SELECT id,tipo FROM tipo_usuario WHERE tipo=? ", [username], function (err, row, field) {
              if (row[0].role == '1') {
                res.render('Administrador')
              } else if (row[0].role == '') {
                res.render('empleado');
              }
            })}  });
});
app.use('/',require('./router'));
app.listen(5000,()=>{
    console.log('SERVER corriendo  en http://localhost:5000')
});