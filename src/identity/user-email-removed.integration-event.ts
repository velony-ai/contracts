import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.email.removed': {
      version: '1.0.0';
      payload: {
        userId: string;
      };
    };
  }
}

export type UserEmailRemovedIntegrationEvent =
  IntegrationEvent<'user.email.removed'>;
