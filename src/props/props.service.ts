import { Injectable } from '@nestjs/common';
import { props } from './json/props';

@Injectable()
export class PropsService {
  getProps = async (
    type: 'key' | 'consume' | 'collection' | 'mandel',
  ): Promise<any> => {
    return props?.[type] || [];
  };
}
