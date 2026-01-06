import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.avatar-path.added': {
      payload: {
        userId: string;
        avatarPath: string;
      };
    };
  }
}

export type UserAvatarPathAddedIntegrationEvent =
  IntegrationEvent<'user.avatar-path.added'>;
