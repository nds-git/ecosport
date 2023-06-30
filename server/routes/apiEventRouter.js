const apiEventRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');
const { Event } = require('../db/models');
const upload = require('../middlewares/multerMid');

// Роут на личный кабинет - события одного организатора
apiEventRouter.get('/account', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на добавление нового события
apiEventRouter.post('/new', upload.single('file'), async (req, res) => {
  console.log(req.body);
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

    const { title, body, date, time, geo, count_user } = req.body;

    const event = await Event.create({
      title,
      body,
      date,
      time,
      geo,
      img: name,
      count_user,
      manager_id: 1,
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
    if (!event) {
      res.status(400).json({ message: 'event not found' });
      return;
    }
    // fs.unlink(`./public/img/${event.img}`).catch((error) => console.log(error));
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
    // const name = `${Date.now()}.webp`;
    // const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // await fs.writeFile(`./public/img/${name}`, outputBuffer);
    const { title, body, date, time, geo, count_user } = req.body;
    await Event.update(
      {
        title,
        body,
        date,
        time,
        geo,
        count_user,
      },
      { where: { id } },
      // { where: { id, userId: req.session.user.id } },
    );
    const event = await Event.findOne({ where: { id } });
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = apiEventRouter;
