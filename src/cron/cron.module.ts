import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';
import { InfoModule } from '../info/info.module';

@Module({
  controllers: [CronController],
  providers: [CronService],
  imports: [InfoModule],
})
export class CronModule {}
