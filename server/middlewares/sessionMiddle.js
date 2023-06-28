const session = require('express-session');
const sessionStore = require('session-file-store');

const Fstore = sessionStore(session);

const sessionParser = session({
  name: 'sId',
  store: new Fstore({}),
  secret: 'mkdfjfsdngjknljpeaaj',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
});

module.exports = sessionParser;
