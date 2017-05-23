const pg = require("pg");
const settings = require("./settings");
require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});

const first_name = process.argv[2];
const last_name = process.argv[3];
const date = process.argv[4];


const query = knex("famous_people").insert({
  first_name: first_name,
  last_name: last_name,
  birthdate: date
}).asCallback(function (err, rows) {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully added");
    knex.destroy();
  }
});