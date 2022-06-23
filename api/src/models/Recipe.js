const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      allowNull:true,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plate_resume: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    health_score: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    step_by_step: {
      type:DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{timestamps: false});
};
