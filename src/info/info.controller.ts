import { Controller, Get, Query } from '@nestjs/common';
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

  @Get('getPersonResource')
  async getPersonResource(
    @Query('seasonid') seasonid: string,
    @Query('ck') ck: string,
    @Query('isAllSeason') isAllSeason: boolean = false,
  ) {
    const data = await this.infoService.getPersonResource(
      seasonid,
      ck,
      isAllSeason,
    );
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

  @Get('addCookie')
  async addRedisItem(@Query() item: Omit<ListItem, 'id'>) {
    const data = await this.redisService.addItem(item);
    return { code: 1, data };
  }

  @Get('editCookie')
  async updateRedisItem(
    @Query('label') label: string,
    @Query('value') value: string,
  ) {
    const data = await this.redisService.updateItem(label, value);
    return { code: 1, data: data || null };
  }

  // 新增：删除单个对象接口
  @Get('deleteCookie')
  async deleteRedisItem(@Query('label') label: string) {
    const data = await this.redisService.deleteItem(label);
    return { code: data ? 1 : 0, data: data || null };
  }

  @Get('initCookieList')
  async initRedisList(@Query('initialData') initialData: ListItem[]) {
    const data = await this.redisService.initList(initialData);
    return { code: 1, data };
  }

  // 新增：获取个人制造详情接口
  @Get('getManufacturingDetails')
  async getManufacturingDetails(@Query('ck') ck: string) {
    const data = await this.infoService.getManufacturingDetails(ck);
    return { code: 1, data }; // 与现有接口统一返回格式
  }
}
