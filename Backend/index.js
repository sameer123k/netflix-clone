const express = require('express');
const bodyParser = require('body-parser');
const Cors = require('cors');
const allroutes = require('./routes/apiroute');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(Cors());

const DatabaseIs = require('./database');

app.use('/api', allroutes);

// app.get('/api', (req, res) => {
//     res.json({
//         text: 'Message From Backend'
//     });
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});