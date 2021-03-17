// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     let body = null

//     try {
//         if(req.url === '/' || req.url === '/favicon.ico') {
//             body = fs.readFileSync('./public/index.html', 'utf8')
//         } else if(req.url.indexOf("jpeg") !== -1) {
//             res.writeHead(200,{'Content-type':'image/jpg'});
//             body = fs.readFileSync(`./public${req.url}`)
//         } else {
//             body = fs.readFileSync(`./public${req.url}`, 'utf8')
//         }
//     } catch (error) {
//         body = fs.readFileSync('./public/index.html', 'utf8')
//     }
    

//     res.end(body)
// })

// server.listen(process.env.PORT || 3000);

// console.log('Server started!');

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/itemslist', (req, res) => {
    fs.readFile('./public/data.json', 'utf8', (err, data) => {
        res.send(data)
    })
});

app.post('/cartlist', (req, res) => {
    const filepath = './public/cart.json';

    fs.readFile(filepath, 'utf8', (err, data) => {
        const list = JSON.parse(data || {});
        const length = Object.keys(list).length;
        console.log(length);
        const newId = length + 1;
        const cartItem = req.body;
        list[newId] = cartItem;
        fs.writeFile(filepath, JSON.stringify(list), (err) => {
            res.send(list)
        });
    })
});

app.listen(process.env.PORT || 4000, () => {
    console.log('Server started');
});
