'use strict'

module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define('users', {
        userId: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        passwordSalt: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(32),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(11),
            allowNull: true
        },
        ghost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        underscored: false,
        freezeTableName: true,
        timestamps: false,
      });

      return users;
    };