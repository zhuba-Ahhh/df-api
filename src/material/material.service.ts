import { Injectable } from '@nestjs/common';
import { upNeedData, upNeedData1 } from './json/upNeed';
import { detail } from './json/detail';

@Injectable()
export class MaterialService {
  getUpNeed = async (type = '0'): Promise<any> => {
    if (type == '1') {
      return upNeedData1;
    } else {
      return upNeedData;
    }
  };
  getDetail = async (): Promise<any> => {
    return detail;
  };
}
