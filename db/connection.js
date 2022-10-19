
// toda la data en https://www.npmjs.com/package/mssql

const sql = require('mssql')

const sqlConfig = {
  user: 'sa',
  password: 'nico1993',
  database: 'BaseResistencia',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}


// Genero un pool de conexiones con esta funcion y la llamo.
async function getConnection() {
 try {

  const pool = await sql.connect(sqlConfig)
  return pool

 } catch (err) {
  console.log('ERROR EN LA CONEXION DB AMIGO')
 }
};

module.exports = {getConnection}

