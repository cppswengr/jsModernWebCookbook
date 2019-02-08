/* @flow */

function foo(x: ?numer): string {
  if (x) {
    return x;
  } else {
    return "some string";
  }
}

console.log(foo("x"));