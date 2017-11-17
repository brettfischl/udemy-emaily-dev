const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/fart', (req, res) => {
  res.send('hehe');
});

const PORT = process.env.PORT || 5000
app.listen(PORT);
