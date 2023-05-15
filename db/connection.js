// toda la data en https://www.npmjs.com/package/mssql

const sql = require('mssql')


/* user: 'sa',
password: 'nico1993' */

const sqlConfig = {
  user: 'Crrconsultas',
  password: 'Resistencia34',
  database: 'BaseResistencia',
  server: '192.168.1.4',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}


// Genero un pool de conexiones con esta funcion y la llamo.
async function getConnection() {
 try {

  const pool = await sql.connect(sqlConfig)
  //console.log('POOL DB CONECTADA AMIGO')
  return pool

 } catch (err) {
  console.log('ERROR EN LA CONEXION DB AMIGO')
 }
};

module.exports = { getConnection }

