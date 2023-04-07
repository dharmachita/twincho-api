import { IsString } from 'class-validator';

export class CreateTwinchDto {
  @IsString()
  readonly message: string;
}
