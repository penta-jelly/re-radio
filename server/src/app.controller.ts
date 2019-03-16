import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/status')
  async getAppStatus() {
    return 'READY';
  }
}
