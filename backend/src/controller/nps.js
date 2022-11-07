const { OK } = require('http-status-codes').StatusCodes;
const service = require('../service/nps');

module.exports = async (req, res, next) => {
  try {
    const result = await service();
    return res.status(OK).json(result);
  } catch (err) {
    return next(err);
  }
};
