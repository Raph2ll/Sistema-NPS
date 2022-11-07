const model = require('../model/list');

const create = async () => {
  const surveyAnswers = await model();

  const detractor = surveyAnswers.filter((survey) => (survey.value >= 0 && survey.value <= 6))
    .length;
  const passive = surveyAnswers.filter((survey) => (survey.value >= 7 && survey.value <= 8))
    .length;
  const promoters = surveyAnswers.filter((survey) => (survey.value >= 9 && survey.value <= 10))
    .length;

  const totalAnswers = surveyAnswers.length;

  const calculate = Number((((promoters - detractor) / totalAnswers) * 100).toFixed(2));

  return {
    detractor,
    passive,
    promoters,
    totalAnswers,
    nps: calculate,
  };
};

module.exports = create;
