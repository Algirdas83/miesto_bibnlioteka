import { DataTypes } from "sequelize"

// const sequelize = new Sequelize("sqlite::memory:")
// Modelio varijantas is sequelize puslapio

const Books = (sequelize) => {

    const Schema ={

        bookTitle:{
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull:false
        },
    
        coverAuthor:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        pages:{
            type:DataTypes.STRING,
            allowNull: false
        },
        category:{
            type: DataTypes.STRING,
            allowNull:false,
            
        }
       
    
    }


    return sequelize.define('books', Schema)
}
      
      


export default Books    

