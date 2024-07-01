const request = require('supertest');
const express = require('express');
const provider = require('../src/provider');

const app = express();
app.use('/', provider);

describe('Provider Tests', () => {
  it('should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to the Catoff-Reclaim Integration Provider');
  });
});
