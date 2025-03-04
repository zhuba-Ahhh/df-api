import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as fs from 'fs-extra';
import * as path from 'path';
import { ckOptions, AssetData } from '../common/const';

import axios from 'axios';
import { Datum, JData } from './types';
import { put, list } from '@vercel/blob';

@Injectable()
export class InfoService {
  private readonly presetCookie =
    'uin=o3477826311; RK=b59FxoIHym; ptcz=3777785d342a528eddf82ba651955ccb98caacf6f435c3c384528525cd0c6484; pgv_pvid=7196508015; eas_sid=21A7g2d2Y5t0Q447b1g8X9L8K3; lplqqcomrouteLine=a20240115lpl_a20240115lpl_a20240115lpl; rv2=80502F3A38E6C3F70F730D59DE0147F331CC33FFFFC02123C4; property20=946F9D3A1B6588D45437A57AC4230CFBE51F1C96D894E540A3D998831349302B87A833D7E96FCEEB; dfqqcomrouteLine=a20240729directory_index_a20240729directory_index_a20240729directory_index_pc; ied_qq=o3477826311; pgv_info=ssid; skey=@JBz9L47JS; iegams_milo_proxylogin_qc=101491592_%24%24_6299DAAC80EA915F34FDA0BE5A6B2635_%24%24_514422781D6FF22FFD04013B58741788; refresh_token=; expires_time=; acctype=qc; openid=6299DAAC80EA915F34FDA0BE5A6B2635; access_token=514422781D6FF22FFD04013B58741788; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=';
  private readonly targetUrl = 'https://comm.ams.game.qq.com/ide/';

  private readonly dataFilePath = path.join(__dirname, '../data/assets.json');
  constructor() {
    // 确保数据目录存在
    fs.ensureDirSync(path.dirname(this.dataFilePath));
    // 如果文件不存在，创建一个空的 JSON 文件
    if (!fs.pathExistsSync(this.dataFilePath)) {
      fs.writeJsonSync(this.dataFilePath, [], { spaces: 2 });
    }
  }

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

  async getThreadDetail(threadID: number) {
    const data = new URLSearchParams();
    data.append('iChartId', '316968');
    data.append('sIdeToken', 'KfXJwH');
    data.append('method', 'thread.detail');
    data.append('param', JSON.stringify({ threadID }));

    try {
      const response = await axios.post(this.targetUrl, data.toString(), {
        headers: {
          xweb_xhr: '1',
          Cookie:
            'openid=oA2F77QwCpTZS1K4l6S5a0vPgImQ; acctype=mini; appid=wx1c36464bbea2507a; ieg_ams_session_token=77a38bf5ebbb17c2a7908ea30211060c08824750743aac1acdfd0d24dea08d60ea89; ieg_ams_token=d8d0624e491fd80ece2150ad9c132901; ieg_ams_token_time=1739586070',
        },
      });

      const res = response.data?.jData?.data?.data;

      return res;
    } catch (error) {
      console.error('Error getting thread detail:', error);
      return null;
    }
  }

  @Cron('0 * * * * *')
  async updateAssetsData() {
    try {
      const timestamp = new Date().toISOString();

      // 读取现有数据
      let existingData: AssetData[] = [];
      try {
        const { blobs } = await list();
        if (blobs.length > 0) {
          const latestBlob = blobs[blobs.length - 1];
          const response = await fetch(latestBlob.url);
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

      // 上传到 Vercel Blob
      try {
        const filename = `assets-${timestamp}.json`;
        const blob = new Blob([JSON.stringify(newData, null, 2)], {
          type: 'application/json',
        });

        const { url } = await put(filename, blob, {
          access: 'public',
        });

        console.log('数据上传成功，访问地址:', url);
      } catch (uploadError) {
        console.error('上传到 Vercel Blob 失败:', uploadError);
      }
    } catch (error) {
      console.error('Error updating assets data:', error);
    }
  }

  // 获取本地数据的方法
  async getLocalAssets() {
    try {
      const { blobs } = await list();
      if (blobs.length > 0) {
        const latestBlob = blobs[blobs.length - 1];
        const response = await fetch(latestBlob.url);
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Error reading from blob:', error);
      return null;
    }
  }
}
