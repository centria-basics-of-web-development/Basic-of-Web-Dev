const http = require('http');
const fs = require('fs');
const port = 9090;
const server = http.createServer(
    (request, response) => {
        if (request.url === '/helloworld') {
            console.log('here is the path [/helloworld]')
            if (request.method === 'GET') {
                console.log('here is the handler for GET method');
                console.log(request.headers['accept']);
                if (request.headers['accept']?.includes('application/json')) {
                    // Return JSON
                    const responseJSON = {
                        "hello": "world",
                        "my": "web"
                    };
                    response.writeHead(200, {'Content-Type': 'application/json'});
                    response.write(JSON.stringify(responseJSON));
                    response.end();
                } else if (request.headers['accept']?.includes('application/xml')) {
                    // Return XML
                    const responseXML = '<hello>world</hello>';
                    response.writeHead(200, {'Content-Type': 'application/xml'});
                    response.write(responseXML);
                    response.end();
                } else {
                    // Return HTML
                    const fileBuffer = fs.readFileSync('./helloworld.html');
                    // response.writeHead(200, {'Content-Type': 'text/plain'});
                    response.writeHead(200);
                    response.write(fileBuffer.toString());
                    response.end();
                }
            } else if (request.method === 'POST') {
                console.log('here is the handler for POST method');
            }
        }
    }
);

server.listen(port);
console.log(`My web server is listening at the port [${port}]`);
