const connection = require('./connection');

const list = async () => (await connection())
  .collection('survey').find().toArray();

module.exports = list;
