import { Injectable } from '@nestjs/common';
import { ckOptions, AssetData } from '../common/const';

import { put, list } from '@vercel/blob';
import { InfoService } from '../info/info.service';

@Injectable()
export class CronService {
  private readonly ASSETS_FILENAME = 'df-assets.json';

  constructor(private readonly infoService: InfoService) {
    // 立即执行一次数据更新
    this.updateAssetsData();
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
          const data = await this.infoService.getAssets(option.value);
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
}
