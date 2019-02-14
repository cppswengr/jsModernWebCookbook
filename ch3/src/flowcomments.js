// Source file: src/flowcomments.js

let someFlag /*: boolean */;
let greatTotal /*: number */;
let firstname /*: string */;

function toString(x /*: number */)  /*: string */ {
  return String(x);
}

let traffic /*: "red" | "amber" | "green" */;

/*::
type pair<T> = (T, T);
type pairOfNumbers = pair<number>;
type pairOfStrings = pair<string>;

type simpleFlag = number | boolean;

type complexObject = {
  id: string,
  name: string,
  indicator: simpleFlag,
  listOfVales: Array<number>
};
*/

class Person {
  /*::
  first: string;
  last: string;
  */

  constructor(first /*: string */, last /*: string */) {
    this.first = first;
    this.last = last;
  }

  // ...several methods, snipped out
}

// continues ...

/*::
import type { dniType, nameType } from "./opaque_types";
 */

/*::
export type { pairOfNumbers, pairOfStrings };
 */


