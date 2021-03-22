import path from 'path';
import fs from 'fs';
import Sequelize from 'sequelize';
import _ from 'lodash';
const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};
const sequelize =new Sequelize('node','root','123456',{
    host:'127.0.0.1',
    dialect:'mysql',
});


readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

model.exports = db;
