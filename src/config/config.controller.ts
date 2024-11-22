import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}
  @Get('')
  async getUpNeed() {
    const data = await this.configService.getConfig();
    return { code: 1, data }; // 封装返回格式
  }
}
