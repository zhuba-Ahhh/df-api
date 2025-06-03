import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { InfoService } from './info.service';
import { RedisService } from './redis.service';
import { ListItem } from './redis.service';

@Controller('info')
export class InfoController {
  constructor(
    private readonly infoService: InfoService,
    private readonly redisService: RedisService,
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
  async getCollects(@Query('ck') ck: string) {
    const data = await this.infoService.getCollects(ck);
    return { code: 1, data };
  }

  // 新增：获取昨日收益接口
  @Get('getYesterdayProfit')
  async getYesterdayProfit(@Query('ck') ck: string) {
    const data = await this.infoService.getYesterdayProfit(ck);
    return { code: 1, data }; // 与现有接口统一返回格式
  }
  // 新增：获取每日密码接口（POST 类型）
  @Get('getDailySecret')
  async getDailySecret(
    @Query('ck') ck: string, // 从请求体中获取 cookie
  ) {
    const data = await this.infoService.getDailySecret(ck);
    return { code: 1, data }; // 与现有接口统一返回格式
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
