/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
const apiSponsorRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');
const { Sponsor } = require('../db/models');
const upload = require('../middlewares/multerMid');

// Роут вытащить конкретных спонсоров для конкретного события
apiSponsorRouter.get('/', async (req, res) => {
  try {
    const sponsor = await Sponsor.findAll();
    res.json(sponsor);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Роут на добавление нового спонсора
apiSponsorRouter.post('/new', upload.single('file'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }
  try {
    // создаем имя файла с расширением webp и привязкой к дате
    const fileName = `${Date.now()}.webp`;
    // создаем буфер с помощью sharp
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    // создаем файл с помощью fs
    await fs.writeFile(`./public/img/sponsors/${fileName}`, outputBuffer);
    // создаем пост в бд

    const { title, name, body, message, email } = req.body;

    const sponsor = await Sponsor.create({
      title,
      name,
      body,
      message,
      email,
      img: fileName,
    });
    // отправляем пост
    res.json(sponsor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = apiSponsorRouter;
