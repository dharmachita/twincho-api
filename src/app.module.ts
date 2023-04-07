import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwinchsModule } from './modules/twinchs/twinchs.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TwinchsModule,
    UsersModule,
    DatabaseModule,
  ],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService:ConfigService){
    AppModule.port=+this.configService.get('PORT');
  }
}
