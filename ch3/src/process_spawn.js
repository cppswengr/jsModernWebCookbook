// Source file: src/process_spawn.js

const path = require("path");
const { spawn } = require("child_process");

const child = spawn("node", [path.resolve("out/process_spawn_dir.js")]);

child.stdin.write("/Users/brandon/dev/jsModernWebCookbook/ch3");

child.stdout.on("data", data => {
    console.log(String(data));
});

child.stdout.on("end", () => {
    child.kill();
});

