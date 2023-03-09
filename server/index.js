const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./router');
const mongoConnection = require('./models/index')

app.use(express.json());
app.use(cors({origin: '*'}));
app.use(router);

app.listen(3001, () => {
  console.log("Listening");
});