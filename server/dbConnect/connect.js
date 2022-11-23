
import mysql from 'mysql2/promise'
import Sequelize from 'sequelize'
import Users from '../model/users.js'
import Books from '../model/books.js'


const db = {}

 const dataBaseTemp = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vsiBiblioteka'
}



 try {
    
    // Creating mysqul data base connection
       const connection = await mysql.createConnection({

    host:dataBaseTemp.host,
    user:dataBaseTemp.user,
    password: dataBaseTemp.password,
   
   
    
})
//Linas apacioje skirtas jei norime ir data base skurti iskarto prie lenteliu
await connection.query('CREATE DATABASE IF NOT EXISTS ' + dataBaseTemp.database)

const sequelize = new Sequelize(dataBaseTemp.database, dataBaseTemp.user, dataBaseTemp.password,{
    dialect: 'mysql'
} )
// Sequelize conection test
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }



db.Users = Users(sequelize)
db.Books = Books(sequelize)


//   dataBa.Users.hasMany(dataBa.Post2, {
//     onDelete: 'RESTRICT',
//     onUpdate: 'RESTRICT'
//   })
//  dataBa.Post2.belongsTo(dataBa.Users)

await sequelize.sync({ alter: false });

} catch (error) {

    console.log(error)
    console.log('Nepavyko su duombaze pacanai');
    
}


export default  db
