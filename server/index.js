const express = require('express');
const app = express();
const path = require ('path');

const publicFolder = path.join(__dirname, '../', 'dist');
const publicHTML = path.join(publicFolder, 'index.html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(publicFolder));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const PORT = 3007;

app.listen(PORT, () => {
  console.log('Proxy server running on port:', PORT);
});

app.get('/', (req, res) => {
  res.send(publicHTML);
});