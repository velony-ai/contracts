import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.email.removed': {
      payload: {
        userId: string;
      };
    };
  }
}

export type UserEmailRemovedIntegrationEvent =
  IntegrationEvent<'user.email.removed'>;
