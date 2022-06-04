'use strict'

module.exports = function (sequelize, DataTypes) {
    const commonCodes = sequelize.define('commonCodes', {
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
      commonCodes.associate = function(models) { 
        commonCodes.belongsTo(models.codeTypes, {
            foreignKey: 'name',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        });
      };

      return commonCodes;
    };