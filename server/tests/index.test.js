const request = require('supertest');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const router = require('../router');
const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: 'not secure!',
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      httpOnly: false,
      secure: false,
    },
  })
);
app.use(router);

describe('Server', () => {
  it('should respond with 404 for unknown route', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe('Sorry, not found 😞');
  });

  it('should allow CORS requests from http://localhost:3000', async () => {
    const response = await request(app).get('/');
    expect(response.headers['access-control-allow-origin']).toBe(
      'http://localhost:3000'
    );
    expect(response.headers['access-control-allow-credentials']).toBe('true');
  });

  it('should respond with JSON for valid requests', async () => {
    const response = await request(app).post('/some-route').send({
      someKey: 'someValue',
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.body).toEqual({ message: 'Success' });
  });
});