import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): string {
    return 'User Update';
  }

  @Get('json')
  getJson(): object {
    return {
      id: 1,
      description: 'Test',
    };
  }

  @Get('express')
  getExpress(@Res() response: Response) {
    response.status(200).send('Get Using Express Response');
  }
}
