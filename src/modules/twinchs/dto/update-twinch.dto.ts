import { IsString } from 'class-validator';

export class UpdateTwinchDto {
  @IsString()
  readonly message: string;
}
