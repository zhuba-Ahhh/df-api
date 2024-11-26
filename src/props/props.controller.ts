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
}
