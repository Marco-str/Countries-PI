const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    
    sequelize.define('Tourist_activities', {

        
  activity_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      }, 
  
  name: {

    type: DataTypes.STRING,
    allowNull: false,
    
  },

  description: {

    type: DataTypes.STRING,
  },
  
 dificultad: {

    type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    allowNull: false,
  },    

  duracion: {

    type: DataTypes.INTEGER,
  },

  temporada:{

    type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
    allowNull: false,

  },

  
  created: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  
    },{
        timestamps: false
      }
  );
};