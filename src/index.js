const express = require('express');
const cors = require('cors');
const db = require("./models");

const app = express();
const port = 8080;

var corsOptions = {
    origin: '*'
  };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// Prepare DB
db.connection.sync({force: true});

const accountRouter = require('./routes/accountRoutes');
app.use('/account', accountRouter);

const voteRouter = require('./routes/voteRoutes');
app.use('/vote', voteRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Hackathon app listening on port ${port}`)
})