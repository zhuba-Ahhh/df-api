import { Module } from '@nestjs/common';
import { ProtectService } from './protect.service';
import { ProtectController } from './protect.controller';

@Module({
  controllers: [ProtectController],
  providers: [ProtectService],
})
export class ProtectModule {}
