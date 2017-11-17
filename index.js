const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/hey-sophie', (req, res) => {
  res.send('brett gr8');
});


const PORT = process.env.PORT || 5000
app.listen(PORT);
