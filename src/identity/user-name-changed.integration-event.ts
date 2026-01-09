import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.name.changed': {
      version: '1.0.0';
      payload: {
        userId: string;
        name: string;
      };
    };
  }
}

export type UserNameChangedIntegrationEvent =
  IntegrationEvent<'user.name.changed'>;
