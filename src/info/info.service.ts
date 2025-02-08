import { Injectable } from '@nestjs/common';

import axios from 'axios';

/**
 * Request
 */
export interface Request {
  code: number;
  data: Datum[];
  [property: string]: any;
}

export interface Datum {
  ArmedForceId: number;
  CarryoutSafeBoxPrice: number;
  CarryoutSelfPrice: number;
  dtEventTime: string;
  DurationS: number;
  EscapeFailReason: number;
  FinalPrice: string;
  flowCalGainedPrice: number;
  KeyChainCarryInPrice: number;
  KeyChainCarryOutPrice: string;
  KillAICount: number;
  KillCount: number;
  KillPlayerAICount: number;
  MapId: string;
  teammateArr: TeammateArr[];
  [property: string]: any;
}

export interface TeammateArr {
  ArmedForceId: number;
  CarryoutSafeBoxPrice: number;
  CarryoutSelfPrice: number;
  dtEventTime: string;
  DurationS: number;
  EscapeFailReason: number;
  FinalPrice: string;
  KeyChainCarryInPrice: number;
  KeyChainCarryOutPrice: string;
  KillAICount: number;
  KillCount: number;
  KillPlayerAICount: number;
  MapId: string;
  nickName: string;
  Rescue: number;
  TeamId: string;
  vopenid: boolean;
  [property: string]: any;
}

@Injectable()
export class InfoService {
  async getInfo(page: string) {
    // 预设的 Cookie
    const presetCookie =
      'uin=o3477826311; RK=b59FxoIHym; ptcz=3777785d342a528eddf82ba651955ccb98caacf6f435c3c384528525cd0c6484; pgv_pvid=7196508015; eas_sid=21A7g2d2Y5t0Q447b1g8X9L8K3; lplqqcomrouteLine=a20240115lpl_a20240115lpl_a20240115lpl; rv2=80502F3A38E6C3F70F730D59DE0147F331CC33FFFFC02123C4; property20=946F9D3A1B6588D45437A57AC4230CFBE51F1C96D894E540A3D998831349302B87A833D7E96FCEEB; dfqqcomrouteLine=a20240729directory_index_a20240729directory_index_a20240729directory_index_pc; ied_qq=o3477826311; pgv_info=ssid; skey=@JBz9L47JS; iegams_milo_proxylogin_qc=101491592_%24%24_6299DAAC80EA915F34FDA0BE5A6B2635_%24%24_514422781D6FF22FFD04013B58741788; refresh_token=; expires_time=; acctype=qc; openid=6299DAAC80EA915F34FDA0BE5A6B2635; access_token=514422781D6FF22FFD04013B58741788; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=';

    // 目标接口 URL
    const targetUrl = 'https://comm.ams.game.qq.com/ide/';

    // 构造请求头
    const headers = {
      pragma: 'no-cache',
      priority: 'u=1, i',
      Cookie: presetCookie, // 使用预设的 Cookie
      'content-type': 'application/x-www-form-urlencoded',
    };

    // 构造请求体
    const data = new URLSearchParams();
    data.append('iChartId', '319386'); // 示例数据
    data.append('sIdeToken', 'zMemOt'); // 示例数据
    data.append('type', '4'); // 示例数据
    data.append('page', page || '1'); // 示例数据

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
}
