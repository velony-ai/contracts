import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.email.changed': {
      payload: {
        userId: string;
        email: string;
      };
    };
  }
}

export type UserEmailChangedIntegrationEvent =
  IntegrationEvent<'user.email.changed'>;
