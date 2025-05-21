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
            'openid=oA2F77QwCpTZS1K4l6S5a0vPgImQ; acctype=mini; appid=wx1c36464bbea2507a; ieg_ams_session_token=72a3dba5baeb4890a09ab4d958391e1325807c554821d332e9bb1a27a1c98b70ea89; ieg_ams_token=4d861bc770075bd7b931b82ab2571a3c; ieg_ams_token_time=1744882375',
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

  async getCollects() {
    const data = new URLSearchParams();
    data.append('iChartId', '357900');
    data.append('sIdeToken', 'KL0LRc');
    try {
      const response = await axios.post(this.targetUrl, data.toString(), {
        headers: {
          Cookie:
            'pgv_info=ssid=s4941677952; pgv_pvid=7196508015; eas_sid=a1a7z4h1Y1f811N6p1A3f1L3a6; RK=dx8FlIIP2G; ptcz=4b9ca7039af3daf154a8b6dfe75fd14b64ecf211c2f6b83ab3da30272990ecb7; dfqqcomrouteLine=record202410ver_record202410ver_record202410ver_record202410ver_record202410ver_record202410ver_record202410ver; qqmusic_uin=; qqmusic_key=; qqmusic_fromtag=; pac_uid=0_G4Sa8d6fMt5Rw; suid=user_0_81EGChn5ewS43; current-city-name=bj; _qimei_h38=d896cc47e3016aa60553f56403000006719202; _qimei_q36=; rv2=80FFAFDA6F00609DDD1AF487315EA9DBCACCBE48934F5116B5; property20=49E42A13F7EB5629F7022532031048438E3569D957F2344A3089F4BAAF8008C337FE62DF1699B56F; livelink_pvid=4954941440; livelink_channel_code=l_live; refresh_token=; expires_time=; iegams_milo_proxylogin_qc=101491592_%24%24_6299DAAC80EA915F34FDA0BE5A6B2635_%24%24_E0AD0A8D5AA2764360A0D32AC744E14E; acctype=qc; openid=6299DAAC80EA915F34FDA0BE5A6B2635; access_token=E0AD0A8D5AA2764360A0D32AC744E14E; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=',
        },
      });

      const res = response?.data?.jData;
      return res;
    } catch (error) {
      console.error('Error reading from blob:', error);
      return {};
    }
  }
}
