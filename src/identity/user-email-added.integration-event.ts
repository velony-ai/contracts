import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.email.added': {
      payload: {
        userId: string;
        email: string;
      };
    };
  }
}

export type UserEmailAddedIntegrationEvent =
  IntegrationEvent<'user.email.added'>;
