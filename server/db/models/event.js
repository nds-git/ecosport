const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Manager, User }) {
      this.belongsTo(Manager, { foreignKey: 'manager_id' });
      this.belongsToMany(User, { through: 'EventsUsers', foreignKey: 'event_id' });
    }
  }
  Event.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      img: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      count_user: DataTypes.INTEGER,
      geo: DataTypes.STRING,
      manager_id: DataTypes.INTEGER,
      event_status: DataTypes.BOOLEAN,
      event_archive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Event',
    },
  );
  return Event;
};
