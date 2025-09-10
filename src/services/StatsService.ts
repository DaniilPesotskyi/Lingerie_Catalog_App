import { BaseService } from './BaseService';

import type { IStat } from '@/types/stats';

type ISendStatPayload = Omit<IStat, 'date'>

export class StatsService extends BaseService {
  constructor() {
    super(import.meta.env.VITE_GOOGLE_SHEET_URL, {
      'Content-Type': 'text/plain;charset=utf-8',
    });
  }

  async sendStat(data: Omit<ISendStatPayload, 'time'>): Promise<any> {

    const time = new Date().toTimeString().slice(0, 5)

    const payload: ISendStatPayload = {
      ...data,
      time,
    };

    try {
      const response = await this.post<any>('', payload);
      console.log('Stats sent successfully:', response);
      return response;
    } catch (error) {
      console.error('Failed to send stats:', error);
      throw error;
    }
  }
}

export const statsService = new StatsService();
