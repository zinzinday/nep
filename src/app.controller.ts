import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { TestDto } from './test.dto';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello work';
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TestDto) {
    // todo something
    console.log(data);
    return data;
  }
}
