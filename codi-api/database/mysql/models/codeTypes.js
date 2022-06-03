'use strict'

module.exports = function (sequelize, DataTypes) {
    const codeTypes = sequelize.define('codeTypes', {
        name: {
            type: DataTypes.STRING(3),
            primaryKey: true
        },
        createAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        underscored: false,
        freezeTableName: true,
        timestamps: false,
      });

      return codeTypes;
    };