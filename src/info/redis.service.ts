import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';

export type ListItem = { label: string; value: string };

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    // 从环境变量获取 Redis 连接地址
    const redisUrl = this.configService.get<string>('REDIS_URL');
    this.client = createClient({ url: redisUrl });

    // 连接 Redis
    await this.client.connect();
  }

  async onModuleDestroy() {
    // 关闭连接
    await this.client.quit();
  }

  /** 查询对象列表 */
  async getList(): Promise<ListItem[]> {
    const data = await this.client.get('cookieList');
    return data ? JSON.parse(data) : [];
  }

  /** 新增单个对象 */
  async addItem(item: Omit<ListItem, 'id'>): Promise<ListItem[]> {
    const list = await this.getList();
    const targetIndex = list.findIndex(
      (existingItem) => existingItem.label === item.label,
    );

    if (targetIndex !== -1) {
      // 如果存在相同 label 的项，调用 updateItem 方法更新
      return this.updateItem(item.label, item.value);
    }

    const newList = [...list, item];
    await this.client.set('cookieList', JSON.stringify(newList));
    return newList;
  }

  /** 修改单个对象（通过 label 匹配） */
  async updateItem(
    label: string,
    newValue: string,
  ): Promise<ListItem[] | null> {
    const list = await this.getList();
    const targetIndex = list.findIndex((item) => item.label === label);

    if (targetIndex === -1) return null;

    const newList = [...list];
    newList[targetIndex].value = newValue;
    await this.client.set('cookieList', JSON.stringify(newList));
    return newList;
  }

  /** 初始化整个列表（覆盖现有数据） */
  async initList(initialData: ListItem[]): Promise<ListItem[]> {
    await this.client.set('cookieList', JSON.stringify(initialData));
    return initialData;
  }

  /** 删除单个对象（通过 label 匹配） */
  async deleteItem(label: string): Promise<ListItem[] | null> {
    const list = await this.getList();
    const newList = list.filter((item) => item.label !== label);

    if (newList.length === list.length) {
      // 如果列表长度没有变化，说明没有找到对应的项
      return null;
    }

    await this.client.set('cookieList', JSON.stringify(newList));
    return newList;
  }
}
