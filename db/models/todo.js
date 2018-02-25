module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    isCompleted: DataTypes.BOOLEAN,
  }, {});
  Todo.associate = function () {
    // associations can be defined here
  };
  return Todo;
};
