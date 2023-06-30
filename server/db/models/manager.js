const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Manager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event }) {
      this.hasMany(Event, { foreignKey: 'manager_id' });
    }
  }
  Manager.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roles_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Manager',
    },
  );
  return Manager;
};
