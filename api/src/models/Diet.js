const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
        autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },{timestamps: false});
};
