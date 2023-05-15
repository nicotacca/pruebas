
const { getConnection } = require('./../db/connection.js')
const moment = require('moment');


class PruebasService {
  async consulta1() {
    // MomentJS

    const pool = await getConnection();
    const turnos = await pool.request().query(`
    select nOrden, nPaciente , LTRIM(RTRIM(sInstitucion)) Obra_Social, LTRIM(RTRIM(sCliente)) AS Cliente, dFechaOrden, dHoraOrden , LTRIM(RTRIM(sObservaciones)) as Observaciones from facOrdenes fo where nOrden BETWEEN 539690 and 539698
    `);

    //console.log(turnos.recordset)

    // DEVUELVO FECHA FORMATO NO UTC

    /* console.log(moment().format('YYYY-MM-DD', e.dFechaOrden))
      console.log(e.dFechaOrden.format('YYYY-MM-DD')) */

    /* console.log(moment.utc(e.dFechaOrden).format('YYYY-MM-DD'))  // Ejemplo: 15 de mayo de 2023, 10:30:00 UTC */

    //moment.locale('es');
    turnos.recordset.forEach((e) => {
      e.dFechaOrden = moment.utc(e.dFechaOrden).format('YYYY-MM-DD');
    });

    return turnos.recordset;
  }

  async consulta2() {
    // MomentJS

    const pool = await getConnection();
    const turnos = await pool.request().query(`
      select nOrden, nPaciente , LTRIM(RTRIM(sInstitucion)) Obra_Social, LTRIM(RTRIM(sCliente)) AS Cliente, dFechaOrden, dHoraOrden , LTRIM(RTRIM(sObservaciones)) as Observaciones from facOrdenes fo where nOrden BETWEEN 539690 and 539698
      `);

    //console.log(turnos.recordset)

    // DEVUELVO FECHA FORMATO NO UTC

    /* console.log(moment().format('YYYY-MM-DD', e.dFechaOrden))
  console.log(e.dFechaOrden.format('YYYY-MM-DD')) */

    /* console.log(moment.utc(e.dFechaOrden).format('YYYY-MM-DD'))  // Ejemplo: 15 de mayo de 2023, 10:30:00 UTC */

    //moment.locale('es');
    turnos.recordset.forEach((e) => {
      e.dFechaOrden = moment.utc(e.dFechaOrden).format('YYYY-MM-DD');
    });

    return turnos.recordset;
  }
}

module.exports = PruebasService;
