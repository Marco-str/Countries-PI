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



// Syncing all the models at once.

/*
force true: borra la base de datos y la vuelve a crear, 
force false: no borra la base de datos y la vuelve a crear, 
force: true es para cuando se cambia algo en la base de datos, 
force: false es para cuando no se cambia nada en la base de datos,
alter: true es para cuando se cambia algo en la base de datos, y no borra la base de datos, 
alter: false es para cuando no se cambia nada en la base de datos,  ,
*/
conn.sync({ alter: true }) 

.then( async () => {
 
 await saveApiData();
  
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
})
.catch((error) => console.log(error));
