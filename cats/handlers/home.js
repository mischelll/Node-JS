const fs = require('fs');
const url = require('url');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    
    if (pathname === '/' && req.method === 'GET') {

        const homePage = fs.readFileSync('../cats/views/home/index.html', (err, data) => {
            if (err) {
                res.writeHead(404,{
                    'Content-Type': 'text/html'
                });
                res.write('404 Page not found');
                res.end();
                return;
            }
            
            return data;
        });

        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.write(homePage);
        res.end();
    }

}