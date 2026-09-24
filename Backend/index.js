const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');
const allroutes = require('./routes/apiroute');
require('dotenv').config();

const PORT = process.env.PORT

const app = express();

const DatabaseIs = require('./database');

app.use('/api/', allroutes); 

app.use(bodyParser.json());
app.use(Cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

app.get('/api', (req, res) => {
    res.json({ text: 'Message From Backend' });
});