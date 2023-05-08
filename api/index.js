//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');

const { conn } = require('./src/db.js');

const  { saveApiData }  = require('./src/controllers/saveApiData.js');

/***Importar la variable PORT*** */
require('dotenv').config();
const  PORT  = process.env.PORT || 3001;
conn.sync({ force: true }) 

.then( async () => {
 
 await saveApiData();
  
  server.listen(PORT, () => {
    console.log('%s listening at', PORT); // eslint-disable-line no-console
  });
})
.catch((error) => console.log(error));



// Syncing all the models at once.

/*
force true: borra la base de datos y la vuelve a crear, 
force false: no borra la base de datos y la vuelve a crear, 
force: true es para cuando se cambia algo en la base de datos, 
force: false es para cuando no se cambia nada en la base de datos,
alter: true es para cuando se cambia algo en la base de datos, y no borra la base de datos, 
alter: false es para cuando no se cambia nada en la base de datos,  ,
*/