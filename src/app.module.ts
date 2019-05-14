import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_PIPE } from '@nestjs/core';
import { TestPipe } from './test.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: TestPipe,
    }],
})
export class AppModule {
}
