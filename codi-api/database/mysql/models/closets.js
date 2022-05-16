'use strict'

module.exports = function (sequelize, DataTypes) {
    const Careers = sequelize.define('closets', {
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
      Careers.associate = function(models) { 
        Careers.belongsTo(models.users, {
            foreignKey: 'userId',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        });
      };

      return Careers;
    };