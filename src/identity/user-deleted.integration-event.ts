import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.deleted': {
      payload: {
        userId: string;
      };
    };
  }
}

export type UserDeletedIntegrationEvent = IntegrationEvent<'user.deleted'>;
