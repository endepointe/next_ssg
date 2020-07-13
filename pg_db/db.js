const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('Connected to database: ' + cp.database, '\nDC: ' + dc + '\nuseCount: ' + useCount);
  },
  disconnect(client, dc) {
    // console.log('CLIENT: ' + client,'\nDC: ' + dc);
    const cp = client.connectionParameters;
    console.log('Disconnecting from database:', cp.database);
  }
}

const pgp = require('pg-promise')(initOptions);

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'dbadmin',
  user: process.env.PSQLUSER,
  password: process.env.PSQLPASS,
  max: 1 // use up to 30 connections
}

const db = pgp(cn);

module.exports = db;