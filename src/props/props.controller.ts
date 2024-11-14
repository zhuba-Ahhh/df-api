import { Controller, Get, Query } from '@nestjs/common';
import { PropsService } from './props.service';

@Controller('Props')
export class PropsController {
  constructor(private readonly propsService: PropsService) {}
  @Get('getProps')
  async getProps(@Query() type: 'key' | 'consume' | 'collection' | 'mandel') {
    const data = await this.propsService.getProps(type);
    return { code: 1, data }; // 封装返回格式
  }
}
