import { Injectable } from '@nestjs/common';
import { ckOptions, AssetData } from '../common/const';

import axios from 'axios';
import { Datum, JData } from './types';
import { put, list } from '@vercel/blob';

@Injectable()
export class InfoService {
  private readonly presetCookie =
    'pgv_pvid=84132458; fqm_pvqid=54ab2059-8cb0-48e8-a778-efd1a6c2a31f; fqm_sessionid=b48f988c-c83e-4685-a449-02a8ebd52fd4; pgv_info=ssid=s845046044; eas_sid=N1x7E4X7h8C2u5S1H9k1v1A5n6; RK=W59FhIIewk; ptcz=f11049812ae25906f859ee38efb5a14e1d720905c72f6786c244c8f59a68b699; iegams_milo_proxylogin_qc=101491592_%24%24_6299DAAC80EA915F34FDA0BE5A6B2635_%24%24_CD6B5D706A2E35D9895A60C27DE6259C; refresh_token=; expires_time=; dfqqcomrouteLine=record202410ver_record202410ver_record202410ver; acctype=qc; openid=6299DAAC80EA915F34FDA0BE5A6B2635; access_token=CD6B5D706A2E35D9895A60C27DE6259C; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=';
  private readonly targetUrl = 'https://comm.ams.game.qq.com/ide/';

  private readonly ASSETS_FILENAME = 'df-assets.json';

  private getHeaders(ck?: string) {
    return {
      pragma: 'no-cache',
      priority: 'u=1, i',
      Cookie: ck || this.presetCookie,
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
      console.error('Error forwarding request:', error);
      throw error;
    }
  }

  constructor() {
    // 立即执行一次数据更新
    // this.updateAssetsData();
  }

  async getInfo(page: string, ck?: string) {
    const data = new URLSearchParams();
    data.append('iChartId', '319386');
    data.append('sIdeToken', 'zMemOt');
    data.append('type', '4');
    data.append('page', page || '1');

    try {
      const response = await this.makeRequest<any>(data, ck);
      return (response?.jData?.data || []) as Datum[];
    } catch {
      return [];
    }
  }

  async getSeason(seasonid: string, ck?: string) {
    const data = new URLSearchParams();
    data.append('iChartId', '317814');
    data.append('sIdeToken', 'QIRBwm');
    data.append('seasonid', seasonid || '');

    try {
      const response = await this.makeRequest<any>(data, ck);
      return (response?.jData || []) as JData;
    } catch {
      return [];
    }
  }

  async getPersonResource(seasonid: string, ck: string, isAllSeason = false) {
    const data = new URLSearchParams();
    data.append('iChartId', '316969');
    data.append('sIdeToken', 'NoOapI');
    data.append('source', '2');
    data.append('method', 'dfm/center.person.resource');
    data.append(
      'param',
      JSON.stringify({
        resourceType: 'sol',
        seasonid: [Number(seasonid)],
        isAllSeason: String(isAllSeason) === 'true',
      }),
    );

    try {
      const response = await this.makeRequest<any>(data, ck);
      return (response?.jData?.data?.data?.solDetail || {}) as JData;
    } catch {
      return {};
    }
  }

  async getAssets(ck?: string) {
    const items = ['17888808888', '17888808889', '17020000010'];

    try {
      const promises = items.map((item) => {
        const data = new URLSearchParams();
        data.append('iChartId', '319386');
        data.append('sIdeToken', 'zMemOt');
        data.append('type', '3');
        data.append('item', item);

        return this.makeRequest<any>(data, ck);
      });

      const responses = await Promise.all(promises);
      return responses.map(
        (response) => response?.jData?.data?.[0]?.totalMoney || '0',
      );
    } catch {
      return [];
    }
  }

  async getThreadDetail(ck: string) {
    const data = new URLSearchParams();
    data.append('iChartId', '316968');
    data.append('sIdeToken', 'KfXJwH');
    data.append('method', 'thread.detail');
    data.append('param', JSON.stringify({ threadID: 18226 }));

    try {
      const response = await axios.post(this.targetUrl, data.toString(), {
        headers: {
          xweb_xhr: '1',
          Cookie: ck,
        },
      });

      const res = response.data?.jData?.data?.data;

      return res;
    } catch (error) {
      console.error('Error getting thread detail:', error);
      return null;
    }
  }

  async updateAssetsData() {
    try {
      const timestamp = new Date().toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
      });

