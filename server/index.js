const express = require('express');
const session = require('express-session');
const app = express();
const cors = require('cors')
const router = require('./router');
const PORT = 3001
const mongoConnection = require('./models/index')

app.use(express.json());
app.use(cors({origin: '*'}));
app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: "not secure!",
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      httpOnly: false,
      secure: false,
    },
  })
);

app.use(router);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`);
  } else {
    console.log(`🚀 Server is listening on port ${PORT}!`);
  }
});