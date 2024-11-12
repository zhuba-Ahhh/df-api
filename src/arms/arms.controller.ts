import { Controller, Get } from '@nestjs/common';
import { ArmsService } from './arms.service';

@Controller('arms')
export class ArmsController {
  constructor(private readonly armsService: ArmsService) {}
  @Get('getArms')
  async getArms() {
    const data = await this.armsService.getArms();
    return { code: 1, data }; // 封装返回格式
  }
}
