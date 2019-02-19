// Source file: src/zip_files.js

const zlib = require("zlib");

const fs = require("fs");

const inputStream = fs.createReadStream(
    "home/fkereki/Documents/CHURCHES = Digital Taxonomy.pdf"
);

const gzipStream = zlib.createGzip();

const outputStream = fs.createWriteStream(
    "home/fkereki/Documents/CHURCHES.gz"
);

inputStream.pipe(gziptStream).pipe(outputStream);

