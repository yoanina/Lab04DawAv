const http = require('http');
const url = require('url');
const calculadora = require('./modulo_calculadora');
const procesadorTexto = require('./modulo_procesador_texto');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/calculadora') {
    const { op, num1, num2 } = reqUrl.query;
    const result = calculadora[op](num1, num2);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${result}`);
  } else if (reqUrl.pathname === '/procesador-texto') {
    const { text, action } = reqUrl.query;
    const result = procesadorTexto[action](text);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${result}`);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('No encontrado');
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
