import { Controller, Get, Query } from '@nestjs/common';
import { ProtectService } from './protect.service';

@Controller('protect')
export class ProtectController {
  constructor(private readonly protectService: ProtectService) {}
  @Get('getProtect')
  async getProtect(@Query() type: string) {
    const data = await this.protectService.getProtect(type);
    return { code: 1, data }; // 封装返回格式
  }
}
