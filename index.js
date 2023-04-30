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

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = newsData.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/categories', (req, res) => {
    res.send(categoryData);
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(id === 0) {
        res.send(newsData)
    }
    else {
        const categoryNews = newsData.filter(n => parseInt(n.category.id === id))
        res.send(categoryNews);
    }
})

app.listen(port, ()=> console.log(`dumb server is running on port ${port}`));