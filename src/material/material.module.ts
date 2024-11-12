import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';

@Module({
  controllers: [MaterialController],
  providers: [MaterialService],
})
export class MaterialModule {}
