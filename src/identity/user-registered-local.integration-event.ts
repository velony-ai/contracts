import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.registered-local': {
      payload: {
        userId: string;
        name: string;
        username: string;
      };
    };
  }
}

export type UserRegisteredLocalIntegrationEvent =
  IntegrationEvent<'user.registered-local'>;
