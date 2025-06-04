import { Injectable } from '@nestjs/common';
import { props } from './json/props';
import axios from 'axios';

@Injectable()
export class PropsService {
  private readonly targetUrl = 'https://comm.ams.game.qq.com/ide/'; // 与 info.service.ts 一致的目标地址

  getProps = async (
    type: 'key' | 'consume' | 'collection' | 'mandel' | 'all',
  ): Promise<any> => {
    return props?.[type]?.length > 0 && type !== 'all'
      ? { [type]: props?.[type] }
      : props;
  };

  private getHeaders(ck?: string) {
    return {
      xweb_xhr: '1',
      priority: 'u=1, i',
      Cookie: ck || '',
      'content-type': 'application/x-www-form-urlencoded',
    };
  }

  private async makeRequest<T>(data: URLSearchParams, ck?: string): Promise<T> {
    try {
      const response = await axios.post(this.targetUrl, data.toString(), {
        headers: this.getHeaders(ck),
      });
      return response.data;
    } catch (error) {
      console.error('获取物品详情请求失败:', error);
      throw error;
    }
  }

  // 新增：获取物品详情接口
  async getObjectDetails(ck: string, objectID: string) {
    const data = new URLSearchParams();
    data.append('iChartId', '316969');
    data.append('sIdeToken', 'NoOapI');
    data.append('method', 'dfm/object.list');
    data.append('param', JSON.stringify({ objectID }));
    data.append('source', '2');
    console.log('[48;5;214m [ data ]-45-「undefined」 [0m', data);

    try {
      const response = await this.makeRequest<any>(data, ck);
      return response?.jData?.data?.data?.list || []; // 根据实际响应结构调整
    } catch (error) {
      console.error('获取物品详情失败:', error);
      return []; // 异常时返回空对象
    }
  }
}
