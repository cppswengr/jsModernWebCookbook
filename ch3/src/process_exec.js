// Source file: src/process_exec.js

/* @flow */
"use strict";

const child_process = require("child_process");
const { promisify } = require("util");
child_process.exec = promisify(child_process.exec);

async function getDirectoryJs(path: string) {

    const cmd = "ls";
    // const args = ["-lda", "-1"];
    const args = ['-l'];
    const options = { cwd: path };

    var spawn = require('child_process').spawn;
    var ls = spawn( 'ls', ['-l'], {cwd: path});

    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    /*
    try {

       const stdout = await child_process.exec( cmd, [args], [options] );
       console.log("OUT", path || "");
       console.log(stdout);

    } catch (e) {

        console.log("ERR", e.stderr);
    }
    */
}

getDirectoryJs("./src");
