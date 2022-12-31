const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8899;
const router = require('./routes/index');

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})