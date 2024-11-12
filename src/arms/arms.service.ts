import { Injectable } from '@nestjs/common';
import { Arms } from './json/arms';

@Injectable()
export class ArmsService {
  getArms = async (): Promise<any> => {
    return Arms;
  };
}
