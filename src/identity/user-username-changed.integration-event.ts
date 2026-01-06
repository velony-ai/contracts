import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.username.changed': {
      payload: {
        userId: string;
        username: string;
      };
    };
  }
}

export type UserUsernameChangedIntegrationEvent =
  IntegrationEvent<'user.username.changed'>;
