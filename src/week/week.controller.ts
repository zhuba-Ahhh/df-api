import { Controller, Get, Query } from '@nestjs/common';
import { WeekService } from './week.service';

@Controller('week')
export class WeekController {
  constructor(private readonly weekService: WeekService) {}

  @Get('getWeek')
  async getWeekRecord(
    @Query('ck') ck: string,
    @Query('statDate') statDate?: string,
  ) {
    const data = await this.weekService.getWeekRecord(ck, statDate);
    return { code: 1, data };
  }
}
