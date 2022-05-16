'use strict'

import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize from 'sequelize';
import dbConfig from '../config/sequelize';

const basename = _basename(__filename);
const config = process.env['SERVER_TYPE'] == 'REAL' ? dbConfig['real'] : dbConfig['development'];
const db = {};
const DUBUG_SEQUELIZE = false;

if (DUBUG_SEQUELIZE) console.info(`${config.database}, ${config.username}, ${config.password}`);
const sequelize = new Sequelize(config.database, config.username, config.password, config);

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](join(__dirname, file));
    if (model) {
      if (DUBUG_SEQUELIZE) console.info(`model: ${file}`);
      db[model.name] = model;
    } else {
      if (DUBUG_SEQUELIZE) console.info(`skip: ${file}`);
    }
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    if (DUBUG_SEQUELIZE) console.info('associate ' + modelName);
  } else {
    if (DUBUG_SEQUELIZE) console.info('not associate ' + modelName);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

if (DUBUG_SEQUELIZE) console.info('db', db)
export default db;