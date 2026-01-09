import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.avatar.changed': {
      version: '1.0.0';
      payload: {
        userId: string;
        avatarPath: string | null;
      };
    };
  }
}

export type UserAvatarChangedIntegrationEvent =
  IntegrationEvent<'user.avatar.changed'>;
