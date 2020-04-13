import { Controller, Get } from '@nestjs/common';

@Controller()
export class RealTimeRadioController {
  @Get('/status')
  async getAppStatus() {
    return 'READY';
  }
}
