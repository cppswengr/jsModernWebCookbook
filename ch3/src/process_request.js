// Source file: src/process_request.js

const http = require("http");

http.createServer((req, res) => {
    // For PUT/POST methods, wait until the
    // complete request body has been read.

    if (req.method === "POST" || req.method === "PUT") {
        let body = "";

        req.on("data", data => {
            body += data;
        });

        req.on("end", () => processRequest(req, res, body));
    } else {
        return processRequest(req, res, "");
    }
}).listen(8080, "localhost");

const url = require("url");
const querystring = require("querystring");

function processRequest(req, res, body) {
    /*
    Get parameters, both from the URL and request body
     */

    const urlObj = url.parse(req.url, true);
    const urlParams = urlObj.query;
    const bodyParams = querystring.parse(body);

    console.log("URL OBJECT", urlObj);
    console.log("URL PARAMETERS", urlParams);
    console.log("BODY PARAMETERS", bodyParams);

    /*
    Here you would analyze the URL to decide what is required
    Then you would do whatever is needed to fulfill the request
    Finally, when was ready, results would be sent
    In our case, we just send a FINISHED message
     */

    res.writeHead(200, "OK");
    res.end('FINISHED WITH THE $(req.method) REQUST');
}