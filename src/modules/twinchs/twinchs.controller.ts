import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TwinchsService } from './twinchs.service';
import { Twinch } from './entities';
import { CreateTwinchDto, PaginatioQueryDto, UpdateTwinchDto } from './dto';

@Controller('twinchs')
export class TwinchsController {
  constructor(private readonly twinchsService: TwinchsService) {}
  @Get()
  getTwinchs(@Query() pagination: PaginatioQueryDto): Promise<Twinch[]> {
    return this.twinchsService.getTwinchs(pagination);
  }

  @Get(':id')
  getTwinch(@Param('id') id: number): Promise<Twinch[]> {
    return this.twinchsService.getTwinch(id);
  }

  @Post()
  createTwinch(@Body() twinch: CreateTwinchDto): void {
    return this.twinchsService.createTwinch(twinch);
  }

  @Patch(':id')
  updateTwinch(
    @Param('id') id: number,
    @Body() twinch: UpdateTwinchDto,
  ): Promise<Twinch> {
    return this.twinchsService.updateTwinch(id, twinch);
  }

  @Delete(':id')
  deleteTwinch(@Param('id') id: number): Promise<void> {
    return this.twinchsService.deleteTwinch(id);
  }
}
