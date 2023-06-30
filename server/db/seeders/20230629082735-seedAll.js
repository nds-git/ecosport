/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          role: 'admin',
        },
        {
          role: 'manager',
        },
        {
          role: 'moderator',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Managers',
      [
        {
          name: 'Иван',
          email: 'ivan@ivan.com',
          password: '123',
          roles_id: 2,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Events',
      [
        {
          title: 'Бег в коломенском',
          body: 'Традиционные летние соревнования по легкой атлетике "Путь к Олимпу" для любителей. Возможность посоперничать за медали "Гераклиона" и показать свои личные рекорды на сертифицированной беговой дорожке стадиона "Салют Гераклион", а к тому же быть совсем рядом, в одних соревнованиях со звездами российской и мировой легкой атлетики.',
          img: '1688050241025.webp',
          date: '2023-06-30',
          time: '06:30',
          count_user: 200,
          geo: '55.720950, 37.391266',
          manager_id: 1,
          event_status: true,
          event_archive: false,
        },
        {
          title: 'Бег в Одинцово',
          body: 'Традиционные летние соревнования по легкой атлетике "Путь к Олимпу" для любителей. Возможность посоперничать за медали "Гераклиона" и показать свои личные рекорды на сертифицированной беговой дорожке стадиона "Салют Гераклион", а к тому же быть совсем рядом, в одних соревнованиях со звездами российской и мировой легкой атлетики.',
          img: '1688050241025.webp',
          date: '2023-08-20',
          time: '06:30',
          count_user: 200,
          geo: '55.720950, 37.391266',
          manager_id: 1,
          event_status: true,
          event_archive: false,
        },
        {
          title: 'Бег в коломенском',
          body: 'Традиционные летние соревнования по легкой атлетике "Путь к Олимпу" для любителей. Возможность посоперничать за медали "Гераклиона" и показать свои личные рекорды на сертифицированной беговой дорожке стадиона "Салют Гераклион", а к тому же быть совсем рядом, в одних соревнованиях со звездами российской и мировой легкой атлетики.',
          img: '1688050241025.webp',
          date: '2023-07-10',
          time: '06:30',
          count_user: 100,
          geo: '55.720950, 37.391266',
          manager_id: 1,
          event_status: true,
          event_archive: false,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
