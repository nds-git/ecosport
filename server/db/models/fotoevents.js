const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FotoEvents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event }) {
      this.belongsTo(Event, { foreignKey: 'event_id' });
    }
  }
  FotoEvents.init(
    {
      img: DataTypes.STRING,
      event_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'FotoEvents',
    },
  );
  return FotoEvents;
};
