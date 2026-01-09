import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.avatar.changed': {
      payload: {
        userId: string;
        avatarPath: string | null;
      };
    };
  }
}

export type UserAvatarChangedIntegrationEvent =
  IntegrationEvent<'user.avatar.changed'>;
