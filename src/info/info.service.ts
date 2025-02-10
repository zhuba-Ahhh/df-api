import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { Datum, JData } from './types';

@Injectable()
export class InfoService {
  async getInfo(page: string, ck?: string) {
    // 预设的 Cookie
    const presetCookie =
      'uin=o3477826311; RK=b59FxoIHym; ptcz=3777785d342a528eddf82ba651955ccb98caacf6f435c3c384528525cd0c6484; pgv_pvid=7196508015; eas_sid=21A7g2d2Y5t0Q447b1g8X9L8K3; lplqqcomrouteLine=a20240115lpl_a20240115lpl_a20240115lpl; rv2=80502F3A38E6C3F70F730D59DE0147F331CC33FFFFC02123C4; property20=946F9D3A1B6588D45437A57AC4230CFBE51F1C96D894E540A3D998831349302B87A833D7E96FCEEB; dfqqcomrouteLine=a20240729directory_index_a20240729directory_index_a20240729directory_index_pc; ied_qq=o3477826311; pgv_info=ssid; skey=@JBz9L47JS; iegams_milo_proxylogin_qc=101491592_%24%24_6299DAAC80EA915F34FDA0BE5A6B2635_%24%24_514422781D6FF22FFD04013B58741788; refresh_token=; expires_time=; acctype=qc; openid=6299DAAC80EA915F34FDA0BE5A6B2635; access_token=514422781D6FF22FFD04013B58741788; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=';

    // 目标接口 URL
    const targetUrl = 'https://comm.ams.game.qq.com/ide/';

    // 构造请求头
    const headers = {
      pragma: 'no-cache',
      priority: 'u=1, i',
      Cookie: ck || presetCookie, // 使用预设的 Cookie
      'content-type': 'application/x-www-form-urlencoded',
    };

    // 构造请求体
    const data = new URLSearchParams();
    data.append('iChartId', '319386');
    data.append('sIdeToken', 'zMemOt');
    data.append('type', '4');
    data.append('page', page || '1');

    try {
      // 发起请求
      const response = await axios.post(targetUrl, data.toString(), {
        headers,
      });
      return (response?.data?.jData?.data || []) as Datum[];
    } catch (error) {
      // 处理错误
      console.error('Error forwarding request:', error);
      return [];
    }
  }
  async getSeason(seasonid: string, ck?: string) {
    // 预设的 Cookie
    const presetCookie =
      'uin=o3477826311; RK=b59FxoIHym; ptcz=3777785d342a528eddf82ba651955ccb98caacf6f435c3c384528525cd0c6484; pgv_pvid=7196508015; eas_sid=21A7g2d2Y5t0Q447b1g8X9L8K3; lplqqcomrouteLine=a20240115lpl_a20240115lpl_a20240115lpl; rv2=80502F3A38E6C3F70F730D59DE0147F331CC33FFFFC02123C4; property20=946F9D3A1B6588D45437A57AC4230CFBE51F1C96D894E540A3D998831349302B87A833D7E96FCEEB; dfqqcomrouteLine=a20240729directory_index_a20240729directory_index_a20240729directory_index_pc; ied_qq=o3477826311; pgv_info=ssid; skey=@JBz9L47JS; iegams_milo_proxylogin_qc=101491592_%24%24_6299DAAC80EA915F34FDA0BE5A6B2635_%24%24_514422781D6FF22FFD04013B58741788; refresh_token=; expires_time=; acctype=qc; openid=6299DAAC80EA915F34FDA0BE5A6B2635; access_token=514422781D6FF22FFD04013B58741788; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=';

    // 目标接口 URL
    const targetUrl = 'https://comm.ams.game.qq.com/ide/';

    // 构造请求头
    const headers = {
      pragma: 'no-cache',
      priority: 'u=1, i',
      Cookie: ck || presetCookie, // 使用预设的 Cookie
      'content-type': 'application/x-www-form-urlencoded',
    };

    // 构造请求体
    const data = new URLSearchParams();
    data.append('iChartId', '317814');
    data.append('sIdeToken', 'QIRBwm');
    data.append('seasonid', seasonid || '');

    try {
      // 发起请求
      const response = await axios.post(targetUrl, data.toString(), {
        headers,
      });
      return (response?.data?.jData || []) as JData;
    } catch (error) {
      // 处理错误
      console.error('Error forwarding request:', error);
      return [];
    }
  }
  async getAssets(ck?: string) {
    // 预设的 Cookie
    const presetCookie =
      'uin=o3477826311; RK=b59FxoIHym; ptcz=3777785d342a528eddf82ba651955ccb98caacf6f435c3c384528525cd0c6484; pgv_pvid=7196508015; eas_sid=21A7g2d2Y5t0Q447b1g8X9L8K3; lplqqcomrouteLine=a20240115lpl_a20240115lpl_a20240115lpl; rv2=80502F3A38E6C3F70F730D59DE0147F331CC33FFFFC02123C4; property20=946F9D3A1B6588D45437A57AC4230CFBE51F1C96D894E540A3D998831349302B87A833D7E96FCEEB; dfqqcomrouteLine=a20240729directory_index_a20240729directory_index_a20240729directory_index_pc; ied_qq=o3477826311; pgv_info=ssid; skey=@JBz9L47JS; iegams_milo_proxylogin_qc=101491592_%24%24_6299DAAC80EA915F34FDA0BE5A6B2635_%24%24_514422781D6FF22FFD04013B58741788; refresh_token=; expires_time=; acctype=qc; openid=6299DAAC80EA915F34FDA0BE5A6B2635; access_token=514422781D6FF22FFD04013B58741788; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=';

    // 目标接口 URL
    const targetUrl = 'https://comm.ams.game.qq.com/ide/';

    // 构造请求头
    const headers = {
      pragma: 'no-cache',
      priority: 'u=1, i',
      Cookie: ck || presetCookie, // 使用预设的 Cookie
      'content-type': 'application/x-www-form-urlencoded',
    };

    // 构造请求体
    const data = new URLSearchParams();
    data.append('iChartId', '319386');
    data.append('sIdeToken', 'QIRBwm');
    data.append('type', '3');
    data.append('item', '17888808888'); // 17888808889 // 17020000010

    // 定义三个不同的 item 值
    const items = ['17888808888', '17888808889', '17020000010'];

    try {
      // 并行发起三个请求
      const promises = items.map((item) => {
        const data = new URLSearchParams();
        data.append('iChartId', '319386');
        data.append('sIdeToken', 'zMemOt');
        data.append('type', '3');
        data.append('item', item);

        return axios.post(targetUrl, data.toString(), { headers });
      });

      const responses = await Promise.all(promises);

      // 提取每个响应中的 totalMoney
      const totalMoneys = responses.map(
        (response) => response?.data?.jData?.data?.[0]?.totalMoney || '0',
      );

      return totalMoneys;
    } catch (error) {
      console.error('Error forwarding request:', error);
      return [];
    }
  }
}
