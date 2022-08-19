const mysql= require('mysql');

const conexion=mysql.createConnection({
    host:'consulti.ec',
    port:'9001',
    user:'root',
    password:'consultidev',
    database:'ejosue'
});

conexion.connect((error)=>{
    if(error){
        console.error('el erorr de conexion es:'+error);
        return
    }
    console.log('¡Conectado a la BD Mysql');
});

module.exports=conexion;