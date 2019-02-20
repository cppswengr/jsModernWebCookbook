// Source file: src/zip_files.js

const zlib = require("zlib");

const fs = require("fs");

const inputStream = fs.createReadStream(
    "home/hittinemup/documents/eBooks/python/DATA_ANALYSIS_WITH_PYTHON.pdf"
);

const gzipStream = zlib.createGzip();

const outputStream = fs.createWriteStream(
    "home/hittinemup/documents/eBooks/python/data_analysis_python.gz"
);

inputStream.pipe(gziptStream).pipe(outputStream);

