require("dotenv").config();
const pg = require("pg");

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./database/migrations" },
  seeds: { directory: "./database/seeds" },
};

module.exports = {
  //locally on PG admin
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  //Deployed
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
};

//users_auth_db
//users_auth_db_testing
