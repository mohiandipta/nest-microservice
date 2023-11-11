import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
