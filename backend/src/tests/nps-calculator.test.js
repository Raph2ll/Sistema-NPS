const { OK } = require('http-status-codes').StatusCodes;
const request = require('supertest');
const app = require('../api/app');

describe('Nps-calculator tests', () => {
  it(
    'Should be able to get all answers',
    async () => {
      const response = await request(app)
        .get('/nps-calculator/answers');

      expect(response.status).toBe(OK);
      expect(response.body).not.toBeNull();
    },
  );
  it(
    'Should be able to get NPS',
    async () => {
      const response = await request(app)
        .get('/nps-calculator');

      expect(response.status).toBe(OK);
      expect(response.body).not.toBeNull();
      expect(response.body.detractor).toBeGreaterThanOrEqual(0);
      expect(response.body.passive).toBeGreaterThanOrEqual(0);
      expect(response.body.promoters).toBeGreaterThanOrEqual(0);
      expect(response.body.totalAnswers).toBeGreaterThanOrEqual(0);
      expect(response.body.nps).toBeGreaterThanOrEqual(0);
    },
  );
});
