import { Module } from '@nestjs/common';
import { ArmsService } from './arms.service';
import { ArmsController } from './arms.controller';

@Module({
  controllers: [ArmsController],
  providers: [ArmsService],
})
export class ArmsModule {}
