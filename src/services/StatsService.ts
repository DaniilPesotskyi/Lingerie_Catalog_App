import { BaseService } from './BaseService';
import type { IUser } from '@/types/user';

export class StatsService extends BaseService {
  constructor() {
    super(import.meta.env.VITE_GOOGLE_SHEET_URL, {
      'Content-Type': 'text/plain;charset=utf-8',
    });
  }

  async sendStat(user: IUser, platform: string, time: string): Promise<any> {
    const data = {
      time,
      id: user.id,
      name: user.first_name,
      platform,
      comment: 'comment',
    };

    try {
      const response = await this.post<any>('', data);
      console.log('Stats sent successfully:', response);
      return response;
    } catch (error) {
      console.error('Failed to send stats:', error);
      throw error;
    }
  }
}

export const statsService = new StatsService();
