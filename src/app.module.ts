import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestController } from './request/request.controller';
import { CatsModule } from './cats/cats.module';
// import { LoggerMiddleware } from './middlewares/logger-middleware';
import { logger } from './middlewares/functional-logger-middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, RequestController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // Applying middleware #1
  // configure(consumer: MiddlewareConsumer): any {
  //   consumer.apply(LoggerMiddleware).forRoutes('cats');
  // }
  // Applying middleware #2
  // configure(consumer: MiddlewareConsumer): any {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes({ path: 'cats', method: RequestMethod.GET });
  // }
  // Applying middleware #3: functional middleware
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(logger).forRoutes(CatsController);
  }
}
