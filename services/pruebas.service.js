
const { getConnection } = require('./../db/connection.js')

class PruebasService {

  async consulta1() {

    const pool = await getConnection();
    const turnos = await pool.request().query(`
    select nOrden, nPaciente , LTRIM(RTRIM(sInstitucion)) Obra_Social, LTRIM(RTRIM(sCliente)) AS Cliente, dFechaOrden, dHoraOrden , LTRIM(RTRIM(sObservaciones)) as Observaciones from facOrdenes fo where nOrden BETWEEN 539690 and 539698
    `);

    //console.log(turnos.recordset)

    return turnos.recordset
  }

  
}

module.exports = PruebasService;
