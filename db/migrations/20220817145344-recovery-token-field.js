'use strict';


const { USER_TABLE } = require('./../models/user.model');

const { Model, DataTypes, Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(USER_TABLE, 'recovery_token', {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'recovery_token'
      })
    },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(USER_TABLE, 'recovery_token')
  }
};
