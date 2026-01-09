import { IntegrationEvent } from '../integration-event';

declare module '../integration-event' {
  interface IntegrationEventRegistry {
    'user.created': {
      version: '1.0.0';
      payload: {
        userId: string;
        name: string;
        username: string;
        avatarPath?: string;
        email?: string;
        phoneNumber?: string;
      };
    };
  }
}

export type UserCreatedIntegrationEvent = IntegrationEvent<'user.created'>;
