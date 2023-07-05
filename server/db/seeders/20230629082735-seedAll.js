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
          title: 'Бег в Вулканном',
          body: 'Традиционные летние соревнования по легкой атлетике "Путь к Олимпу" для любителей. Возможность посоперничать за медали "Гераклиона" и показать свои личные рекорды на сертифицированной беговой дорожке стадиона "Салют Гераклион", а к тому же быть совсем рядом, в одних соревнованиях со звездами российской и мировой легкой атлетики.',
          img: '1688050241025.webp',
          date: '2023-06-30',
          time: '06:30',
          count_user: 200,
          geo: '55.707751485245595 37.51275420429619',
          manager_id: 1,
          event_status: true,
          event_archive: false,
          subscribe: 10,
          address: 'поселок Вулканный, Камчатский край',
        },
        {
          title: 'Пробежка в Сибирячихе',
          body: 'Традиционные летние соревнования по легкой атлетике "Путь к Олимпу" для любителей. Возможность посоперничать за медали "Гераклиона" и показать свои личные рекорды на сертифицированной беговой дорожке стадиона "Салют Гераклион", а к тому же быть совсем рядом, в одних соревнованиях со звездами российской и мировой легкой атлетики.',
          img: '1688050241025.webp',
          date: '2023-08-20',
          time: '06:30',
          count_user: 200,
          geo: '55.707751485245595 37.51275420429619',
          manager_id: 1,
          event_status: true,
          event_archive: false,
          subscribe: 0,
          address: 'Сибирячиха — село Солонешенского района Алтайского края',
        },
        {
          title: 'Сбор бегунов в Солонешном',
          body: 'Традиционные летние соревнования по легкой атлетике "Путь к Олимпу" для любителей. Возможность посоперничать за медали "Гераклиона" и показать свои личные рекорды на сертифицированной беговой дорожке стадиона "Салют Гераклион", а к тому же быть совсем рядом, в одних соревнованиях со звездами российской и мировой легкой атлетики.',
          img: '1688050241025.webp',
          date: '2023-07-10',
          time: '06:30',
          count_user: 100,
          geo: '55.707751485245595 37.51275420429619',
          manager_id: 1,
          event_status: true,
          event_archive: false,
          subscribe: 5,
          address: 'Солонешное — село Солонешенского района Алтайского края',
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
