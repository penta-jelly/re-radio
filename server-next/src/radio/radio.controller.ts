import { Controller, Get } from '@nestjs/common';

@Controller()
export class RadioController {
  @Get('/status')
  async getAppStatus() {
    return 'READY';
  }
}
