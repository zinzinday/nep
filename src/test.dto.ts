import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class TestDto {
  @Expose({ groups: ['admin'] })
  role: string;
  @Expose({ groups: ['owned'] })
  password: string;
  @Expose()
  name: string;
}
