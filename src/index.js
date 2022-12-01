const express = require('express')
const conn = require('./Connection/conn')
const router = require('./Route/Route')
const bodyParser = require('body-parser');
const port = 3000
const app = express()

app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))