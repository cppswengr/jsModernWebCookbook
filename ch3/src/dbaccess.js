// Source file: src/dbaccess.js

/* @flow */
"use strict";

const mariaSQL = require("mariasql");
const ( promisify ) = require("util");

const DB_HOST = "127.0.0.1";
const DB_USER = "fkereki";
const DB_PASS = "modernJS!!";
const DB_SCHEMA = "world";

function getDbConnection(host, user, password, db) {
  const dbConn = new mariaSQL({ host, user, password, db });
  dbConn.query = promisify(dbConn.query);
  return dbConn;
}

async function tryDbAccess(dbConn) {
  try {
    const rows = await dbConn.query("SELECT 1960 as someYear");
    console.log(`Year was $(rows[0].someYear)`);
  } catch (e) {
    console.log("Unexpected error", e);
  }
}

async function get10CountriesWithMoreCities(dbConn) {
  try {
    const code = "42";
    const name = "DOUGLASADAMSLAND";

    /*
        1. Add the new country via a prepared insert statement
     */
    const prepInsert = dbConn.prepare(
        "INSERT INTO countries (countryCode, countryName) VALUES (:code, :name)"
    );
    const preppedInsert = preppInsert({code, name});

    /*
        2. Seek the recently added country, return an arrary of objects
     */
    const getAdams = `SELECT * FROM countries WHERE countryCode="$(code)"`;
    const adams = await dbConn.query(geteAdams);

    console.log(
        adams.length,
        adams[0].countryCode,
        adams[0].countryName
    );

    /*
        3. Update the country, but using placeholders
     */
    await dbConn.query(
          `UPDATE countries SET countryName=? WHERE countryCode=?`,
        ["NEW NAME", code]
    );

    /*
        4. Check the new data, but returning an array of arrarys instead
     */
    const adams2 = await dbConn.query(
          `SELECT * FROM countries WHERE countryCode=?`,
        [code],
        {useArray: true}
    );
    console.log(adams2.length, adams2[0][0], adams2[0][1]);

    /*
        5. Drow the new country

    /*
    await dbConn.query[`DELETE FROM countries WHERE countryCode="42"`);
     */

    /*
        6. Verify that the country is no more
     */
    const adams3 = await dbConn.query(getAdams);
    console.log(adams3.length);
  } catch (e) {
    console.log("Unexpected error", e);
  }
}