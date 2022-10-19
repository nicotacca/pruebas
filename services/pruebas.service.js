
const { getConnection } = require('./../db/connection.js')

class PruebasService {

  async consulta1() {

    const pool = await getConnection();
    const result = await pool.request().query("SELECT * from stdPacientes sp where sp.sApellidoSoltero = 'tacca'")

    console.log(result)
  }
}

module.exports = PruebasService;
