/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EventsSponsors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sponsor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sponsors',
          key: 'id',
        },
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'id',
        },
      },
      sponsor_status: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EventsSponsors');
  },
};
