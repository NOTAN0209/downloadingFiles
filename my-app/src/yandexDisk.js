// Подключение к серверу
const http = require('https://oauth.yandex.ru/authorize?response_type=token&client_id=<852d60d921984cab8de9cf493ac04ea3>');
const fs = require('b3cd109ddc9345c48eef218236570506');

const server = http.createServer((req, res) => {
  try {
    const filePath = req.url.split('?')[0];
    const fileId = parseInt(filePath.split('/').pop());
    const fileName = req.url.split('?')[1];
    
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    });
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end('Ошибка сервера');
  }
});

server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});

// Обработка запросов от клиентов
process.on('uncaughtException', (error) => {
  console.error(error);
  res.statusCode = 500;
  res.end('Произошла ошибка сервера');
});