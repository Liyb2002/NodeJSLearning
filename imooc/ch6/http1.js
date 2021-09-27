const http =require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode=200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('hoo');
  res.write('</body>');
  res.write('</html>');
  res.end('Hello World \n');
});

server.listen(port, hostname, () =>{
  console.log('server running at:// ${chalk.green (${hostname},${port})}');
});