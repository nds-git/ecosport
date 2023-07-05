const apiAuthRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { Manager, User, EventsUsers, Event } = require('../db/models');

apiAuthRouter.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: 'no user full data' });
    return;
  }
  const searchEmail = await Manager.findOne({
    where: { email },
  });
  if (searchEmail) {
    res.status(400).json({ message: 'email exists' });
    return;
  }
  const hashPass = await bcrypt.hash(password, 10);
  const newUser = await Manager.create({
    name,
    email,
    password: hashPass,
    roles_id: 2,
  });

  req.session.user = { id: newUser.id, name: newUser.name, email: newUser.email };

  res.json({ id: newUser.id, name: newUser.name, email: newUser.email });
});

apiAuthRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'no user full data' });
    return;
  }
  const currentUser = await Manager.findOne({
    where: { email },
  });
  if (!currentUser || !(await bcrypt.compare(password, currentUser.password))) {
    res.status(401).json({ message: 'email not exists' });
    return;
  }

  req.session.user = {
    id: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
  };
  res.json(req.session.user);
});

apiAuthRouter.get('/check', (req, res) => {
  if (!req.session.user) {
    res.status(401).json({ message: 'no cookies' });
    return;
  }
  res.json(req.session.user);
});

apiAuthRouter.delete('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sId');
  res.sendStatus(200);
});

apiAuthRouter.post('/subscribe', async (req, res) => {
  const { name, email, phone, event_id } = req.body;
  console.log('SUBSC ====>', req.body);

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Incomplete subscriber data' });
  }

  try {
    const [subscriber, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, phone },
    });

    if (!created) {
      return res.status(409).json({ message: 'Subscriber with this email already exists' });
    }

    const [event, eventCreated] = await EventsUsers.findOrCreate({
      where: { event_id, user_id: subscriber.id },
      defaults: { event_id, user_id: subscriber.id },
    });

    if (!eventCreated) {
      return res.status(409).json({ message: 'Event already exists' });
    }
    const subscriberCount = await EventsUsers.count({ where: { event_id } });
    console.log('server count ======>',subscriberCount);

    await Event.update(
      {
        subscribe: subscriberCount,
      },
      { where: { id: event_id } },
    );

    return res.json({ message: 'Subscriber successfully added', subscriberCount });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = apiAuthRouter;
