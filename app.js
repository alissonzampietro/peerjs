import * as http from "http";
import * as fs from "fs";


const requestListener = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
}

const server = http.createServer(requestListener);
server.listen(8282);