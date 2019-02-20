// Source file: src/zip_send.js

const zlib = require("zlib");
const fs = require("fs");

const http = require("http");

http.createServer(function(request, response) {
  // Tell the client, this is a zip file.

  response.writeHead(200, {
    "Content-Type": "application/zip",
    "Content-disposition": "attachment; filename=data_analysis_python.gz"
  });

  const inputStream = fs.createReadStream(
      "/home/hittinemup/documents/eBooks/python/DATA_ANALYSIS_WITH_PYTHON.pdf"
  );

  const gzipStream = zlib.createGzip();

  inputStream.pipe(gzipStream).pipe(response);
}).listen(8080, "localhost");