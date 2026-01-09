import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.deleted': {
      version: '1.0.0';
      payload: {
        userId: string;
      };
    };
  }
}

export type UserDeletedIntegrationEvent = IntegrationEvent<'user.deleted'>;
