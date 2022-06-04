'use strict'

module.exports = function (sequelize, DataTypes) {
    const dressrooms = sequelize.define('dressrooms', {
        dressId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        image: {
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
      dressrooms.associate = function(models) { 
        dressrooms.belongsTo(models.users, {
            foreignKey: 'userId',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        });
      };

      return dressrooms;
    };