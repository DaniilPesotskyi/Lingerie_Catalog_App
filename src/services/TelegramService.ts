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

  async sendMessage(chatId: number, message: string): Promise<TelegramResponse> {
    const messageData = {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    };
    return this.post(`/bot${this.botToken}/sendMessage`, messageData);
  }

  async sendCaptionMessage(chatId: number, imageUrl: string, message?: string,): Promise<TelegramResponse> {
    const messageData = {
      chat_id: chatId,
      photo: imageUrl,
      caption: message || "",
      parse_mode: 'Markdown',
    }

    return this.post(`/bot${this.botToken}/sendPhoto`, messageData);
  }
}

export const telegramService = new TelegramService();
