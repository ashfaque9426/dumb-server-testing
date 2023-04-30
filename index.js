const express = require('express');
const app = express();
const port = process.env.PORT || 5555;
const cors = require('cors');
const newsData = require('./data/news.json');
const categoryData = require('./data/categories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('dumb server is running');
})

app.get('/news', (req, res) => {
    res.send(newsData);
})

app.get('/categories', (req, res) => {
    res.send(categoryData);
})

app.listen(port, ()=> console.log(`dumb server is running on port ${port}`));