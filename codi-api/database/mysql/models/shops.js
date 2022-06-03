'use strict'

module.exports = function (sequelize, DataTypes) {
    const shops = sequelize.define('shops', {
        shopId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(32),
            allowNull: true
        },
        link: {
            type: DataTypes.STRING(128),
            allowNull: true
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

      return shops;
    };