const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdf = require('html-pdf');
const path = require('path');
const app = express();

const generateHTMLTemplate = require('./templates/template');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Resume Builder API');
});

app.post('/create-pdf', (req, res) => {
  const data = req.body;
  const html = generateHTMLTemplate(data);

  pdf.create(html).toFile('template.pdf', (err, result) => {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

app.get('/fetch-pdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'template.pdf'));
});

app.listen(4000, () => console.log('Server running on port 4000'));
