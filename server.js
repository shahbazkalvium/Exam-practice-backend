const express = require('express');
const router = require('./Router/router');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/router', require('./Router/router'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});