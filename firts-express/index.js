const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('we got request');
//     res.send('<h1>Hello Express</h1>');
// });

app.get('/',(req, res) => {
    res.send('homepage');
});

app.get('/cats',(req, res) => {
    res.send('Ini adalah halaman cats');
});

app.get('/about',(req, res) => {
    res.send('Ini adalah halaman about');
});

app.get('/blog/:judul',(req, res) => {
    const { judul } = req.params;
    res.send(`ini adalah halaman dengan judul ${judul}`);
});

app.get('/blog/:category/:judul/:author',(req, res) => {
    const { category, judul, author} = req.params;
    res.send(`ini adalah halaman dengan judul ${judul} dan author ${author}`);
});

app.get('/search', (req, res) =>{
    // console.log(req.query);
    const { q } = req.query;
    if(!q){
        res.send('tidak ada data yang dicari');
    }
    res.send(`<h1>keyword : ${q}</h1>`);
});

app.get('*', (req, res) =>{
    res.send('halaman tidak ditemukan');
});

app.listen(8080, () =>{
    console.log('Server is running on http://localhost:8080');
});