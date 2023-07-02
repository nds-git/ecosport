const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventsSponsors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventsSponsors.init(
    {
      sponsor_id: DataTypes.INTEGER,
      event_id: DataTypes.INTEGER,
      sponsor_status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'EventsSponsors',
    },
  );
  return EventsSponsors;
};
