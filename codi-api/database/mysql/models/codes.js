'use strict'

module.exports = function (sequelize, DataTypes) {
    const codes = sequelize.define('codes', {
        name: {
            type: DataTypes.STRING(3),
            primaryKey: true
        },
        value: {
            type: DataTypes.STRING(32),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
    }, {
        underscored: false,
        freezeTableName: true,
        timestamps: false,
      });

      return codes;
    };