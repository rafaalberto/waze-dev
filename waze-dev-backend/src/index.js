const express = require('express');
const http = require('http');
const app = express();
const server = http.Server(app);

const cors = require('cors');
const routes = require('./routes');

require('./database');

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333, () => console.log('server running'));