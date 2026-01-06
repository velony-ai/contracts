import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.avatar-path.removed': {
      payload: {
        userId: string;
      };
    };
  }
}

export type UserAvatarPathRemovedIntegrationEvent =
  IntegrationEvent<'user.avatar-path.removed'>;
