import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('This is for the root endpoint', () => {
  it('should return a message', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});

// test for /api
describe('this is for /api', () => {
  it('should return an error message', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(404);
  });
});

// test for /api/images
describe('This is for /api/images', () => {
  it('should return a resized image', async () => {
    const response = await request.get('api/images');
    expect(response.status).toBe(404);
  });
});
