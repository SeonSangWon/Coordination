'use strict'

module.exports = function (sequelize, DataTypes) {
    const closets = sequelize.define('closets', {
        closetId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(32),
            allowNull: true
        },
        color: {
            type: DataTypes.STRING(32),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(32),
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
      closets.associate = function(models) { 
        closets.belongsTo(models.users, {
            foreignKey: 'userId',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        });
      };

      return closets;
    };