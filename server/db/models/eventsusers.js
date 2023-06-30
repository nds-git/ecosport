const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventsUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  EventsUsers.init(
    {
      event_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'EventsUsers',
    },
  );
  return EventsUsers;
};
