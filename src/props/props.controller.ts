import { Controller, Get, Query } from '@nestjs/common';
import { PropsService } from './props.service';

@Controller('props')
export class PropsController {
  constructor(private readonly propsService: PropsService) {}
  @Get('getProps')
  async getProps(
    @Query()
    type: {
      type: 'key' | 'consume' | 'collection' | 'mandel' | 'all';
    },
  ) {
    const data = await this.propsService.getProps(type.type);
    return { code: 1, data }; // 封装返回格式
  }

  // 新增：获取物品详情的 POST 接口
  @Get('getObjectDetails')
  async getObjectDetails(
    @Query('ck') ck: string, // 从请求体中获取 cookie
    @Query('objectIDs') objectIDs: string, // 从请求体中获取物品 ID 数组
  ) {
    const data = await this.propsService.getObjectDetails(ck, objectIDs);
    return { code: 1, data }; // 与现有接口统一返回格式
  }
}
