import { Injectable } from '@nestjs/common';
import { props } from './json/props';

@Injectable()
export class PropsService {
  getProps = async (
    type: 'key' | 'consume' | 'collection' | 'mandel' | 'all',
  ): Promise<any> => {
    return props?.[type]?.length > 0 && type !== 'all'
      ? { [type]: props?.[type] }
      : props;
  };
}
