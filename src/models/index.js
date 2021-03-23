import path from 'path';  
import {readdirSync} from 'fs';
import {basename as _basename} from 'path'
import Sequelize from 'sequelize';
import _ from 'lodash';
const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';  //去抓config.json的資料
const config=require(`${ __dirname}/../config/config.json`)[env];  //已改
const db = {};
// const sequelize =new Sequelize('database_development','root','123456',{
//     host:'127.0.0.1',
//     dialect:'mysql',
// });
const sequelize =new Sequelize(config.database, config.username, config.password, config)

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.resolve(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
