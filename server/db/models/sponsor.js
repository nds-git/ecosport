const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sponsor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event }) {
      this.belongsToMany(Event, { through: 'EventsSponsors', foreignKey: 'sponsor_id' });
    }
  }
  Sponsor.init(
    {
      name: DataTypes.STRING,
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      message: DataTypes.STRING,
      email: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sponsor',
    },
  );
  return Sponsor;
};
