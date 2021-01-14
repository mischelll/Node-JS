const url = require('url');
const fs = require('fs');

function getContentType(pathname) {
    console.log(pathname)
    if (pathname.endsWith('css')) {
        return 'text/css';
    } else if (pathname.endsWith('html')) {
        return 'text/html';
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
console.log(pathname)
    if (pathname.startsWith('/cats/content') && req.method === 'GET') {
        fs.readFile(`../${pathname}`, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not found');
                res.end();
                return;
            }
            console.log(pathname)
            console.log(getContentType(pathname))
            res.writeHead(200, {
                'Content-Type': getContentType(pathname)
            });
            res.write(data);
            res.end();

        })
    } else {
        return true;
    }
}