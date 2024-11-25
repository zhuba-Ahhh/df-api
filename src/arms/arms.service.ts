import { Injectable } from '@nestjs/common';
import { allArms } from './json/all';
import guns from './json/index';

@Injectable()
export class ArmsService {
  getArms = async (type = 'all'): Promise<any> => {
    return !type || type === 'all' ? allArms : guns[type];
  };
}
