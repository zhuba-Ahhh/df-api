import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import { RedisService } from './redis.service'; // 已导入

@Module({
  controllers: [InfoController],
  providers: [InfoService, RedisService], // 已注册
  exports: [InfoService],
})
export class InfoModule {}
