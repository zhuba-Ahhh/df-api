import { Controller, Get, Query } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}
  @Get('getInfo')
  async getInfo(@Query('page') page: string) {
    const data = await this.infoService.getInfo(page);
    return { code: 1, data }; // 封装返回格式
  }
}
