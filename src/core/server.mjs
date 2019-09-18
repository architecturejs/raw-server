import http from 'http';

import { PORT } from '../constants/index.mjs';

const server = http.createServer(function server(req, res) {
  res.end('raw server \n');
});

export default server;
