import { Controller, Get, Query } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';

@Controller('accessories')
export class AccessoriesController {
  constructor(private readonly accessoriesService: AccessoriesService) {}
  @Get('getAccessories')
  async getAccessories(@Query() type: string) {
    const data = await this.accessoriesService.getAccessories(type);
    return { code: 1, data }; // 封装返回格式
  }
}
