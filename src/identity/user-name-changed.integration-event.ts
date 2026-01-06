import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.name.changed': {
      payload: {
        userId: string;
        name: string;
      };
    };
  }
}

export type UserNameChangedIntegrationEvent =
  IntegrationEvent<'user.name.changed'>;
