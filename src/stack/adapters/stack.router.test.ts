import express, { NextFunction, Request, Response } from 'express';
import request from 'supertest';
import { stackRouterv1 } from './stack.router';
import { getStack } from '../useCases/getStack';
import { StackCategory } from '../../shared/types';

jest.mock('../useCases/getStack', () => ({
  getStack: jest.fn(),
}));

const mockedGetStack = getStack as jest.MockedFunction<typeof getStack>;

describe('stackRouterv1', () => {
  let app: express.Express;

  beforeEach(() => {
    jest.resetAllMocks();
    app = express();
    app.use(express.json());
    // mount the router under /stack so router.get("/") becomes GET /stack
    app.use('/stack', stackRouterv1);
    // add error handler so next(error) results in JSON response for assertions
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      res
        .status(err.status || 500)
        .json({ error: err.message || 'Internal Server Error' });
    });
  });

  it('responds with 200 and JSON body returned from getStack', async () => {
    const fakeStack = [
      {
        name: 'TypeScript',
        slug: 'typescript',
        category: 'language' as StackCategory,
        iconPublicId: 'https',
      },
    ];
    mockedGetStack.mockReturnValueOnce(fakeStack);

    const res = await request(app)
      .get('/stack')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(res.body).toEqual(fakeStack);
    expect(mockedGetStack).toHaveBeenCalledTimes(1);
  });

  it('forwards errors from getStack to error handler (returns 500 and error message)', async () => {
    mockedGetStack.mockImplementationOnce(() => {
      throw new Error('fetch-failed');
    });

    const res = await request(app)
      .get('/stack')
      .expect(500)
      .expect('Content-Type', /json/);

    expect(res.body).toEqual({ error: 'fetch-failed' });
    expect(mockedGetStack).toHaveBeenCalledTimes(1);
  });
});
