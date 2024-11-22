import { Injectable } from '@nestjs/common';
import { configData } from './json/config';

@Injectable()
export class ConfigService {
  getConfig = async (): Promise<any> => {
    return configData;
  };
}
