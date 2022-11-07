const { format } = require('date-fns');
const connection = require('./connection');

const create = async ({ name, email, value }) => {
  const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');
  const result = await (await connection())
    .collection('survey').insertOne({
      createdAt: timestamp, name, email, value,
    });
  return {
    _id: result.insertedId,
    createdAt: timestamp,
    name,
    email,
    value,
  };
};

module.exports = create;
