import { Module } from '@nestjs/common';
import { User } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
