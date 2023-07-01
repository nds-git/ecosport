require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiPostRouter = require('./routes/apiPostRouter');
const sessionParser = require('./middlewares/sessionMiddle');
const apiAuthRouter = require('./routes/apiUserRouter');
const apiEventRouter = require('./routes/apiEventRouter');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(sessionParser);

app.use('/api/posts', apiPostRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/api/events', apiEventRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
