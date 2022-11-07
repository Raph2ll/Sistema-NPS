const statusCodes = require('http-status-codes').StatusCodes;
const service = require('../service/create');
const schema = require('../schemas/schemaSurvey');

module.exports = async (req, res) => {
  try {
    const {
      name, email, value,
    } = req.body;

    const { error } = schema.validate({
      name, email, value,
    });

    if (error) return res.status(statusCodes.BAD_REQUEST).json(error.message);

    const newSurvey = await service({
      name, email, value,
    });

    return res.status(statusCodes.CREATED).json(newSurvey);
  } catch (err) {
    return res.status(statusCodes.BAD_REQUEST).json(err);
  }
};
