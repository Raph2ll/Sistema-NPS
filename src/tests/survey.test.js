const { BAD_REQUEST, CREATED } = require('http-status-codes').StatusCodes;
const request = require('supertest');
const app = require('../api/app');

describe('Survey tests', () => {
  it("It shouldn't be possible to do the search without a 'name'"
  , async () => {
    const response = await request(app)
    .post('/survey')
    .send({
        name: "",
        email: "JohnDoe@example.com",
        value: 2,
      });

      expect(response.status).toBe(BAD_REQUEST);
      expect(response.body).toBe('"name" is not allowed to be empty');
  });
  it("It shouldn't be possible to do the search without a 'email'"
  , async () => {
    const response = await request(app)
    .post('/survey')
    .send({
        name: "John Doe",
        email: "",
        value: 2,
      });

      expect(response.status).toBe(BAD_REQUEST);
      expect(response.body).toBe('"email" is not allowed to be empty');
  });
  it("It shouldn't be possible to do the search without a valid 'email'"
  , async () => {
    const response = await request(app)
    .post('/survey')
    .send({
        name: "John Doe",
        email: "exam@@om",
        value: 2,
      });

      expect(response.status).toBe(BAD_REQUEST);
      expect(response.body).toBe('"email" must be a valid email');
  });
  it("It shouldn't be possible to do the search without a number value"
  , async () => {
    const response = await request(app)
    .post('/survey')
    .send({
        name: "John Doe",
        email: "JohnDoe@example.com",
        value: '',
      });

      expect(response.status).toBe(BAD_REQUEST);
      expect(response.body).toBe('"value" must be a number');
  });
  it("It shouldn't be possible to do the search without a numeric value less than 10 or equal to 10"
  , async () => {
    const response = await request(app)
    .post('/survey')
    .send({
        name: "John Doe",
        email: "JohnDoe@example.com",
        value: 11,
      });

      expect(response.status).toBe(BAD_REQUEST);
      expect(response.body).toBe('"value" must be less than or equal to 10');
  });
  it("Should be able to create a new survey"
  , async () => {
    const response = await request(app)
    .post('/survey')
    .send({
        name: "John Doe",
        email: "JohnDoe@example.com",
        value: 10,
      });

      expect(response.status).toBe(CREATED);
  console.log(response.body);
  });
});
