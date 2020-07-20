import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const { createServer } = require('https')
const { readFileSync } = require('fs')
const ssl_port = 3000

const options = {
  // The path & file names could be different.
  key: readFileSync('/Users/iliapikulev//Development/selfsigned.key'),
  cert: readFileSync('/Users/iliapikulev//Development/selfsigned.crt')
}

const { handler } = polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .get('*', (req, res) => {
    res.end(`POLKA: Hello from ${req.pathname}`)
  })

createServer(options, handler).listen(ssl_port, _ => {
  console.log(`> Running on https://localhost:${ssl_port}`)
})


// polka() // You can also use Express
//   .use(
//     compression({ threshold: 0 }),
//     sirv('static', { dev }),
//     sapper.middleware()
//   )
//   .listen(PORT, err => {
//     if (err) console.log('error', err);
//   });
