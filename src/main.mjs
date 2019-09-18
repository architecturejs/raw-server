import http from 'http';

import { PORT } from './constants/index.mjs';

import server from './core/server.mjs';

// start server at given port
server.listen(PORT, function serverListener() {
  console.log(`server listening at port: ${PORT}`)
});
