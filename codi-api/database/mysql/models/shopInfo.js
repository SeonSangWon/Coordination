'use strict'

module.exports = function (sequelize, DataTypes) {
    const shopInfos = sequelize.define('shopInfos', {
        infoId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        shopId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        link: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        createAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
    }, {
        underscored: false,
        freezeTableName: true,
        timestamps: false,
      });
      shopInfos.associate = function(models) { 
        shopInfos.belongsTo(models.shops, {
            foreignKey: 'shopId',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        });
      };

      return shopInfos;
    };