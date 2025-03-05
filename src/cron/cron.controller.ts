import { Controller, Get, Post } from '@nestjs/common';
import { CronService } from './cron.service';

@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}

  @Post('update-assets')
  async handleCron() {
    await this.cronService.updateAssetsData();
    return { success: true };
  }
  @Get('getLocalAssets')
  async getLocalAssets() {
    const data = await this.cronService.getLocalAssets();
    return { code: 1, data };
  }
}
