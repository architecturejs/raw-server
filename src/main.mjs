import http from 'http';

import { PORT } from './constants/index.mjs';

(function main() {
  const server = http.createServer(function server(req, res) {
    res.end('raw server');
  });

  server.listen(PORT, function serverListener() {
    console.log(`server listening at port: ${PORT}`)
  });
}());