import { Controller, Post } from '@nestjs/common';
import { InfoService } from '../info/info.service';

@Controller('cron')
export class CronController {
  constructor(private readonly infoService: InfoService) {}

  @Post('update-assets')
  async handleCron() {
    await this.infoService.updateAssetsData();
    return { success: true };
  }
}