      // 读取固定文件的数据
      let existingData: AssetData[] = [];
      try {
        const { blobs } = await list({ prefix: this.ASSETS_FILENAME });
        if (blobs.length > 0) {
          const response = await fetch(blobs[0].url);
          existingData = await response.json();
        }
      } catch (error) {
        console.error('Error reading from blob:', error);
      }

      // 获取所有账号的数据
      const newData = await Promise.all(
        ckOptions.map(async (option) => {
          const data = await this.getAssets(option.value);
          const existingAccount = existingData.find(
            (item) => item.label === option.label,
          );

          if (existingAccount) {
            return {
              ...existingAccount,
              records: [...existingAccount.records, { timestamp, data }],
            };
          } else {
            return {
              label: option.label,
              records: [{ timestamp, data }],
            };
          }
        }),
      );

      // 始终更新同一个文件
      try {
        const blob = new Blob([JSON.stringify(newData, null, 2)], {
          type: 'application/json',
        });

        const { url } = await put(this.ASSETS_FILENAME, blob, {
          access: 'public',
          addRandomSuffix: false, // 禁止添加随机后缀
        });

        console.log('数据更新成功，访问地址:', url);
      } catch (uploadError) {
        console.error('更新 Vercel Blob 失败:', uploadError);
      }
    } catch (error) {
      console.error('Error updating assets data:', error);
    }
  }

  async getLocalAssets() {
    try {
      const { blobs } = await list({ prefix: this.ASSETS_FILENAME });
      if (blobs.length > 0) {
        const response = await fetch(blobs[0].url);
        return await response.json();
      }
      return [];
    } catch (error) {
      console.error('Error reading from blob:', error);
      return [];
    }
  }

  async getCollects(ck: string) {
    const data = new URLSearchParams();
    data.append('iChartId', '357900');
    data.append('sIdeToken', 'KL0LRc');
    try {
      const response = await axios.post(this.targetUrl, data.toString(), {
        headers: {
          Cookie: ck || '',
        },
      });

      const res = response?.data?.jData;
      return res;
    } catch (error) {
      console.error('Error reading from blob:', error);
      return {};
    }
  }

  /**
   * 获取昨日收益（按用户要求：仅需传入 cookie，其他参数写死）
   * @param ck 用户 cookie
   */
  async getYesterdayProfit(ck?: string) {
    const data = new URLSearchParams();
    // 固定参数（根据用户提供的 curl 示例写死）
    data.append('iChartId', '316969');
    data.append('sIdeToken', 'NoOapI');
    data.append('method', 'dfm/center.recent.detail');
    data.append('source', '2');
    data.append('param', JSON.stringify({ resourceType: 'sol' }));

    try {
      // 使用现有 makeRequest 方法发送请求（复用统一请求逻辑）
      const response = await this.makeRequest<any>(data, ck);
      return response?.jData?.data?.data || {}; // 返回 jData 字段（与现有接口风格一致）
    } catch (error) {
      console.error('获取昨日收益失败:', error);
      return {}; // 异常时返回空对象
    }
  }

  /**
   * 获取每日密码（根据用户提供的 curl 示例实现）
   * @param ck 用户 cookie
   */
  async getDailySecret(ck?: string) {
    const data = new URLSearchParams();
    data.append('iChartId', '384918');
    data.append('sIdeToken', 'mbq5GZ');
    data.append('method', 'dist.contents');
    data.append(
      'param',
      JSON.stringify({ distType: 'bannerManage', contentType: 'secretDay' }),
    );

    try {
      // 复用统一请求方法
      const response = await this.makeRequest<any>(data, ck);
      return splitStringToObjectArray(
        response?.jData?.data?.data?.content?.secretDay?.data?.[0]?.desc || '',
      ); // 提取返回的核心数据
    } catch (error) {
      console.error('获取每日密码失败:', error);
      return []; // 异常时返回空数组
    }
  }
}

const splitStringToObjectArray = (input: string) => {
  // 按分号拆分字符串，去除空格
  const pairs = input.split(';').map((pair) => pair.trim());

  // 创建结果数组
  const result: Array<{ mapName: string; key: number }> = [];

  // 遍历每个键值对
  pairs.forEach((pair) => {
    if (pair) {
      // 确保不是空字符串
      // 按冒号拆分键和值
      const [mapName, key] = pair.split(':').map((item) => item.trim());
      // 将键值对转换为对象并添加到结果数组
      result.push({ mapName, key: parseInt(key, 10) });
    }
  });

  return result;
};
