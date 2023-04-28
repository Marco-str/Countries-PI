
  const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


  module.exports = (sequelize) => {
  
  sequelize.define('Country', {
    
    id: {

      primaryKey: true,
      type: DataTypes.STRING(3),
      
    },  

    name: {

      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    img:{

      type: DataTypes.STRING,
      allowNull: false,
    },

    continente:{

      type: DataTypes.STRING,
      allowNull: false,
    },

    capital:{

      type: DataTypes.STRING,
      //allowNull: false,
    },

    subregion:{

      type: DataTypes.STRING,
    },

    area:{
      
      type: DataTypes.INTEGER,
    },
    
    poblacion:{

      allowNull: false,
      type: DataTypes.INTEGER,
    },

    estadoSoberanoIndependiente:{

      type: DataTypes.STRING,
    },


  }, {
    timestamps: false
  }
  
  );
};


/*sequelize.define('tourist_activities', {

  id: {
      type: DataTypes.INTEGER(11),
      primarykey: true,
      allowNull: false,
      unique: true,
    }, 
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    
   dificultad: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      primarykey: true,
      allowNull: false,
      validate: {
        notIn: {
          args: [['1', '2', '3', '4', '5']],
          msg: 'La dificultad debe ser un numero entre 1 y 5'
        
        isNotHenry: function (value) {
          if (value.toLowerCase() == 'henry') {
            throw new Error('No puede ser Henry!');
        }
      }
    },    

    duracion: {
      type: DataTypes.STRING,
      unique: true,
    },

    temporada:{
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
      unique: true,
      allowNull: false,

    },

    */