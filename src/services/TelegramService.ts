import { BaseService } from './BaseService';

interface TelegramChatMember {
  status: string;
}

interface TelegramResponse {
  ok: boolean;
  result: TelegramChatMember;
}

export class TelegramService extends BaseService {
  private botToken: string;
  private chatId: string;

  constructor() {
    super('https://api.telegram.org');
    this.botToken = import.meta.env.VITE_BOT_TOKEN;
    this.chatId = import.meta.env.VITE_CHAT_ID;
  }

  async getChatMember(userId: number): Promise<TelegramResponse> {
    return this.post(`/bot${this.botToken}/getChatMember`, {
      chat_id: this.chatId,
      user_id: userId,
    });
  }
}

export const telegramService = new TelegramService();
