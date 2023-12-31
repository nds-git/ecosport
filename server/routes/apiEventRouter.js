/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
const apiEventRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');
const { Event, Garbage, Sponsor, FotoEvents } = require('../db/models');
const upload = require('../middlewares/multerMid');

// Роут на все события
apiEventRouter.get('/', async (req, res) => {
  try {
    const events = await Event.findAll({ where: { event_archive: false } });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут для пагинации
apiEventRouter.get('/page/:page', async (req, res) => {
  const { page } = req.params; // Номер текущей страницы

  // Делаем для пагинации
  const limit = 6; // Количество записей на странице
  // const limit = 3; // Количество записей на странице
  const offset = limit * (page - 1); // сколько записей нужно пропустить для текущей страницы.

  try {
    const events = await Event.findAndCountAll({
      order: [['updatedAt', 'DESC']],
      where: { event_archive: false },
      limit,
      offset,
    });
    console.log('events-->', events);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на количество мусора
apiEventRouter.get('/garbageTotal', async (req, res) => {
  try {
    const result = await Garbage.sum('total');
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на личный кабинет - события одного организатора
apiEventRouter.get('/account', async (req, res) => {
  try {
    const events = await Event.findAll({
      order: [['createdAt', 'DESC']],
      where: { manager_id: req.session.user.id, event_archive: false },
    });
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на получение архивных событий конкретного организатора
apiEventRouter.get('/archive', async (req, res) => {
  try {
    const events = await Event.findAll({
      where: { manager_id: req.session.user.id, event_archive: true },
    });
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error archive' });
  }
});

// Роут на получение топ-3 архивных событий
apiEventRouter.get('/archive/top', async (req, res) => {
  try {
    const events = await Event.findAll({
      limit: 3,
      where: { event_archive: true },
      order: [['garbage', 'DESC']],
    });
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error archive' });
  }
});

// Роут на получение всех архивных событий
apiEventRouter.get('/archive/all', async (req, res) => {
  try {
    const events = await Event.findAll({
      where: { event_archive: true },
      order: [['date', 'DESC']],
    });
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error archive' });
  }
});

// Роут на получение одного события
apiEventRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findOne({
      where: { id },
      include: [
        {
          model: Sponsor,
        },
      ],
    });
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на получение одного архивного события ---> OneArchEventPage
apiEventRouter.get('/archive/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findOne({
      where: { id },
      include: [
        {
          model: FotoEvents,
        },
      ],
    });
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на добавление нового события
apiEventRouter.post('/new', upload.single('file'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }
  try {
    // создаем имя файла с расширением webp и привязкой к дате
    const name = `${Date.now()}.webp`;
    // создаем буфер с помощью sharp
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // создаем файл с помощью fs
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    // создаем пост в бд

    const { title, body, date, time, geo, count_user, address } = req.body;

    const event = await Event.create({
      title,
      body,
      date,
      time,
      geo,
      address,
      img: name,
      count_user,
      manager_id: req.session.user.id,
      event_status: true,
    });
    // отправляем пост
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на удаление события
apiEventRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    res.status(400).json({ message: 'Bad request id' });
    return;
  }
  try {
    const event = await Event.findOne({ where: { id } });
    const eventPhotos = await FotoEvents.findAll({ where: { event_id: id } });
    eventPhotos.forEach((el) => {
      fs.unlink(`./public/img/${el.img}`).catch((error) => console.log(error));
    });
    if (!event) {
      res.status(400).json({ message: 'event not found' });
      return;
    }
    fs.unlink(`./public/img/${event.img}`).catch((error) => console.log(error));
    await event.destroy();
    res.json({ message: 'Post deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на изменение события
apiEventRouter.patch('/:id', upload.single('file'), async (req, res) => {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    res.status(400).json({ message: 'Bad request id' });
    return;
  }
  // if (!req.file) {
  //   res.status(400).json({ message: 'No file uploaded' });
  //   return;
  // }
  try {
    console.log(req.body);
    // const name = `${Date.now()}.webp`;
    // const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // await fs.writeFile(`./public/img/${name}`, outputBuffer);
    const { title, body, date, time, geo, count_user, address } = req.body;
    await Event.update(
      {
        title,
        body,
        date,
        time,
        geo,
        count_user,
        address,
      },
      { where: { id } },
    );
    const event = await Event.findOne({ where: { id } });
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

apiEventRouter.patch('/:id/archive', upload.array('file'), async (req, res) => {
  const { id } = req.params;
  const { garbage } = req.body;

  try {
    await Promise.all(
      req.files.map(async (file) => {
        const name = `${Date.now()}+${Math.round(Math.random() * 1e9)}.webp`;
        const outputBuffer = await sharp(file.buffer).webp().toBuffer();
        await fs.writeFile(`./public/img/${name}`, outputBuffer);
        const eventPhoto = await FotoEvents.create({
          img: name,
          event_id: id,
        });
        console.log(eventPhoto);
      }),
    );

    const event = await Event.findOne({ where: { id } });
    if (!event) {
      res.status(400).json({ message: 'event not found' });
      return;
    }
    event.event_archive = true;
    event.garbage = garbage;
    await event.save();

    await Garbage.create({ total: garbage });
    res.json({ message: 'event status archived' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = apiEventRouter;
