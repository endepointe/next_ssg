const pgp = require('pg-promise')({
  disconnect(client, dc) {
    // console.log('DISCONNECTCLIENT: ' + client,'\nDISCONNECTDC: ' + dc);
    const cp = client.connectionParameters;
    console.log('Disconnecting from database:', cp.database);
  }
});

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'dbadmin',
  user: process.env.PSQLUSER,
  password: process.env.PSQLPASS,
  max: 1 // use up to 30 connections
}

const db = pgp(cn);

module.exports = { db };