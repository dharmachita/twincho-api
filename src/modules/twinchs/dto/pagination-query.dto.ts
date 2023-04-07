import { IsOptional, IsPositive, IsNumber } from "class-validator";

export class PaginatioQueryDto{
    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    offset: number;
}