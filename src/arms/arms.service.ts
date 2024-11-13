import { Injectable } from '@nestjs/common';
import { allArms } from './json/all';

@Injectable()
export class ArmsService {
  getArms = async (type = 'all'): Promise<any> => {
    return !type || (type === 'all' && allArms);
  };
}
