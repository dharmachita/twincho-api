import { Module } from '@nestjs/common';
import { TwinchsService } from './twinchs.service';
import { TwinchsController } from './twinchs.controller';
import { Twinch } from './entities/twinch.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Twinch])],
  controllers: [TwinchsController],
  providers: [TwinchsService],
})
export class TwinchsModule {}
