import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.email-change.issued': {
      payload: {
        userId: string;
        email: string;
      };
    };
  }
}

export type UserEmailChangeIssuedIntegrationEvent =
  IntegrationEvent<'user.email-change.issued'>;
