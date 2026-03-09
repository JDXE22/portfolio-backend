import { jest } from '@jest/globals';
import supertest from 'supertest';
import mongoose from 'mongoose';
import { MONGO_TEST_URI } from '../../shared/config.env';
import { httpServer } from '../../server';

const api = supertest(httpServer);
beforeAll(async () => {
  const mongoUri = MONGO_TEST_URI;
  if (!mongoUri) {
    throw new Error('MONGO_TEST_URI environment variable is not defined.');
  }
  await mongoose.connect(mongoUri);
});

describe('Contact API Tests', () => {
  it('GET /contact should return contact info', async () => {
    const response = await api
      .get('/contact')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body).toHaveProperty('socialLinks');
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  httpServer.close();
});
