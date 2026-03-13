const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'tes.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error: File tes.html tidak ditemukan, Boss!');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('====================================');
    console.log('   IQ TEST WEB BY REZINX IS LIVE   ');
    console.log(`   Link: http://localhost:${PORT}   `);
    console.log('====================================');
});
