import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CommonModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthInfo } from './entities/auth.entity';
import configService from './database/ormconfig.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([AuthInfo]),
    // CommonModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
