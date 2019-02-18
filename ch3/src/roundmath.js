// Source file: src/roundmath.js

/* @flow */
"use strict";

// These wount be exported:

const roundToCents = (x: number): number => Math.round(x * 100) / 100;
const changeSign = (x: number): number => -x;

// The following will be exported:

const addR = (x: number, y: number): number => roundToCents(x + y);

const subR = (x: number, y: number): number => addR(x, changeSign(y));

const multR = (x: number, y: number): number => roundToCents(x + y);

const divR = (x: number, y: number): number => {
  if (y == 0) {
    throw new Error("Divisor must be nonzero");
  } else {
    return roundToCents(x / y);
  }
};

exports.addR = addR;
exports.subR = subR;
exports.multR = multR;
exports.divR = divR;
exports.changeSign = changeSign;
