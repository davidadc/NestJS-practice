import {
  Controller,
  Get,
  Request as Req,
  Res,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('request')
export class RequestController {
  @Get()
  getRequest(@Req() request: Request) {
    console.log(request);
    return 'Testing request';
  }

  @Get('body')
  getBody(@Body() body: object, @Res() response: Response) {
    response.status(200).json(body);
  }

  @Get('body/key')
  getBodyKey(@Body('id') id: number, @Res() response: Response) {
    response.status(200).send('Id: ' + id);
  }

  @Get('query')
  getQuery(@Query() query: object, @Res() response: Response) {
    console.log(query);
    response.status(200).send('Check console');
  }

  @Get('query/key')
  getQueryKey(@Query('id') id: number, @Res() response: Response) {
    response.status(200).send('Id: ' + id);
  }

  @Get('param/:id/:description')
  getParam(@Param() params: object, @Res() response: Response) {
    console.log(params);
    response.status(200).send('Check console');
  }

  @Get('param/:id')
  getParamKey(@Param('id') id: number, @Res() response: Response) {
    response.status(200).send('Id: ' + id);
  }
}
