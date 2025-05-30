import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface WeekRecord {
  CarryOut_highprice_list: string;
  consume_Price: string;
  Gained_Price: string;
  GainedPrice_overmillion_num: string;
  Kill_ByCrocodile_num: string;
  Mandel_brick_num: string;
  Rank_Score: string;
  rise_Price: string;
  search_Birdsnest_num: string;
  TeammatePrice_overzero_num: string;
  total_ArmedForceId_num: string;
  total_Death_Count: string;
  total_exacuation_num: string;
  total_Kill_AI: string;
  total_Kill_Boss: string;
  total_Kill_Count: string;
  total_Kill_Player: string;
  total_mapid_num: string;
  Total_Mileage: string;
  total_Online_Time: string;
  Total_Price: string;
  total_Quest_num: string;
  total_Rescue_num: string;
  total_sol_num: string;
  use_Keycard_num: string;
  [property: string]: any;
}

interface JData {
  data: JDataData;
  [property: string]: any;
}

interface JDataData {
  code: number;
  data: WeekRecord;
  message: string;
  [property: string]: any;
}

interface JDataResponse {
  iRet: number;
  jData: JData;
  ret: number;
  sAmsSerial: string;
  sMsg: string;
  [property: string]: any;
}

@Injectable()
export class WeekService {
  private readonly targetUrl = 'https://comm.ams.game.qq.com/ide/';

  private getHeaders(ck?: string) {
    return {
      pragma: 'no-cache',
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
      console.error('Error forwarding request:', error);
      throw error;
    }
  }

  async getWeekRecord(ck: string, statDate?: string) {
    const data = new URLSearchParams();
    data.append('iChartId', '316968');
    data.append('sIdeToken', 'KfXJwH');
    data.append('sArea', '36');
    data.append('method', 'dfm/weekly.sol.record');
    data.append('statDate', statDate);

    try {
      const response = await this.makeRequest<JDataResponse>(data, ck);
      return response?.jData?.data?.data || {};
    } catch {
      return {};
    }
  }
}
