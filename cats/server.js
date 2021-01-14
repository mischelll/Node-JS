const {http, port} = require('./config/config');
const handlers = require('./handlers');



http.createServer((req,res) => {
    for (const handler of handlers) {
        if(!handler(req,res)){
            break;
        }
    }
}).listen(port);

console.log("Node server running on port 3000...")