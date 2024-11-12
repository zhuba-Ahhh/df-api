import { Injectable } from '@nestjs/common';
import { accessories } from './json/accessories';

@Injectable()
export class AccessoriesService {
  getAccessories = async (type?: string): Promise<any> => {
    return type && accessories?.[type]?.length > 0
      ? [accessories?.[type]]
      : accessories;
  };
}
