import { Controller, Get, Query } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}
  @Get('getInfo')
  async getInfo(@Query('page') page: string, @Query('ck') ck: string) {
    const data = await this.infoService.getInfo(page, ck);
    return { code: 1, data }; // 封装返回格式
  }
  @Get('getSeason')
  async getSeason(
    @Query('seasonid') seasonid: string,
    @Query('ck') ck: string,
  ) {
    const data = await this.infoService.getSeason(seasonid, ck);
    return { code: 1, data }; // 封装返回格式
  }
  @Get('getAssets')
  async getAssets(@Query('ck') ck: string) {
    const data = await this.infoService.getAssets(ck);
    return { code: 1, data }; // 封装返回格式
  }

  @Get('getThreadDetail')
  async getThreadDetail(@Query('threadID') threadID: string) {
    const data = await this.infoService.getThreadDetail(
      Number(threadID || 18226),
    );
    return { code: 1, data };
  }
}
