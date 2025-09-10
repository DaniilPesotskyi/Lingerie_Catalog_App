import { useCallback } from 'react';
import { statsService } from '@/services';
import useTelegram from './useTelegram';
import { useSession } from '@/context/SessionContext';
import type { IStat } from '@/types/stats';

type SendStatData = Pick<IStat, 'action' | 'comment'>

export const useStats = () => {
  const { user, telegram } = useTelegram();
  const { session } = useSession();

  const sendStat = useCallback(async (data: SendStatData) => {
    if (!session || !user) {
      console.warn('Cannot send stats: session or user not available', { session: !!session, user: !!user });
      return;
    }

    try {
      await statsService.sendStat({
        sessionId: session,
        userId: user.id.toString(),
        userName: user.first_name,
        platform: telegram.platform,
        action: data.action,
        comment: data.comment,
      });
    } catch (error) {
      console.error('Failed to send stats:', error);
    }
  }, [session, user, telegram.platform]);

  return { sendStat };
};
