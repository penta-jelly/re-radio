import { Controller, Get } from '@nestjs/common';

@Controller()
export class RadioController {
  @Get('/status')
  status() {
    return 'READY';
  }
}
