// Source file: src/doroundmath.js

/* @flow */
"use strict";

const RM = require("./roundmath.js");

console.log(RM.addR(12.348, 4.221));        // 16.57
console.log(RM.changeSign(0.07));           // error; RM.changeSign is not a function
console.log();