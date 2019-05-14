import { Inject, Injectable} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor(@Inject(REQUEST) public request: any) {
    console.log(request);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
