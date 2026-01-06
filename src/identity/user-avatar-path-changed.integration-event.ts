import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.avatar-path.changed': {
      payload: {
        userId: string;
        avatarPath: string;
      };
    };
  }
}

export type UserAvatarPathChangedIntegrationEvent =
  IntegrationEvent<'user.avatar-path.changed'>;
