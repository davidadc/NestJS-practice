import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestController } from './request/request.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, RequestController],
  providers: [AppService],
})
export class AppModule {}
