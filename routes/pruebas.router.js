const express = require('express');

const PruebasService = require('../services/pruebas.service');
const router = express.Router();

const service = new PruebasService();

router.get('/',  async (req, res, next) => {
  try {
    res.json(await service.consulta1());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
