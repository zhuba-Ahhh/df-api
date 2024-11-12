import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    return [
      '/material/getUpNeed',
      '/material/getDetail',
      '/agent/getAgents',
      '/arms/getArms',
      '/accessories/getAccessories?type=accForeGrip',
      '/protect/getProtect?type=helmet',
    ];
  }
}
