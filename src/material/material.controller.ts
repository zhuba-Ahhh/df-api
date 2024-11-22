import { Controller, Get, Query } from '@nestjs/common';
import { MaterialService } from './material.service';

@Controller('config')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}
  @Get('')
  async getUpNeed(@Query('type') type: string) {
    const data = await this.materialService.getUpNeed(type);
    return { code: 1, data }; // 封装返回格式
  }
}
