import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { InfoService } from './info.service';
import { RedisService } from './redis.service'; // 新增：导入 Redis 服务
import { ListItem } from './redis.service'; // 新增：导入类型

@Controller('info')
export class InfoController {
  constructor(
    private readonly infoService: InfoService,
    private readonly redisService: RedisService, // 新增：注入 Redis 服务
  ) {}
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
  async getThreadDetail(@Query('ck') ck: string) {
    const data = await this.infoService.getThreadDetail(ck);
    return { code: 1, data };
  }
  @Get('getLocalAssets')
  async getLocalAssets() {
    const data = await this.infoService.getLocalAssets();
    return { code: 1, data };
  }
  @Get('getCollects')
  async getCollects() {
    const data = await this.infoService.getCollects();
    return { code: 1, data };
  }

  @Get('getCookieList')
  async getRedisList() {
    const data = await this.redisService.getList();
    return { code: 1, data };
  }

  @Post('addCookie')
  async addRedisItem(@Body() item: Omit<ListItem, 'id'>) {
    const data = await this.redisService.addItem(item);
    return { code: 1, data };
  }

  @Post('editCookie')
  async updateRedisItem(
    @Body('label') label: string,
    @Body('value') value: string,
  ) {
    const data = await this.redisService.updateItem(label, value);
    return { code: 1, data: data || null };
  }
  @Post('initCookieList')
  async initRedisList(@Body() initialData: ListItem[]) {
    const data = await this.redisService.initList(initialData);
    return { code: 1, data };
  }
}
