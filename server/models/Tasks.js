module.exports = (sequelize, DataTypes) =>{

  const Tasks = sequelize.define("Tasks",{
    task_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    project_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task_title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_description:{
      type: DataTypes.STRING,
    },
    task_finish_date:{
      type: DataTypes.DATE,
      allowNull: false
    },
    task_done:{
      type: DataTypes.BOOLEAN
    }
  });

  return Tasks;
};