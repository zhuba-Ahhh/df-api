import { Module } from '@nestjs/common';
import { PropsService } from './props.service';
import { PropsController } from './props.controller';

@Module({
  controllers: [PropsController],
  providers: [PropsService],
})
export class PropsModule {}
