const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);

const cors = require('cors');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

setupWebsocket(server);

require('./database');

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333, () => console.log('server running'));