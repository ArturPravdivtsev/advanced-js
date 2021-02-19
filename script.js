const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    let body = null

    try {
        if(req.url === '/' || req.url === '/favicon.ico') {
            body = fs.readFileSync('./public/index.html', 'utf8')
        } else if(req.url.indexOf("jpeg") !== -1) {
            res.writeHead(200,{'Content-type':'image/jpg'});
            body = fs.readFileSync(`./public${req.url}`)
        } else {
            body = fs.readFileSync(`./public${req.url}`, 'utf8')
        }
    } catch (error) {
        body = fs.readFileSync('./public/index.html', 'utf8')
    }
    

    res.end(body)
})

server.listen(process.env.PORT || 3000);

console.log('Server started!');