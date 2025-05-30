import { Module } from '@nestjs/common';
import { WeekService } from './week.service';
import { WeekController } from './week.controller';

@Module({
  controllers: [WeekController],
  providers: [WeekService],
})
export class WeekModule {}
