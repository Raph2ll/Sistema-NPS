const model = require('../model/create');

const create = async ({ name, email, value }) => {
  const newSurvey = await model({ name, email, value });

  return newSurvey;
};

module.exports = create;
