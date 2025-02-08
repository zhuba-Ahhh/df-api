import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';

@Module({
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
