import { Injectable } from '@nestjs/common';
import { accessories } from './json/accessories';

@Injectable()
export class AccessoriesService {
  getAccessories = async (): Promise<any> => {
    return accessories;
  };
}
