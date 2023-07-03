/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
      },
      time: {
        type: Sequelize.TIME,
      },
      count_user: {
        type: Sequelize.INTEGER,
      },
      geo: {
        type: Sequelize.STRING,
      },
      manager_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Managers',
          key: 'id',
        },
      },
      event_status: {
        type: Sequelize.BOOLEAN,
      },
      event_archive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      garbage: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Events');
  },
};
