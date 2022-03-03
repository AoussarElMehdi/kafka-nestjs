import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  produceMessage(@Body() body: { message: string }): string {
    return this.appService.produceMessage(body.message);
  }
}
