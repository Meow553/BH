const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('.'));
app.use(express.json());

app.get('/data', (req, res) => {
  fs.readFile('lunch.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('讀取失敗');
    res.send(data);
  });
});

app.post('/data', (req, res) => {
  fs.writeFile('lunch.json', JSON.stringify(req.body, null, 2), err => {
    if (err) return res.status(500).send('儲存失敗');
    res.send('儲存成功');
  });
});

app.listen(PORT, () => {
  console.log(`伺服器啟動於 http://localhost:${PORT}`);
});
