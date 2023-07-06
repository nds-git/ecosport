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
          title: 'Эко забег вокруг вулкана',
          body: 'Если хотите узнать как выглядит настоящая красота - вам на Камчатку. Но есть нюас..Много туристов оставляют мусор прям у подножья Авачинского вулкана. Давайте соберемся вместе и устроим настоящий беговой праздник, а заодно почистим карму и планету от мусора!',
          img: '1688633772308.webp',
          date: '2023-09-30',
          time: '11:30',
          count_user: 100,
          geo: '53.215717170924165 158.82251141658028',
          manager_id: 1,
          event_status: true,
          event_archive: false,
          subscribe: 10,
          address: 'поселок Вулканный, Камчатский край, Елизовский район',
        },
        {
          title: 'Пробежка вокруг села Сибирячиха',
          body: 'Горы, реки, пещеры и исторические места силы древних скифов привлекают туристов. Но за все нужно платить..Много людей - горы мусора. Давайте наведем порядок вместе.',
          img: '1688633586295.webp',
          date: '2023-08-20',
          time: '06:30',
          count_user: 200,
          geo: '51.75076165537616 84.03926251521342',
          manager_id: 1,
          event_status: true,
          event_archive: false,
          subscribe: 12,
          address: 'Алтайский край, Солонешенский район, село Сибирячиха',
        },
        {
          title: 'Сбор бегунов в Одинцово',
          body: 'Одинцово - современный пригород Москвы. Прекрасный парк им.Героя России Л.Лазутиной привлекает спортсменов и туристов. Предлагаю собраться и организовать массовый забег - плогинг. Пробеждаться и собрать бытовые отходы!',
          img: '1688631728674.webp',
          date: '2023-08-10',
          time: '10:30',
          count_user: 100,
          geo: '55.69141088014627 37.249071964846415',
          manager_id: 1,
          event_status: true,
          event_archive: false,
          subscribe: 5,
          address: 'Московская область, Одинцовский городской округ, город Одинцово',
        },
        {
          title: 'Собираемся в Измайловском парке',
          body: 'Крупнейший из городских парков Европы. Особо охраняемая природная территория, подведомственная Государственному природоохранному бюджетному учреждению «Мосприрода», относящемуся к Департаменту природопользования и охраны окружающей среды города',
          img: '1688634488840.webp',
          date: '2023-08-10',
          time: '10:30',
          count_user: 100,
          geo: '55.77287694343349 37.7776898816226',
          manager_id: 1,
          event_status: true,
          event_archive: false,
          subscribe: 5,
          address: 'Москва, природно-исторический парк Измайлово',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Sponsors',
      [
        {
          name: 'Abibas',
          title: 'Abibas corp',
          body: 'корпорация Abibas',
          message: 'Хотим стать вашим спонсором',
          email: 'abibas@abibas.ru',
          logo: '1688642105972.webp',
        },
        {
          name: 'Noname',
          title: 'Noname corp',
          body: 'корпорация Noname',
          message: 'Хотим стать вашим спонсором',
          email: 'noname@noname.ru',
          logo: '1688642236853.webp',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'EventsSponsors',
      [
        {
          sponsor_id: 1,
          event_id: 1,
          sponsor_status: false,
        },
        {
          sponsor_id: 2,
          event_id: 2,
          sponsor_status: false,
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
