import { Injectable } from '@nestjs/common';
import { protect } from './json/protect';

@Injectable()
export class ProtectService {
  getProtect = async (
    type?: 'helmet' | 'armor' | 'bag' | 'chest',
  ): Promise<any> => {
    return type && protect?.[type]?.length > 0 ? protect?.[type] : protect;
  };
}
