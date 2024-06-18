module.exports = (sequelize, DataTypes) =>{

  const Projects = sequelize.define("Projects",{
    project_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    project_name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    project_description:{
      type: DataTypes.TEXT,
    },
    project_start_date:{
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return Projects;
};