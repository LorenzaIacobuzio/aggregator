import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { server } from './mockApi'

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

beforeAll(() => server.listen())
afterAll(() => server.close())

  describe('root', () => {
      it('should return sum of payout amounts per user', async () => {
        const response = await appController.getUser("123456");
        const balance = response[0];
        expect(balance).toBe(80);
      });
    });
});
