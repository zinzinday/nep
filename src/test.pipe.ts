import { ArgumentMetadata, Inject, Injectable, PipeTransform, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable({
  scope: Scope.REQUEST,
})
export class TestPipe implements PipeTransform {
  constructor(@Inject(REQUEST) public request: any) {
    console.log('constructor', request);
  }

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('transform', this.request); // transform undefined
    return value;
  }
}
